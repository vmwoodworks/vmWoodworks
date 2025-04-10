import { gql } from '@apollo/client';

export const ADD_ITEM_MUTATION = gql`
  mutation AddItem(
    $mainImage: String!
    $secondaryImages: [String]
    $description: String!
    $category: String!
  ) {
    addItem(
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

export const DELETE_ITEM_MUTATION = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(_id: $id) {
      _id
      mainImage
      secondaryImages
      description
      category
    }
  }
`;


