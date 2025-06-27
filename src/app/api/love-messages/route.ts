import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "love-messages.json");

// Định nghĩa kiểu dữ liệu cho message
interface Message {
  message: string;
  date: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: Message = await req.json();
    let messages: Message[] = [];
    try {
      const data = await fs.readFile(filePath, "utf-8");
      messages = JSON.parse(data) as Message[];
    } catch {
      // file chưa tồn tại
      messages = [];
    }
    messages.push(body);
    await fs.writeFile(filePath, JSON.stringify(messages, null, 2), "utf-8");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}

export async function GET() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    const messages: Message[] = JSON.parse(data);
    return NextResponse.json(messages);
  } catch {
    return NextResponse.json([]);
  }
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const date = searchParams.get("date");
  if (!date) return NextResponse.json({ success: false, error: "Missing date" }, { status: 400 });
  try {
    const data = await fs.readFile(filePath, "utf-8");
    let messages: Message[] = JSON.parse(data);
    messages = messages.filter((msg: Message) => msg.date !== date);
    await fs.writeFile(filePath, JSON.stringify(messages, null, 2), "utf-8");
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
  }
}
