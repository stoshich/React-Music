import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header';
import Layout from './components/Layout';
import MainContent from './components/MainContent';
import { useAppDispatch } from './hooks';
import LogInMenu from './pages/Login/LogInMenu';
import SignUpMenu from './pages/SignUp/SignUpMenu';
import SongPage from './pages/SongPage/SongPage';
import { auth } from './redux/authSlice';

function App() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainContent />} />
          <Route path='loginMenu' element={<LogInMenu />} />
          <Route path='signUpMenu' element={<SignUpMenu />} />
          <Route path='songPage/:songId' element={<SongPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
