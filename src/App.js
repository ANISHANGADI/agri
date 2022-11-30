import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'

import NotFound from './pages/notfound/NotFound';

import {BrowserRouter, Routes ,Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Login from './pages/login/Login';
import Search from './pages/search/Search';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='search' element={<Search/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='*' element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
