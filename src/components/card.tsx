import { Product } from "../utils";

export const ShoeCard = ({ product }: { product: Product }) => {
  return (
    <div>
      <div>
        <img src={product.images[0]} />
      </div>
    </div>
  );
};
