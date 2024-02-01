import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './Home'
import All from './All'
import Fsd from './Fsd'
import Data from './Data'
import Cyber from './Cyber'
import Career from './Career'


import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {


  return (
    <>
    
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path="/" element={<All/>}/>
        <Route path="/fsd" element={<Fsd/>}/> 
         <Route path="/data" element={<Data/>}/>
        <Route path="/cyber" element={<Cyber/>}/>
        <Route path="/career" element={<Career/>}/>
      </Routes>
      </BrowserRouter>
     
      
      
    </>
  )
}

export default App
