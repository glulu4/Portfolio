import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import Bagel from './Pages/Projects/Project_Pages/Bagel/Bagel';
import Hoodie from './Pages/Projects/Project_Pages/Hoodie/Hoodie';
import DVD from './Pages/Projects/Project_Pages/DVD/DVD';
import Ngram from './Pages/Projects/Project_Pages/Shakespeare/Ngram';
import Snap from './Pages/Projects/Project_Pages/Snap_App/Snap';
import Neighborhood from './Pages/Projects/Project_Pages/Neighborhood/Neighborhood';
import Classifier from './Pages/Projects/Project_Pages/Classifier/Classifier';
import Vmsim from './Pages/Projects/Project_Pages/Vmsim/Vmsim';
import Database from './Pages/Projects/Project_Pages/Database/Database';
import OldPortfolio from './Pages/Projects/Project_Pages/Old_Portfolio/OldPortfolio';
import Budget from './Pages/Projects/Project_Pages/Budget/Budget';
import Sudoku from './Pages/Projects/Project_Pages/Sudoku/Sudoku';
import Quantified from './Pages/Projects/Project_Pages/Quantified/Quantified'
import Seocrew from './Pages/Projects/Project_Pages/SeoCrew/Seocrew';
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/bagel' element={<Bagel />} />

      <Route path='/projects/quantified' element={<Quantified />} />
      <Route path='/projects/seocrew' element={<Seocrew />} />


      <Route path='/projects/hoodie' element={<Hoodie />} />
      <Route path='projects/dvd' element={<DVD />} />
      <Route path='projects/ngram' element={<Ngram />} />
      <Route path='projects/snap-app' element={<Snap />} />
      <Route path='projects/neighborhood' element={<Neighborhood />} />
      <Route path='projects/classifier' element={<Classifier />} />
      <Route path='projects/vmsim' element={<Vmsim />} />
      <Route path='projects/database' element={<Database />} />
      <Route path='projects/old-portfolio' element={<OldPortfolio />} />
      <Route path='projects/budget' element={<Budget />} />
      <Route path='projects/sudoku' element={<Sudoku />} />







    </Routes>
  );
}

export default App;
