import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Login from './Login';
import SaveRoute from './SaveRoute';
import RouteList from './RouteList';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      console.log("Logout successful");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          {isLoggedIn ? (
            <>
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <Link className="nav-link" to="/form">Registro</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/list">Lista de Rutas</Link>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link btn btn-link btn btn-danger" onClick={handleLogout}>Cerrar Sesión</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <Routes>
                <Route path="/form" element={<SaveRoute />} />
                <Route path="/list" element={<RouteList />} />
                <Route path="/" element={<Navigate to="/form" />} />
              </Routes>
            </>
          ) : (
            <Routes>
              <Route path="/" element={<Login onLoginSuccess={() => setIsLoggedIn(true)} />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          )}
        </header>
      </div>
    </Router>
  );
}

export default App;
