const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    fullName: String
    displayName: String
    email: String
    password: String
    roles: [Roles]
    statics: [Statics]
    equipment: [Equipment]
  }

  type Equipment {
    _id: ID
    weapon: String
    head: String
    body: String
    hands: String
    legs: String 
    feet: String 
    earrings: String
    necklace: String
    bracelet: String 
    leftRing: String 
    rightRing: String
  }

  type Statics {
    _id: ID 
    staticName: String 
    staticUsers: [User]
  }

  type Roles {
    _id: ID 
    role1: String 
    role2: String 
    role3: String 
    role4: String
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
