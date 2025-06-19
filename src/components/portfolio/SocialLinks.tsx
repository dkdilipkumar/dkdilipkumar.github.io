
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const SocialLinks = () => {
  const socialPlatforms = [
    { name: "Instagram", url: "https://www.instagram.com/dkdilip94k/" },
    { name: "Threads", url: "https://www.threads.com/@dkdilip94k" },
    { name: "Twitter / X", url: "https://x.com/dilipdk1994" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/dilip-kumar-327653308/" },
    { name: "GitHub", url: "https://github.com/dkdilipkumar" },
    { name: "Dev.to", url: "https://dev.to/dilip_kumardk_b41b9418" },
    { name: "Medium", url: "https://medium.com/@dilip.kumar.96995" },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61575617745742" }
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-800 mb-8 pb-2 border-b-2 border-gray-300">
        Social Platforms
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {socialPlatforms.map((platform, index) => (
          <motion.a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center font-medium text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {platform.name}
            <ExternalLink size={14} />
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
