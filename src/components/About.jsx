import { motion } from 'framer-motion';
import profilePic from '../assets/IMG-20250828-WA0085~2.jpg'; // Updated image

export const About = () => (
  <motion.section
    id="about"
    className="py-20 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <img 
      src={profilePic} 
      alt="Madushanka" 
      className="w-64 h-64 rounded-full object-cover shadow-lg" 
    />
    <div>
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-400 text-lg">
        I’m Madushanka Sandaruwan, a passionate Software Engineering student who loves 
        transforming ideas into interactive, real-world applications. 
        From building full-stack web apps to creating mobile solutions, 
        I enjoy crafting seamless experiences using React, Node.js, JavaScript, 
        TypeScript, Python, and Java, along with databases like MongoDB and SQL.
        I thrive on solving complex problems, learning new technologies, 
        and pushing the boundaries of what software can do. Beyond coding, 
        I’m driven by creativity and innovation, always seeking opportunities 
        to contribute to projects that make a meaningful impact.
      </p>
    </div>
  </motion.section>
);
