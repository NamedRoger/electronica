import React, { useEffect, useState } from 'react';
import { pages } from '../../../helpers/pages';
import { getStocks, deleteStockById } from '../../../services/Stock/getStock';
import { getOptionsCatalgos } from '../../../services/catalogs/catalogsOptionsService';
import Loader from '../../../components/Loader';
import { Link } from 'react-router-dom';

export default function TablaProveedores() {
  const [almacen, setAlmacen] = useState([]);
  const [load, setLoad] = useState(false);
  const [catalog, setCatalog] = useState([]);
  const fontSizeTitle = { fontSize: '15px' };
  const fontSizeNormal = { fontSize: '12px' };
  const sizeButton = { width: '40px', height: '40px' };
  const sizeIcon = { lineHeight: '35px' };

  useEffect(() => {
    getStocks()
      .then(res => {
        setAlmacen(res);
        getOptionsCatalgos('CAT_CATEGPRODU')
          .then(res => {
            setCatalog(res);
            setLoad(true)
          })
      })
  }, [load]);

  /*const handleEdit = (id) => {
    window.open(`${pages[2].dropdown[1].link}/${id}`, null, "width=800,height=600,left=300");
  }

  const handleWatchProviders = (id) => {
    window.open(`${pages[2].dropdown[2].link}/${id}`, null, "width=800,height=600,left=300");
  }*/

  const handleDelete = (id) => {
    deleteStockById(id)
      .then(() => {
        setLoad(false);
      })
  }

  if (!load) {
    return <Loader />
  }
  return (
    <div>
      {almacen.length === 0 || almacen.error ? <h2
        style={{
          textAlign: 'center',
          width: '100%',
          height: '100px',
          left: '20%',
          top: '50px'
        }}
      >{almacen.error ? almacen.error : 'No hay elementos en almacen'}</h2>
        :
        <table className="highlight">
          <thead>
            <tr>
              <th style={fontSizeTitle}>Producto</th>
              <th style={fontSizeTitle}>Descripción</th>
              <th style={fontSizeTitle}>Categoría</th>
              <th style={fontSizeTitle}>Existencias</th>
              <th style={fontSizeTitle}>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {almacen.map((stock) => {
              let cat = catalog.find(e => stock.id_category === e.id_option)
              return (
                <tr key={stock.id_product}>

                  <td><img src={`img/${stock.foto}`} alt="" style={{ width: '4rem' }}></img></td>
                  <td style={fontSizeNormal}>{stock.description}</td>
                  <td style={fontSizeNormal}>{cat ? cat.name:''}</td>
                  <td style={fontSizeNormal}>{stock.stock}</td>
                  <td>
                    <div className="botones">
                      <Link to={`${pages[2].dropdown[1].link}/${stock.id_product}`}>
                        <button className="btn-floating btn-large waves-effect waves-light light-blue darken-1" style={sizeButton}>
                          <i className="material-icons" id="editar" style={sizeIcon}>edit</i>
                        </button>
                      </Link>
                      <button className="btn-floating btn-large waves-effect waves-light red darken-3" style={sizeButton}>
                        <i className="material-icons" style={sizeIcon} onClick={() => handleDelete(stock.id_product)}>delete</i>
                      </button>
                      <Link to={`${pages[2].dropdown[2].link}/${stock.id_product}`}>
                        <button className="waves-effect waves-light grey darken-1 btn-small"
                          id="proveedor" style={{width: '126px', fontSize: '10px'}}>
                          Ver proveedores</button>
                      </Link>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>}
    </div>
  )
}