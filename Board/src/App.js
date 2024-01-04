import './App.css';
import Board from './Components/Board/Board';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {

  return (

    <Router>
        <Routes>

          <Route exact path="/home" element={<Board/>}/>
          <Route exact path="/" element={<Board/>}/>
        </Routes>
    </Router>
    
  );
}

export default App;
