const {createNewNote} = require('../../lib/notes')
const { notes } = require('../../db/db.json')
const router = require('express').Router();


router.get('/notes', (req,res) =>{
    res.json(notes)
});
///3.
router.post('/notes',(req,res) => {
    
    if(!validatNote(req.body)){
        res.status(400).send('The input is not properly formated.');
    }else{
        const note = createNewNote(req.body, notes)
        res.json(note)
    }
});

module.exports = router;