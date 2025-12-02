import { FeaturedProductsGrid } from '@/components/featured-products-grid';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <main>
      <aside>Sidebar</aside>
      <Suspense fallback={<p>Temporary loading...</p>}>
        <FeaturedProductsGrid />
      </Suspense>
    </main>
  );
}
