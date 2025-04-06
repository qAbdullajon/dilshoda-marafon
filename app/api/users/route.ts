import User from "@/database/user.model";
import { connectToDatabase } from "@/lib/mognoose";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectToDatabase();

    const data = await req.json();

    if (!data.name || !data.phone || !data.tarif || !data.image) {
      return NextResponse.json(
        { error: "All fields (name, phone, tarif, image) are required" },
        { status: 400 }
      );
    }

    const phoneRegex = /^[0-9]{9,13}$/;
    if (!phoneRegex.test(data.phone)) {
      return NextResponse.json(
        { error: "Phone number must be a valid 10 digit number" },
        { status: 400 }
      );
    }

    const user = new User(data);
    await user.save();

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const data = await User.find();

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    const result = error as Error;
    return NextResponse.json({ error: result.message }, { status: 400 });
  }
}
