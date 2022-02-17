import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthForm from './components/login/AuthForm';
import Auth from './components/Auth';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  );
}

export default App;
