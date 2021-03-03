import { URL } from '../../helpers/URL';
import axios from 'axios';

export const getProviders = async (idProduct) => {
    try {
        const res = (await(await fetch(`${URL}/stock/${idProduct}/providers`)).json());
        return res;
    } catch (error) {
        return { error: `Falla en la Conexíon: ${error}` }
    }
}

export const addProvider = async ({idProduct,idProvider,sales_unit}) => {
    const data = {
        id_product:idProduct,
        id_provider:idProvider,
        sales_unit: sales_unit
    }
    try {
        const res = await axios.post(`${URL}/stock/${idProduct}/providers`,data);
        return res;
    } catch (error) {
        return {error: `Falla en la Conexíon: ${error}`}
    }   
}

export const updateProvider = async (idProduct,idProductProvider,sales_unit) => {
    const data = {
        id_product:idProduct,
        sales_unit: sales_unit
    }
    try {
        const res = await axios.put(`${URL}/stock/${idProduct}/providers/${idProductProvider}`,data);
        return res;
    } catch (error) {
        return {error: `Falla en la Conexíon: ${error}`}
    }   
}

export const deleteProvider = async (idProduct,idProductProvider) => {
    try {
        const res = await axios.delete(`${URL}/stock/${idProduct}/providers/${idProductProvider}`);
        return res;
    } catch (error) {
        return {error: `Falla en la Conexíon: ${error}`}
    }   
}