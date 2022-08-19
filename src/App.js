import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


import data from './data.js';
import MoviePage from './Pages/MoviePage';
import HomePage from './Pages/HomePage';

function App() {
  

  return (
    
    <Router>
      <Routes>
        <Route index element={<HomePage data={data}/>} ></Route>
        <Route path='/movie/:id' element={<MoviePage data={data}/>} />
        <Route path='*' element={<HomePage data={data}/>} />
      </Routes>
    </Router>
  );
}

export default App;
