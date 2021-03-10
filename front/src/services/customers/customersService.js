import {URL} from '../../helpers/URL';
import axios from 'axios';


export const getCustomers = async () => {
    try{
        const res = (await (await fetch(`${URL}/customers`)).json());
        return res;
    }catch(e){
        return {
            error: `Conexíon Perdida: ${e}`
        }
    }
}

export const getCustomer = async (idCustomer) => {
    try{
        const res = (await (await fetch(`${URL}/customers/${idCustomer}`)).json());
        return res;
    }catch(e){
        return e;
    }
}

export const addCustomer = async ({register_key, id_category, representative, 
    tel_customer, cel_customer, email, note, address, city, state, country, 
    razon_social, rfc, bank,bank_account, bank_key, price_number, business, tel_business, cel_business}) => {
    try{
        const data = {
            register_key, id_category, representative, 
            tel_customer, cel_customer, email, note, address, city, state, country, 
            razon_social, rfc, bank,bank_account, bank_key, price_number, business, tel_business, cel_business
        }
        const res = await axios.post(`${URL}/customers`,data);
        return res;
    }catch(e){
        return e;
    }
}

export const updateCustomer = async (idCustomer, {register_key, id_category, representative, 
    tel_customer, cel_customer, email, note, address, city, state, country, 
    razon_social, rfc, bank,bank_account, bank_key, price_number, business, tel_business, cel_business}) => {
    try{
        const data = {
            register_key, id_category, representative, 
            tel_customer, cel_customer, email, note, address, city, state, country, 
            razon_social, rfc, bank,bank_account, bank_key, price_number, business, tel_business, cel_business
        }

        const res = await axios.put(`${URL}/customers/${idCustomer}`,data);
        return res;
    }catch(e){
        return e;
    }
}

export const desactiveCustomer = async (idCustomer) => {
    try{
        const res = await axios.delete(`${URL}/customers/${idCustomer}`);
        return res;
    }catch(e){
        return e;
    }
}