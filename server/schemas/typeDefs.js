const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    fullName: String
    displayName: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(email: String!): User
    me: User
  }

  type Mutation {
    addUser(
      fullName: String!
      displayName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
