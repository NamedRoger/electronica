import {URL} from '../../helpers/URL';
import axios from 'axios';

export const getBanks = async(idProvider) => {
    try{
        const res = (await (await fetch(`${URL}/providers/${idProvider}/banks/`)).json());
        return res;
    }catch(e){
        return {error:'Conexion perdida'}
    }
}

export const addBank = async (idProvider,{name,bankAccount,bankKey}) => {
    try{
        const data = {
            name,
            bankAccount,
            bankKey
        };

        const res = await axios.post(`${URL}/providers/${idProvider}/banks/`,data);
        return res;
    }catch(e){
        return e;
    }
}

export const updateBank = async (idProvider,idBank,{name,bankKeyAccount,bankKey}) => {
    try{
        const data = {
            name,
            bankKeyAccount,
            bankKey
        };

        const res = await axios.put(`${URL}/providers/${idProvider}/banks/${idBank}`,data);
        return res;
    }catch(e){
        return e;
    }
}

export const deleteBank = async (idProvider,idBank) => {
    try{
        const res = await axios.delete(`${URL}/providers/${idProvider}/banks/${idBank}`);
        return res;
    }catch(e){
        return e;
    }
}