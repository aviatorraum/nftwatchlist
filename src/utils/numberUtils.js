export const toNumber = item => {
  const parsed = parseInt(item, 10);
  if(isNaN(parsed)) return 0;
  return parsed;
};

export const priceFormat = (number) =>
new Intl.NumberFormat('en-US',{
  style: 'currency',
  currency: 'USD',
}).format(number);

export const numberFormat = (number) =>
new Intl.NumberFormat().format(number);
