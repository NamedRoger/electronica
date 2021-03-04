import React, { useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import { addObservation, 
    deleteObservation, 
    getObservations, 
    updateObservation } from '../../services/Providers/observationsService';
import { useHistory } from 'react-router-dom';

export default function ListadoObservaciones({ match }) {
    const [observations, setObservations] = useState([]);
    const [description, setDescription] = useState('');
    const [load, setLoad] = useState(false);
    const [edit, setEdit] = useState({
        edit: false,
        id: null
    });
    let history = useHistory();
    
    useEffect(() => {
        document.title = 'Listado Observaciones';

    }, []);

    useEffect(() => {
        getObservations(match.params.id).then(res => {
            setObservations(res);
            setLoad(true);
        });
    }, [match.params.id, load]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res;
        try {
            if (!edit.edit) {
                console.log();
                console.log(description);
                res = await addObservation(match.params.id, { description: description });
            } else {
                res = await updateObservation(match.params.id, edit.id, { description });
            }

            console.log(res);

            setDescription('');
            setEdit({
                edit: false,
                id: null
            });
            setLoad(false);
        } catch (e) {
            alert(e);
        }
    }

    const handleDelete = async (idObservation) => {
        try {
            const res = await deleteObservation(match.params.id, idObservation);
            if (res.status !== 204) throw "Ocurrió un error";
            setLoad(false);
        } catch (e) {
            alert('Ocurrió un error');
        }

        setDescription('');
        setEdit({
            edit: false,
            id: null
        });
    }

    const onEdit = (id, { description }) => {
        setEdit({
            edit: true,
            id
        });

        setDescription(description);
    }


    const handleClose = () => {
        setEdit({
            edit: false,
            id: null
        });
        setDescription('');
    }

    if (!load) {
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
                            {edit.edit && <div className="col s6">
                                <strong>{`ID del banco: ${edit.id}`}</strong>
                            </div>}
                            <div className="input-field col s12">
                                <input id="first_name" type="text" placeholder="description"
                                    name="description" value={description}
                                    onChange={(e) => { setDescription(e.target.value) }} className="validate" required />
                            </div>

                        </div>
                        <div className="buttons">
                            <button className="waves-effect waves-light btn-small">Guardar</button>
                        </div>
                    </form>
                    {edit.edit && <button className="waves-effect waves-light btn-small red"
                        onClick={handleClose}>Cancelar</button>}
                    {observations.length === 0 ? <div style={{
                        paddingTop: '3em',
                        textAlign: 'center'
                    }}><h2>No hay observaciones</h2></div> : <table className="col s12">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Cuenta de banco</th>
                                    <th>Llave Banco</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>

                            <tbody>
                                {observations.map(obsertvation => {
                                    return (
                                        <tr key={obsertvation.id_observation}>
                                            <td>{obsertvation.description}</td>
                                            <td>
                                                <div className="botones">
                                                    <button className="btn-floating btn-large waves-effect waves-light light-blue darken-1"
                                                        onClick={() => onEdit(obsertvation.id_observation, {
                                                            description: obsertvation.description
                                                        })}>
                                                        <i className="material-icons">edit</i>
                                                    </button>
                                                    <button className="btn-floating btn-large waves-effect waves-light red darken-3"
                                                        onClick={() => handleDelete(obsertvation.id_observation)}>
                                                        <i className="material-icons">delete</i>
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
