import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: 'success', 
    message: 'Hello from Next.js Level 3 API Route!',
    timestamp: new Date().toISOString()
  });
}