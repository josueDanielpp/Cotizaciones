import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { PaginaPrincipal } from './Paginas/General/PaginaPrincipal';
import { Login } from './Paginas/General/Login';
import { AltasCliente } from './Paginas/Clientes/AltasCliente';
import { Bancos } from './Paginas/Administracion/Bancos';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <div>
        {/* Definir las rutas principales  Bancos*/}
        <Routes>
           <Route path="/" element={<PaginaPrincipal />} />
           <Route path="/login" element={<Login />} />
           <Route path="/Altacliente" element={<AltasCliente />} />
           <Route path="/Bancos" element={<Bancos />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
