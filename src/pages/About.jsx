import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import TeamMemberCard from '../components/TeamMemberCard';
import designerImg from '../assets/designer.jpg';
import programmerImg from '../assets/programmer.jpg';
import artistImg from '../assets/artist.jpg';
import audioImg from '../assets/audio.jpg';
import Footer from '../components/Footer';

const teamMembers = [
  { id: 1, name: "Jane Doe", bio: "Lead Game Designer with 10 years of experience", image: designerImg },
  { id: 2, name: "John Smith", bio: "Senior Programmer specializing in game engines", image: programmerImg },
  { id: 3, name: "Alice Brown", bio: "Creative Artist known for vibrant game art", image: artistImg },
  { id: 4, name: "Bob Johnson", bio: "Expert Audio Engineer crafting immersive soundscapes", image: audioImg },
];

const About = () => {
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
        About Us
      </motion.h1>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Here's where we tell our story...
      </motion.p>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Our Team
      </motion.h2>
      <motion.div
        className="team-grid"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
        }}
      >
        {teamMembers.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </motion.div>
      <Footer />
    </motion.div>
  );
};

export default About;
