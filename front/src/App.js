import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigator from './components/Navigator';
import FormProveedor from './pages/proveedores/Form';
import ListadoBancos from './pages/proveedores/ListadoBancos';
import ListadoNotas from './pages/proveedores/ListadoNotas';
import Proveedores from './pages/proveedores/Proveedores';
import ListadoObservaciones from './pages/proveedores/listadoObservaciones'

import Home from './pages/Home';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigator />
        <main>
        <Switch>
        <Route exact path="/" component={Home}/>
          <Route exact path="/addproveedor" component={FormProveedor}/>
          <Route exact path="/proveedores" component={Proveedores}/>
          <Route exact path="/listadobancos" component={ListadoBancos}/>
          <Route exact path="/listadonotas" component={ListadoNotas}/>
          <Route exact path="/obvservaciones" component={ListadoObservaciones}/>
        </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;