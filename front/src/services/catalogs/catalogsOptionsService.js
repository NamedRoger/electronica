import {URL} from '../../helpers/URL';


export const getOptionsCatalgos = async (code) => {
    try{
        const catalog =  (await(await fetch(`${URL}/catalogs/${code}`)).json());

        const res = (await(await fetch(`${URL}/catalogs/options/${catalog.id_catalog}`)).json());
        return res;
    }catch(e){
        return e;
    }
}

export const desactiveOptionsCatalogs = async (id) => {
    try{
        const res = (await(await fetch(`${URL}/catalogs/options/${id}`,{method:'delete'})).json());
        return res;
    }catch(e){
        return e;
    }
}


export const activeOptionsCatalogs = async (id) => {
    try{
        const res = (await(await fetch(`${URL}/catalogs/options/${id}/active/`,{method:'put'})).json());
        return res;
    }catch(e){
        return e;
    }
}
