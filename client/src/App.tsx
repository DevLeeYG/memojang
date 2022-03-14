import React, { useEffect } from 'react';

import Auth from './components/authorization/Index';
import { Route, Routes } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
import Main from './pages/memojang/Main';
import Book from './pages/accountBook/Book';
import Menu from './pages/menu/Menu';
import NotePad from './pages/notepad/write/Write';
import './index.css';
import Index from './pages/notepad/home/Index';
import Read from './pages/notepad/read/Read';
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
        <Route path="/notepad/read/:id" element={<Read />} />
        <Route path="/memojang" element={<Main />} />
        <Route path="/accountBook" element={<Book />} />
        <Route path="/notepad/" element={<Index />} />
        <Route path="/notepad/write" element={<NotePad />} />
      </Routes>
    </div>
  );
}

export default App;
