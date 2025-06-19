
import { motion } from "framer-motion";
import { Code, Smartphone, Database, Palette, Zap, Globe } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Java", icon: Code, color: "from-orange-500 to-red-500" },
    { name: "Kotlin", icon: Code, color: "from-purple-500 to-indigo-500" },
    { name: "Jetpack Compose", icon: Palette, color: "from-green-500 to-teal-500" },
    { name: "Flutter", icon: Smartphone, color: "from-blue-500 to-cyan-500" },
    { name: "Firebase", icon: Database, color: "from-yellow-500 to-orange-500" },
    { name: "React Native", icon: Globe, color: "from-pink-500 to-rose-500" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl opacity-60"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
            <Zap className="text-white" size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800">
            Skills & Technologies
          </h2>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="group relative"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center font-semibold text-slate-700 hover:shadow-xl transition-all duration-300">
                  <div className={`inline-flex p-3 bg-gradient-to-r ${skill.color} rounded-full mb-3`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <div className="text-slate-800 font-semibold">{skill.name}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
