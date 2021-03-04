import React, { useEffect, useState } from 'react';
import {addProvider,getProviders,deleteProvider,updateProvider} from '../../../services/Stock/prodcutProviders';
import * as providersService from '../../../services/Providers/getProviders';
import { useHistory } from 'react-router-dom';

export default function TablaProveedoresProducto({ match }) {
    const [proveedores, setProveedores] = useState([]);
    const [proveedoresSelect, setProveedoresSelect] = useState([]);
    const [idProvider,setIdProvider] = useState(0);
    const [sales_unit,setSalesUnit] = useState('');
    const [idProductProvider,setIdProductProvider] = useState(0);
    const idProduct = match.params.id;
    let history = useHistory();

    useEffect(() => {
        document.title = 'Proveedores Producto';
    }, []);

    useEffect(() => {
        (async () => {
            const providers = await getProviders(match.params.id);
            setProveedores(providers);
        })();

        (async() => {
            const providers = await providersService.getProviders();
            setProveedoresSelect(providers);
        })();
    },[match.params.id]);

    const resetForm = () => {
        setIdProvider(0);
        setIdProductProvider(0);
        setSalesUnit('');
    }

    const loadForm = (idProductProvider,idProvider,sales_unit) => {
        setIdProductProvider(idProductProvider);
        setIdProvider(idProvider);
        setSalesUnit(sales_unit);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            if(idProductProvider === 0){
                await addProvider({idProduct:idProduct, idProvider:idProvider,sales_unit:sales_unit});
            }else{
                await updateProvider(idProduct,idProductProvider,sales_unit);
            }

            const providers = await getProviders(match.params.id);
            setProveedores(providers);

            resetForm();
        }catch(e){
            alert("Ocurrió un error");
        }
    }

    const handleEdit = (idProductProvider) => {
        const provider = proveedores.find(p => p.id_product_providers === idProductProvider);
        loadForm(provider.id_product_providers,provider.id_provider,provider.sales_unit);

    }

    const handleDelete = async (idProductProvider) => {
        await deleteProvider(idProduct,idProductProvider);
        resetForm();
        const providers = await getProviders(match.params.id);
        setProveedores(providers);
    }
    return (
        <div className="">
            <button type="button" 
              className="btn-floating btn-large waves-effect waves-light red left" 
              style={{ display: 'block', marginBottom: '30px' }}
              onClick={() => {history.push('/almacen')}}>
                <i className="material-icons">arrow_back</i>
            </button>
            <div className="container">
            <h4 className="center-align">Proveedores</h4>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                    <div className="input-field col s6">
                        <select className="browser-default" defaultValue={0} name="id_provider" value={idProvider} onChange={(e) => {setIdProvider(e.target.value)}}>
                            <option value="0" defaultValue disabled selected>Proveedor</option>
                            {proveedoresSelect.map(p => (
                                <option key={p.id_provider} value={p.id_provider}>{p.nick_name} </option>
                            ))}
                        </select>
                    </div>
                    <div className="input-field col s6">
                        <input id="first_name" placeholder="Unidad de Compra" 
                        type="text" 
                        value={sales_unit} 
                        onChange={(e) => {setSalesUnit(e.target.value)}}
                        className="validate" name="sales_unit"/>
                        <label htmlFor="first_name">Unidad de Compra</label>
                    </div>
                    <div className="col">
                        <button type="submit" className="waves-effect waves-light green btn btn-small">
                           Guardar
                        </button>

                      
                    </div>
                    <div>
                        <button className="waves-effect waves-light btn-small red " onClick={() => {resetForm()}}>Cancelar</button>
                    </div>
                    </div>
                </form>
            </div>

            <table className="highlight">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Razon Social</th>
                        <th>Unidad de ventas</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {proveedores.map(p => (
                        <tr key={p.id_product_providers}>
                            <td>{p.nick_name}</td>
                            <td>{p.razon_social}</td>
                            <td>{p.sales_unit}</td>
                            <td>
                                <button className="btn-floating btn-large waves-effect waves-light light-blue darken-1"
                                    onClick={() => handleEdit(p.id_product_providers)}>
                                    <i className="material-icons" id="editar">edit</i>
                                </button>
                                <button className="btn-floating btn-large waves-effect waves-light red darken-3">
                                    <i className="material-icons" onClick={() => handleDelete(p.id_product_providers)}>delete</i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
