import React, { useEffect, useState } from 'react';
import { addProvider, getProviders, deleteProvider, updateProvider } from '../../../services/Stock/prodcutProviders';
import * as providersService from '../../../services/Providers/getProviders';
import { useHistory } from 'react-router-dom';
import * as M from 'materialize-css';

export default function TablaCategorias({ match }) {
    const ref = React.createRef();
    const [proveedores, setProveedores] = useState([]);
    const [proveedoresSelect, setProveedoresSelect] = useState([]);
    const [idProvider, setIdProvider] = useState(0);
    const [sales_unit, setSalesUnit] = useState('');
    const [idProductProvider, setIdProductProvider] = useState(0);
    const idProduct = match.params.id;
    let history = useHistory();
    const fontSizeTitle = { fontSize: '15px' };
    const fontSizeNormal = { fontSize: '12px' };
    const sizeButton = { width: '40px', height: '40px' };
    const sizeIcon = { lineHeight: '35px' };

    useEffect(() => {
        (()=> {
            document.title = 'Proveedores Producto';
            M.updateTextFields(ref)
        })(); 
    }, [ref]);

    useEffect(() => {
        (async () => {
            const providers = await getProviders(match.params.id);
            setProveedores(providers);
        })();

        (async () => {
            const providers = await providersService.getProviders();
            setProveedoresSelect(providers);
        })();
    }, [match.params.id]);

    const resetForm = () => {
        setIdProvider(0);
        setIdProductProvider(0);
        setSalesUnit('');
    }

    const loadForm = (idProductProvider, idProvider, sales_unit) => {
        setIdProductProvider(idProductProvider);
        setIdProvider(idProvider);
        setSalesUnit(sales_unit);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (idProductProvider === 0) {
                await addProvider({ idProduct: idProduct, idProvider: idProvider, sales_unit: sales_unit });
            } else {
                await updateProvider(idProduct, idProductProvider, sales_unit);
            }

            const providers = await getProviders(match.params.id);
            setProveedores(providers);

            resetForm();
        } catch (e) {
            alert("Ocurrió un error");
        }
    }

    const handleEdit = (idProductProvider) => {
        const provider = proveedores.find(p => p.id_product_providers === idProductProvider);
        loadForm(provider.id_product_providers, provider.id_provider, provider.sales_unit);

    }

    const handleDelete = async (idProductProvider) => {
        await deleteProvider(idProduct, idProductProvider);
        resetForm();
        const providers = await getProviders(match.params.id);
        setProveedores(providers);
    }
    return (
        <div className="">
            <button type="button"
                className="btn-floating btn-large waves-effect waves-light red left"
                style={{ display: 'block', marginBottom: '30px', width: '40px', height: '40px' }}
                onClick={() => { history.push('/almacen') }}>
                <i className="material-icons" style={sizeIcon}>arrow_back</i>
            </button>
            <div className="container">
                <h4 className="center-align">Proveedores</h4>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" placeholder="Categorias"
                                ref={ref}
                                type="text"
                                value={sales_unit}
                                onChange={(e) => { setSalesUnit(e.target.value) }}
                                className="validate" name="sales_unit" />
                            <label htmlFor="first_name">Categorias</label>
                        </div>
                        <div className="col">
                            <button type="submit" className="waves-effect waves-light green btn btn-small" style={{width: '75px', fontSize: '10px'}}>
                                Guardar
                        </button>


                        </div>
                        <div>
                            <button className="waves-effect waves-light btn-small red " style={{width: '78px', fontSize: '10px'}} onClick={() => { resetForm() }}>Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>

            <table className="highlight">
                <thead>
                    <tr>
                        <th style={fontSizeTitle}>Nombre</th>
                        <th style={fontSizeTitle}>Activo</th>
                    </tr>
                </thead>
                <tbody>
                   
                </tbody>
            </table>
        </div>
    )
}
