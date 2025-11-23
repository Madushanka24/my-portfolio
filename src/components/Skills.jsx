import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: <FaReact size={40} color="#61DBFB" /> },
  { name: 'Node.js', icon: <FaNodeJs size={40} color="#68A063" /> },
  { name: 'JavaScript', icon: <FaJsSquare size={40} color="#F0DB4F" /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34C26" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} color="#264DE4" /> },
  { name: 'Git', icon: <FaGitAlt size={40} color="#F1502F" /> },
];

export const Skills = () => (
  <motion.section id="skills" className="py-20 px-4">
    <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {skills.map(skill => (
        <motion.div
          key={skill.name}
          className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        >
          {skill.icon}
          <p className="mt-2">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);
