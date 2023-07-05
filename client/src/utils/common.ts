const formatCurrency = {
  style: "currency",
  currency: "VND",
};
export const calculateMoneyInVietnamese = (amount: number): string => {
  amount = amount * 1000;
  return amount.toLocaleString("vi-VN", formatCurrency);
};

export const getPercentReduce = (price: number, originalPrice: number) => {
  return Math.round((1 - price / originalPrice) * 100);
};
