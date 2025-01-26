const express = require('express');
const ideasRouter = require('./routes/ideas');


const app = express();
const port = 4000;

// Body parser middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Define a basic route
app.get('/', (req, res) => {
  res.json({message: 'Welcome to the Random Ideas App'});
});

app.use('/api/ideas', ideasRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});