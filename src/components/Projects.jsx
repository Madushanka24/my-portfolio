import { motion } from "framer-motion";

const projects = [
  { title: "Portfolio Website", desc: "Personal portfolio built with React & Tailwind", link: "https://github.com/Madushanka24/my-portfolio.git" },
  { title: "Zouk Management System", desc: "Full-stack CRUD management system with MVC Architecture", link: "https://github.com/Madushanka24/ZOUK-Management-system-MVC-Architecture.git" },
  { title: "Food Mobile App", desc: "JavaScript + TypeScript food app", link: "https://github.com/Madushanka24/Food-App-With-React-Native.git" },
];

export const Projects = () => (
  <motion.section id="projects" className="py-20 px-4">
    <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

    {/* Project Cards */}
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((proj) => (
        <motion.a
          key={proj.title}
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
          <p className="text-gray-400">{proj.desc}</p>
        </motion.a>
      ))}
    </div>

    {/* View More Button */}
    <div className="mt-10 text-center">
      <a
        href="https://github.com/Madushanka24"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-indigo-500 text-white rounded-full font-semibold hover:bg-indigo-600 transition-colors shadow-lg hover:shadow-2xl"
      >
        View More Projects
      </a>
    </div>
  </motion.section>
);
