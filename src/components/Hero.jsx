import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Madushanka Sandaruwan</h1>
      <h2 className="text-2xl md:text-4xl text-pink-500 font-semibold">
        <Typewriter
          words={['Web Developer', 'Mobile Developer', 'Full-Stack Web Apps']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </h2>
      <p className="mt-6 text-gray-400 max-w-xl">
        I build modern, responsive, and interactive web and mobile applications.
      </p>
    </motion.section>
  );
};
