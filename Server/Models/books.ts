/*
* Author     : Min Li
* Date       : Oct 27, 2021
* Description: Min Li's Mid-Term Test
* File       : /Server/Models/books.ts
*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema; // Schema alias

// create a model class
const BookSchema = new Schema
({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

const Model = mongoose.model('Book', BookSchema);
export default Model;
