const gql = require("graphql-tag");

const typeDefs = gql`
"A track for learning about something cool"
type Track {
    id: ID!
    title: String!
    thumbnail: String
    length: Int
    author: Author!
    modulesCount: Int
}

"A person who creates a track"
type Author {
    id: ID!
    name: String!
    photo: String
}

type Query {
    trackForHome: [Track!]
}
`

module.exports = typeDefs;