import React, {useEffect} from 'react';
import { pages } from '../../helpers/pages';
import './index.css';

export default function Proveedores() {
    useEffect(()=>{
      document.title= 'Proveedores';
  }, []);
    return (
        <div className="">
            <h1 className="center-align">Listado de Proveedores</h1>
            <a className="waves-effect waves-light green btn-large" 
            style={{display: 'block', margin: '2em 40vw'}} href={pages[0].dropdown[0].link} rel="noreferrer" target="_blank">
              <i class="material-icons left">add</i>Añadir</a>
            <table className="highlight">
        <thead>
          <tr>
              <th>Nombre</th>
              <th>RFC</th>
              <th>Razón Social</th>
              <th>Telefonos</th>
              <th>Email</th>
              <th>Paquete</th>
              <th>Direccion Completa</th>
              <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>ALVIN300006KT2</td>
            <td>sandbjsa</td>
            <td>Telefono: 933848234234
                Celular: 827388343432
            </td>
            <td>alvin_7@gmail.com</td>
            <td>TM077</td>
            <td>Alvin #456 col Noreste Monterrey N.L Mexico C.P 63421</td>
            <td>
                <div className="botones">
            <a className="btn-floating btn-large waves-effect waves-light light-blue darken-1"
             href={pages[0].dropdown[2].link} rel="noreferrer" target="_blank">
                    <i className="material-icons">edit</i>
                    </a>
            <button className="btn-floating btn-large waves-effect waves-light red darken-3">
                    <i className="material-icons">delete</i>
                    </button>
            <a className="waves-effect waves-light grey darken-1 btn-small" 
            href={pages[0].dropdown[3].link} rel="noreferrer" target="_blank">Bancos</a>
            <a className="waves-effect waves-light red lighten-1 btn-small" 
            href={pages[0].dropdown[4].link} rel="noreferrer" target="_blank">Notas</a>
            <a className="waves-effect waves-light blue accent-2 btn-small" 
            href={pages[0].dropdown[5].link} rel="noreferrer" target="_blank">Observaciones</a>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
        </div>
    )
}
