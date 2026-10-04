import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const ProjectModal = ({ isOpen, onClose, project }) => {
  return (
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          /* z-index එක 9999 දක්වා වැඩි කළා (AI Bot සහ Navbar එකට උඩින් එන්න) */
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            /* ප්‍රධාන කොටුව overflow-hidden කර ඇත. Scroll වෙන්නේ ඇතුළත කොටස පමණි */
            className="bg-[#111] border border-gray-800 rounded-2xl md:rounded-3xl w-full max-w-4xl max-h-[85vh] md:max-h-[90vh] flex flex-col relative shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - දැන් මේක Scroll වෙන්නේ නැහැ! හැමවෙලේම උඩින් පෙනේවි */}
            <button 
              onClick={onClose}
              className="absolute top-3 right-3 md:top-4 md:right-4 z-[100] w-10 h-10 bg-black/70 hover:bg-[#deff9a] hover:text-black text-white border border-gray-700 hover:border-[#deff9a] rounded-full flex items-center justify-center transition-all backdrop-blur-md shadow-lg"
            >
              <FaTimes className="text-sm md:text-base" />
            </button>

            {/* මේ ඇතුළේ තියෙන කොටස විතරයි දැන් Scroll වෙන්නේ (Inner Scrollable Container) */}
            <div className="w-full h-full overflow-y-auto flex flex-col md:flex-row">
              
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-56 sm:h-64 md:h-auto bg-[#1a1a1a] relative flex-shrink-0">
                 {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-700 font-bold text-xl">No Image</div>
                  )}
                  {/* පින්තූරය පහළට කළු පාට වෙලා අකුරු වලට මික්ස් වෙන්න අලුත් Gradient එකක් */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent md:hidden"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-[#111] via-[#111]/20 to-transparent hidden md:block"></div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col flex-grow">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 pr-8 md:pr-0 group-hover:text-[#deff9a] transition-colors">{project.title}</h3>
                
                <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed mb-6 md:mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6 md:mb-8">
                  <h4 className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 mb-2 md:mb-3 font-bold">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="text-[10px] md:text-xs font-bold text-black bg-[#deff9a] px-3 py-1.5 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links - Mobile වලදී Button දිගටම පෙන්වයි */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 border-t border-gray-800 pt-5 md:pt-6 mt-auto">
                   {project.githubLinks && project.githubLinks.map((repo, index) => (
                      <a key={index} href={repo.url} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2 text-gray-300 hover:text-white bg-[#1a1a1a] border border-gray-700 hover:border-gray-500 px-4 py-3 rounded-xl transition-all duration-300 w-full sm:w-auto">
                        <FaGithub className="text-lg" />
                        <span className="text-sm font-medium">{repo.name}</span>
                      </a>
                   ))}
                   {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex justify-center items-center gap-2 text-black hover:text-black bg-[#deff9a] border border-[#deff9a] hover:bg-white px-4 py-3 rounded-xl transition-all duration-300 w-full sm:w-auto">
                        <FaExternalLinkAlt className="text-lg" />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                   )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;