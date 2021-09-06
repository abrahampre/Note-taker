const express= require('express');

const app = express ();
//1.creating a route that the front edn can request data from . 
const { notes } = require('./develop/db/db.json');





//2. get after creating the route to request front end data. 
app.get('/api/notes', (req,res) =>{
    res.json(notes)
});


app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });