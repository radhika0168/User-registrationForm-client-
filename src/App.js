import React, { createContext, useReducer } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout';

import { initalState,reducer } from './reducer/Usereducer'



export const UserContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initalState);

  const Routing = ()=>{
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    );
  }

  return (
    <>
        <UserContext.Provider value={{state,dispatch}}>
            <Navbar />
            <Routing />
        </UserContext.Provider>
    </>
  )
}

export default App