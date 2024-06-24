import FlashCards from '../models/flashcards.model.js'

const reviewIntervals = { 1: 1, 2: 2, 3: 7, 4: 14, 5: 30, 6: 120 } // Days until next review

export default {
  addFlashCard: async (
    _,
    { userId, kanjiName, hiragana, meanings, quizAnswers }
  ) => {
    console.log(kanjiName)
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
      //nextReview: new Date('Dec 25, 2023 01:15:00')
    })
  },

  addBulkFlashCards: async (_, { userId, kanjis }) => {
    console.log(userId, kanjis)
    let modifiedKanjis = kanjis.map((item) => ({
      userId,
      ...item,
      rating: 1,
      firstSeen: new Date(),
      lastSeen: new Date(),
      nextReview: new Date()
    }))

    console.log(modifiedKanjis)

    const result = await FlashCards.insertMany(modifiedKanjis)

    return modifiedKanjis[0]
  },

  getPendingFlashCards: async (_, { userId }) => {
    return await FlashCards.find({
      userId,
      nextReview: { $lte: new Date().toISOString() }
    })
  }
}
