import './App.css';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Comparacion from './screens/Comparacion';
import Comercial from './screens/Comercial';
import Contratos from './screens/Contratos';
import BaseDatos from './screens/BaseDatos';
import Comisiones from './screens/Comisiones';
import Comercializadoras from './screens/Comercializadoras';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/paneldecontrol' element={<Dashboard />} />
        <Route path='/comparador' element={<Comparacion />} />
        <Route path='/comercial' element={<Comercial />} />
        <Route path='/contratos' element={<Contratos />} />
        <Route path='/basededatos' element={<BaseDatos />} />
        <Route path='/comisiones' element={<Comisiones />} />
        <Route path='/comercializadoras' element={<Comercializadoras />} />
      </Routes>
    </Router>
  );
}

export default App;
