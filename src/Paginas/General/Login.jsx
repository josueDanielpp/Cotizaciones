import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div 
    className="vh-100 d-flex align-items-center justify-content-center" 
    style={{
      background: 'linear-gradient(135deg, #4A90E2, #50E3C2)',
      color: '#fff'
    }}
  >
    <div className="card p-5 shadow-lg" style={{ maxWidth: '600px', width: '100%',backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Fondo blanco con 80% de opacidad
          borderRadius: '15px'}}>
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="Introduce tu correo" 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            placeholder="Introduce tu contraseña" 
          />
        </div>
        <div className="mt-3 text-center">
            <p>¿Deseas registrarte? <Link to="/Altacliente">Hazlo aquí</Link></p>
        </div>
        <button type="submit" className="btn btn-light w-100 mt-3">Iniciar Sesión</button>
      </form>
    </div>
  </div>
  )
}
