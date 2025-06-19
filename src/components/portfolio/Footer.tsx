
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer 
      className="bg-slate-900 text-white py-8 px-4 text-center mt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <p>&copy; 2025 DK. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
