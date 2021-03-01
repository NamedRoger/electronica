
const serviceNotes = require('../services/notes');

const getNote = async (req,res) => {
    const idProvider = req.params.idProvider;
    const note = await serviceNotes.getNotesByProvider(idProvider);
    res.json(note); 
}

const addNote = async (req,res) => {
    const idProvider = req.params.idProvider;
    const newNote = req.body;
    try {
        await serviceNotes.addNote(idProvider,newNote.description)
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
        await serviceNotes.updateNote(idNote,newDataNote.description);
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
        await serviceNotes.deleteNote(idNote);
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

