import { motion } from 'framer-motion';

const education = [
  { year: '2023 - 2025', degree: 'BSc in Software Engineering HND', school: 'IJSE Institute' },
  { year: '2019 - 2021', degree: 'Advanced Level', school: 'Prince Of Wales Collage' },
  { year: '2018', degree: 'Ordinary Level', school: 'Prince Of Wales Collage' },
];

export const Education = () => (
  <motion.section id="education" className="py-20 px-4 max-w-5xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
    <div className="flex flex-col gap-6">
      {education.map((edu, i) => (
        <motion.div
          key={i}
          className="bg-gray-800 p-6 rounded-xl shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-pink-500 font-semibold">{edu.year}</p>
          <h3 className="text-xl font-bold">{edu.degree}</h3>
          <p className="text-gray-400">{edu.school}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);
