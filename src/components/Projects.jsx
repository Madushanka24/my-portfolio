import { motion } from 'framer-motion';

const projects = [
  { title: 'Portfolio Website', desc: 'Personal portfolio built with React & Tailwind', link: '#' },
  { title: 'Todo App', desc: 'Full-stack todo app with Node & MongoDB', link: '#' },
  { title: 'E-commerce App', desc: 'React + Firebase e-commerce app', link: '#' },
];

export const Projects = () => (
  <motion.section id="projects" className="py-20 px-4">
    <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map(proj => (
        <motion.a
          key={proj.title}
          href={proj.link}
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
          <p className="text-gray-400">{proj.desc}</p>
        </motion.a>
      ))}
    </div>
  </motion.section>
);
