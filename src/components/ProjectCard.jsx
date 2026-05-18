import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, image, techStack, githubLinks, liveLink }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#111] rounded-3xl border border-gray-800 overflow-hidden hover:border-[#deff9a]/50 transition-all duration-500 group flex flex-col h-full"
    >
      {/* Project Image Placeholder - Adjusted height for mobile */}
      <div className="h-48 md:h-60 w-full bg-[#1a1a1a] relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-700 font-bold text-xl md:text-2xl">Image Placeholder</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
      </div>

      {/* Adjusted padding for mobile */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        {/* Adjusted title size */}
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#deff9a] transition-colors">{title}</h3>
        <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-6 flex-grow">{description}</p>
        
        {/* Tech Stack Pills - Adjusted size for mobile */}
        <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
          {techStack.map((tech, index) => (
            <span key={index} className="text-[10px] md:text-xs font-bold text-black bg-[#deff9a] px-2 py-1 md:px-3 md:py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Links - Adjusted spacing */}
        <div className="flex gap-4 border-t border-gray-800 pt-4 md:pt-6">
          {githubLinks && githubLinks.map((repo, index) => (
             <a key={index} href={repo.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
               <FaGithub className="text-lg md:text-xl" />
               <span className="text-xs md:text-sm font-medium">{repo.name}</span>
             </a>
          ))}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#deff9a] hover:text-white transition-colors ml-auto">
              <FaExternalLinkAlt className="text-base md:text-lg" />
              <span className="text-xs md:text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;