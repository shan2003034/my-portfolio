import { motion } from "framer-motion";

const EducationItem = ({ logo, institution, qualification, period, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#111] p-10 rounded-3xl border border-gray-900 hover:border-[#deff9a]/20 transition-colors flex flex-col md:flex-row gap-10 items-center text-center md:text-left"
    >
      {/* 1. Logo Section - Larger & Clear */}
      <div className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0 bg-white p-6 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(222,255,154,0.1)]">
        {logo ? (
          <img src={logo} alt={institution} className="w-full h-full object-contain" />
        ) : (
          <div className="text-4xl text-black font-bold">L</div> // Placeholder if no logo
        )}
      </div>

      {/* 2. Topic, Subtopic, Period Section */}
      <div className="flex-grow space-y-4">
        <div>
          <h3 className="text-3xl font-extrabold text-white leading-tight">
            {institution}
          </h3>
          <h4 className="text-xl font-medium text-gray-300 mt-1">
            {qualification}
          </h4>
          <span className="text-sm font-bold text-[#deff9a] tracking-widest uppercase bg-[#deff9a]/10 px-4 py-2 rounded-full inline-block mt-4">
            {period}
          </span>
        </div>

        {/* 3. Description Section */}
        <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto md:mx-0 pt-4 border-t border-gray-800">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default EducationItem;