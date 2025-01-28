const path = require('path');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
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

// cors middleware Local - 

/* app.use(
  cors({
     origin: ['http://localhost:4000/api/ideas', 'http://localhost:3000'],
     credentials: true
   })
 )
*/

// Prod config for deployment
if (process.env.NODE_ENV !== "production") {
  const cors = require("cors");
    app.use(
      cors({
        origin: ["http://localhost:5000", "http://localhost:3000"],
        credentials: true,
      })
    );
}

// Define a basic route
app.get('/', (req, res) => {
  res.json({message: 'Welcome to the Random Ideas App'});
});

app.use('/api/ideas', ideasRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});