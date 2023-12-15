import mongoose, { Schema } from 'mongoose'

const FlashCardSchema = new Schema(
  {
    kanjiName: String,
    hiragana: String,
    meanings: [String],
    firstSeen: String,
    lastSeen: String,
    rating: Number,
    nextReview: String,
    quizAnswers: [String]
  },
  { timestamps: true }
)

export default mongoose.model('FlashCards', FlashCardSchema)
