const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { addMocksToSchema } = require("@graphql-tools/mock");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const typeDefs = require("./schema");

const mocks = {
  Query: () => ({
    tracksForHome: () => [new Array(6)],
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Cat!",
    author: () => {
      return {
        name: "Rio",
        photo: "https://t4.ftcdn.net/jpg/01/62/72/29/240_F_162722972_3SlhxozZGdL3rGuWgKyVP2NTs8POtX2n.jpg",
      };
    },
    thumbnail: () => "https://t3.ftcdn.net/jpg/02/42/23/48/240_F_242234871_lTmbXUInbzADDLHrCH9LLHnWZqxg8AEk.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
      mocks,
    }),
  });
  const { url } = await startStandaloneServer(server);
  console.log(`
  🚀  Server is running!
  📭  Query at ${url}
  `);
}

startApolloServer();