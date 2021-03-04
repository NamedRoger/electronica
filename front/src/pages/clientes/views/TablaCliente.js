import React, { useState, useEffect, useRef } from 'react';
import Search from '../../../components/Search';
import { pages } from '../../../helpers/pages';
import { getCustomers, desactiveCustomer } from '../../../services/customers/customersService'
import M from 'materialize-css';
import { Link } from 'react-router-dom';

const filterProviders = (filterText,...filters) => {
    filterText = filterText.trim();
    const worsdFilterText = filterText.split(" ");
    const proveedores = [];
    let provedoresFilter = proveedores;
  
    if(filterText === ""){
    }else{
        provedoresFilter = provedoresFilter.filter((provider) => {
            //apodo, repre, repre tel, reprkwe cel, repre email,repre ciudad, razón s, rfc, ciudad, tel, email
            for(let idxFilter in filters){
                const filter = filters[idxFilter];

                for(let idxWord in worsdFilterText){
                    const word = worsdFilterText[idxWord];

                    if(includes(provider[filter],word)) return true;
                }
            }
            return false;
        });
    }
}


const includes = (a,b) =>{ 
    if(a === undefined || a === null){
        return false;
    }else{
       return a.toUpperCase().includes(b.toUpperCase());
    }
};
export default function TablaCliente() {
    const tooltip = useRef();
    const [switchBuscar, setSwitchBuscar] = useState(false);
    const [clientes, setClientes] = useState([])
    const [load, setLoad] = useState(false);
    const [change, setChange] = useState(false);
    const [search, setSearch] = useState({});

    useEffect(() => {
        const Clientes = async () => {
            const res = await getCustomers();
            setClientes(res);
            setLoad(true);
        }
        Clientes();
    }, [load])

    useEffect(() => {
        M.Tooltip.init(tooltip.current);
    }, [switchBuscar]);

    /*const handleEdit = (id) => {
        
        
        window.open(`${pages[1].dropdown[2].link}/${id}`, null, "width=800,height=600,left=300");
    }*/

    const handleDelete = async (id) => {
        try {
            const res = await desactiveCustomer(id);
            const clientes = await getCustomers();
            setClientes(clientes);
        } catch (e) {
            console.error(e);
            alert("Ocurrió un error");
        }
    }

    const onSearch = (item) => {
        const result = clientes.find(prov => item === prov.razon_social);
        setClientes([result]);
        setSwitchBuscar(true);
    }

    const handleChange = () => {
        setChange(false);
    }
    return (
        <div>
            
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
                                        <Link to={`${pages[1].dropdown[2].link}/${cliente.id_customer}`}>
                                        <button className="btn-floating btn-large waves-effect waves-light light-blue darken-1"
                                         >
                                            <i className="material-icons">edit</i>
                                        </button>
                                        </Link>
                                        <button className="btn-floating btn-large waves-effect waves-light red darken-3"
                                            onClick={() => { handleDelete(cliente.id_customer) }}>
                                            <i className="material-icons">delete</i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
