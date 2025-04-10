const typeDefs = `
type Item {
    _id: ID
    mainImage: String
    secondaryImages: [String]
    description: String
    category: String
}

type Query {
  items: [Item] 
  item(_id: ID!): Item
}

type Mutation {
    addItem(
        mainImage: String!,
        secondaryImages: [String],
        description: String!,
        category: String!
    ): Item

      deleteItem(_id: ID!): Item
}
`;

module.exports = typeDefs;