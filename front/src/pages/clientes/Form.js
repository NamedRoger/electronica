import React, { useEffect, useState } from "react";
import { addCustomer, añadirClientes, getCustomers, updateCustomer } from '../../services/customers/customersService';

export default function Form({ match }) {

  const [datos, setdatos] = useState({
    register_key: '',
    id_category: '',
    presentative: '',
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
    bank_key: '',
    price_number: '',
    business: '',
    tel_business: '',
    cel_business: ''
  });

  useEffect(() => {
    document.title = 'Añadir Clientes';
    const editar = async () => {
      if (match.params.id) {
        const cliente = await getCustomers(match.params.idCustomer);
        const {
          register_key,
          id_category,
          presentative,
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
          bank_key,
          price_number,
          business,
          tel_business,
          cel_business
        } = cliente;

        setdatos({
          ClaveRegistro: register_key,
          idCategoria: id_category,
          Representante: presentative,
          Telefono: tel_customer,
          Celular: cel_customer,
          Email: email,
          Nota: note,
          Domicilio: address,
          Ciudad: city,
          Estado: state,
          Pais: country,
          RazonSocial: razon_social,
          Rfc: rfc,
          Banco: bank,
          CuentaBancaria: bank_key,
          NumeroPrecio: price_number,
          Empresa: business,
          TelefonoEmpresa: tel_business,
          CelularEmpresa: cel_business
        });
      }
    }
    editar();
  }, [match.params.idCustomer]);

  const handleChange = (e) => {
    switch (e.target.register_key) {
      case 'ClaveRegistro':
        setdatos({
          ...datos,
          ClaveRegistro: e.target.value
        })
        break;

      case 'idCategoria':
        setdatos({
          ...datos,
          idCategoria: e.target.value
        })
        break;

      case 'Representante':
        setdatos({
          ...datos,
          Representante: e.target.value
        })
        break;

      case 'Telefono':
        setdatos({
          ...datos,
          Telefono: e.target.value
        })
        break;

      case 'Celular':
        setdatos({
          ...datos,
          Celular: e.target.value
        })
        break;

      case 'Email':
        setdatos({
          ...datos,
          Email: e.target.value
        })
        break;

      case 'Nota':
        setdatos({
          ...datos,
          Nota: e.target.value
        })
        break;

      case 'Domicilio':
        setdatos({
          ...datos,
          Domicilio: e.target.value
        })
        break;

      case 'Ciudad':
        setdatos({
          ...datos,
          Ciudad: e.target.value
        })
        break;

      case 'Estado':
        setdatos({
          ...datos,
          Estado: e.target.value
        })
        break;

      case 'Pais':
        setdatos({
          ...datos,
          Pais: e.target.value
        })
        break;

      case 'RazonSocial':
        setdatos({
          ...datos,
          RazonSocial: e.target.value
        })
        break;

      case 'Rfc':
        setdatos({
          ...datos,
          Rfc: e.target.value
        })
        break;

      case 'Banco':
        setdatos({
          ...datos,
          Banco: e.target.value
        })
        break;

      case 'CuentaBancaria':
        setdatos({
          ...datos,
          CuentaBancaria: e.target.value
        })
        break;

      case 'NumeroPrecio':
        setdatos({
          ...datos,
          NumeroPrecio: e.target.value
        })
        break;

      case 'Empresa':
        setdatos({
          ...datos,
          Empresa: e.target.value
        })
        break;

      case 'TelefonoEmpresa':
        setdatos({
          ...datos,
          TelefonoEmpresa: e.target.value
        })
        break;

      case 'CelularEmpresa':
        setdatos({
          ...datos,
          CelularEmpresa: e.target.value
        })
        break;

      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { ClaveRegistro,
      idCategoria,
      Representante,
      Telefono,
      Celular,
      Email,
      Nota,
      Domicilio,
      Ciudad,
      Estado,
      Pais,
      RazonSocial,
      Rfc,
      Banco,
      CuentaBancaria,
      NumeroPrecio,
      Empresa,
      TelefonoEmpresa,
      CelularEmpresa } = datos;
    if (match.params.idCustomer) {
      updateCustomer(match.params.idCustomer, {
        register_key,
        id_category,
        presentative,
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
        bank_key,
        price_number,
        business,
        tel_business,
        cel_business
      })
        .then(res => {
          console.log(res);
          if (res.status === 204) {
            window.close();
          }
          else {
            alert('Error');
          }
        }
        ).catch(e => console.log(e));
    }
    else {
      addCustomer({
        /* ClaveRegistro: register_key ,
           idCategoria: id_category,
           Representante: presentative,
           Telefono: tel_customer,
           Celular: cel_customer,
           Email : email,
           Nota: note,
           Domicilio: address,
           Ciudad: city,
           Estado: state,
           Pais: country,
           RazonSocial: razon_social,
           Rfc: rfc,
           Banco: bank,
           CuentaBancaria: bank_key,
           NumeroPrecio: price_number,
           Empresa : business,
           TelefonoEmpresa: tel_business,
           CelularEmpresa: cel_business*/
      })
        .then(res => {
          if (res.status === 204) {
            window.close();
          }
          else {
            alert('Error');
          }
        }
        );
    }
  }

  return (
    <div>
      <section className="container">
        <form>
          <div className="row">
            <div className="input-field col s12">
              <input id="first_name" type="text" className="validate" />
              <label htmlfor="first_name">Clave De Registro: </label>
            </div>
            <div className="input-field col s6">
              <select className="browser-default">
                <option value="" disabled selected>Categoría</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>
            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">Representante</label>
            </div>
            <div className="input-field col s6">
              <input id="textarea1" type="tel" className="materialize-textarea" />
              <label htmlfor="textarea1">Teléfono</label>
            </div>
            <div className="input-field col s6">
              <input id="textarea1" type="tel" className="materialize-textarea" />
              <label htmlfor="textarea1">Celular</label>
            </div>
            <div className="input-field col s6">
              <input id="email" type="email" className="validate" />
              <label htmlfor="email">Email</label>
            </div>
            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">Nota</label>
            </div>
            <div className="input-field col s12">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">Domicilio</label>
            </div>

            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">Cuidad</label>
            </div>

            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">Estado</label>
            </div>

            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">País</label>
            </div>

            <div className="input-field col s6">
              <input
                id="textarea1"
                type="text"
                className="materialize-textarea"
              />
              <label htmlfor="textarea1">Razon Social</label>
            </div>

            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">RFC</label>
            </div>

            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">Banco</label>
            </div>

            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">Cuenta Bancaria</label>
            </div>

            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">Clave Interbancaria</label>
            </div>

            <div className="input-field col s12">
              <select className="browser-default">
                <option value="" disabled selected>Número de precio</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </div>

            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">Empresa</label>
            </div>

            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">Teléfono Empresa</label>
            </div>

            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">Celular Empresa</label>
            </div>

            <div className="input-field col s6">
              <form action="#">
                <p>
                  <label>
                    <input type="checkbox" />
                    <span>Active</span>
                  </label>
                </p>
              </form>
            </div>

          </div>
          <div className="buttons row">
            <div className="col s6">
              <button type="submit" className="waves-effect waves-light btn-small" style={{ display: 'block', margin: '0 auto' }}>
                Guardar
              </button>
            </div>
            <div className="col s6">
              <button className="waves-effect waves-light btn-small red" style={{ display: 'block', margin: '0 auto' }}>
                Salir
            </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
