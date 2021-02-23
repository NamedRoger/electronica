import { URL } from '../../helpers/URL';
export const getProviderById = async (id) =>{
    try {
        const response = await fetch(`${URL}/providers/${id}`);
    const res = await response.json();
    return res;
    } catch (error) {
        return {error: 'Conexión Perdida'}
    }
}