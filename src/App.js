import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Menu from './components/Menu';
import Dashboard from './pages/Dashboard';
import SafetyObservation from './pages/SafetyObservation';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';

function App(){
  return(
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/safetyObservation' element={<SafetyObservation />}/>
      
    
    
    </Routes>
      
        </BrowserRouter>
        </>
  );
}

export default App;
//<main>
    
      
        //<Routes>
          //<Route path ="/" element={<Dashboard />}/>
          //<Route path ="/" element={<SafetyObservation />}/>
       // </Routes>
       // </main>
      

