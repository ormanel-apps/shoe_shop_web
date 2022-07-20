import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { NavHeader, ShoeCard } from "../src/components";
import { GET_PRODUCTS } from "../src/queries";
import { parseProduct, Product } from "../src/utils";

const Home: NextPage = () => {
  const router = useRouter();

  const { data, loading, fetchMore, refetch, error } = useQuery<{
    findManyProducts: Product[];
  }>(GET_PRODUCTS, {
    variables: {
      skip: 0,
      limit: 200,
    },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Error</h1>
        <button>Try Again</button>
      </div>
    );
  }

  if (data) {
    const products = data.findManyProducts.map(parseProduct);
    return (
      <div>
        <NavHeader />
        <div className="wrap">
          {products.length == 0 && <div>No Products</div>}
          {products.map((product) => (
            <ShoeCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }

  return <></>;
};

export default Home;
