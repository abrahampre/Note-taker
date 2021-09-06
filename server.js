const express= require('express');
const PORT = process.env.PORT || 3001;
const app = express ();
///step 6 
const fs = require('fs');
const { totalmem } = require('os');
const path = require('path');
//1.creating a route that the front edn can request data from . 
const { notes } = require('./db/db.json');

// 4. In order for our server to accept incoming data the way we need it to, we 
// need to tell our Express.js app to intercept our POST request before it gets
// to the callback function. At that point, the data will be run through a 
// couple of functions to take the raw data transferred over HTTP and convert 
// it to a JSON object.


// First, we used the app.use() method. This is a method executed by our Express.js 
// server that mounts a function to the server that our requests will pass through before 
// getting to the intended endpoint. The functions we can mount to our server are referred to as middleware. --- ESTAS DOS SON LAS MIDDLEWARE FUNCTIONS
/////4. parse incoming string or array data
app.use(express.urlencoded({extended:true}));

//4.  parse incoming JSON data
app.use(express.json());


//5

function createNewNote(body , noteArray){
   const note = body; 
   noteArray.push(note);


   fs.writeFileSync(
       path.join(__dirname, "./db/db.json"),
       JSON.stringify({notes: noteArray}, null,2)
   );
   return note;
}



//2. get after creating the route to request front end data.  GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get('/api/notes', (req,res) =>{
    res.json(notes)
});
///3.
app.post('/api/notes',(req,res) => {
    
    const note = createNewNote(req.body, notes)

    res.json(note)
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

