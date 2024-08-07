// src/SaveRoute.jsx
import React, { useState } from 'react';
import { db, collection, addDoc } from './firebaseConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

const SaveRoute = () => {
  const [name, setName] = useState('');
  const [direccion, setDireccion] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [department, setDepartment] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'rutas'), {
        name,
        direccion,
        municipality,
        department
      });
      setSuccess('Route saved successfully!');
      setName('');
      setDireccion('');
      setMunicipality('');
      setDepartment('');
    } catch (err) {
      setError('Error saving route: ' + err.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registrar Ruta</h2>
      {success && <div className="alert alert-success">{success}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="row">
        <div className="mb-3 col-6">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="direccion" className="form-label">Direccion</label>
          <input
            type="text"
            className="form-control"
            id="direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="department" className="form-label">Departamento</label>
          <input
            type="text"
            className="form-control"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="municipality" className="form-label">Municipio</label>
          <input
            type="text"
            className="form-control"
            id="municipality"
            value={municipality}
            onChange={(e) => setMunicipality(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Guardar Ruta</button>
        </div>
      </form>
    </div>
  );
};

export default SaveRoute;
