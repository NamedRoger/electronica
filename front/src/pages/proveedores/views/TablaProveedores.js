import React, { useState, useEffect } from 'react';
import { pages } from '../../../helpers/pages';
import Loader from '../../../components/Loader';
import { getProviders } from '../../../services/Providers/getProviders';

export default function TablaProveedores() {
  const [proveedores, setProveedores] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(()=>{
    const get = async ()=>{
      const getProv = await getProviders();
      setProveedores(getProv);
      setLoad(true);
    }
    get();
  }, []);

  const openEdit = (id) =>{
    window.open(`${pages[0].dropdown[2].link}/${id}`, null, "width=800,height=600,left=300");
  }
  const onDelete = (id) =>{
    console.log(id);
  }
  if(!load){
    return <Loader />
  }
    return (
      <>
        {proveedores.error ? <h3>{proveedores.error}</h3> :
        <table className="highlight">
        <thead>
          <tr>
              <th>Nombre</th>
              <th>RFC</th>
              <th>Razón Social</th>
              <th>Telefonos</th>
              <th>Email</th>
              <th>Paquete</th>
              <th>Direccion Completa</th>
              <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {proveedores.map(prov=>{
          return (
          <tr key={prov.id_provider}>
            <td>{prov.nick_name}</td>
            <td>{prov.rfc}</td>
            <td>{prov.razon_social}</td>
            <td>{`
            Telefono: ${prov.tel}
            Celular: ${prov.cel}
            `}   
            </td>
            <td>{prov.email}</td>
            <td>{prov.parcel}</td>
            <td>{`${prov.address} ${prov.city} ${prov.state} ${prov.country} ${prov.zip}`}</td>
            <td>
                <div className="botones">
            <button className="btn-floating btn-large waves-effect waves-light light-blue darken-1"
              onClick={() => openEdit(prov.id_provider)}>
                    <i className="material-icons">edit</i>
                    </button>
            <button className="btn-floating btn-large waves-effect waves-light red darken-3"
            onClick={() => onDelete(prov.id_provider)}>
                    <i className="material-icons">delete</i>
                    </button>
            <a className="waves-effect waves-light grey darken-1 btn-small" 
            href={pages[0].dropdown[3].link} rel="noreferrer" target="_blank">Bancos</a>
            <a className="waves-effect waves-light red lighten-1 btn-small" 
            href={pages[0].dropdown[4].link} rel="noreferrer" target="_blank">Notas</a>
            <a className="waves-effect waves-light blue accent-2 btn-small" 
            href={pages[0].dropdown[5].link} rel="noreferrer" target="_blank">Observaciones</a>
            </div>
            </td>
          </tr>
          )
        })}
        </tbody>
      </table>}
      </>
    )
}
