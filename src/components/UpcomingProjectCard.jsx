import { motion } from "framer-motion";
import { TbClockHour4, TbStars } from "react-icons/tb";

const UpcomingProjectCard = ({ title, description, expectedDate, category }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }} // Hover කරද්දී කාඩ් එක පොඩ්ඩක් උඩට එනවා
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative bg-[#0a0a0a]/60 backdrop-blur-xl rounded-3xl border border-white/10 p-8 overflow-hidden hover:border-[#deff9a]/40 transition-colors duration-500 shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(222,255,154,0.15)]"
    >
      {/* Background Glow Effect (දකුණු කෙළවරේ උඩින් තියෙන ලස්සන එළිය) */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#deff9a]/10 rounded-full blur-[60px] group-hover:bg-[#deff9a]/25 transition-all duration-500"></div>

      <div className="relative z-10">
        <div className="flex flex-wrap gap-3 justify-between items-start mb-6">
          
          {/* Category Badge එක අලුත් Gradient පෙනුමකින් */}
          <span className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-black uppercase bg-gradient-to-r from-[#deff9a] to-[#c5f06a] px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(222,255,154,0.3)]">
            <TbStars className="text-sm" />
            {category}
          </span>
          
          {/* Expected Date එක Glassmorphism පෙනුමෙන් */}
          <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-300 text-xs font-medium backdrop-blur-md">
            <TbClockHour4 className="text-base text-[#deff9a]" />
            {expectedDate}
          </div>
          
        </div>
        
        {/* Title & Description */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#deff9a] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">
          {description}
        </p>
      </div>
      
      {/* Hover කරද්දී යටින් යන Animated ලයින් එක */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#deff9a]/80 to-transparent w-full opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
      
    </motion.div>
  );
};

export default UpcomingProjectCard;