import React, { useState, useEffect, useRef } from 'react';
import { pages } from '../../../helpers/pages';
import Loader from '../../../components/Loader';
import { getProviders, desactivateProvider, buscarProv } from '../../../services/Providers/getProviders';
import Search from '../../../components/Search';
import M from 'materialize-css';


export default function TablaProveedores() {
  const modal = useRef();
  const tooltip = useRef();
  const [proveedores, setProveedores] = useState([]);
  const [load, setLoad] = useState(false);
  const [change, setChange] = useState(false);
  const [switchBuscar, setSwitchBuscar] = useState(false);
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

  useEffect(()=>{
    M.Tooltip.init(tooltip.current);
  },[switchBuscar]);
  
  const handleChange = () => {
    setChange(false);
  }
  const openEdit = (id) =>{
    window.open(`${pages[0].dropdown[2].link}/${id}`, null, "width=800,height=600,left=300");
  }
  const handleBancos = (id) => {
    window.open(`${pages[0].dropdown[3].link}/${id}`, null, "width=800,height=600,left=300");
  }

  const handleObservaciones = (id) => window.open(`${pages[0].dropdown[5].link}/${id}`, null, "width=800,height=600,left=300");

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

  const onSearch = (item) =>{
  const result = proveedores.find(prov=>item === prov.nick_name);
  setProveedores([result]);
  setSwitchBuscar(true);
  console.log(result);
  }

  const onSwitch = () => {
    setSwitchBuscar(false);
    setLoad(false);
  }
  if(!load){
    return <Loader />
  }
    return (
      <>
      {proveedores.error ? <h3>{proveedores.error}</h3> :
      <>
      <div className="modal" ref={modal}>
        <div className="modal-content center-align">
          <h3>Desactivar Proveedor</h3>
          <h5>¿Estás seguro de querer desactivar este proveedor?</h5>
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
      
      {/*Buscar*/}
      <Search onChange={handleChange} search={search} setProv={onSearch}/>
      {/*Regresar*/}
      {switchBuscar && <button className="btn-floating btn waves-effect waves-light red tooltipped" 
      data-position="bottom" 
      data-tooltip="Regresar" ref={tooltip}
      style={{marginLeft: '30px'}}
      onClick={onSwitch}>
      <i class="material-icons">arrow_back</i>
      </button>}

      {/*Tabla de Proveedores*/}
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
            <button className="waves-effect waves-light grey darken-1 btn-small" 
            onClick={() => handleBancos(prov.id_provider)}>Bancos</button>
            <a className="waves-effect waves-light red lighten-1 btn-small" 
            href={pages[0].dropdown[4].link} rel="noreferrer" target="_blank">Notas</a>

            <button className="waves-effect waves-light blue accent-2 btn-small" 
            onClick={() => handleBancos(prov.id_provider)}>Observaciones</button>
            </div>
            </td>
          </tr>
          )
        })}
        </tbody>
      </table>
      </>
      }
      </>
    )
}
