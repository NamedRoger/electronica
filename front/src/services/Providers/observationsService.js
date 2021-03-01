import {URL} from '../../helpers/URL';
import axios from 'axios';

export const getObservations = async(idProvider) => {
    try{
        const res = (await (await fetch(`${URL}/providers/${idProvider}/observations/`)).json());
        return res;
    }catch(e){
        return {error:'Conexion perdida'}
    }
}

export const addObservation = async (idProvider,{description}) => {
    try{
        const data = {
            description
        };

        const res = await axios.post(`${URL}/providers/${idProvider}/observations/`,data);
        return res;
    }catch(e){
        return e;
    }
}

export const updateObservation = async (idProvider,idObservation,{description}) => {
    try{
        const data = {
            description
        };

        const res = await axios.put(`${URL}/providers/${idProvider}/observations/${idObservation}`,data);
        return res;
    }catch(e){
        return e;
    }
}

export const deleteObservation = async (idProvider,idObservation) => {
    try{
        const res = await axios.delete(`${URL}/providers/${idProvider}/observations/${idObservation}`);
        return res;
    }catch(e){
        return e;
    }
}