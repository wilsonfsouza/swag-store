import { ImageResponse } from 'next/og';
import colors from 'tailwindcss/colors';

import { env } from '@/config/env';
import { api } from '@/data/api';
import { Product } from '@/data/types/product';
import { cacheLife, cacheTag } from 'next/cache';

export const runtime = 'edge';

export const alt = '';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export async function getProductBySlug(slug: string): Promise<Product> {
  'use cache';

  cacheLife('hours');
  cacheTag('product', slug);

  const response = await api(`/products/${slug}`);

  const product = await response.json();

  return product;
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const ctxParams = await params;
  const product = await getProductBySlug(ctxParams.slug);

  const productImageURL = new URL(product.image, env.APP_URL).toString();

  return new ImageResponse(
    <div
      style={{
        background: colors.zinc[950],
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <img src={productImageURL} alt="" style={{ width: '100%' }} />
    </div>,
    {
      ...size,
    }
  );
}
