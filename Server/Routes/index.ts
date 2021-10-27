/*
* Author     : Min Li
* Date       : Oct 27, 2021
* Description: Min Li's Mid-Term Test
* File       : /Server/Routes/index.ts
*/

// modules required for routing
import express from 'express';
const router = express.Router();
export default router;

import mongoose from 'mongoose';

// define the book model
import book from '../Models/books';

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    page: 'home',
    books: ''
   });
});

//module.exports = router;
