import React, { useEffect } from 'react';
import { pages } from '../../helpers/pages';
import TablaAlmacen from './views/TablaAlmacen';
import './index.css';

export default function Proveedores() {
  useEffect(() => {
    document.title = 'Almacén';
  }, []);
  const handleOpen = () => {
    window.open(pages[2].dropdown[0].link, null, "width=800,height=600,left=300");
  }
  return (
    <div className="">
      <h4>Almacén</h4>
      <button className="waves-effect waves-light green btn btn-small"
        onClick={handleOpen}>
        <i className="material-icons left">add</i>Agregar entrada</button>
      <TablaAlmacen />
    </div>
  )
}
