import { api } from '@/data/api';
import type { Product } from '@/data/types/product';
import { cacheLife, cacheTag } from 'next/cache';

export async function getProductBySlug(slug: string): Promise<Product> {
  'use cache';

  cacheLife('hours');
  cacheTag('product', slug);

  const response = await api(`/products/${slug}`);

  const product = await response.json();

  return product;
}
