'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState, Suspense } from 'react';

// Asosiy kontent komponenti
function TolovContent() {
  const [isFile, setIsFile] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60);
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  const [filePath, setFilePath] = useState('');

  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get('name') || '';
  const phone = searchParams.get('phone') || '';
  const tarif = searchParams.get('plan') || '';

  useEffect(() => {
    if (!name || !phone || !tarif) {
      router.push('/');
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          router.push('/timeout');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [name, phone, tarif, router]);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Nusxalandi: ${text}`);
    } catch (err) {
      console.error('Nusxalashda xato:', err);
      alert('Nusxalash muvaffaqiyatsiz!');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('Fayl hajmi 5MB dan katta bo\'lmasligi kerak!');
      return;
    }

    setFileName(file.name);
    setFileSize((file.size / 1024).toFixed(2) + ' KB');
    setPreview(URL.createObjectURL(file));
    handleUpload(file);
  };

  const handleUpload = async (file: File) => {
    setIsFile(false);
    setIsUploading(true);

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/api/file-upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Yuklash muvaffaqiyatsiz');
      const data = await response.json();
      
      
      setFilePath(data || '');
    } catch (error) {
      console.error('Yuklashda xato:', error);
      alert('Rasm yuklanmadi, qayta urinib ko\'ring');
      setPreview(null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleRemoveImage = () => {
    if (preview) URL.revokeObjectURL(preview);
    setPreview(null);
    setFileName('');
    setFileSize('');
    setFilePath('');
  };

  const handleSubmit = async () => {
    if (!fileName) {
      setIsFile(true);
      return;
    }

    setIsUploading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, tarif, image: `https://marafon-backend.onrender/${filePath}`}),
      });
      console.log(await response.json());
      

      if (response.ok) {
        router.push(`/success?name=${name}&phone=${phone}&plan=${tarif}`);
      } else {
        throw new Error('Ma\'lumotlar saqlanmadi');
      }
    } catch (error) {
      console.error('Yuborishda xato:', error);
      alert('Xatolik yuz berdi, qayta urinib ko\'ring');
    } finally {
      setIsUploading(false);
    }
  };

  const price = tarif === 'premium' ? '1,300,000' :
    tarif === 'vip' ? '3,500,000' : '1,100,000';

  const visaPrice = tarif === 'premium' ? '100' :
    tarif === 'vip' ? '269' : '85';

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="bg-white min-h-screen flex justify-center text-black">
      <div className="w-full max-w-[450px] my-6 px-3">
        <div className="bg-[#DEEEFD] rounded-[5px] px-3 py-2 mb-4">
          <h1 className="text-lg font-semibold text-[#2D3953]">SUPER RUS TILI 40 KUNDA</h1>
          <p className="text-sm text-[#343131] pt-1 pb-3">
            Tarif: <span className="capitalize">{tarif}</span>
          </p>
          <p className="text-[32px] font-semibold text-[#2D3953]">{price} so&apos;m</p>

          <div className="flex items-center justify-between mt-2">
            <p className="text-[11px] text-[#2D3953] font-semibold leading-4">
              To&apos;lov qilish havolasi <br />
              muddati tugashiga qoldi:
            </p>
            <div className="w-[80px] h-[40px] flex items-center justify-center text-xl bg-white rounded-[5px] text-[#d6042b]">
              {minutes}:{seconds}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[14px] text-[#1f1d1d]">
            1. Quyidagi karta raqamlardan biriga to&apos;lovni o&apos;zingizga qulay ilova orqali amalga oshiring
          </p>

          <div className="p-3 rounded-[10px] bg-[#fafafa] border border-[#B9B9B9]">
            <div className="flex justify-between items-center mb-2 border-b border-[#B9B9B9] pb-2">
              <p className="font-medium">PLASTIK KARTA</p>
              <p className="text-black">{price} so&apos;m</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">5614 6819 1836 7438</p>
                <p className="text-sm">Dilshoda Alijonova</p>
              </div>
              <button
                onClick={() => handleCopy("5614 6819 1836 7438")}
                className="w-10 h-10 flex items-center justify-center bg-[#E9F2FD] rounded-full hover:bg-[#D0E0F5] transition-colors"
                aria-label="Karta raqamini nusxalash"
              >
                <CopyIcon />
              </button>
            </div>
          </div>

          <div className="p-3 mt-3 rounded-[10px] bg-[#fafafa] border border-[#B9B9B9]">
            <div className="flex justify-between items-center mb-2 border-b border-[#B9B9B9] pb-2">
              <p className="font-medium">VISA KARTA</p>
              <p className="text-black">{visaPrice}$</p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium">4231 2000 0253 3148</p>
                <p className="text-sm">Dilshoda Kurbonova</p>
              </div>
              <button
                onClick={() => handleCopy("4231 2000 0253 3148")}
                className="w-10 h-10 flex items-center justify-center bg-[#E9F2FD] rounded-full hover:bg-[#D0E0F5] transition-colors"
                aria-label="Karta raqamini nusxalash"
              >
                <CopyIcon />
              </button>
            </div>
          </div>

          <p className="text-[14px] text-[#1f1d1d]">
            2. To&apos;lovingiz muvaffaqiyatli amalga oshganini tasdiqlovchi rasmni saqlab oling (screenshot)
          </p>
          <p className="text-[14px] text-[#1f1d1d]">
            3. To&apos;lovingiz rasmini yuklang (rasm tanlangandan so&apos;ng avtomatik yuklanadi)
          </p>

          {!preview ? (
            <div className="border-2 border-dashed border-gray-300 rounded-lg text-center">
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*"
                id="file-input"
                className="hidden"
              />
              <label
                htmlFor="file-input"
                className="cursor-pointer text-black rounded-md flex items-center justify-center gap-2 p-4 text-sm"
              >
                <FileIcon />
                <span>Chek rasmini yuklash uchun bu yerga bosing</span>
              </label>
            </div>
          ) : (
            <div className="flex items-center justify-between rounded-[8px] p-2 bg-gray-50">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10">
                  <Image
                    src={preview}
                    alt="Preview"
                    fill
                    className="object-cover rounded"
                    priority
                  />
                </div>
                <div>
                  <p className="text-lg truncate max-w-[180px]">{fileName}</p>
                  <p className="text-sm opacity-50">{fileSize}</p>
                </div>
              </div>
              <button
                onClick={handleRemoveImage}
                className="bg-red-500 text-white w-8 h-8 flex items-center justify-center rounded-[4px] hover:bg-red-600 transition-colors"
                aria-label="Rasmni o'chirish"
              >
                <XIcon />
              </button>
            </div>
          )}

          {isFile && (
            <p className="text-base text-red-600">Iltimos chek rasmini yuklang!</p>
          )}

          <button
            disabled={isUploading || !preview}
            onClick={handleSubmit}
            className={`bg-[#2893F3] cursor-pointer w-full text-white py-2 px-4 mt-4 rounded-lg ${
              isUploading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#1a7bc9]'
            } transition-colors`}
          >
            {isUploading ? 'Yuborilmoqda...' : 'Davom etish'}
          </button>
        </div>

        <div className="rounded-[8px] bg-[#FEF7F7] px-4 py-4 mt-6">
          <p className="text-center text-lg">Yordam kerakmi?</p>
          <p className="text-center text-lg">Yordamchi bilan bog&apos;laning</p>
          <a
            href="https://t.me/dilshodamenedjer01"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#D2424E] text-white w-full p-2 mt-2 rounded-[8px] hover:bg-[#b83742] transition-colors"
          >
            <SendIcon />
            <span>Yordamchi bilan bog&apos;lanish</span>
          </a>
        </div>
      </div>
    </div>
  );
}

// Asosiy eksport qilinadigan komponent
export default function Tolov() {
  return (
    <Suspense fallback={
      <div className="h-screen flex items-center justify-center bg-white">
        <p>Yuklanmoqda...</p>
      </div>
    }>
      <TolovContent />
    </Suspense>
  );
}

// Ikonlar komponentlari
function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-blue-400"
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  );
}