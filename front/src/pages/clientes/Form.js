import React, { useEffect, useState } from "react";
import { addCustomer,getCustomer, updateCustomer } from '../../services/customers/customersService';
import {getOptionsCatalgos } from '../../services/catalogs/catalogsOptionsService';
import { useHistory } from 'react-router-dom';

export default function Form({ match }) {
  const [categorias,setCategorias] = useState([]);
  const [precios, setPrecios] = useState([]);
  let history = useHistory();

  const [datos, setdatos] = useState({
    id_customer: 0,
    register_key: '',
    id_category: 0,
    representative: '',
    tel_customer: '',
    cel_customer: '',
    email: '',
    note: '',
    address: '',
    city: '',
    state: '',
    country: '',
    razon_social: '',
    rfc: '',
    bank: '',
    bank_account:'',
    bank_key: '',
    price_number: 0,
    business: '',
    tel_business: '',
    cel_business: ''
  });

  const { register_key,
    address,
    bank, 
    bank_key,
    bank_account,
    business,
    cel_business,
    cel_customer,
    city,
    country,
    email,
    id_category,
    id_customer,
    note,
    price_number,
    razon_social,
    representative,
    rfc,
    state,
    tel_business,
    tel_customer
  } = datos;

  useEffect(() => {
    document.title = 'Añadir Clientes';
    const editar = async () => {
      if (match.params.id) {
        const cliente = await getCustomer(match.params.id);
        const {
          id_customer,
          register_key,
          id_category,
          representative,
          tel_customer,
          cel_customer,
          email,
          note,
          address,
          city,
          state,
          country,
          razon_social,
          rfc,
          bank,
          bank_account,
          bank_key,
          price_number,
          business,
          tel_business,
          cel_business
        } = cliente;

        setdatos({
          id_customer: id_customer,
          register_key: register_key,
          id_category: id_category,
          representative: representative,
          tel_customer: tel_customer,
          cel_customer: cel_customer,
          email: email,
          note: note,
          address: address,
          city: city,
          state: state,
          country: country,
          razon_social: razon_social,
          rfc: rfc,
          bank: bank,
          bank_key: bank_key,
          bank_account:bank_account,
          price_number: price_number,
          business: business,
          tel_business: tel_business,
          cel_business: cel_business,
        });
      }
    }
    editar();

    const getPrices = async () => {
      const  res = await getOptionsCatalgos("CAT_PREC");
      setPrecios(res);
    }

    const getCategories = async () => {
      const categories = await getOptionsCatalgos("CAT_CLIE");
      setCategorias(categories);
    }
  
    getPrices();
    getCategories();
    
  }, [match.params.id]);
  

  
  const handleChange = (e) => {
    const key = e.target.name;
    setdatos({
      ...datos,
      [key]:e.target.value
    });

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (match.params.id) {
      updateCustomer(match.params.id, {
        id_category,
        address,
        bank,
        bank_key,
        bank_account,
        business,
        cel_business,
        cel_customer,
        city,
        country,
        email,
        note,
        representative,
        price_number,
        razon_social,
        register_key,
        rfc,
        state,
        tel_business,
        tel_customer        
      })
        .then(res => {
          console.log(res);
          if (res.status === 204) {
            history.push('/clientes');
          }
        }
        ).catch(e => alert(`Error: ${e}`));
    }
    else {
      addCustomer({
        id_category,
        address,
        bank,
        bank_key,
        bank_account,
        business,
        cel_business,
        cel_customer,
        city,
        country,
        email,
        note,
        representative,
        price_number,
        razon_social,
        register_key,
        rfc,
        state,
        tel_business,
        tel_customer
      })
        .then(res => {
          if (res.status === 204) {
            window.close();
          }
        }
        ).catch(()=>alert(
          `Error de Registro\n
          Es posible que algunos de los campos que has introducido ya existan en la base de datos\n
          Información del error: HTTP STATUS 400 (Bad Request)`));
    }
  }

  return (
    <div>
      <button type="button" 
              className="btn-floating btn-large waves-effect waves-light red left" 
              style={{ display: 'block', margin: '0 auto' }}
              onClick={() => {history.push('/clientes')}}>
                <i className="material-icons">arrow_back</i>
            </button>
      <section className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input id="first_name" placeholder="Clave De Registro" value={register_key} onChange={handleChange} type="text" className="validate" name="register_key"/>
              <label htmlFor="first_name">Clave De Registro: </label>
            </div>
            <div className="input-field col s6">
              <select className="browser-default" defaultValue={0} name="id_category" value={id_category} onChange={handleChange}>
              <option value="0" defaultValue disabled selected>Category</option>
              {categorias.length===0 && categorias.map(c => <option value={c.id_option} key={c.id_option}>{c.name}</option>)}
              </select>
            </div>
            <div className="input-field col s6">
              <input id="txtRepresentante" type="text" name="representative" value={representative} onChange={handleChange} className="materialize-textarea" />
              <label htmlFor="txtRepresentante">Representante</label>
            </div>
            <div className="input-field col s6">
              <input id="txtTel" type="tel" name="tel_customer" value={tel_customer} onChange={handleChange} className="materialize-textarea" />
              <label htmlFor="txtTel">Teléfono</label>
            </div>
            <div className="input-field col s6">
              <input id="txtCelular" type="tel" name="cel_customer" value={cel_customer} onChange={handleChange} className="materialize-textarea" />
              <label htmlFor="txtCelular">Celular</label>
            </div>
            <div className="input-field col s6">
              <input id="email" type="email" name="email" value={email} onChange={handleChange} className="validate" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s6">
              <input id="txtNota" type="text" name="note" value={note} onChange={handleChange} className="materialize-textarea" />
              <label htmlFor="txtNota">Nota</label>
            </div>
            <div className="input-field col s12">
              <input id="txtDomicilio" type="text" name="address" value={address} onChange={handleChange} className="materialize-textarea" />
              <label htmlFor="txtDomicilio">Domicilio</label>
            </div>

            <div className="input-field col s6">
              <input id="txtCiudad" type="text" name="city" value={city} onChange={handleChange} className="materialize-textarea" />
              <label htmlFor="txtCiudad">Cuidad</label>
            </div>

            <div className="input-field col s6">
              <input id="txtEstado" type="text" name="state" value={state} onChange={handleChange} className="materialize-textarea" />
              <label htmlFor="txtEstado">Estado</label>
            </div>

            <div className="input-field col s6">
              <input id="txtPais" type="text" name="country" value={country} onChange={handleChange} className="materialize-textarea" />
              <label htmlFor="txtPais">País</label>
            </div>

            <div className="input-field col s6">
              <input
                id="txtRazonSocial"
                type="text"
                className="materialize-textarea"
                name="razon_social" value={razon_social} onChange={handleChange}
              />
              <label htmlFor="txtRazonSocial">Razon Social</label>
            </div>

            <div className="input-field col s6">
              <input id="txtRFC" type="text" name="rfc" value={rfc} onChange={handleChange} className="materialize-textarea" />
              <label htmlFor="txtRFC">RFC</label>
            </div>

            <div className="input-field col s6">
              <input id="txtBanco" type="text" name="bank" value={bank} onChange={handleChange} className="materialize-textarea" />
              <label htmlFor="txtBanco">Banco</label>
            </div>

            <div className="input-field col s6">
              <input id="txtCuentaBancaria" type="text" name="bank_account" value={bank_account} onChange={handleChange} className="materialize-textarea" />
              <label htmlFor="txtCuentaBancaria">Cuenta Bancaria</label>
            </div>

            <div className="input-field col s6">
              <input id="txtClaveInter" type="text" name="bank_key" value={bank_key} onChange={handleChange}   className="materialize-textarea" />
              <label htmlFor="txtClaveInter">Clave Interbancaria</label>
            </div>

            <div className="input-field col s12">
              <select className="browser-default" defaultValue={0} name="price_number" value={price_number} onChange={handleChange} >
                <option value="0" disabled selected>Número de precio</option>
                {precios.length===0 && precios.map(p => <option value={p.id_option} key={p.id_option}>{p.name}</option>)}
              </select>
            </div>

            <div className="input-field col s6">
              <input id="txtEmpresa" type="text" name="business" value={business} onChange={handleChange}  className="materialize-textarea" />
              <label htmlFor="txtEmpresa">Empresa</label>
            </div>

            <div className="input-field col s6">
              <input id="telEmpresa" type="text" name="tel_business" value={tel_business} onChange={handleChange} className="materialize-textarea" />
              <label htmlFor="telEmpresa">Teléfono Empresa</label>
            </div>

            <div className="input-field col s12">
              <input id="celEmpresa" type="text" name="cel_business" value={cel_business} onChange={handleChange} className="materialize-textarea" />
              <label htmlFor="celEmpresa">Celular Empresa</label>
            </div>

          </div>
          <div className="buttons row">
            <div className="col s6">
              <button type="submit" className="waves-effect waves-light btn-small" style={{ display: 'block', margin: '0 auto' }}>
                Guardar
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
