import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Links from './components/Links';
import FreeApi from './components/FreeApi';
import SecuredApi from './components/SecuredApi';
import Login from './components/Login';
import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [token, setToken] = useState('');

  return (
    <BrowserRouter>
      <Links user={user} setToken={setToken} setUser={setUser} />
      <Routes>
        <Route path='/' element={<FreeApi />} />
        <Route path='/secured' element={<SecuredApi token={token} />} />
        <Route
          path='/login'
          element={<Login setUser={setUser} setToken={setToken} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
