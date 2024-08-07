// src/RouteList.jsx
import React, { useState, useEffect } from 'react';
import { db, collection, getDocs } from './firebaseConfig';
import DataTable from 'react-data-table-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const RouteList = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const routesCollection = collection(db, 'rutas');
        const routeSnapshot = await getDocs(routesCollection);
        const routeList = routeSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRoutes(routeList);
      } catch (err) {
        setError('Error fetching routes: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRoutes();
  }, []);

  const columns = [
    /*{
      name: 'ID',
      selector: row => row.id,
      sortable: true
    },*/
    {
      name: 'Nombre',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Direccion',
      selector: row => row.direccion,
      sortable: true
    },
    /*
    {
      name: 'Longitud',
      selector: row => row.longitude,
      sortable: true
    },
    {
      name: 'Latitud',
      selector: row => row.latitude,
      sortable: true
    },
    {
      name: 'Municipio',
      selector: row => row.municipality,
      sortable: true
    },
    {
      name: 'Departamento',
      selector: row => row.department,
      sortable: true
    }*/
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Lista de Rutas</h2>
      {loading ? (
        <div className="text-center">Cargando...</div>
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        <DataTable
          columns={columns}
          data={routes}
          pagination
          highlightOnHover
          responsive
        />
      )}
    </div>
  );
};

export default RouteList;
