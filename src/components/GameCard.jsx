function GameCard({ title, image, description, link }) {
  return (
    <div className="game-card">
      <Link to={link}>
        <div className="card-content">
          <img src={image} alt={title} className="game-image" />
          <h3 className="game-title">{title}</h3>
          <p className="game-description">{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default GameCard;
