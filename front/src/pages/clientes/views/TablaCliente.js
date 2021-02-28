import React, { useState, useEffect } from 'react';
import { pages } from '../../../helpers/pages';
import {  getCustomers } from '../../../services/customers/customersService'

export default function TablaCliente() {
    const [clientes, setClientes] = useState([])
    useEffect(()=>{
        const Clientes = async () => {
            const res = await getCustomers();
            console.log(res)
            console.log('sjkdbsajnd')
        }
        Clientes();
    }, [])
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
                {/*clientes.map((cliente) => {
                    return (
                        <tr >
                    <td>XXX-XXX-XXX</td>
                    <td>XXX-XXX-XXX	</td>
                    <td>XXX-XXX-XXX	</td>
                    <td>XXX-XXX-XXX	</td>
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
                })*/}
            </tbody>
        </table>
    )
}
