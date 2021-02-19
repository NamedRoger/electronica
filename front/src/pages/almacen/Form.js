import React, { useEffect } from "react";

export default function Form() {
    useEffect(() => {
        document.title = 'Añadir Proveedores';
    }, []);

    const handleClose = () => {
        window.close();
    }
    return (
        <div>
            <section className="container">
                <form>
                    <h2 className="center-align">Insertar Almacén</h2>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="number" className="validate" name="clave" />
                            <label htmlfor="first_name">Clave Alterna:</label>
                        </div>
                        <div className="col s6">
                            <label>Categoria</label>
                            <select class="browser-default">
                                <option value="" disabled selected>Seleccionar...</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" name="descripcion">

                            </textarea>
                            <label htmlfor="textarea1">Descripción:</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" name="caracteristicas">
                            </textarea>
                            <label htmlfor="textarea1">Caracteristicas:</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="textarea1" type="number" className="materialize-textarea" name="existencias" />
                            <label htmlfor="textarea1">Existencias por pieza:</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="textarea1" type="number" className="validate" name="vendidosS" />
                            <label htmlfor="textarea1">Vendidos sin surtir</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="textarea1" type="number" className="materialize-textarea" name="faltante" />
                            <label htmlfor="textarea1">Faltante por piezas:</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="textarea1" type="number" className="materialize-textarea" name="minimo" />
                            <label htmlfor="textarea1">Mínimo en pedir:</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="textarea1" type="number" className="materialize-textarea" name="maximo" />
                            <label htmlfor="textarea1">Máximo en pedir:</label>
                        </div>

                        <div className="input-field col s6">
                            <input id="textarea1" type="number" className="materialize-textarea" name="unidadVenta" />
                            <label htmlfor="textarea1">Unidad de venta:</label>
                        </div>

                        <div className="input-field col s12">
                            <input id="textarea1" type="text" className="materialize-textarea" name="ubicacion" />
                            <label htmlfor="textarea1">Ubicacion:</label>
                        </div>

                        <div className="file-field input-field col s12">
                            <div class="btn">
                                <span>Archivo</span>
                                <input type="file" />
                            </div>
                            <div class="file-path-wrapper">
                                <input class="file-path validate" id="textarea1" type="text" placeholder="Selecciona una foto" />
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
