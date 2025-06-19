
import { motion } from "framer-motion";
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 text-white py-12 px-4 text-center mt-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
      <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code className="text-purple-300" size={20} />
          <span className="text-gray-300">Made with</span>
          <Heart className="text-red-400 animate-pulse" size={16} />
          <span className="text-gray-300">by Dilip Kumar</span>
        </div>
        <p className="text-gray-400">&copy; 2025 Dilip Kumar. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
