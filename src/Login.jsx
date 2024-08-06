// src/Login.jsx
import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from './firebaseConfig';

const Login = ({ onLoginSuccess }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Login successful, updating state");
      onLoginSuccess();
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="login-container">
      <button onClick={handleLogin} className="btn btn-primary">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
