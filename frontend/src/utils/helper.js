export function formatCurrency(amount) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
}

export const serverUrl = process.env.NODE_EVN === "production" ? "https://ecom-project-mt10.onrender.com" : "http://localhost:3000/api/v1";
