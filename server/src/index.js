const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const TrackAPI = require("./datasources/track-api");


async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  //  pass in the apollo server and an object containing config options
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      const { cache } = server;
      return {
        dataSources: {
          // make instance of our TrackAPI class, passing in the cache we get from the server
          trackAPI: new TrackAPI({ cache }),
        }
      };
    }
  });

  console.log(`
  🚀  Server is running!
  📭  Query at ${url}
  `);
}

startApolloServer();