// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import LocalForm from './LocalForm';
import SaveRoute from './SaveRoute';
import RouteList from './RouteList';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    console.log('Login successful, updating state');
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My React App</h1>
          {isLoggedIn ? (
            <>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                  <Link className="navbar-brand" to="/">Inicio</Link>
                  <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/form">Formulario de Registro</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/list">Lista de Rutas</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <Routes>
                <Route path="/" element={<LocalForm />} />
                <Route path="/form" element={<SaveRoute />} />
                <Route path="/list" element={<RouteList />} />
              </Routes>
            </>
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )}
        </header>
      </div>
    </Router>
  );
}

export default App;
