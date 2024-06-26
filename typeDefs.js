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

  input QuizObject {
    kanjiName: String
    hiragana: String
    meanings: [String]
    quizAnswers: [String]
  }

  type FlashCard {
    _id: String
    userId: String
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
    getPendingFlashCards(userId: String): [FlashCard]
  }

  type Mutation {
    signUp(email: String!, password: String!, username: String!): Auth
    logIn(email: String, password: String): Auth
    forgetPassword(email: String): Auth
    updatePassword(id: String, password: String): Auth
    verify(passCode: String!, userId: String!): Auth
    resendVerification(userId: String!): Auth

    addFlashCard(
      userId: String
      kanjiName: String
      hiragana: String
      meanings: [String]
      quizAnswers: [String]
    ): FlashCard

    updateFlashCard(
      userId: String
      kanjiName: String
      lastSeen: String
      nextReview: String
      rating: Int
    ): FlashCard

    addBulkFlashCards(userId: String, kanjis: [QuizObject]): FlashCard
  }
`

export default typeDefs
