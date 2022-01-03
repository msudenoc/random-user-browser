import Express from 'express';
import { AddressResolver } from './resolvers/address-resolver';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/user-resolver';
import { createConnection } from 'typeorm';

const main = async () => {
  const schema = await buildSchema({
    resolvers: [AddressResolver, UserResolver],
    emitSchemaFile: true,
    validate: false,
  });

  createConnection({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'randomData',
    entities: [__dirname + ' /../**/*.entity.{js,ts}'],
  });

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
