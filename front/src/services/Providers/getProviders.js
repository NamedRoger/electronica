import { URL } from '../../helpers/URL';
import axios from 'axios';
export const getProviders = async () =>{
    try {
        const response = await fetch(`${URL}/providers`);
    const res = await response.json();
    return res;
    } catch (error) {
        return {error: `Conexión Perdida: ${error}`}
    }
}

export const addProvider = async (campos={}) => {
    try {
        const response = await axios.post(`${URL}/providers`, campos);
        return response;
    } catch (error) {
        
    }
}

export const desactivateProvider = async (id) =>{
    try {
        const eliminar = await axios.delete(`${URL}/providers/${id}`);
        return eliminar;
    } catch (error) {
        
    }
}

export const buscarProv = (proveedores) =>{
    let object = {};
    for (let i = 0; i < proveedores.length; i++) {
        object[proveedores[i].nick_name] = null;
    }
    return object;
}