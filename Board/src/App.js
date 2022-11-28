import './App.css';
import Board from './Components/Board/Board';
import ShowBoard from './Components/ShowBoard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RealBoard from './Components/RealBoard';
import Torneo from './Components/torneo';
import Addjugador from './Components/Addjugador';
import ChanceName from './Components/ChanceName';


function App() {

  return (

    <Router>
        <Routes>
          <Route exact path="/" element={<div className='App'><Torneo/></div>}/>
          <Route exact path="/home" element={<Board/>}/>
          <Route exact path="/torneo" element={<div className='App'><Torneo/></div>}/>
          <Route exact path="/Players" element={<div className='App'><ShowBoard/></div>}/>
          <Route exact path="/Board" element={<div className='App'><RealBoard/></div>}/>
          <Route exact path="/Add" element={<div className='App'><Addjugador/></div>}/>
          <Route exact path="/Equipo" element={<div className='App'><ChanceName/></div>}/>
        </Routes>
    </Router>
    
  );
}

export default App;
