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
            <div className="" style={{marginBottom:'2rem'}}>
                <h4 className="">Clientes</h4>
                <button className="waves-effect waves-light green btn btn-small" onClick={handleOpen}>
                    <i className="material-icons left">add</i>
                    Añadir
                </button>
            </div>
            <TablaCliente />
        </div>
    )
}
