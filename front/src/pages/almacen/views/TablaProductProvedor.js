import React, { useEffect } from 'react';
import { pages } from '../../../helpers/pages';
import Loader from '../../../components/Loader';
import M from 'materialize-css';

export default function TablaProveedoresProducto() {
    useEffect(() => {
        document.title = 'Proveedores Producto';
    }, []);

    const handleWatchFormularioProveedor = () =>{
        window.open(`${pages[2].dropdown[3].link}`, null, "width=800,height=600,left=300");
      }

    return (
        <div className="">
            <h4>Proveedor</h4>
            <button className="waves-effect waves-light green btn btn-small" onClick={() => handleWatchFormularioProveedor()}>
                <i className="material-icons left">add</i>Agregar Proveedor</button>

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
                    <tr>
                        <td>XXXXXX</td>
                        <td>XXXXXX</td>
                        <td>XXXXXX</td>
                        <td>
                            <div className="botones">
                                <button className="btn-floating btn-large waves-effect waves-light light-blue darken-1"
                                onClick={() => handleWatchFormularioProveedor()}>
                                    <i className="material-icons">edit</i>
                                </button>
                                <button className="btn-floating btn-large waves-effect waves-light red darken-3">
                                    <i className="material-icons">delete</i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
