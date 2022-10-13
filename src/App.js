import './App.css';
import Board from './Components/Board/Board';
import ShowBoard from './Components/ShowBoard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RealBoard from './Components/RealBoard';


function App() {

  return (

    <Router>
        <Routes>
          <Route exact path="/" element={<div className='App'><Board/></div>}/>
          <Route exact path="/home" element={<Board/>}/>
          <Route exact path="/Players" element={<div className='App'><ShowBoard/></div>}/>
          <Route exact path="/Board" element={<div className='App'><RealBoard/></div>}/>
        </Routes>
    </Router>
    
  );
}

export default App;
