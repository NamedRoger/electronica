import React, {useEffect, useState} from "react";

export default function Form({match}) {

  const [datos, setDatos] = useState({
    nombre: '',
    rfc: '',
    razon: '',
    telefono: '',
    celular: '',
    email: '',
    paquete: '',
    direccion: '',
    ciudad: '',
    estado: '',
    pais: '',
    cp: ''
  });
    useEffect(()=>{
      document.title= 'Añadir Proveedores';
      if(match.params.id){
        setDatos({
          nombre: 'Alvin',
    rfc: 'sadsda',
    razon: 'sadsad',
    telefono: 'sadasd',
    celular: '35454354',
    email: 'dasdas@gmail.com',
    paquete: '43232',
    direccion: 'dsfds  dfdsfsdf',
    ciudad: 'Monterrey',
    estado: 'Nuevo Leon',
    pais: 'Mexico',
    cp: '66423'
        });
      }
  }, [match.params.id]);

  const handleChange = (e) =>{
    switch (e.target.name) {
      case 'nombre':
        setDatos({
          ...datos,
          nombre: e.target.value
        });
        break;
        case 'rfc':
        setDatos({
          ...datos,
          rfc: e.target.value
        });
        break;
        case 'razon':
        setDatos({
          ...datos,
          razon: e.target.value
        });
        break;
        case 'telefono':
        setDatos({
          ...datos,
          telefono: e.target.value
        });
        break;
        case 'celular':
        setDatos({
          ...datos,
          celular: e.target.value
        });
        break;
        case 'email':
        setDatos({
          ...datos,
          email: e.target.value
        });
        break;
        case 'paquete':
        setDatos({
          ...datos,
          paquete: e.target.value
        });
        break;
        case 'direccion':
        setDatos({
          ...datos,
          direccion: e.target.value
        });
        break;
        case 'ciudad':
        setDatos({
          ...datos,
          ciudad: e.target.value
        });
        break;
        case 'estado':
        setDatos({
          ...datos,
          estado: e.target.value
        });
        break;
        case 'pais':
        setDatos({
          ...datos,
          pais: e.target.value
        });
        break;
        case 'cp':
        setDatos({
          ...datos,
          cp: e.target.value
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datos);
  }
  return (
    <div>
      <section className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input id="first_name" type="text" className="validate" name="nombre" onChange={handleChange} value={datos.nombre}/>
              <label htmlfor="first_name">Nombre: </label>
            </div>
            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" name="rfc" onChange={handleChange} value={datos.rfc}/>
              <label htmlfor="textarea1">RFC</label>
            </div>
            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" name="razon" onChange={handleChange} value={datos.razon}/>
              <label htmlfor="textarea1">Razon Social</label>
            </div>
            <div className="input-field col s6">
              <input id="textarea1" type="tel" className="materialize-textarea" name="telefono" onChange={handleChange} value={datos.telefono}/>
              <label htmlfor="textarea1">Teléfono</label>
            </div>
            <div className="input-field col s6">
              <input id="textarea1" type="tel" className="materialize-textarea" name="celular" onChange={handleChange} value={datos.celular}/>
              <label htmlfor="textarea1">Celular</label>
            </div>
            <div className="input-field col s6">
              <input id="email" type="email" className="validate" name="email" onChange={handleChange} value={datos.email}/>
              <label htmlfor="email">Email</label>
            </div>
            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" name="paquete" onChange={handleChange} value={datos.paquete}/>
              <label htmlfor="textarea1">Paquete</label>
            </div>
            <div className="input-field col s12">
              <input id="textarea1" type="text" className="materialize-textarea" name="direccion" onChange={handleChange} value={datos.direccion}/>
              <label htmlfor="textarea1">Dirección</label>
            </div>

            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" name="ciudad" onChange={handleChange} value={datos.ciudad}/>
              <label htmlfor="textarea1">Cuidad</label>
            </div>

            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" name="estado" onChange={handleChange} value={datos.estado}/>
              <label htmlfor="textarea1">Estado</label>
            </div>

            <div className="input-field col s6">
              <input id="textarea1" type="text" className="materialize-textarea" name="pais" onChange={handleChange} value={datos.pais}/>
              <label htmlfor="textarea1">País</label>
            </div>

            <div className="input-field col s6">
              <input
                id="textarea1"
                type="text"
                className="materialize-textarea"
                name="cp"
                onChange={handleChange}
                value={datos.cp}
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
