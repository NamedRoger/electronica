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
            console.log(res);
            setClientes(res);
            setLoad(true);
        }
        Clientes();
    }, [load])

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
                        <tr key={cliente.idCustomer} >
                    <td>{cliente.razon_social}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <div className="botones container">
                            <a className="btn-floating btn-large waves-effect waves-light light-blue darken-1"
                                href={pages[0].dropdown[2].link} rel="noreferrer" target="_blank">
                                <i className="material-icons">edit</i>
                            </a>
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
