//Create web server application with Node.js and Express.js that can:
// - Create a new comment
// - Update an existing comment
// - Delete an existing comment
// - Get all comments
// - Get a single comment
// - Get all comments for a specific post
// - Get all comments for a specific user
// - Get all comments created between two dates
// - Get all comments created by a specific user between two dates
// - Get all comments created by a specific user for a specific post

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const comments = require('./routes/comments');
const Comment = require('./models/comment');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

app.use('/comments', comments);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;