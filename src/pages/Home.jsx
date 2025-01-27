import React from 'react';
import Navbar from '../components/Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GameCard from '../components/GameCard';
import MarioImg from '../assets/Mario.jpg';
import ZeldaImg from '../assets/Zelda.jpg';

const games = [
  { id: 1, title: "Game One", description: "A thrilling adventure", image: MarioImg },
  { id: 2, title: "Game Two", description: "A puzzle game", image: ZeldaImg },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Home = () => {
  return (
    <>
      <Navbar />
      <h1>Welcome to GameDevSite!</h1>
      <p>Your home for innovative and exciting video games.</p>
      <h2>Featured Games</h2>
      <Slider {...settings}>
        {games.map(game => (
          <div key={game.id}>
            <GameCard game={game} />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Home;
