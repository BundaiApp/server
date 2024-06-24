import UserResolver from './User.resolver.js'
import FlashCardResolver from './FlashCard.resolver.js'

export default {
  Query: {
    me: UserResolver.me,
    getPendingFlashCards: FlashCardResolver.getPendingFlashCards
  },
  Mutation: {
    //auth
    signUp: UserResolver.signUp,
    logIn: UserResolver.logIn,
    forgetPassword: UserResolver.forgetPassword,
    updatePassword: UserResolver.updatePassword,

    // FlashCard
    addFlashCard: FlashCardResolver.addFlashCard,
    addBulkFlashCards: FlashCardResolver.addBulkFlashCards
  }
}
