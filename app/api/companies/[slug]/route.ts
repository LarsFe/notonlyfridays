import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const company = await prisma.company.findUnique({
    where: { slug },
    include: { addresses: true },
  });

  if (!company) {
    return new NextResponse('No company with slug found', { status: 404 });
  }

  return NextResponse.json(company);
}

export async function PATCH(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  let json = await request.json();

  const updated_company = await prisma.company.update({
    where: { slug },
    include: { addresses: true },
    data: json,
  });

  if (!updated_company) {
    return new NextResponse('No company with slug found', { status: 404 });
  }

  return NextResponse.json(updated_company);
}

export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    await prisma.company.delete({
      where: { slug },
      include: { addresses: true },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return new NextResponse('No company with slug found', { status: 404 });
    }

    return new NextResponse(error.message, { status: 500 });
  }
}
