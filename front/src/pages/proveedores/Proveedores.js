import React, { useEffect } from 'react';
import { pages } from '../../helpers/pages';
import TablaProveedores from './views/TablaProveedores';
import './index.css';

export default function Proveedores() {
  useEffect(() => {
    document.title = 'Proveedores';
  }, []);
  const handleOpen = () => {
    window.open(pages[0].dropdown[0].link, null, "width=800,height=600,left=300");
  }
  
  return (
    <div className="">
      <h1 className="center-align">Listado de Proveedores</h1>
      <button className="waves-effect waves-light green btn-large"
        style={{ display: 'block', margin: '2em 41vw' }} onClick={handleOpen}>
        <i className="material-icons left">add</i>Añadir</button>
      <TablaProveedores />
    </div>
  )
}
