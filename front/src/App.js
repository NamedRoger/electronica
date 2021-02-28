import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigator from './components/Navigator';
import FormProveedor from './pages/proveedores/Form';
import ListadoBancos from './pages/proveedores/ListadoBancos';
import ListadoNotas from './pages/proveedores/ListadoNotas';
import Proveedores from './pages/proveedores/Proveedores';
import ListadoObservaciones from './pages/proveedores/listadoObservaciones';
import Almacen from './pages/almacen/Almacen';
import FormAlmacen from './pages/almacen/Form';
import Clientes from './pages/clientes/Clientes';
import FormCliente from './pages/clientes/Form';

import Home from './pages/Home';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigator />
        <main>
          <Switch>
            {/*Home*/}
            <Route exact path="/" component={Home} />
            {/*Proveedores*/}
            <Route exact path="/addproveedor" component={FormProveedor} />
            <Route exact path="/proveedores" component={Proveedores} />
            <Route exact path="/listadobancos/:id" component={ListadoBancos} />
            <Route exact path="/listadonotas/:id" component={ListadoNotas} />
            <Route exact path="/edit/:id" component={FormProveedor} />
            <Route exact path="/obvservaciones/:id" component={ListadoObservaciones} />
            {/*Clientes*/}
            <Route exact path="/clientes" component={Clientes} />
            <Route exact path="/addclientes" component={FormCliente} />
            {/*Almacen*/}
            <Route exact path="/almacen" component={Almacen} />
            <Route exact path="/addalmacen" component={FormAlmacen} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
