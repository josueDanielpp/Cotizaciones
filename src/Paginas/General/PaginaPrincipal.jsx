import React from 'react'
import { useNavigate } from 'react-router-dom';

export const PaginaPrincipal = () => {
    const navigate = useNavigate();  // Crear la función de navegación
    const Comenzar = () => {
        navigate('/login');  // Redirigir al login
      };
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1 className="mb-4" style={{color:"white"}}>Bienvenido a nuestro Sistema de Cotización de Préstamos</h1>
        <br />
        <p className="lead mb-4" style={{fontStyle:"oblique",fontWeight:"bold"}}>
          Cotiza préstamos de vivienda de manera fácil y rápida. Elige entre cotización por monto de casa o por salario, 
          y obtén los resultados que mejor se ajusten a tu situación.
        </p>
        <br />
        <button className="btn btn-primary btn-lg" onClick={()=>{Comenzar()}}>Comenzar</button>
      </div>
    </div>
  )
}
