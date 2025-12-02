import { FeaturedProductsGrid } from '@/components/featured-products-grid';
import { FeaturedProductsSkeleton } from '@/components/featured-products-grid/featured-products-skeleton';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<FeaturedProductsSkeleton />}>
        <FeaturedProductsGrid />
      </Suspense>
    </main>
  );
}
