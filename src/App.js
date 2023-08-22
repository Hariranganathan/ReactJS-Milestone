import logo from './logo.svg';
import './App.css';
import'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import {Signup} from './components/task/sign';
import { Login } from './loginform/login';

function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={[<Signup/>]}></Route>
    <Route path='/login' element={[<Login/>]}></Route>
   </Routes>
   </BrowserRouter>
    
    </>
  );
}

export default App;
