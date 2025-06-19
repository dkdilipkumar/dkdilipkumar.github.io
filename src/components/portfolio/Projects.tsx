
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Learning Hub App",
      description: "A native Android app for learning Java, Kotlin, and Flutter with interactive UI.",
      link: "https://github.com/dkdilipkumar/learning-hub"
    },
    {
      title: "Task Manager",
      description: "Productivity app built using Jetpack Compose and Room database.",
      link: "https://github.com/dkdilipkumar/task-manager"
    },
    {
      title: "More Projects",
      description: "Explore all my repositories including UI samples, utility apps, and learning tools.",
      link: "https://github.com/dkdilipkumar?tab=repositories"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800 mb-8 pb-2 border-b-2 border-gray-300">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-xl font-semibold text-slate-800 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              <Github size={16} />
              View on GitHub
              <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
