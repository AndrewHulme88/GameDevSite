import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeamMemberCard = ({ member }) => {
  return (
    <motion.div
      className="team-member-card"
      whileHover={{ scale: 1.05 }}
    >
      <img src={member.image} alt={member.name} />
      <h3>{member.name}</h3>
      <p>{member.bio}</p>
    </motion.div>
  );
};

export default TeamMemberCard;
