import React from 'react';
import { pages } from '../../helpers/pages';
import './index.css'

export default function ListadoBancos() {
    return (
        <div>
            <section className="container">
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="first_name" type="text" className="validate" />
                        <label htmlfor="first_name">Nombre del Banco</label>
                    </div>
                    <div className="col s6">
                        <input id="textarea1" type="number" className="validate" />
                        <label htmlfor="textarea1">Cuenta Banco</label>
                    </div>

                    <div className="col s6">
                        <input id="textarea1" type="number" className="validate" />
                        <label htmlfor="textarea1">Llave Banco</label>
                    </div>
                    </div>
            </form>
            <div className="buttons">
                <button className="waves-effect waves-light btn-small">Guardar</button>
            </div>
            <table className="col s12">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cuenta de banco</th>
                        <th>Llave Banco</th>
                        <th>Flecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Bancomer</td>
                        <td>XXXXXXXXXXXXX</td>
                        <td>XXXXX</td>
                        <td>7/02/2021</td>
                        <td>
                            <div className="botones">
                        <a className="btn-floating btn-large waves-effect waves-light light-blue darken-1"
             href={pages[0].dropdown[2].link} rel="noreferrer" target="_blank">
                    <i className="material-icons">edit</i>
                    </a>
            <a className="btn-floating btn-large waves-effect waves-light red darken-3" 
            href={pages[0].dropdown[3].link} rel="noreferrer" target="_blank">
                    <i className="material-icons">delete</i>
                    </a>
                    </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
        </div>
    )
}
