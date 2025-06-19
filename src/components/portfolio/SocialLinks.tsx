
import { motion } from "framer-motion";
import { ExternalLink, Share2 } from "lucide-react";

const SocialLinks = () => {
  const socialPlatforms = [
    { name: "Instagram", url: "https://www.instagram.com/dkdilip94k/", color: "from-pink-500 to-rose-500" },
    { name: "Threads", url: "https://www.threads.com/@dkdilip94k", color: "from-gray-800 to-black" },
    { name: "Twitter / X", url: "https://x.com/dilipdk1994", color: "from-blue-400 to-blue-600" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/dilip-kumar-327653308/", color: "from-blue-600 to-indigo-600" },
    { name: "GitHub", url: "https://github.com/dkdilipkumar", color: "from-gray-700 to-gray-900" },
    { name: "Dev.to", url: "https://dev.to/dilip_kumardk_b41b9418", color: "from-black to-gray-800" },
    { name: "Medium", url: "https://medium.com/@dilip.kumar.96995", color: "from-green-600 to-green-800" },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61575617745742", color: "from-blue-500 to-blue-700" }
  ];

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto relative">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 rounded-3xl opacity-60"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full">
            <Share2 className="text-white" size={24} />
          </div>
          <h2 className="text-3xl font-bold text-slate-800">
            Connect With Me
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${platform.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50 text-center font-medium text-slate-700 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-semibold">{platform.name}</span>
                  <ExternalLink size={12} className="opacity-60 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
