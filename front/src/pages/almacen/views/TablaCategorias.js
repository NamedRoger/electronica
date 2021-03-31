import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as M from 'materialize-css';
import { getOptionsCatalgos,desactiveOptionsCatalogs,activeOptionsCatalogs } from '../../../services/catalogs/catalogsOptionsService';


export default function TablaCategorias({ match }) {
    const ref = React.createRef();
    const [categorias, setCategorias] = useState([]);
    const initCategory = {
        name:'',
        active:true
    }
    const [category,setCategory] = useState(initCategory);

    let history = useHistory();
    const fontSizeTitle = { fontSize: '15px' };
    const fontSizeNormal = { fontSize: '12px' };
    const sizeButton = { width: '40px', height: '40px' };
    const sizeIcon = { lineHeight: '35px' };

    useEffect(() => {
        (() => {
            document.title = 'Proveedores Producto';
            M.updateTextFields(ref)
        })();
    }, [ref]);

    useEffect(() => {
        (async () => {
            setCategorias(await getOptionsCatalgos('CAT_CATEGPRODU'))
        })();
    }, [match.params.id]);

    const resetForm = () => {
        
    }

    const loadForm = (idProductProvider, idProvider, sales_unit) => {
       
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            resetForm();
        } catch (e) {
            alert("Ocurrió un error");
        }
    }

    const handleEdit = (idProductProvider) => {

    }

    const handleDesactive = async (input) => {
        console.log(input);
        // await desactiveOptionsCatalogs(idCategoryOpion);
        setCategorias(await getOptionsCatalgos('CAT_CATEGPRODU'));
        resetForm();
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
                <h4 className="center-align">Categorias</h4>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" placeholder="Categorias"
                                ref={ref}
                                type="text"
                                value={category.name}
                                onChange={(e) => { setCategory({
                                    active:true,
                                    name:e.target.value
                                }) }}
                                className="validate" name="sales_unit" />
                            <label htmlFor="first_name">Categorias</label>
                        </div>
                        <div className="col">
                            <button type="submit" className="waves-effect waves-light green btn btn-small" style={{ width: '75px', fontSize: '10px' }}>
                                Guardar
                        </button>


                        </div>
                        <div>
                            <button className="waves-effect waves-light btn-small red " style={{ width: '78px', fontSize: '10px' }} onClick={() => { resetForm() }}>Cancelar</button>
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
                    {
                        categorias.length === 0 ? '' :
                            categorias.map(c =>
                                <tr key={c.id_option}>
                                    <td>{c.name}</td>
                                    <td>
                                        <label>
                                            <input type="checkbox" 
                                            className="filled-in" 
                                            checked={c.active} 
                                            value={c.id_option}
                                            onChange={
                                                () => handleDesactive(c.id_option)
                                            }/>
                                            <span></span>
                                        </label>
                                    </td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}
