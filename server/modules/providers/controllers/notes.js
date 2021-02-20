const { NotFoundException } = require('../../../helpers/http/exceptions');

const observation = require('../services/notes');
const {NotFoundException} = require ('../../../helpers/http/exceptions/index');

const getNote = async (req,res) => {
    const note = await note.getNote();
    res.json(note); 
}

const addNote = async (req,res) => {
    const newnote = req.body;
    try {
        await note.addNote(newnote.description);
        res.status(201).json({success:true});
    } catch (e) {
        res.status(400).json({
            ...e,
            success: false
        });  
    }
}

const updateNote = async (req,res) => {
    const idNote = req.params.idNote;
    const newDataNote = req.body;
    try{
        const note = (await note.getNote(idNote))[0] || null;
        if(note === null) throw new NotFoundException();

        await note.updateNote(idNote,newDataNote.description);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 404).json({
            ...e,
            success:false
        });
    }

}

const deleteNote = async (req,res) => {
    const idNote = req.params.idNote;
    try{
        let note = (await note.getNote(idNote))[0] || null;
        if(note === null) throw new NotFoundException();

        await note.deleteNote(idNote);
        res.status(204).send();
    }catch(e){
        res.status(e.status || 404).json({
            ...e,
            success:false
        });
    }
}

module.exports = {
    getNote,
    addNote,
    updateNote,
    deleteNote
}

