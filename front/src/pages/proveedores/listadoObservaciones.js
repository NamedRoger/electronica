import React, {useEffect} from 'react';

export default function ListadoObservaciones() {
        useEffect(()=>{
            document.title= 'Listado Observaciones';
        }, []);
    return (
        <div>
            <section className="container">
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea" ></textarea>
                        <label htmlfor="textarea1">Descripción</label>
                    </div>
                </div>
            </form>
            <div className="buttons">
                <button className="waves-effect waves-light btn-small green">Guardar</button>
                <button className="waves-effect waves-light btn-small blue">Editar</button>
                <button className="waves-effect waves-light btn-small red">Eliminar</button>
            </div>
            <table className="highlight">
                <thead>
                    <tr>
                        <th>Descripción Nota: </th>
                        <th>Fecha: </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lacus sed est ultricies
                            ullamcorper. Integer eleifend sapien in massa pulvinar sollicitudin. </td>
                        <td>2/02/2021</td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lacus sed est ultricies
                            ullamcorper. Integer eleifend sapien in massa pulvinar sollicitudin. </td>
                        <td>2/02/2021</td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in lacus sed est ultricies
                            ullamcorper. Integer eleifend sapien in massa pulvinar sollicitudin. </td>
                        <td>2/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </div>

    </section>
        </div>
    )
}
