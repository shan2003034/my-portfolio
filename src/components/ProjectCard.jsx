import { motion } from "framer-motion";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      // cursor-pointer එකතු කර ඇත
      className="bg-[#111] rounded-3xl border border-gray-800 overflow-hidden hover:border-[#deff9a]/50 transition-all duration-500 group flex flex-col h-full cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(222,255,154,0.1)]"
      onClick={() => onClick(project)}
    >
      <div className="h-48 md:h-60 w-full bg-[#1a1a1a] relative overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-700 font-bold text-xl md:text-2xl">Image Placeholder</div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent"></div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-[#deff9a] transition-colors line-clamp-2">{project.title}</h3>
        
        {/* අකුරු පේළි 3කට පමණක් සීමා කර ඇත (line-clamp-3) */}
        <p className="text-sm text-gray-400 font-light leading-relaxed flex-grow line-clamp-3 mb-6">
          {project.description}
        </p>
        
        {/* View Details Text */}
        <div className="mt-auto border-t border-gray-800 pt-4">
            <span className="text-[#deff9a] text-sm font-bold group-hover:underline flex items-center gap-2">
              View Details 
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;