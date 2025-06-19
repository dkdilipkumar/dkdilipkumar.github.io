
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "dilip.kumar.96995@gmail.com",
      link: "mailto:dilip.kumar.96995@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/dilip-kumar",
      link: "https://linkedin.com/in/dilip-kumar-327653308/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/dkdilipkumar",
      link: "https://github.com/dkdilipkumar"
    }
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800 mb-8 pb-2 border-b-2 border-gray-300">
        Contact
      </h2>
      <div className="space-y-4">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <motion.div
              key={contact.label}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Icon className="text-slate-600" size={20} />
              <span className="font-medium text-slate-700">{contact.label}:</span>
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                {contact.value}
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
