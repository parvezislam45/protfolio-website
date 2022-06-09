import './App.css';
import Nav from './Components/Home/Nav';
import { Route, Routes } from 'react-router-dom';
import About from './Components/Deatils/About';
import Skills from './Components/Deatils/Skills';
import Contract from './Components/Deatils/Contract';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App bg-black">
      <Nav></Nav>
      <Home></Home>
      {/* <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/skills" element={<Skills></Skills>}></Route>
        <Route path="/contract" element={<Contract></Contract>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
