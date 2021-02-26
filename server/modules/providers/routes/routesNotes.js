const express = require('express');
const router = express.Router();

const notesController = require('../controllers/notesControllers');

router.get('/',notesController.getNote);
router.post('/',notesController.addNote);
router.put('/:idNote',notesController.updateNote);
router.delete('/:idNote',notesController.deleteNote);
module.exports = router;
