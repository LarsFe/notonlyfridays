import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  const category = await prisma.category.findUnique({
    where: {
      id,
    },
  });

  if (!category) {
    return new NextResponse('No category with ID found', { status: 404 });
  }

  return NextResponse.json(category);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: number } }
) {
  const id = params.id;
  let json = await request.json();

  const updated_category = await prisma.category.update({
    where: { id },
    data: json,
  });

  if (!updated_category) {
    return new NextResponse('No category with ID found', { status: 404 });
  }

  return NextResponse.json(updated_category);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: number } }
) {
  try {
    const id = params.id;
    await prisma.category.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return new NextResponse('No category with ID found', { status: 404 });
    }

    return new NextResponse(error.message, { status: 500 });
  }
}
