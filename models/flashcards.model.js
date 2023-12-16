import mongoose, { Schema } from 'mongoose'

const FlashCardSchema = new Schema(
  {
    userId: String,
    kanjiName: String,
    hiragana: String,
    meanings: [String],
    quizAnswers: [String],
    rating: Number,
    firstSeen: Date,
    lastSeen: Date,
    nextReview: Date
  },
  { timestamps: true }
)

export default mongoose.model('FlashCards', FlashCardSchema)
