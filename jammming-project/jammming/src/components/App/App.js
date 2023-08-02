import React, {useState, useEffect, createConnection} from 'react'
import './App.scss';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from '../Home/Home';
import Login from "../Login/Login"
import Starter from '../Starter/Starter';
import { generateAcessToken, checkLogin } from '../../assets/helpers';

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    //generateAcessToken()
    setIsLogged(checkLogin())

  }, [isLogged])

  return (
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/app" element={App.js} />
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/starter" element={<Starter />} />
        </Routes>
        
      </>
  );
}

export default App;
