import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import OurGames from './pages/OurGames';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-games" element={<OurGames />} />
        <Route path="/game/:id" element={<div>Game Page Placeholder</div>} />
      </Routes>
    </Router>
  );
}

export default App;
