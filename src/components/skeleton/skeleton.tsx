import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type SkeletonProps = ComponentProps<'div'>;

export function Skeleton({ className, ...rest }: SkeletonProps) {
  return (
    <div
      className={twMerge('bg-zinc-50/10 animate-pulse rounded-md', className)}
      {...rest}
    />
  );
}
