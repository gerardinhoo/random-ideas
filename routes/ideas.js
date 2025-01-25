const express = require('express');
const router = express.Router();

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

// Get all ideas
router.get('/', (req, res) => {
   res.json({success: true, data: ideas});
 });
 

//  Get a single idea
router.get('/:id', (req, res) => {
   const idea = ideas.find((idea) => idea.id === +req.params.id)
         if(!idea) {
          return res.status(404).json({success: false, error: 'Resource not found' });
       }
       res.json({success: true, data: idea})
   })


module.exports = router;