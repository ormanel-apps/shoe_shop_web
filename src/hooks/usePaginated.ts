import { QueryResult, useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../queries";
import { Product } from "../utils";

interface _ProductPaginationOpt {
  limit: number;
}

interface _PaginationReturn extends QueryResult<Product> {
  goToPage: (page: number) => Promise<any>;
}
export const useProductPagination = (
  page: number,
  { limit }: _ProductPaginationOpt = { limit: 50 }
): _PaginationReturn => {
  let p = page;
  const data = useQuery(GET_PRODUCTS, {
    variables: {
      limit: limit,
      skip: p * limit,
    },
  });
  const goToPage = async (_page: number) => {
    p = _page;
    return data.fetchMore({
      variables: {
        limit: limit,
        skip: p * limit,
      },
    });
  };
  return {
    ...data,
    goToPage,
  } as any;
};
