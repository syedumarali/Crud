import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route  } from 'react-router-dom';
import Users from './pages/Users';
import CreateUser from './pages/CreateUser';
import UpdateUser from './pages/UpdateUser';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>
        
      </Routes>
      </BrowserRouter> 
    </div>
    
  )
}

export default App
