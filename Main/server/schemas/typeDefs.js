const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
    _id: ID
    authors: String
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Query {
    users: [User]!
    book(bookId: ID!): Book
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User
    saveBook(userId: ID!, savedBooks: String!): User
    removeBook(userId: ID!, bookId: ID!): User
  }
`;

module.exports = typeDefs;
