import React, { useEffect, useState } from "react";
import { getStockById, addStock, updateStockById } from '../../services/Stock/getStock';
import { getOptionsCatalgos } from '../../services/catalogs/catalogsOptionsService';

export default function Form({ match }) {
    const [datos, setDatos] = useState({
        alternative_key: '',
        web: false,
        description: '',
        id_category: null,
        caracteristics: '',
        stock: '',
        minimun_order: '',
        maximum_order: '',
        sales_unit: '',
        foto: null,
        ubication: '',
        price: '',
        sat_key: '',
        unit_sat: ''
    }
    );
    const [category, setCategory] = useState([]);
    useEffect(() => {
        document.title = 'Añadir Proveedores';
    }, []);

    useEffect(()=> {
        getOptionsCatalgos('CAT_CATEGPRODU')
        .then(setCategory);
    }, []);
    useEffect(()=>{
        if(match.params.id){
            console.log(match.params.id)
            getStockById(match.params.id)
            .then(res=>{
                const {alternative_key, web, description, id_category, characteristics, stock, minimun_order,
                    maximum_order, sales_unit, foto, ubication, price, sat_key, unit_sat} = res[0];
                setDatos(
                    {alternative_key, web, description, id_category, caracteristics:characteristics, stock, minimun_order,
                        maximum_order, sales_unit, foto, ubication, price, sat_key, unit_sat} 
                );
            })
        }
    }, [match.params.id]);
    const handleClose = () => {
        window.close();
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'web':
                setDatos({
                    ...datos,
                    web: e.target.checked
                });
                break;
                case 'clave':
                setDatos({
                    ...datos,
                    alternative_key: e.target.value
                });
                break;
                case 'categoria':
                setDatos({
                    ...datos,
                    id_category: e.target.value
                });
                break;
                case 'descripcion':
                setDatos({
                    ...datos,
                    description: e.target.value
                });
                break;
                case 'caracteristicas':
                setDatos({
                    ...datos,
                    caracteristics: e.target.value
                });
                break;
                case 'precio':
                setDatos({
                    ...datos,
                    price: e.target.value
                });
                break;
                case 'existencias':
                setDatos({
                    ...datos,
                    stock: e.target.value
                });
                break;
                case 'claveSat':
                setDatos({
                    ...datos,
                    sat_key: e.target.value
                });
                break;
                case 'unidadSat':
                setDatos({
                    ...datos,
                    unit_sat: e.target.value
                });
                break;
                case 'minimo':
                setDatos({
                    ...datos,
                    minimun_order: e.target.value
                });
                break;
                case 'maximo':
                setDatos({
                    ...datos,
                    maximum_order: e.target.value
                });
                break;
                case 'unidadVenta':
                setDatos({
                    ...datos,
                    sales_unit: e.target.value
                });
                break;
                case 'ubicacion':
                setDatos({
                    ...datos,
                    ubication: e.target.value
                });
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(match.params.id){
            updateStockById(match.params.id, datos)
            .then(res=>{
                if(res.status===204){
                    window.close();
                }
            });
        }
        else {
            addStock(datos)
        .then(res=>{
            if(res.status===201){
                window.close();
            }
        })
        }
    }
    return (
        <div>
            <section className="container">
                <form onSubmit={handleSubmit}>
                    <h2 className="center-align">{match.params.id ? 'Actualizar Almacén' : 'Insertar Almacén'}</h2>
                    <div className="row">
                        <div className=" col s12">
                            <label className="center-align">
                                <input className="filled-in" type="checkbox" name="web" 
                                onChange={handleChange} value={!datos.web}/>
                                <span>Web</span>
                            </label>
                        </div>
                        <div className="input-field col s6">
                            <input id="first_name" placeholder="Clave Alterna"
                                type="number" className="validate" name="clave"
                                onChange={handleChange} value={datos.alternative_key} required/>
                        </div>
                        <div className="col s6">
                            <label>Categoria</label>
                            <select name="categoria" className="browser-default"
                                defaultValue={datos.id_category} onChange={handleChange} required>
                                <option disabled selected>Seleccionar...</option>
                                {category.map(item=><option key={item.id_option} 
                                value={item.id_option}>{item.name}</option>)}
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" placeholder="Descripción"
                                className="materialize-textarea" name="descripcion"
                                onChange={handleChange} value={datos.description} required>
                            </textarea>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" placeholder="Características"
                                className="materialize-textarea" name="caracteristicas"
                                onChange={handleChange} value={datos.caracteristics} required>
                            </textarea>
                        </div>
                        <div className="input-field col s4">
                            <input id="textarea1" type="number" placeholder="Precio"
                                className="materialize-textarea" name="precio"
                                onChange={handleChange} value={datos.price} required/>
                        </div>
                        <div className="input-field col s4">
                            <input id="textarea1" type="number" placeholder="Existencias por pieza"
                                className="materialize-textarea" name="existencias"
                                onChange={handleChange} value={datos.stock} required/>
                        </div>
                        <div className="input-field col s4">
                            <input id="textarea1" type="text" placeholder="Clave del SAT"
                                className="validate" name="claveSat"
                                onChange={handleChange} value={datos.sat_key} required/>
                        </div>
                        <div className="input-field col s6">
                            <input id="textarea1" type="text" placeholder="Unidad del SAT"
                                className="materialize-textarea" name="unidadSat"
                                onChange={handleChange} value={datos.unit_sat} required/>
                        </div>
                        <div className="input-field col s6">
                            <input id="textarea1" type="number" placeholder="Mínimo en pedir"
                                className="materialize-textarea" name="minimo"
                                onChange={handleChange} value={datos.minimun_order} required/>
                        </div>

                        <div className="input-field col s6">
                            <input id="textarea1" type="number" placeholder="Máximo en pedir"
                                className="materialize-textarea" name="maximo"
                                onChange={handleChange} value={datos.maximum_order} required/>
                        </div>

                        <div className="input-field col s6">
                            <input id="textarea1" type="number" placeholder="Unidad de venta"
                                className="materialize-textarea" name="unidadVenta"
                                onChange={handleChange} value={datos.sales_unit} required/>
                        </div>

                        <div className="input-field col s12">
                            <input id="textarea1" type="text" placeholder="Ubicación"
                                className="materialize-textarea" name="ubicacion"
                                onChange={handleChange} value={datos.ubication} required/>
                        </div>

                        <div className="file-field input-field col s12">
                            <div className="btn">
                                <span>Archivo</span>
                                <input type="file" name="foto" />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" id="textarea1" type="text" placeholder="Selecciona una foto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="buttons row">
                        <div className="col s6">
                            <button type="submit" className="waves-effect waves-light btn-small" style={{ display: 'block', margin: '0 auto' }}>
                                Guardar
              </button>
                        </div>
                        <div className="col s6">
                            <button className="waves-effect waves-light btn-small red"
                                style={{ display: 'block', margin: '0 auto' }}
                                onClick={handleClose}>
                                Salir
            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}
