
import { motion } from "framer-motion";
import { Code, Smartphone, Palette } from "lucide-react";

const Header = () => {
  return (
    <motion.header 
      className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 px-4 text-center relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="relative z-10">
        <motion.div
          className="flex justify-center gap-4 mb-6"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Code className="text-purple-300" size={32} />
          <Smartphone className="text-blue-300" size={32} />
          <Palette className="text-pink-300" size={32} />
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Dilip Kumar
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Android Developer | Java, Kotlin, Flutter
        </motion.p>
      </div>
    </motion.header>
  );
};

export default Header;
