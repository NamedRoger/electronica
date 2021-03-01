import React, { useState, useEffect, useRef } from 'react';
import { pages } from '../../../helpers/pages';
import {  getCustomers } from '../../../services/customers/customersService'

export default function TablaCliente() {
    const modal = useRef();
    const tooltrip = useRef();
    const [clientes, setClientes] = useState([])
    const [load, setLoad] = useState(false);
    const [change, setchange] = useState(false);
    const [eliminar, setdelete] = useState(null);
    useEffect(()=>{
        const Clientes = async () => {
            //M.Modal.init(modal.current);
            const res = await getCustomers();
            setClientes(res);
            setLoad(true);
        }
        Clientes();
    }, [load])

    const handleEdit = (id) => {
        console.log(`${pages[1].dropdown[2].link}/${id}`);
        window.open(`${pages[1].dropdown[2].link}/${id}`, null, "width=800,height=600,left=300");
    }

    return (
        <table className="highlight">
            <thead>
                <tr>
                    <th>Clave Registro</th>
                    <th>Representante</th>
                    <th>Razón Social</th>
                    <th>Empresa</th>
                    <th>Acciones</th>
                </tr>
            </thead>

            <tbody>
                {clientes.map((cliente) => {
                    return (
                        <tr key={cliente.id_customer} >
                    <td>{cliente.register_key}</td>
                    <td>{cliente.representative}</td>
                    <td>{cliente.razon_social}    </td>
                    <td>{cliente.business}</td>
                    <td>
                        <div className="botones container">
                            <button className="btn-floating btn-large waves-effect waves-light light-blue darken-1"
                            onClick={() => {handleEdit(cliente.id_customer)}}>
                                <i className="material-icons">edit</i>
                            </button>
                            <button className="btn-floating btn-large waves-effect waves-light red darken-3">
                                <i className="material-icons">delete</i>
                            </button>
                        </div>
                    </td>
                </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
