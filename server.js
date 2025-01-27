const path = require('path');
require('dotenv').config();
const express = require('express');
const ideasRouter = require('./routes/ideas');
const connectDB = require('./config/db');
const port = process.env.PORT || 4000;

connectDB();

const app = express();

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

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