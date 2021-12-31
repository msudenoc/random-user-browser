import Express from 'express';
import { AddressResolver } from './resolvers/address-resolver';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { connect } from 'mongoose';
import { UserResolver } from './resolvers/user-resolver';

const main = async () => {
  const schema = await buildSchema({
    resolvers: [AddressResolver, UserResolver],
    emitSchemaFile: true,
    validate: false,
  });

  // create mongoose connection
  await connect('mongodb://localhost:27017/randomData');

  const server = new ApolloServer({ schema });

  const app = Express();

  await server.start();

  server.applyMiddleware({ app: <any>app });

  app.listen({ port: 3333 }, () =>
    console.log(`🚀 Server ready and listening at ==> http://localhost:3333${server.graphqlPath}`)
  );
};

main().catch((error) => {
  console.log(error, 'error');
});
