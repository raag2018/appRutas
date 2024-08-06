// src/Login.jsx
import React from 'react';
import { auth, googleProvider } from './firebaseConfig';
import { signInWithRedirect, getRedirectResult } from 'firebase/auth';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Login = ({ onLoginSuccess }) => {
  const handleLogin = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  React.useEffect(() => {
    const getResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result?.user) {
          console.log('User signed in:', result.user);
          onLoginSuccess();
        }
      } catch (error) {
        console.error('Error handling redirect result:', error);
      }
    };
    getResult();
  }, [onLoginSuccess]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      <button onClick={handleLogin} className="btn btn-primary w-100">
        Iniciar sesión con Google
      </button>
    </div>
  );
};

export default Login;
