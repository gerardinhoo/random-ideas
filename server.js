const express = require('express');
const ideasRouter = require('./routes/ideas');

const app = express();
const port = 4000;

// Define a basic route
app.get('/', (req, res) => {
  res.json({message: 'Welcome to the Random Ideas App'});
});

app.use('/api/ideas', ideasRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});