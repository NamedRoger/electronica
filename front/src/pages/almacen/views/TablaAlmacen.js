import React from 'react';
import { pages } from '../../../helpers/pages';

export default function TablaProveedores() {

  const handleOpen = (e)=>{
    console.log(e)
    switch (e.target.id) {
      case 'editar':
        window.open(pages[2].dropdown[1].link, null, "width=800,height=600,left=300");
        break;
        case 'proveedor':
          window.open(pages[2].dropdown[2].link, null, "width=800,height=600,left=300");
        break;
      default:
        break;
    }
  }
    return (
        <table className="highlight">
        <thead>
          <tr>
              <th>Descripción</th>
              <th>Categoría</th>
              <th>Existencias</th>
              <th>Foto</th>
              <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Domestico</td>
            <td>2324838</td>
            <td>Fotoooo
            </td>
            <td>
                <div className="botones">
            <button className="btn-floating btn-large waves-effect waves-light light-blue darken-1"
             onClick={handleOpen}>
                    <i className="material-icons" id="editar">edit</i>
                    </button>
            <button className="btn-floating btn-large waves-effect waves-light red darken-3">
                    <i className="material-icons">delete</i>
                    </button>
            <button className="waves-effect waves-light grey darken-1 btn-small" 
              onClick={handleOpen} id="proveedor">Ver proveedores</button>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    )
}