import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import axios from 'axios';
import LoginPage from './components/LoginPage';
import AnalysisPage from './components/AnalysisPage';
axios.defaults.baseURL = 'http://localhost:8000/api'
function App() {
  const [user, setUser] = useState(undefined);
  if (!user) {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='*' element={<LoginPage onLogin={async (email, password) => {
            const res = await axios.post('/login', { email, password });
            setUser(res.data.user);
            axios.defaults.headers.common.authorization = 'Bearer ' + res.data.token.substring(2);
          }} />} />
        </Routes>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Navbar
        user={user}
        onLogout={async () => {
          await axios.post('/logout');
          setUser(undefined);
          axios.defaults.headers.common.authorization = ''
        }}
      />
      <Routes>
        <Route path='/analysis' element={<AnalysisPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
