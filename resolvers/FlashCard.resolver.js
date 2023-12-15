import FlashCards from '../models/flashcards.model.js'

export default {
  addFlashCard: async (
    _,
    {
      kanjiName,
      hiragana,
      meanings,
      firstSeen,
      lastSeen,
      rating,
      nextReview,
      quizAnswers
    }
  ) => {
    return await FlashCards.create({
      kanjiName,
      hiragana,
      meanings,
      firstSeen,
      lastSeen,
      rating,
      nextReview,
      quizAnswers
    })
  },

  pendingFlashCards: async (_, {}) => {
    return await FlashCards.find({})
  }
}
