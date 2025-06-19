
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "dilip.kumar.96995@gmail.com",
      link: "mailto:dilip.kumar.96995@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/dilip-kumar",
      link: "https://linkedin.com/in/dilip-kumar-327653308/",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/dkdilipkumar",
      link: "https://github.com/dkdilipkumar",
      color: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 rounded-3xl opacity-60"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
            <MessageCircle className="text-white" size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800">
            Get In Touch
          </h2>
        </div>
        
        <div className="space-y-4">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.label}
                className="group relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="relative flex items-center gap-4 p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
                  <div className={`p-3 bg-gradient-to-r ${contact.color} rounded-full`}>
                    <Icon className="text-white" size={20} />
                  </div>
                  <div className="flex-1">
                    <span className="font-semibold text-slate-800 block">{contact.label}</span>
                    <a
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-slate-800 transition-colors duration-200 text-sm"
                    >
                      {contact.value}
                    </a>
                  </div>
                  <ExternalLink className="text-slate-400 group-hover:text-slate-600 transition-colors duration-200" size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
