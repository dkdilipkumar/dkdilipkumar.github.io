
import { motion } from "framer-motion";
import { User, Heart, Code2 } from "lucide-react";

const About = () => {
  return (
    <motion.section 
      className="py-16 px-4 max-w-4xl mx-auto relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl opacity-50"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
            <User className="text-white" size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800 pb-2 border-b-2 border-gradient-to-r from-purple-500 to-pink-500">
            About Me
          </h2>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-purple-100">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
              <Heart className="text-white" size={20} />
            </div>
            <p className="text-lg text-gray-700 leading-relaxed flex-1">
              I am a passionate Android developer building innovative, user-friendly apps with strong 
              fundamentals in Java, Kotlin, and Flutter. I enjoy clean architecture, performance 
              optimization, and delivering value to users through mobile experiences.
            </p>
          </div>
          
          <div className="flex items-center gap-2 mt-6 pt-6 border-t border-purple-100">
            <Code2 className="text-purple-500" size={20} />
            <span className="text-purple-600 font-medium">Building the future, one app at a time</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
