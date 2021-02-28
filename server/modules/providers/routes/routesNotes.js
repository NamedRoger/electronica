const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notesControllers');

router.get('/:idProvider/notes',notesController.getNote);
router.post('/:idProvider/notes',notesController.addNote);
router.put('/:idProvider/notes/:idNote',notesController.updateNote);
router.delete('/:idProvider/notes/:idNote',notesController.deleteNote);
module.exports = router;
