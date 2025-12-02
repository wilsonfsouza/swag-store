import { api } from '@/data/api';
import type { Product } from '@/data/types/product';
import { cacheLife, cacheTag } from 'next/cache';

export async function getFeaturedProducts(): Promise<Product[]> {
  'use cache';

  cacheLife('hours');
  cacheTag('featured');

  const response = await api('/products/featured');

  const products = await response.json();

  return products;
}
