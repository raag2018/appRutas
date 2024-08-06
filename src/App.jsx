// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import SaveRoute from './SaveRoute';
import RouteList from './RouteList';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);  
  const handleLoginSuccess = () => {
    console.log('Login successful, updating state');
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {!isLoggedIn ? (
            <>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
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
