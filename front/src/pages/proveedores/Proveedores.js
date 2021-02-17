import React, {useEffect} from 'react';
import { pages } from '../../helpers/pages';
import TablaProveedores from './views/TablaProveedores';
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
              <i className="material-icons left">add</i>Añadir</a>
              <TablaProveedores />
        </div>
    )
}
