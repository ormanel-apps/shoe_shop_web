import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Products($skip: Int!, $limit: Int) {
    findManyProducts(take: $limit, skip: $skip) {
      id
      name
      price
      details
      features
      images
    }
  }
`;

interface _ProductQuery {
  page?: number;
  limit?: number;
}
export const getProductsQuery = async ({
  page = 0,
  limit = 50,
}: _ProductQuery) => {
  const skip = page * limit;
  return gql`
    query Products {
      findManyProducts(take: 50, skip:  distinct: [price]) {
        id
        name
        price
        description
        images
      }
    }
  `;
};
