const express = require('express');
const {getUser,postUser} = require('./controllers/userControl');
const {getReview,postReview} = require ('./controllers/reviewControl')
const {initDB} = require('./dbConfig')
const cors = require('cors');

const app = express();

const dotenv = require('dotenv')
dotenv.config()

initDB();

app.use(express.json())
app.use(cors());

app.get('/users',getUser)
app.post('/users',postUser)
app.get('/reviews', getReview)
app.post('/reviwes', postReview)

app.listen(8000, () => {
    console.log("Server started successfully")
} )