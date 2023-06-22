import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const categories = await prisma.category.findMany();
  return NextResponse.json(categories);
}

export async function POST(request: Request) {
  try {
    const json = await request.json();

    const category = await prisma.category.create({
      data: json,
    });

    return new NextResponse(JSON.stringify(category), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return new NextResponse('Category with slug already exists', {
        status: 409,
      });
    }
    return new NextResponse(error.message, { status: 500 });
  }
}
