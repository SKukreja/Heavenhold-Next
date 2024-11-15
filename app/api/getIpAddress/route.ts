import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    const ip = request.headers.get('x-forwarded-for') || '192.168.201.1';
    return NextResponse.json({ ip });
}
