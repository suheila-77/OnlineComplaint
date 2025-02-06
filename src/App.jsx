import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './Pages/Admin';
import AdminLogin from './Pages/AdminLogin';
import User from './Pages/User';
import About from './Components/About';
import HomePage from './Components/HomePage';
import RegisterComplaint from "./Pages/RegisterComplaint"
import RegisterForm from './Pages/RegisterForm';
import Signin from './Pages/Signin';

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
     <Route path='reg' element= {<RegisterForm/>}/>
     <Route path='/signin' element = {<Signin/>}/>


      
      </Routes>

      </div>
  );
};

export default App
