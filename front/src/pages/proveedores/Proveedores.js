import React, { useEffect } from 'react';
import { pages } from '../../helpers/pages';
import TablaProveedores from './views/TablaProveedores';
import { Link } from 'react-router-dom';
import './index.css';

export default function Proveedores() {
  
  useEffect(() => {
    document.title = 'Proveedores';
  }, []);
 /* const handleOpen = () => {
    window.open(pages[0].dropdown[0].link, null, "width=800,height=600,left=300");
  }*/
  
  return (
    <div className="">
      <div style={{marginBottom:'2rem'}}>
        <h4 className="">Proveedores</h4>
        <Link to={pages[0].dropdown[0].link}>
        <button className="waves-effect waves-light green btn btn-small">
            <i className="material-icons left">add</i>Añadir
          </button>
        </Link>
      </div>
      <TablaProveedores />
    </div>
  )
}
