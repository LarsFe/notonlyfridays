import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const i18n_slug = params.slug;
  const category = await prisma.category.findUnique({
    where: {
      i18n_slug,
    },
  });

  if (!category) {
    return new NextResponse('No category with ID found', { status: 404 });
  }

  return NextResponse.json(category);
}

export async function PATCH(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const i18n_slug = params.slug;
  let json = await request.json();

  const updated_category = await prisma.category.update({
    where: { i18n_slug },
    data: json,
  });

  if (!updated_category) {
    return new NextResponse('No category with ID found', { status: 404 });
  }

  return NextResponse.json(updated_category);
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const i18n_slug = params.slug;
    await prisma.category.delete({
      where: { i18n_slug },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return new NextResponse('No category with ID found', { status: 404 });
    }

    return new NextResponse(error.message, { status: 500 });
  }
}
