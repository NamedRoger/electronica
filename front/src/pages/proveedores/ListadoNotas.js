import React, { useEffect } from 'react';
import { pages } from '../../helpers/pages';
import './index.css';


export default function ListadoNotas() {
    useEffect(()=>{
        document.title= 'Notas';
    }, []);
    const handleClick = (e)=>{
        switch (e.target.id) {
            case 'edit':
                    window.open(pages[0].dropdown[2].link, null, "width=800,height=600,left=300");
                break;
                case 'delete':
                   alert('Delete');
                break;
            default:
                break;
        }
      }
    return (
        <div>
            <section className="container">
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea" ></textarea>
                        <label htmlfor="textarea1">Descripción</label>
                    </div>
                </div>
            </form>
            <div className="buttons">
                <button className="waves-effect waves-light btn-small green">Guardar</button>
            </div>
            <table className="highlight">
                <thead>
                    <tr>
                        <th>Descripción Nota: </th>
                        <th>Fecha: </th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lacus sed est ultricies
                            ullamcorper. Integer eleifend sapien in massa pulvinar sollicitudin. </td>
                        <td>2/02/2021</td>
                        <td>
                        <div className="botones">
                        <button className="btn-floating btn-large waves-effect waves-light light-blue darken-1">
                    <i className="material-icons" id="edit" onClick={handleClick}>edit</i>
                    </button>
            <button className="btn-floating btn-large waves-effect waves-light red darken-3">
                    <i className="material-icons" id="delete" onClick={handleClick}>delete</i>
                    </button>
                    </div>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

    </section>
        </div>
    )
}
