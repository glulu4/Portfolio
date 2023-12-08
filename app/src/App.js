import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Bagel from './Pages/Projects/Project_Pages/Bagel/Bagel';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/projects' element={<Projects/>} />
        <Route path='/bagel' element={<Bagel />} />


        
    </Routes>
  );
}

export default App;
