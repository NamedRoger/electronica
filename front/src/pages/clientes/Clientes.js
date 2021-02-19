import React, { useEffect } from 'react';
import { pages } from '../../helpers/pages';
import TablaCliente from './views/TablaCliente';
import './index.css';

export default function Clientes() {
    useEffect(() => {
        document.title = 'Clientes';
    }, []);
    const handleOpen = () =>{
        window.open(pages[1].dropdown[1].link, null, 'width=800, height=600, left=400');
    }
    return (
        <div className="">
            <h1 className="center-align">Listado de Clientes</h1>
            <button className="waves-effect waves-light green btn-large"
                style={{ display: 'block', margin: '2em 40vw' }} onClick={handleOpen}>
                <i className="material-icons left">add</i>Añadir</button>
            <TablaCliente />
        </div>
    )
}
