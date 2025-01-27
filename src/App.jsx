import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import OurGames from './pages/OurGames';

function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-games" element={<OurGames />} />
          <Route path="/game/:id" element={<div>Game Page Placeholder</div>} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
