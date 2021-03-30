import React, { useState, useEffect, useRef } from 'react';
import { pages } from '../../../helpers/pages';
import Loader from '../../../components/Loader';
import { getProviders, desactivateProvider, buscarProv } from '../../../services/Providers/getProviders';
import Search from '../../../components/Search';
import M from 'materialize-css';
import { Link } from 'react-router-dom';


export default function TablaProveedores() {
  const modal = useRef();
  const tooltip = useRef();
  const [proveedores, setProveedores] = useState([]);
  const [load, setLoad] = useState(false);
  const [change, setChange] = useState(false);
  const [switchBuscar, setSwitchBuscar] = useState(false);
  const [search, setSearch] = useState({});
  const [eliminar, setDelete] = useState(null);
  const fontSizeTitle = { fontSize: '15px' };
  const fontSizeNormal = { fontSize: '12px' };
  useEffect(() => {
    const get = async () => {
      M.Modal.init(modal.current);
      const getProv = await getProviders();
      setProveedores(getProv);
      setLoad(true);
    }
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [load]);

  useEffect(() => {
    setSearch(buscarProv(proveedores));
    setChange(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [change]);

  useEffect(() => {
    M.Tooltip.init(tooltip.current);
  }, [switchBuscar]);

  const handleChange = () => {
    setChange(false);
  }
  /*const openEdit = (id) => {
    window.open(`${pages[0].dropdown[2].link}/${id}`, null, "width=800,height=600,left=300");
  }
  const handleBancos = (id) => {
    window.open(`${pages[0].dropdown[3].link}/${id}`, null, "width=800,height=600,left=300");
  }

  const handleObservaciones = (id) => {
    window.open(`${pages[0].dropdown[5].link}/${id}`, null, "width=800,height=600,left=300");
  }

  const handleNotas = (id) => {
    window.open(`${pages[0].dropdown[4].link}/${id}`, null, "width=800,height=600,left=300");
  }*/
  const onDelete = (id) => {
    const instance = M.Modal.getInstance(modal.current);
    setDelete(id);
    instance.open();
  }
  const handleDelete = async (id) => {
    const instance = M.Modal.getInstance(modal.current);
    await desactivateProvider(id);
    setLoad(false);
    instance.close();
  }

  const onSearch = (item) => {
    const result = proveedores.find(prov => item === prov.nick_name);
    setProveedores([result]);
    setSwitchBuscar(true);
    console.log(result);
  }

  const onSwitch = () => {
    setSwitchBuscar(false);
    setLoad(false);
  }
  if (!load) {
    return <Loader />
  }
  return (
    <>
      {proveedores.length === 0 || proveedores.error ? <h2
        style={{
          textAlign: 'center',
          width: '100%',
          height: '100px',
          left: '20%',
          top: '50px'
        }}
      >{proveedores.error ? proveedores.error : 'No hay elementos en proveedores'}</h2> :
        <>
          <div className="modal" ref={modal}>
            <div className="modal-content center-align">
              <h3>Desactivar Proveedor</h3>
              <h5>¿Estás seguro de querer desactivar este proveedor?</h5>
            </div>
            <div className="modal-footer">
              <div className="row">
                <div className="col s6">
                  <button className="btn-large waves-effect waves-light red left" onClick={() => handleDelete(eliminar)}>
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
          <Search onChange={handleChange} search={search} setProv={onSearch} />
          {/*Regresar*/}
          {switchBuscar && <button className="btn-floating btn waves-effect waves-light red tooltipped"
            data-position="bottom"
            data-tooltip="Regresar" ref={tooltip}
            style={{ marginLeft: '30px' }}
            onClick={onSwitch}>
            <i className="material-icons">arrow_back</i>
          </button>}

          {/*Tabla de Proveedores*/}
          <table className="highlight">
            <thead>
              <tr>
                <th style={fontSizeTitle}>Nombre</th>
                <th style={fontSizeTitle}>RFC</th>
                <th style={fontSizeTitle}>Razón Social</th>
                <th style={fontSizeTitle}>Telefonos</th>
                <th style={fontSizeTitle}>Email</th>
                <th style={fontSizeTitle}>Paquete</th>
                <th style={fontSizeTitle}>Direccion Completa</th>
                <th style={fontSizeTitle}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {proveedores.map(prov => {
                return (
                  <tr key={prov.id_provider}>
                    <td style={fontSizeNormal}>{prov.nick_name}</td>
                    <td style={fontSizeNormal}>{prov.rfc}</td>
                    <td style={fontSizeNormal}>{prov.razon_social}</td>
                    <td style={fontSizeNormal}>{`
            Telefono: ${prov.tel}
            Celular: ${prov.cel}
            `}
                    </td>
                    <td style={fontSizeNormal}>{prov.email}</td>
                    <td style={fontSizeNormal}>{prov.parcel}</td>
                    <td style={fontSizeNormal}>{`${prov.address} ${prov.city} ${prov.state} ${prov.country} ${prov.zip}`}</td>
                    <td>
                      <div className="botones">
                        <Link to={`${pages[0].dropdown[2].link}/${prov.id_provider}`}>
                          <button className="waves-effect waves-light light-blue darken-1 btn-small tooltipped" data-position="bottom" data-tooltip="I am a tooltip" style={{ width: '45px' }}>
                            <i className="material-icons">edit</i>
                          </button>
                        </Link>
                        <button className="waves-effect waves-light red darken-3 btn-small" style={{ width: '45px' }}
                          onClick={() => onDelete(prov.id_provider)}>
                          <i className="material-icons">delete</i>
                        </button>
                        <Link to={`${pages[0].dropdown[3].link}/${prov.id_provider}`}>
                          <button className="waves-effect waves-light grey darken-1 btn-small" style={{ width: '63px', fontSize: '10px' }}>
                            Bancos
                          </button>
                        </Link>
                        <Link to={`${pages[0].dropdown[5].link}/${prov.id_provider}`}>
                          <button className="waves-effect waves-light blue accent-2 btn-small" style={{ width: '110px', fontSize: '10px' }} >
                            Observaciones
                          </button>
                        </Link>
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
