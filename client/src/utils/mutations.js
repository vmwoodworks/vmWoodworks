import { gql } from '@apollo/client';

export const ADD_ITEM_MUTATION = gql`
  mutation AddItem(
    $_id: ID!
    $mainImage: String!
    $secondaryImages: [String]
    $description: String!
    $category: String!
  ) {
    addItem(
      _id: $_id
      mainImage: $mainImage
      secondaryImages: $secondaryImages
      description: $description
      category: $category
    ) {
      _id
      mainImage
      secondaryImages
      description
      category
    }
  }
`;
