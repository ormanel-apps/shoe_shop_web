import Image from "next/image";
import { Product } from "../utils";

export const ShoeCard = ({ product }: { product: Product }) => {
  return (
    <div className="w-52">
      <div className="w-52 h-52 border border-gray-300 mb-3 mr-2 relative">
        <Image
          src={product.images[0]}
          alt={product.name}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1 className="line-clamp-2 font-medium capitalize">{product.name}</h1>
    </div>
  );
};
