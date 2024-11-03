import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './src/Home/Home';
import About from './src/About/About';
import Contact from './src/Contact/Contact';
import Projects from './src/Projects/Projects';

import ProjectRoute from './src/components/ProjectRoute';
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path="/projects/:projectId" element={<ProjectRoute />} />
    </Routes>
  );
}

export default App;
