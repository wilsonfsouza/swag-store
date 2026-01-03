import { api } from '@/data/api';
import type { Product } from '@/data/types/product';
import { cacheLife } from 'next/cache';

export async function getProducts(query: string): Promise<Product[]> {
  'use cache';

  cacheLife('hours');

  const response = await api(`/products/search?q=${query}`);

  const products = await response.json();

  return products;
}
