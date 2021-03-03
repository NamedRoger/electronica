import React, { useEffect, useState } from 'react';
import { pages } from '../../../helpers/pages';
import { getStocks, deleteStockById } from '../../../services/Stock/getStock';
import { getOptionsCatalgos } from '../../../services/catalogs/catalogsOptionsService';
import Loader from '../../../components/Loader';

export default function TablaProveedores() {
  const [almacen, setAlmacen] = useState([]);
  const [load, setLoad] = useState(false);
  const [catalog, setCatalog] = useState([]);

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

  const handleEdit = (id) => {
    window.open(`${pages[2].dropdown[1].link}/${id}`, null, "width=800,height=600,left=300");
  }

  const handleWatchProviders = (id) => {
    window.open(`${pages[2].dropdown[2].link}/${id}`, null, "width=800,height=600,left=300");
  }

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
      {almacen.length === 0 ? <h2
        style={{
          textAlign: 'center',
          width: '100%',
          height: '100px',
          left: '20%',
          top: '50px'
        }}
      >No hay elementos en almacen</h2> :
        <table className="highlight">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Existencias</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {almacen.map((stock) => {
              let cat = catalog.find(e => stock.id_category === e.id_option)
              return (
                <tr key={stock.id_product}>
                  
                  <td><img src={`img/${stock.foto}`} alt="" style={{width:'4rem'}}></img></td>
                  <td>{stock.description}</td>
                  <td>{cat.name}</td>
                  <td>{stock.stock}</td>
                  <td>
                    <div className="botones">
                      <button className="btn-floating btn-large waves-effect waves-light light-blue darken-1"
                        onClick={() => handleEdit(stock.id_product)}>
                        <i className="material-icons" id="editar">edit</i>
                      </button>
                      <button className="btn-floating btn-large waves-effect waves-light red darken-3">
                        <i className="material-icons" onClick={() => handleDelete(stock.id_product)}>delete</i>
                      </button>
                      <button className="waves-effect waves-light grey darken-1 btn-small"
                        onClick={() => handleWatchProviders(stock.id_product)} id="proveedor">Ver proveedores</button>
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