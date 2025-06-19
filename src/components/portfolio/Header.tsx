
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4 text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-5xl md:text-6xl font-bold mb-4"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        DK
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Android Developer | Java, Kotlin, Flutter
      </motion.p>
    </motion.header>
  );
};

export default Header;
