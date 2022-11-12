import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useState } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8000'
function App() {
  const [user, setUser] = useState(undefined);
  return (
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
