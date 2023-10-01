// Create web server application with Express.js framework
// to handle GET and POST requests

const express = require('express');
const app = express();
const port = 3000;

// Import comments.js module
const comments = require('./comments.js');

app.use(express.json());

// GET request to return all comments
app.get('/api/comments', (req, res) => {
    res.send(comments.getAllComments());
});

// GET request to return comment by id
app.get('/api/comments/:id', (req, res) => {
    const comment = comments.getCommentById(req.params.id);
    if (comment) {
        res.send(comment);
    } else {
        res.status(404).send('Comment not found');
    }
});

// POST request to add new comment
app.post('/api/comments', (req, res) => {
    const newComment = comments.addComment(req.body.name, req.body.comment);
    res.send(newComment);
});

app.listen(port, () => {
    console.log(`Web server is listening at http://localhost:${port}`);
});