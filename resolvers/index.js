const products = require("./products");

const resolvers = {
  Query: {
    products,
  },
};

module.exports = resolvers;
