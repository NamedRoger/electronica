import React, { useEffect } from 'react';
import { pages } from '../../helpers/pages';
import TablaAlmacen from './views/TablaAlmacen';
import './index.css';
import { Link } from 'react-router-dom';

export default function Proveedores() {
  useEffect(() => {
    document.title = 'Almacén';
  }, []);
  /*const handleOpen = () => {
    window.open(pages[2].dropdown[0].link, null, "width=800,height=600,left=300");
  }*/
  return (
    <div className="">
      <h4>Almacén</h4>
      <Link to={pages[2].dropdown[0].link}>
        <button className="waves-effect waves-light green btn btn-small">
          <i className="material-icons left">add</i>Agregar Producto</button>
      </Link>

      <Link to={pages[2].dropdown[4].link}>
        <button className="waves-effect waves-light green btn btn-small" style={{marginLeft:'2rem'}}>
          <i className="material-icons left">add</i>Agregar Categoria</button>
      </Link>
      <TablaAlmacen />
    </div>
  )
}
