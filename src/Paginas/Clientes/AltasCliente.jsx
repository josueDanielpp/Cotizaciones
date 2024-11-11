import React, { useState } from 'react'

export const AltasCliente = () => {
    const [formData, setFormData] = useState({
        nombreCli: '',
        correoCli: '',
        RFCCE: '',
        passwordCli: '',
        apellidoPaternoCli: '',
        apellidoMaternoCli: '',
        edadCli: '',
        fechaAltaCli: '',
        telefonoCli: ''
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del cliente:', formData);
        // Aquí puedes hacer una solicitud para guardar los datos del cliente en una base de datos.
        alert('Cliente registrado con éxito');
      };
  return (
    <div className="container mt-5">
    <div className="card p-5 shadow-lg" style={{ maxWidth: '900px', margin: '0 auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
      <h2 className="text-center mb-4">Alta de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Columna de la izquierda */}
          <div className="col-md-6 mb-3">
            <label htmlFor="nombreCli" className="form-label">Nombre</label>
            <input 
              type="text" 
              className="form-control" 
              id="nombreCli" 
              name="nombreCli"
              value={formData.nombreCli} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="correoCli" className="form-label">Correo Electrónico</label>
            <input 
              type="email" 
              className="form-control" 
              id="correoCli" 
              name="correoCli"
              value={formData.correoCli} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="RFCCE" className="form-label">RFC</label>
            <input 
              type="text" 
              className="form-control" 
              id="RFCCE" 
              name="RFCCE"
              value={formData.RFCCE} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="passwordCli" className="form-label">Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              id="passwordCli" 
              name="passwordCli"
              value={formData.passwordCli} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="apellidoPaternoCli" className="form-label">Apellido Paterno</label>
            <input 
              type="text" 
              className="form-control" 
              id="apellidoPaternoCli" 
              name="apellidoPaternoCli"
              value={formData.apellidoPaternoCli} 
              onChange={handleChange} 
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="apellidoMaternoCli" className="form-label">Apellido Materno</label>
            <input 
              type="text" 
              className="form-control" 
              id="apellidoMaternoCli" 
              name="apellidoMaternoCli"
              value={formData.apellidoMaternoCli} 
              onChange={handleChange} 
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="edadCli" className="form-label">Edad</label>
            <input 
              type="number" 
              className="form-control" 
              id="edadCli" 
              name="edadCli"
              value={formData.edadCli} 
              onChange={handleChange} 
              required 
            />
          </div>
         
          <div className="col-md-6 mb-3">
            <label htmlFor="telefonoCli" className="form-label">Teléfono</label>
            <input 
              type="text" 
              className="form-control" 
              id="telefonoCli" 
              name="telefonoCli"
              value={formData.telefonoCli} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        <br />
        <button type="submit" className="btn btn-primary w-100">Registrar Cliente</button>
      </form>
    </div>
  </div>
  )
}
