blog-website/
  ├── node_modules/
  ├── public/
  ├── views/
  ├── app.js
  ├── package.json
  └── .env

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory.
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
// Get all blog posts
app.get('/api/posts', (req, res) => {
  // Read posts from your database (data.json)
  const posts = JSON.parse(fs.readFileSync('data.json'));
  res.json(posts);
});

// Create a new blog post
app.post('/api/posts', (req, res) => {
  const newPost = req.body;
  // Save the new post to your database
  // Remember to validate and sanitize user input
  // Update 'data.json' file
  // ...
  res.json(newPost);
});

// Update a blog post
app.put('/api/posts/:postId', (req, res) => {
  const postId = req.params.postId;
  const updatedPost = req.body;
  // Update the post in your database
  // ...
  res.json(updatedPost);
});

// Delete a blog post
app.delete('/api/posts/:postId', (req, res) => {
  const postId = req.params.postId;
  // Delete the post from your database
  // ...
  res.json({ message: 'Post deleted' });
});
app.get('/api/posts/search', (req, res) => {
  const { title, author } = req.query;
  // Search for posts by title and/or author in your database
  // ...
  res.json(searchedPosts);
});
// Create a comment for a specific post
app.post('/api/posts/:postId/comments', (req, res) => {
  const postId = req.params.postId;
  const newComment = req.body;
  // Add the comment to the specific post in your database
  // ...
  res.json(newComment);
});

// Retrieve comments for a specific post
app.get('/api/posts/:postId/comments', (req, res) => {
  const postId = req.params.postId;
  // Retrieve comments for the specified post from your database
  // ...
  res.json(comments);
});
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' directory.
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// ... Your CRUD, search, and comment endpoints ...

// Catch 404 and forward to the error handler
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

