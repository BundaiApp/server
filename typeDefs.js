import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    _id: String
    email: String
    name: String
    avatar: String
    isVerified: Boolean
    hasPaid: String
    friends: [String]
    createdAt: String
    userType: String
    passCode: Number
  }

  type Auth {
    token: String
    user: User
    errorMessage: String
  }

  type Query {
    me(_id: String!): User
  }

  type Mutation {
    signUp(email: String!, password: String!, username: String!): Auth
    logIn(email: String, password: String): Auth
    forgetPassword(email: String): Auth
    updatePassword(id: String, password: String): Auth
    verify(passCode: String!, userId: String!): Auth
    resendVerification(userId: String!): Auth
  }
`;

export default typeDefs;
