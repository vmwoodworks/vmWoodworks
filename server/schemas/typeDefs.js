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
}

type Mutation {
    addItem(
        mainImage: String!,
        secondaryImages: [String],
        description: String!,
        category: String!
    ): Item
}
`;

module.exports = typeDefs;