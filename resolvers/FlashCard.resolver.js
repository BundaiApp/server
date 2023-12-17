import FlashCards from '../models/flashcards.model.js'

export default {
  addFlashCard: async (
    _,
    { userId, kanjiName, hiragana, meanings, quizAnswers }
  ) => {
    const ifExists = await FlashCards.findOne({ userId, kanjiName })

    if (ifExists) {
      return
    } else {
      return await FlashCards.create({
        userId,
        kanjiName,
        hiragana,
        meanings,
        quizAnswers,
        rating: 1,
        firstSeen: new Date(),
        lastSeen: new Date(),
        nextReview: new Date()
      })
    }
  },

  calculateNextReviewDate: async (_, { userId, kanjiName, rating }) => {
    const reviewIntervals = { 1: 1, 2: 2, 3: 7, 4: 14, 5: 30, 6: 120 }
    return await FlashCards.updateOne(
      { userId, kanjiName },
      {
        $set: {
          rating,
          lastSeen: new Date(),
          nextReview: new Date().setDate(
            new Date().getDate() +
              reviewIntervals[rating > 6 ? 6 : rating < 1 ? 1 : rating]
          )
        }
      }
    )
  },

  //query
  getPendingFlashCards: async (_, { userId }) => {
    return await FlashCards.find({
      userId,
      nextReview: { $lte: new Date().toISOString() }
    })
  }
}
