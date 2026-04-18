const express = require('express');
const app = express();
app.use(express.json());

const notes = [];
// title, description ,post ,notes
app.post('/notes', (req, res)=> {
  notes.push(req.body);
  res.status(201).json({message: 'Note added successfully', note: req.body});
})

app.get('/notes', (req, res) => {
  
  res.status(200).json({
    message: 'Notes retrieved successfully',
    notes: notes
  })
})

app.delete('/notes/:id', (req, res) =>{
  const id = req.params.id;
  delete notes[id];
  res.status(200).json({
    message: `Note with id ${id} deleted successfully`
  })
})

app.patch('/notes/:id', (req, res) => {
  const id = req.params.id;
  const description = req.body.description;
  notes[ id ].description = description;
  
  res.status(200).json({
    message: `Note with id ${id} updated
    successfully`

  })
})
module.exports = app;