import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const TeamMemberCard = ({ member }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = member.image;
  }, [member.image]);

  return (
    <motion.div
      className="team-member-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      {loaded ? <img src={member.image} alt={member.name} /> : <div className="placeholder" />}
      <h3>{member.name}</h3>
      <p>{member.bio}</p>
    </motion.div>
  );
};

export default TeamMemberCard;
