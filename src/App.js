import './App.css';
import Board from './Components/Board/Board';
import ShowBoard from './Components/ShowBoard/ShowBoard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (

    <Router>
      
      <br/>
        <Routes>
          
          <Route exact path="/" element={<Board/>}/>
          <Route exact path="/home" element={<Board/>}/>
          <Route exact path="/Board" element={<ShowBoard/>}/>
        </Routes>
    </Router>
    
  );
}

export default App;
