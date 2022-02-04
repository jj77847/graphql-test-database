const { gql } = require("apollo-server");

const typeDefs = gql`
    type products {
        name: String
        category: String
        tags: [String]
    }

    type product {
        products: [Product]
        product: ID!): Product
    }
}
`;

module.exports = typeDefs;
