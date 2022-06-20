import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';  
import Login1 from "./components/Login1";
import Dashboard from "./components/Dashboard";
import Regster from "./components/Register";


function App() {
  return (
    <Router>
        
                        
          <nav className="navbar navbar-expand-lg navheader">      
            <div className="collapse navbar-collapse">      
              <ul className="navbar-nav mr-auto">            
                           
                {/* <li className="nav-item">      
                  <Link to={'/Regster'} className="nav-link">Regster</Link>      
                </li> */}
                {/* <li className="nav-item">      
                  <Link to={'/Dashboard'} className="nav-link">Dashboard</Link>      
                </li>        */}
              </ul>      
            </div>      
          </nav> <br /> 

              <Routes>        
                <Route exact path='/login' element={<Login1/>} />     
                <Route path='/Regster' element={<Regster/>} />    
                <Route exact path='/Dashboard' element={<Dashboard/>} />  
              </Routes>
          
               
    </Router> 
  
  );
}

export default App;
