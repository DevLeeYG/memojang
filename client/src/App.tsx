import React from 'react';
import logo from './logo.svg';
import './App.css';
import AuthForm from './components/login/AuthForm';
import Auth from './components/Auth';
import { Route, Routes } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
import Main from './components/main/Main';

function App() {
  const loginState = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.login,
  );

  return (
    <div>
      <Routes>
        {loginState ? (
          <>
            <Route path="/" element={<Main />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
