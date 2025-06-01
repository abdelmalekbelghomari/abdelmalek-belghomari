import { Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import {Navbar} from './components/Navbar';
import {Homepage} from './pages/Homepage';

function App() {
  return (
    <div className="App bg-darkBlue text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;
