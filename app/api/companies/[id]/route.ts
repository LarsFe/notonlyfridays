import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  const company = await prisma.company.findUnique({
    where: {
      id,
    },
  });

  if (!company) {
    return new NextResponse('No company with ID found', { status: 404 });
  }

  return NextResponse.json(company);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  let json = await request.json();

  const updated_company = await prisma.company.update({
    where: { id },
    data: json,
  });

  if (!updated_company) {
    return new NextResponse('No company with ID found', { status: 404 });
  }

  return NextResponse.json(updated_company);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const id = params.id;
    await prisma.company.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return new NextResponse('No company with ID found', { status: 404 });
    }

    return new NextResponse(error.message, { status: 500 });
  }
}
