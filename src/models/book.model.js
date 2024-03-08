import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
    {
        title: String,
        author: String,
        genre: String,
        publication_date: String
    }
)

export const BookModel = mongoose.model('book', bookSchema)