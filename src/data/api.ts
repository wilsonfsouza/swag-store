import { env } from '@/config/env';

export function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL;
  const API_PREFIX = '/api';
  const url = new URL(API_PREFIX.concat(path), baseUrl);

  return fetch(url, init);
}
