import React, { useEffect } from "react";

export default function Form() {
  useEffect(() => {
    document.title = 'Añadir Clientes';
  }, []);

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
                type="number"
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
