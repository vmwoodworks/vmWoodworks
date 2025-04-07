import { gql } from '@apollo/client';

export const GET_ITEMS = gql`
  query items {
    items {
      _id
      mainImage
      secondaryImages
      description
      category
    }
  }
`;