import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNav from './Components/SideNav';
import Admin from './Pages/Admin';
import Header from './components/Header';
import AdminLogin from './Pages/AdminLogin';
import User from './Pages/User';
import About from './Components/About';
import HomePage from './Components/HomePage';
import RegisterComplaint from "./Pages/RegisterComplaint"

import Dashboard from './Pages/Dashboard';
import ViewPage from './Pages/ViewPage';


const App = () => {

    
  return (
        
     <div>

        
      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AdminLogin/>} />
     <Route path= "/register" element = {<RegisterComplaint/>} />
        
     <Route path='/admin'  element={<Admin/>} />
     <Route path='/about'  element={<About/>} />
     <Route path='/user' element={<User/>}/>
     <Route path='/view' element={<ViewPage/>}/>

     <Route path='/dashboard' element={<Dashboard/>}/>


      
      </Routes>

      </div>
  );
};

export default App
