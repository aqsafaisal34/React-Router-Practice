import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import Navbar from './components/navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
