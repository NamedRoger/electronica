import { URL } from '../../helpers/URL';
import axios from 'axios';
export const getProviders = async () =>{
    try {
        const response = await fetch(`${URL}/providers`);
    const res = await response.json();
    return res;
    } catch (error) {
        return {error: 'Conexión Perdida'}
    }
}

export const addProvider = async (
    { nickName,
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
        zip }
) => {
    try {
        const response = await axios.post(`${URL}/providers`, {nickName,
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
                zip });
                return response;
    } catch (error) {
        
    }
}