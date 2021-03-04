import React, { useEffect, useState } from "react";
import { addProvider } from '../../services/Providers/getProviders';
import { getProviderById, updateProviderById } from '../../services/Providers/getProviderById';
import { useHistory } from 'react-router-dom';
 
export default function FormProveedor({ match }) {
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
  let history = useHistory();
  useEffect(() => {
    document.title = 'Añadir Proveedor';
    const editar = async () => {
      if (match.params.id) {
        const prov = await getProviderById(match.params.id);
        const { nick_name,
          rfc,
          razon_social,
          tel,
          cel,
          email,
          parcel,
          address,
          city,
          state,
          country,
          zip } = prov;
        setDatos({
          nombre: nick_name,
          rfc,
          razon: razon_social,
          telefono: tel,
          celular: cel,
          email,
          paquete: parcel,
          direccion: address,
          ciudad: city,
          estado: state,
          pais: country,
          cp: zip
        });
      }
    }
    editar();
  }, [match.params.id]);

  const handleChange = (e) => {
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
    const {nombre,
      rfc,
      razon,
      telefono,
      celular,
      email,
      paquete,
      direccion,
      ciudad,
      estado,
      pais,
      cp} = datos;
    if(match.params.id){
      updateProviderById(match.params.id, { nickName: nombre,
        rfc,
        razonSocial: razon,
        tel: telefono,
        cel: celular,
        email,
        parcel: paquete,
        address: direccion,
        city: ciudad,
        state: estado,
        country: pais,
        zip: cp
       })
       .then(res=>{
         console.log(res);
        if(res.status===204){
          window.close();
        }
        else{
          alert('Error');
        }
       }
       ).catch(e=>console.log(e));
    }
    else{
      addProvider({ nickName: nombre,
        rfc,
        razonSocial: razon,
        tel: telefono,
        cel: celular,
        email,
        parcel: paquete,
        address: direccion,
        city: ciudad,
        state: estado,
        country: pais,
        zip: cp
       })
       .then(res=>{
        if(res.status===204){

          window.close();
        }
        else{
          alert('Error');
        }
       }
       );
    }
  }
  return (
    <div>
      <button type="button" 
              className="btn-floating btn-large waves-effect waves-light red left" 
              style={{ display: 'block', margin: '0 auto' }}
              onClick={() => {history.push('/almacen')}}>
                <i className="material-icons">arrow_back</i>
            </button>
      <section className="container">
        <form>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Nombre:" id="first_name" type="text" className="validate" name="nombre" />
            </div>
            <div className="input-field col s6">
              <input placeholder="Razón Social:" id="textarea1" type="text" className="materialize-textarea" name="razon" />
            </div>
            <div className="input-field col s6">
              <input placeholder="Unidad de ventas:" id="textarea1" type="tel" className="materialize-textarea" name="telefono" />
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
