import React, {useEffect, useState} from 'react';
import { getBanks, addBank, updateBank, deleteBank } from '../../services/Providers/banksService';
import Loader from '../../components/Loader'
import './index.css';
import { useHistory } from 'react-router-dom';

export default function ListadoBancos({match}) {
    const [bancos, setBancos] = useState([]);
    const [load, setLoad] = useState(false);
    const [nombre, setNombre] = useState('');
    const [cuenta, setCuenta] = useState('');
    const [llave, setLlave] = useState('');
    const [edit, setEdit] = useState({
        edit: false,
        id: null
    });
    let history = useHistory();
        useEffect(()=>{
            document.title= 'Listado De Bancos';
        }, []);
        useEffect(()=> {
            getBanks(match.params.id)
            .then(res => {
                setBancos(res);
                setLoad(true);
            })
        }, [match.params.id, load]);

        const handleChange = (e) => {
            switch (e.target.name) {
                case 'nombre':
                    setNombre(e.target.value)
                    break;
                    case 'cuenta':
                    setCuenta(e.target.value)
                    break;
                    case 'llave':
                    setLlave(e.target.value)
                    break;
                default:
                    break;
            }

        }

        const onEdit = (id, {name, bank_account, bank_key }) => {
            setEdit({
                edit: true,
                id: id
            })
            setNombre(name);
            setCuenta(bank_account);
            setLlave(bank_key);
        }

        const handleClose = () =>{
            setEdit({
                edit: false,
                id: null
            })
            setNombre('');
            setCuenta('');
            setLlave('');
        }

        const handleDelete = (id) => {
            deleteBank(match.params.id, id)
            .then(res=>{setLoad(false)
                setNombre('');
                setCuenta('');
                setLlave('');
            })
        }

        const handleSubmit = (e) =>{ 
            e.preventDefault();
           if(!edit.edit){
            addBank(match.params.id,
                {
                    name: nombre,
                    bankAccount: cuenta,
                    bankKey: llave
                })
            .then(res=>{setLoad(false)
            setNombre('');
            setCuenta('');
            setLlave('');
           } );
           }
           else {
               updateBank(match.params.id, edit.id,
                {
                    name: nombre,
                    bankKeyAccount: cuenta,
                    bankKey: llave
                }).then(res=>{
                setLoad(false);
                setEdit({
                    edit: false,
                    id: null
                }); 
            setNombre('');
            setCuenta('');
            setLlave('');
            }
            )
           }
        }

        if(!load) {
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
                        <input id="first_name" type="text" placeholder="Nombre del banco"
                         name="nombre" value={nombre} 
                        onChange={handleChange} className="validate" required/>
                    </div>
                    <div className="col s6">
                        <input id="textarea1" type="number" name="cuenta" value={cuenta} 
                        onChange={handleChange} className="validate" required/>
                        <label htmlFor="textarea1">Cuenta Banco</label>
                    </div>

                    <div className="col s6">
                        <input id="textarea1" type="number" name="llave" value={llave} 
                        onChange={handleChange} className="validate" required/>
                        <label htmlFor="textarea1">Llave Banco</label>
                    </div>
                    </div>
                    <div className="buttons">
                <button className="waves-effect waves-light btn-small">Guardar</button>
            </div>
            </form>
            {edit.edit && <button className="waves-effect waves-light btn-small red"
            onClick={handleClose}>Cancelar</button>}
            {bancos.length===0 ? <div style={{
               paddingTop: '3em',
               textAlign: 'center'
            }}><h2>No hay bancos</h2></div> :<table className="col s12">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cuenta de banco</th>
                        <th>Llave Banco</th>
                        <th>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {bancos.map(banco=>{
                        return (
                            <tr key={banco.id_bank}>
                        <td>{banco.name}</td>
                        <td>{banco.bank_account}</td>
                        <td>{banco.bank_key}</td>
                        <td>
                            <div className="botones">
                        <button className="btn-floating btn-large waves-effect waves-light light-blue darken-1"
                    onClick={() => onEdit(banco.id_bank, {
                        name: banco.name,
                        bank_account: banco.bank_account,
                        bank_key: banco.bank_key
                    })}>
                    <i className="material-icons">edit</i>
                    </button>
            <button className="btn-floating btn-large waves-effect waves-light red darken-3" 
            onClick={() => handleDelete(banco.id_bank)}>
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
