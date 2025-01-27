import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GameCard from '../components/GameCard';
import MarioImg from '../assets/Mario.jpg';
import ZeldaImg from '../assets/Zelda.jpg';
import Footer from '../components/Footer';

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Welcome to GameDevSite!
      </motion.h1>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Your home for innovative and exciting video games.
      </motion.p>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Featured Games
      </motion.h2>
      <Slider {...settings}>
        {games.map(game => (
          <div key={game.id}>
            <GameCard game={game} />
          </div>
        ))}
      </Slider>
      <Footer />
    </motion.div>
  );
};

export default Home;
