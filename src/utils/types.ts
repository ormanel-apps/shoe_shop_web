export interface Product {
  id: number;
  name: string;
  price: number;
  details: string;
  images: string[];
  features: Map<string, string>[];
}
