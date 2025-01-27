import GameCard from '../components/GameCard';

const games = [
  { title: 'Game 1', image: 'game1.jpg', description: 'Description of Game 1', link: '/game1' },
  { title: 'Game 2', image: 'game2.jpg', description: 'Description of Game 2', link: '/game2' },
  { title: 'Game 3 (In Dev)', image: 'game3.jpg', description: 'Description of Game 3', link: '/game3' },
];

function OurGames() {
  return (
    <div className="our-games">
      <h1>Our Games</h1>
      <div className="games-grid">
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
}

export default OurGames;
