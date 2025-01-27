import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const GameCard = ({ game }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = game.image;
  }, [game.image]);

  return (
    <motion.div
      className="game-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Link to={`/game/ ${game.id}`}>
        {loaded ? <img src={game.image} alt={game.title} /> : <div className="placeholder" />}
        <h3>{game.title}</h3>
        <p>{game.description}</p>
      </Link>
    </motion.div>
  );
};

export default GameCard;
