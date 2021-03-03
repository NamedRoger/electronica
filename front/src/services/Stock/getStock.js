import { URL } from '../../helpers/URL';
import axios from 'axios';

export const getStocks = async () => {
    try {
        const Stocks = await fetch(`${URL}/stock`);
    const res = await Stocks.json();
    return res;
    } catch (error) {
        return {error: `Falla en la Conexíon: ${error}`}
    }
}

export const addStock = async (datos) => {
    const {alternative_key, web, description, id_category, caracteristics, stock, minimun_order,
        maximum_order, sales_unit, foto, ubication, price, sat_key, unit_sat,webPath} = datos
    try {
        const res = await axios.post(`${URL}/stock/`,{alternative_key, web, description, id_category, caracteristics, stock, minimun_order,
            maximum_order, sales_unit, foto, ubication, price, sat_key, unit_sat,webPath});
        return res;
    } catch (error) {
        return {error: `Falla en la Conexíon: ${error}`}
    }
}

export const getStockById = async (id) => {
    try {
        const StockId = await fetch(`${URL}/stock/${id}`);
        const res = await StockId.json();
        return res;
    } catch (error) {
        return {error: `Falla en la Conexíon: ${error}`}
    }
}

export const updateStockById = async (id, datos) => {
        const {alternative_key, web, description, id_category, caracteristics, stock, minimun_order,
            maximum_order, sales_unit, foto, ubication, price, sat_key, unit_sat,webPath} = datos;
    try {
        const res = await axios.put(`${URL}/stock/${id}`, {alternative_key, web, description, id_category, caracteristics, stock, minimun_order,
            maximum_order, sales_unit, foto, ubication, price, sat_key, unit_sat,webPath});
        return res;
    } catch (error) {
        return {error: `Falla en la Conexíon: ${error}`}
    }
}

export const deleteStockById = async (id) => {
    try {
        const StockId = await axios.delete(`${URL}/stock/${id}`);
        const res = await StockId.json();
        return res;
    } catch (error) {
        return {error: `Falla en la Conexíon: ${error}`}
    }
}