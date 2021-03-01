import {URL} from '../../helpers/URL';
import axios from 'axios';

export const getNotes = async(idProvider) => {
    try{
        const res = (await (await fetch(`${URL}/providers/${idProvider}/notes/`)).json());
        return res;
    }catch(e){
        return {error:'Conexion perdida'}
    }
}

export const addNote = async (idProvider,{description}) => {
    try{
        const data = {
            description
        };

        const res = await axios.post(`${URL}/providers/${idProvider}/notes/`,data);
        return res;
    }catch(e){
        return e;
    }
}

export const updateNote = async (idProvider,idNote,{description}) => {
    try{
        const data = {
            description
        };

        const res = await axios.put(`${URL}/providers/${idProvider}/notes/${idNote}`,data);
        return res;
    }catch(e){
        return e;
    }
}

export const deleteNote = async (idProvider,idNote) => {
    try{
        const res = await axios.delete(`${URL}/providers/${idProvider}/notes/${idNote}`);
        return res;
    }catch(e){
        return e;
    }
}