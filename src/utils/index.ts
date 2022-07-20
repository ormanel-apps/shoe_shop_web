import { Product } from "./types";

export * from "./types";

export const parseProduct = (product: any): Product => ({
  ...product,
  images: JSON.parse(product.images),
  features: JSON.parse(product.features),
});
