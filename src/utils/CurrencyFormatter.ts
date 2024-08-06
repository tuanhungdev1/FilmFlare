export const CurrencyFormatter = (
  number: number,
  currency: string = "USD"
): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return formatter.format(number);
};
