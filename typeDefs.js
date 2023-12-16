import { gql } from 'apollo-server-express'

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
    passCode: Int
  }

  type FlashCard {
    _id: String
    kanjiName: String
    hiragana: String
    meanings: [String]
    quizAnswers: [String]
    firstSeen: String
    lastSeen: String
    nextReview: String
    rating: Int
  }

  type Auth {
    token: String
    user: User
    errorMessage: String
  }

  type Query {
    me(_id: String!): User
    pendingFlashCards: [FlashCard]
  }

  type Mutation {
    signUp(email: String!, password: String!, username: String!): Auth
    logIn(email: String, password: String): Auth
    forgetPassword(email: String): Auth
    updatePassword(id: String, password: String): Auth
    verify(passCode: String!, userId: String!): Auth
    resendVerification(userId: String!): Auth

    addFlashCard(
      kanjiName: String
      hiragana: String
      meanings: [String]
      quizAnswers: [String]
    ): FlashCard

    updateFlashCard(
      kanjiName: String
      lastSeen: String
      rating: Int
      nextReview: String
    ): FlashCard
  }
`

export default typeDefs
