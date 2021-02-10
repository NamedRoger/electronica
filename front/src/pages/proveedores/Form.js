import React from "react";

export default function Form() {
  return (
    <div>
      <section className="container">
        <form>
          <div className="row">
            <div className="input-field col s12">
              <input id="first_name" type="text" className="validate" />
              <label htmlfor="first_name">Nombre: </label>
            </div>
            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">RFC</label>
            </div>
            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">Razon Social</label>
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
              <label htmlfor="textarea1">Paquete</label>
            </div>
            <div className="input-field col s12">
              <input id="textarea1" type="text" className="materialize-textarea" />
              <label htmlfor="textarea1">Dirección</label>
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
              <label htmlfor="textarea1">Código Postal</label>
            </div>
          </div>
          <div className="buttons row">
            <div className="col s6">
            <button type="submit" className="waves-effect waves-light btn-small" style={{display: 'block', margin: '0 auto'}}>
              Guardar
              </button>
            </div>
            <div className="col s6">
            <button className="waves-effect waves-light btn-small red" style={{display: 'block', margin: '0 auto'}}>
              Salir
            </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
