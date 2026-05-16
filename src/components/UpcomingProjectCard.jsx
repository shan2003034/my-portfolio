import { motion } from "framer-motion";
import { TbClockHour4 } from "react-icons/tb";

const UpcomingProjectCard = ({ title, description, expectedDate, category }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#0a0a0a] rounded-3xl border-2 border-dashed border-gray-800 p-8 hover:border-[#deff9a]/30 transition-all duration-500 relative overflow-hidden"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold text-[#deff9a] tracking-widest uppercase bg-[#deff9a]/10 px-3 py-1 rounded-full">
          {category}
        </span>
        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
          <TbClockHour4 className="text-lg" />
          {expectedDate}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-500 font-light leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default UpcomingProjectCard;