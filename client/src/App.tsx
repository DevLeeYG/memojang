import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthForm from './components/login/AuthForm';
import Auth from './components/Auth';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/signup" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
