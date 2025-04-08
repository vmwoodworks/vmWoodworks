import { gql } from '@apollo/client';

export const GET_ITEMS = gql`
  query items {
    items {
      _id
      mainImage
      description
      category
    }
  }
`;

export const GET_ITEM = gql`
  query item($_id: ID!) {
    item(_id: $_id) {
      _id
      mainImage
      secondaryImages
      description
      category
    }
  }
`;
