import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: NextRequest) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json({ error: 'Code is required' }, { status: 400 });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-pro' });

    const prompt = `Please fix the following code:\n\n${code}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const fixedCode = response.text();

    return NextResponse.json({ fixedCode });
  } catch (error) {
    console.error('Error fixing code:', error);
    return NextResponse.json({ error: 'Failed to fix code' }, { status: 500 });
  }
}
