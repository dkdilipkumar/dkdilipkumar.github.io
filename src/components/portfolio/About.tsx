
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      className="py-16 px-4 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-slate-800 mb-6 pb-2 border-b-2 border-gray-300">
        About Me
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        I am a passionate Android developer building innovative, user-friendly apps with strong 
        fundamentals in Java, Kotlin, and Flutter. I enjoy clean architecture, performance 
        optimization, and delivering value to users through mobile experiences.
      </p>
    </motion.section>
  );
};

export default About;
