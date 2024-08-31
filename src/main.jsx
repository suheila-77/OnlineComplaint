import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import SideNav from './Components/SideNav';

ReactDOM.render(
  
  <Router>
    {/* <SideNav/> */}
    <App />

  </Router>,
  document.getElementById('root')
);
