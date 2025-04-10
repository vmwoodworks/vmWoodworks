import { gql } from '@apollo/client';

export const ADD_ITEM_MUTATION = gql`
  mutation AddItem(
    $mainImage: String!
    $secondaryImages: [String]
    $description: String!
    $category: String!
    $heading: String!
  ) {
    addItem(
      mainImage: $mainImage
      secondaryImages: $secondaryImages
      description: $description
      category: $category
      heading: $heading
    ) {
      _id
      mainImage
      secondaryImages
      description
      category
      heading
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
      heading
    }
  }
`;


