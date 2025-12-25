import { NextRequest } from 'next/server';
import { z } from 'zod';
import data from '../data.json';

interface RouteContext {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(_: NextRequest, { params }: RouteContext) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const ctxParams = await params;
  const slug = z.string().parse(ctxParams.slug);

  const product = data.products.find((product) => product.slug === slug);

  if (!product) {
    return Response.json(
      {
        message: 'Product not found',
      },
      {
        status: 400,
      }
    );
  }

  return Response.json(product);
}
