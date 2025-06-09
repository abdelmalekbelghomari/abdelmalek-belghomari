import { Routes, Route } from "react-router-dom";
import './App.css';
import {Navbar} from './components/Navbar';
import {Homepage} from './pages/Homepage';
import {useTheme} from './theme';

function App() {
  const { theme } = useTheme();
  return (
    <div className={`App ${theme.textColor} ${theme.background} min-h-screen`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </div>
  );
}

export default App;
