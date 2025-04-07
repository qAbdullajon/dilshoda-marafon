import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('image') as File;

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'Fayl topilmadi' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const extension = file.name.split('.').pop();
    const newFileName = `${Date.now()}.${extension}`;

    const { url } = await put(newFileName, Buffer.from(bytes), {
      access: 'public',
      contentType: file.type,
    });

    return NextResponse.json({
      success: true,
      message: 'Fayl muvaffaqiyatli yuklandi',
      fileUrl: url,
    });

  } catch (error) {
    console.error('Xatolik:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi' },
      { status: 500 }
    );
  }
}