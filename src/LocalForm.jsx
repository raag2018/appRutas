// src/LocalForm.jsx
import {React,  useState } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';

const LocalForm = () => {
  const [name, setName] = useState('');
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log({
      name,
      longitude,
      latitude,
      municipality,
      department,
    });
    alert('Formulario enviado');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registro de Local</h2>
      <form onSubmit={handleSubmit} className="card p-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre del Local</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="longitude" className="form-label">Longitud</label>
          <input 
            type="text" 
            className="form-control" 
            id="longitude" 
            value={longitude} 
            onChange={(e) => setLongitude(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="latitude" className="form-label">Latitud</label>
          <input 
            type="text" 
            className="form-control" 
            id="latitude" 
            value={latitude} 
            onChange={(e) => setLatitude(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
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
        <div className="mb-3">
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
       
        <button type="submit" className="btn btn-primary w-100">Registrar Local</button>
      </form>
    </div>
  );
};

export default LocalForm;
