
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Projects On GitHub",
      description: "Explore all my repositories including UI samples, utility apps, and learning tools.",
      link: "https://github.com/dkdilipkumar?tab=repositories"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl opacity-60"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-full">
            <Folder className="text-white" size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800">
            Projects
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <Github className="text-white" size={16} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                  <Github size={16} />
                  View on GitHub
                  <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
