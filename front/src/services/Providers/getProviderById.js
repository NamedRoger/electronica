import { URL } from '../../helpers/URL';
import axios from 'axios';
export const getProviderById = async (id) =>{
    try {
        const response = await fetch(`${URL}/providers/${id}`);
    const res = await response.json();
    return res;
    } catch (error) {
        return {error: 'Conexión Perdida'}
    }
}

export const updateProviderById = async (id, { nickName,
    rfc,
    razonSocial,
    tel,
    cel,
    email,
    parcel,
    address,
    city,
    state,
    country,
    zip
   }) => {
    try {
        const response = await axios.put(`${URL}/providers/${id}`, { nickName,
            rfc,
            razonSocial,
            tel,
            cel,
            email,
            parcel,
            address,
            city,
            state,
            country,
            zip
           });
           return response;
    } catch (error) {
        console.log(error)
    }
}