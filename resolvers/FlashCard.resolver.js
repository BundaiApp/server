import FlashCards from '../models/flashcards.model.js'

const reviewIntervals = { 1: 1, 2: 2, 3: 7, 4: 14, 5: 30, 6: 120 } // Days until next review

export default {
  addFlashCard: async (_, { kanjiName, hiragana, meanings, quizAnswers }) => {
    return await FlashCards.create({
      kanjiName,
      hiragana,
      meanings,
      quizAnswers,
      rating: 1,
      firstSeen: new Date(),
      lastSeen: new Date(),
      nextReview: new Date()
      //nextReview: new Date('Dec 25, 2023 01:15:00')
    })
  },

  pendingFlashCards: async (_, {}) => {
    return await FlashCards.find({
      nextReview: { $lte: new Date().toISOString() }
    })
  }
}
