import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const companies = await prisma.company.findMany({
    include: { addresses: true },
  });
  return NextResponse.json(companies);
}

export async function POST(request: Request) {
  try {
    const json = await request.json();

    const company = await prisma.company.create({
      data: json,
    });

    return new NextResponse(JSON.stringify(company), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return new NextResponse('Company with slug already exists', {
        status: 409,
      });
    }
    return new NextResponse(error.message, { status: 500 });
  }
}
