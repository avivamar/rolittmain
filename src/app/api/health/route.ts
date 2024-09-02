import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: 'OK', message: '应用程序正常运行' });
}