const express = require('express');
const noteModel = require("./models/note.model")
const app = express();

//middleware  
app.use(express.json());

app.post('/notes', async (req,res)=>{
  const data = req.body;
  await noteModel.create({
  title:data.title,
  description:data.description
  })

  res.status(201).json({
    message: "note created"
  })

})
// title, description ,post ,notes
// app.post('/notes', (req, res)=> {
//   notes.push(req.body);
//   res.status(201).json({message: 'Note added successfully', note: req.body});
// })

app.get('/notes', async (req, res) => {

  const notes = await noteModel.find({

  })
  
  res.status(200).json({
    message: 'Notes fetch successfully',
    notes: notes
  })
})

app.delete('/notes/:id', async (req,res) => {
  const id = req.params.id;
  await noteModel.findOneAndDelete({
    _id:id
  })
res.status(200).json({
  message:"Notes deleted succesfully"
})
})



// app.delete('/notes/:id', (req, res) =>{
//   const id = req.params.id;
//   delete notes[id];
//   res.status(200).json({
//     message: `Note with id ${id} deleted successfully`
//   })
// })

app.patch('/notes/:id', async (req,res) =>{
  const id = req.params.id;
  description = req.body.description
  await noteModel.findOneAndUpdate({_id:id},{description: description})

  res.status(200).json({
    message:"Note Updated successfully"
  })
})

// app.patch('/notes/:id', (req, res) => {
//   const id = req.params.id;
//   const description = req.body.description;
//   notes[ id ].description = description;
  
//   res.status(200).json({
//     message: `Note with id ${id} updated
//     successfully`

//   })
// })

module.exports = app;