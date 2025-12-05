import { FeaturedProductsGrid } from '@/components/featured-products-grid';
import { FeaturedProductsSkeleton } from '@/components/featured-products-grid/featured-products-skeleton';
import type { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'devstore',
};

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<FeaturedProductsSkeleton />}>
        <FeaturedProductsGrid />
      </Suspense>
    </main>
  );
}
