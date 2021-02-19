const path = require('path');
const pathEnv = path.join(process.cwd()+'\\..','\\..','..','.env');
require('dotenv').config({
    path:pathEnv
});

const db = require('../../../db/database');
const database = new db();

const getNotesByProvider = (idProvider) => {
    const query = `SELECT id_note,description FROM provider_notes WHERE id_provider = ${idProvider}`;
    return database.query(query);
}

const addNote = (idProvider,description) =>{
    const query = `INSERT INTO provider_notes(id_provider,descrption) VALUES(${idProvider},'${description}')`;
    return database.query(query);
}

const updateNote = (idNote,description) => {
    const query = `UPDATE provider_notes SET description = '${description}' WHERE id_note = ${idNote}`;
    return database.query(query);
}

const deleteNote = (idNote) => {
    const query = `DELETE FROM provider_notes WHERE id_note = ${idNote}`;
    return database.query(query);
}

