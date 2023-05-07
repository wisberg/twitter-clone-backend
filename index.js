const { ApolloServer, PubSub } = require("apollo-server");
const mongoose = require("mongoose"); //Object Relational Mapper lets us connect with MongoDB

const typeDefs = require("./graphql/typeDefs");
//What resolvers do is process the logic of the query
const resolvers = require("./graphql/resolvers"); //because its the index file you dont need to specify file

const { MONGO_URI } = require("./config.js");

const pubsub = new PubSub();

const PORT = process.env.port || 4999;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB Connected...");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch((err) => {
    console.error(err);
  });
