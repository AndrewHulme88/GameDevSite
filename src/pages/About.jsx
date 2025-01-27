import React from 'react';
import Navbar from '../components/Navbar';
import TeamMemberCard from '../components/TeamMemberCard';
import designerImg from '../assets/Zelda.jpg';
import programmerImg from '../assets/Zelda.jpg';
import artistImg from '../assets/Zelda.jpg';
import audioImg from '../assets/Zelda.jpg';

const teamMembers = [
  { id: 1, name: "Jane Doe", bio: "Lead Game Designer with 10 years of experience", image: designerImg },
  { id: 2, name: "John Smith", bio: "Senior Programmer specializing in game engines", image: programmerImg },
  { id: 3, name: "Alice Brown", bio: "Creative Artist known for vibrant game art", image: artistImg },
  { id: 4, name: "Bob Johnson", bio: "Expert Audio Engineer crafting immersive soundscapes", image: audioImg },
];

const About = () => {
  return (
    <>
      <Navbar />
      <h1>About Us</h1>
      <p>Here's where we tell our story...</p>
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map(member => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </>
  );
};

export default About;
