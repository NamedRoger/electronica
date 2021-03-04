import React, { useEffect, useState } from 'react';
import './index.css';
import { getNotes, addNote, updateNote, deleteNote } from '../../services/Providers/notesService';
import Loader from '../../components/Loader';
import { useHistory } from 'react-router-dom';


export default function ListadoNotas({match}) {
    const [notas, setNotas] = useState([]);
    const [load, setLoad] = useState(false);
    const [descripcion, setDescripcion] = useState('');
    const [edit, setEdit] = useState({
        edit: false,
        id: null
    });
    let history = useHistory();
    useEffect(()=>{
        document.title= 'Notas';
    }, []);
    useEffect(()=>{
        getNotes(match.params.id)
       .then(res=>{
           setNotas(res)
           setLoad(true)
    })
    },[match.params.id, load]);

    const handleChange = (e) => {
        setDescripcion(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!edit.edit) {
            addNote(match.params.id, {
                description: descripcion
            }).then(() => {setLoad(false)
                setDescripcion('');
            });
        }
        else {
            updateNote(match.params.id, edit.id, {
                description: descripcion
            }).then(()=>{setLoad(false);
                setEdit({
                    edit: false,
                    id: null
                });
                setDescripcion('');
            })
        }
    }
    const handleEdit = (id, {description}) => {
        setEdit({
            edit: true,
            id
        })
        setDescripcion(description)
    }

    const handleDelete = (id) => {
        deleteNote(match.params.id, id)
        .then(()=>{
            setLoad(false);
            setDescripcion('');
        })
    }

    const handleClose = () => {
        setEdit({
            edit: false,
            id: null
        });
        setDescripcion('');
    }

      if(!load){
          return <Loader />
      }
    return (
        <div>
            <button type="button" 
              className="btn-floating btn-large waves-effect waves-light red left" 
              style={{ display: 'block', margin: '0 auto' }}
              onClick={() => {history.push('/proveedores')}}>
                <i className="material-icons">arrow_back</i>
            </button>
            <section className="container">
        <div className="row">
            <form className="col s12" onSubmit={handleSubmit}>
                <div className="row">
                    {edit.edit && <strong>{`ID de la Nota: ${edit.id}`}</strong>}
                    <div className="input-field col s12">
                        <textarea id="textarea1"
                        onChange={handleChange} 
                        placeholder="Descripción"
                         className="materialize-textarea" value={descripcion}
                         required></textarea>
                    </div>
                </div>
                <div className="buttons">
                <button className="waves-effect waves-light btn-small green">Guardar</button>
            </div>
            </form>
            {edit.edit && <button className="waves-effect waves-light btn-small red right"
            onClick={handleClose}>Cancelar</button>}
            {notas.length===0 ? <div style={{
               paddingTop: '3em',
               textAlign: 'center'
            }}><h2>No hay notas</h2></div> : <table className="highlight">
                <thead>
                    <tr>
                        <th>Descripción Nota: </th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {notas.map(nota=>{
                        return(
                            <tr key={nota.id_note}>
                        <td>{nota.description}</td>
                        <td>
                        <div className="botones">
                        <button className="btn-floating btn-large waves-effect waves-light light-blue darken-1">
                    <i className="material-icons" id="edit"
                     onClick={() => handleEdit(nota.id_note, {description: nota.description})}>edit</i>
                    </button>
            <button className="btn-floating btn-large waves-effect waves-light red darken-3">
                    <i className="material-icons" id="delete" 
                    onClick={() => handleDelete(nota.id_note)}>delete</i>
                    </button>
                    </div>
                        </td>
                    </tr>
                        )                        
                    })}
                </tbody>
            </table>}
        </div>

    </section>
        </div>
    )
}
