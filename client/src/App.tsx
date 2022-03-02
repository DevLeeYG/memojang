import React, { useEffect } from 'react';

import './App.css';

import Auth from './components/authorization/Index';
import { Route, Routes } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
import Main from './components/memojang/Main';
import Book from './components/accountBook/Book';
import Menu from './components/menu/Menu';

function App() {
  const loginState = useSelector(
    (state: RootStateOrAny) => state.userReducer.userLogin.login,
  );

  return (
    <div>
      <Routes>
        {loginState ? (
          <>
            <Route path="/" element={<Menu />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/signup" element={<Auth />} />
          </>
        )}
        <Route path="/menu" element={<Main />} />
        <Route path="/accountBook" element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;
