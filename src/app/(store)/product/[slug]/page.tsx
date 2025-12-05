import { getProductBySlug } from '@/app/http/get-product-by-slug';
import {
  formatCurrency,
  formatCurrencyWithFractionDigits,
} from '@/utils/format-currency';
import type { Metadata } from 'next';
import Image from 'next/image';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);

  return {
    title: product.title,
  };
}

export async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug);
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="overflow-hidden col-span-2">
        <Image
          alt={product.description}
          src={product.image}
          quality={100}
          width={1000}
          height={1000}
        />
      </div>

      <div className="col-span-1 flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rounded-full bg-violet-500 px-5 pt-2.5 font-semibold">
            {formatCurrency(product.price)}
          </span>
          <span className="text-sm text-zinc-400">
            Up to 12x installments of{' '}
            {formatCurrencyWithFractionDigits(product.price / 12)}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Sizes</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              XS
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              S
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              L
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              XL
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              XXL
            </button>
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              XXXL
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
          Add to the cart
        </button>
      </div>
    </div>
  );
}
