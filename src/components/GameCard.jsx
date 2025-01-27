import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const GameCard = ({ game }) => {
  return (
    <motion.div
      className="game-card"
      whileHover={{ scale: 1.05 }}
    >
      <Link to={`/game/ ${game.id}`}>
        <img src={game.image} alt={game.title} />
        <h3>{game.title}</h3>
        <p>{game.description}</p>
      </Link>
    </motion.div>
  );
};

export default GameCard;
