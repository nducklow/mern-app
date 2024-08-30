import { gql } from '@apollo/client';

export const QUERY_ITEMS = gql`
  query allItems {
    items {
      _id
      name
      cost
      calories
      img
    }
  }
`;