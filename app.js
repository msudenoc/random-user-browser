const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type MainCard {
    title: String!
    image: String!
  }

  type Query {
    mainCards: [MainCard!]!
  }
`;

const resolvers = {
  Query: {
    mainCards: () => [{ title: 'title', image: 'qwe' }],
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
