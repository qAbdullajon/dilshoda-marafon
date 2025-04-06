import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

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

    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { success: false, message: 'Faqat rasm fayllari ruxsat etilgan' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const extension = file.name.split('.').pop();
    const newFileName = `${Date.now()}.${extension}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const filePath = path.join(uploadDir, newFileName);
    await fs.promises.writeFile(filePath, buffer);

    return NextResponse.json({
      success: true,
      message: 'Fayl muvaffaqiyatli yuklandi',
      filePath: `/uploads/${newFileName}`,
    });

  } catch (error) {
    console.error('Xatolik:', error);
    return NextResponse.json(
      { success: false, message: 'Server xatosi' },
      { status: 500 }
    );
  }
}