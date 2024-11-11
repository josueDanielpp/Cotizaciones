import React, { useState } from 'react'

export const Bancos = () => {
  const [bancos, setBancos] = useState([]);
  const [formData, setFormData] = useState({
    idBan: null,
    nombreBan: '',
    interesBan: '',
    engancheBan: '',
    limitePrestamoBan: ''
  });

  // Función para manejar los cambios en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.idBan) {
      // Actualizar banco existente
      setBancos(bancos.map(b => b.idBan === formData.idBan ? formData : b));
    } else {
      // Crear nuevo banco
      setBancos([...bancos, { ...formData, idBan: Date.now() }]); // Generación temporal de ID
    }
    setFormData({ idBan: null, nombreBan: '', interesBan: '', engancheBan: '', limitePrestamoBan: '' });
  };

  // Función para eliminar un banco
  const handleDelete = (id) => {
    setBancos(bancos.filter(b => b.idBan !== id));
  };

  // Función para cargar datos de un banco en el formulario para editar
  const handleEdit = (banco) => {
    setFormData(banco);
  };
  return (
    <div className="container mt-4">
      <h2>Gestión de Bancos</h2>

      {/* Formulario para alta y edición de bancos */}
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="form-group">
          <label>Nombre del Banco</label>
          <input
            type="text"
            className="form-control"
            name="nombreBan"
            value={formData.nombreBan}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Interés (%)</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            name="interesBan"
            value={formData.interesBan}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Enganche</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            name="engancheBan"
            value={formData.engancheBan}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Límite de Préstamo</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            name="limitePrestamoBan"
            value={formData.limitePrestamoBan}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          {formData.idBan ? 'Actualizar Banco' : 'Agregar Banco'}
        </button>
      </form>

      {/* Lista de bancos */}
      <h3>Lista de Bancos</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Interés (%)</th>
            <th>Enganche</th>
            <th>Límite de Préstamo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {bancos.map(banco => (
            <tr key={banco.idBan}>
              <td>{banco.nombreBan}</td>
              <td>{banco.interesBan}</td>
              <td>{banco.engancheBan}</td>
              <td>{banco.limitePrestamoBan}</td>
              <td>
                <button className="btn btn-warning btn-sm mr-2" onClick={() => handleEdit(banco)}>
                  Editar
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(banco.idBan)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
