
/**
 * What is a resolver?!
 *
 * A GraphQL resolver is a function or method that
 * resolves a value for a type or field within a schema
 */
const resolvers = {
  Query: {
    tracksForHome: (_, __, {dataSources}) =>{
      return dataSources.trackAPI.getTracksForHome();
    }
  },
  Track: {
    author: ({authorId}, _, {dataSources}) => {
      return dataSources.trackAPI.getAuthor(authorId);
    }
  }
}

module.exports = resolvers;