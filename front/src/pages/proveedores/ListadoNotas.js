import React, { useEffect } from 'react';
import { pages } from '../../helpers/pages';
import './index.css';


export default function ListadoNotas() {
    useEffect(()=>{
        document.title= 'Notas';
    }, []);
    return (
        <div>
            <section className="container">
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea" ></textarea>
                        <label htmlfor="textarea1">Descripción</label>
                    </div>
                </div>
            </form>
            <div className="buttons">
                <button className="waves-effect waves-light btn-small green">Guardar</button>
            </div>
            <table className="highlight">
                <thead>
                    <tr>
                        <th>Descripción Nota: </th>
                        <th>Fecha: </th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lacus sed est ultricies
                            ullamcorper. Integer eleifend sapien in massa pulvinar sollicitudin. </td>
                        <td>2/02/2021</td>
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
