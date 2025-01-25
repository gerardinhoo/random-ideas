const express = require('express');
const app = express();
const port = 4000;

const ideas = [
   {
      id: 1,
      text: 'Start a daily gratitude journal to reflect on positive experiences.',
      tag: 'Life',
      username: 'Dinho',
      date: '2025-01-03'
   },
   {
      id: 2,
      text: 'Develop a platform for connecting tech startups with investors.',
      tag: 'Tech',
      username: 'Mo',
      date: '2024-07-02'
   },
   {
      id: 3,
      text: 'Develop a series of instructional videos on soccer skills and techniques for beginners.',
      tag: 'soccer',
      username: 'Gerard',
      date: '2022-05-04'
   },
   {
      id: 4,
      text: 'Create a travel blog sharing personal experiences and tips for different destinations.',
      tag: 'Trips',
      username: 'Rachel',
      date: '2020-04-08'
   },

]

// Define a basic route
app.get('/', (req, res) => {
  res.json({message: 'Welcome to the Random Ideas App'});
});

// Get all ideas
app.get('/api/ideas', (req, res) => {
   res.json({success: true, data: ideas});
 });

//  Get a single idea

app.get('/api/ideas/:id', (req, res) => {
   const idea = ideas.find((idea) => idea.id === +req.params.id)
         if(!idea) {
          return res.status(404).json({success: false, error: 'Resource not found' });
       }
       res.json({success: true, data: idea})
   })

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});