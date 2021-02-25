import React, { useState, useEffect, useRef } from 'react';
import { pages } from '../../../helpers/pages';
import Loader from '../../../components/Loader';
import { getProviders, desactivateProvider, buscarProv } from '../../../services/Providers/getProviders';
import Search from '../../../components/Search';
import M from 'materialize-css';


export default function TablaProveedores() {
  const modal = useRef();
  const [proveedores, setProveedores] = useState([]);
  const [load, setLoad] = useState(false);
  const [change, setChange] = useState(false);
  const [search, setSearch] = useState({});
  const [eliminar, setDelete] = useState(null);
  useEffect(()=>{
    const get = async ()=>{
      M.Modal.init(modal.current);
      const getProv = await getProviders();
      setProveedores(getProv);
      setLoad(true);
    }
    get();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [load]);

  useEffect(()=>{
    setSearch(buscarProv(proveedores));
    setChange(true);
    console.log(search);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [change]);

  const handleChange = () => {
    setChange(false);
  }
  const openEdit = (id) =>{
    window.open(`${pages[0].dropdown[2].link}/${id}`, null, "width=800,height=600,left=300");
  }
  const onDelete = (id) =>{
    const instance = M.Modal.getInstance(modal.current);
    setDelete(id);
    instance.open();
  }
  const handleDelete = async (id) =>{
    const instance = M.Modal.getInstance(modal.current);
   const eliminar = await desactivateProvider(id);
   console.log(eliminar);
   setLoad(false);
   instance.close();
  }
  if(!load){
    return <Loader />
  }
    return (
      <div>
        {/*Modal*/}
      <div className="modal" ref={modal}>
        <div className="modal-content">
          <h2>¿Estas Seguro de querer eliminar este articulo?</h2>
        </div>
        <div className="modal-footer">
          <div className="row">
            <div className="col s6">
        <button className="btn-large waves-effect waves-light red left" onClick={()=>handleDelete(eliminar)}>
            Aceptar
          </button>
          </div>
          <div className="col s6">
        <button className="btn-large waves-effect waves-light red modal-close right">
            Cancelar
          </button>
          </div>
          </div>
        </div>
      </div>
      
      <Search onChange={handleChange} search={search}/>
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
      </table>
      }
      </div>
    )
}
