import Navbar from '../components/Navbar';
import GameCard from '../components/GameCard';
import MarioImg from '../assets/Mario.jpg';
import ZeldaImg from '../assets/Zelda.jpg';


const games = [
  { id: 1, title: "Game One", description: "A thrilling adventure", image: MarioImg },
  { id: 2, title: "Game Two", description: "A puzzle game", image: ZeldaImg },
];


const OurGames = () => {
  return (
    <>
      <Navbar />
      <h1>Our Games</h1>
      <div className="games-grid">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};

export default OurGames;
