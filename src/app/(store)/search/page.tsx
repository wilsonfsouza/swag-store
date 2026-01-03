import { getProducts } from '@/app/http/get-products';
import { formatCurrency } from '@/utils/format-currency';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

interface SearchPageProps {
  searchParams: Promise<{
    q: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q: query } = await searchParams;

  if (!query) {
    redirect('/');
  }

  const products = await getProducts(query);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Results for: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products?.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
          >
            <Image
              src={product.image}
              width={480}
              height={480}
              quality={100}
              alt="Hoodie with logo and text saying never stop learning"
              className="group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
              <span className="text-sm truncate">{product.title}</span>
              <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
                {formatCurrency(product.price)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
