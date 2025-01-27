import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const teamMembers = [
  { name: "Alex Designer", role: "Game Designer", bio: "Crafts game mechanics that captivate." },
  { name: "Bob Programmer", role: "Programmer", bio: "Brings visions to life with code." },
  { name: "Cara Artist", role: "Artist", bio: "Paints worlds that come alive." },
  { name: "Dan Audio", role: "Audio Engineer", bio: "Sounds that immerse you in the game." },
];

const TeamCard = ({ member }) => (
  <motion.div
    className="team-card"
    whileHover={{ scale: 1.05 }}
  >
    <h3>{member.name}</h3>
    <p><strong>{member.role}</strong></p>
    <p>{member.bio}</p>
  </motion.div>
);

const About = () => {
  return (
    <>
      <Navbar />
      <h1>About Us</h1>
      <p>We are a passionate team dedicated to creating unforgettable gaming experiences.</p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </>
  );
};

export default About;
