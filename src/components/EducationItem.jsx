import { motion } from "framer-motion";

const EducationItem = ({ logo, institution, qualification, period, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      
      className="bg-[#0a0a0a] p-6 md:p-8 rounded-3xl border border-gray-800 hover:border-[#deff9a]/30 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center md:items-start relative group"
    >
      {/* 1. Logo Section - Smaller, Sleek & Rounded Box */}
      <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-white p-3 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
        {logo ? (
          <img src={logo} alt={institution} className="w-full h-full object-contain" />
        ) : (
          <div className="text-2xl text-black font-bold">L</div> 
        )}
      </div>

      
      <div className="flex-grow w-full text-center md:text-left">
        
        
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-4 mb-2">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#deff9a] transition-colors">
              {institution}
            </h3>
            <h4 className="text-base md:text-lg font-medium text-gray-400 mt-1">
              {qualification}
            </h4>
          </div>
          
          {/* Period Badge */}
          <span className="inline-block text-xs font-bold text-[#deff9a] tracking-widest uppercase bg-[#deff9a]/10 px-4 py-2 rounded-full whitespace-nowrap h-fit mt-2 md:mt-0 border border-[#deff9a]/20">
            {period}
          </span>
        </div>

        
        <p className="text-sm md:text-base text-gray-500 font-light leading-relaxed max-w-3xl mt-4 pt-4 border-t border-gray-800/50">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default EducationItem;