export function formatCurrency(price: number) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function formatCurrencyWithFractionDigits(price: number) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}
