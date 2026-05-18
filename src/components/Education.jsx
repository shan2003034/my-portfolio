import EducationItem from "./EducationItem";
import bcuLogo from "../assets/BCU logo.png"; 
import rahulaLogo from "../assets/rahula collage logo.png"; 
import JavaInsLogo from "../assets/java institute logo.png"; 
import { motion } from "framer-motion";

const Education = () => {
  return (
    
    <section id="education" className="py-16 lg:py-24 bg-black text-white relativeSelection">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        
        <div className="text-center mb-12 lg:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
           
            className="text-3xl md:text-5xl font-bold tracking-tight uppercase"
          >
            Education & <span className="text-[#deff9a]">Qualifications.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1.5 bg-[#deff9a] mt-4 mx-auto"
          ></motion.div>
        </div>

        {/* List of Education Items (Centered) */}
        <div className="space-y-6 max-w-5xl mx-auto">
          
          <EducationItem 
            logo={bcuLogo}
            institution="Birmingham City University"
            qualification="BSc (Hons) in Software Engineering (UK Top-Up)"
            period="Present"
            description="Currently completing my final year of study, focusing on advanced software principles, full-stack application development, and modern architectural patterns. This degree is validated and awarded by Birmingham City University, UK."
          />
          <EducationItem 
            logo={JavaInsLogo}
            institution="Software Engineering Studies"
            qualification="Java Institute for Advanced Technology"
            period="Present - 2023"
            description="Completed foundational studies in software development, programming logic, and practical application building."
          />
          <EducationItem 
            logo={rahulaLogo}
            institution="Rahula College, Matara"
            qualification="G.C.E. Advanced Level (Technology Stream)"
            period="2019 - 2021"
            description="Successfully completed secondary education with a focus on technology, laying the foundational knowledge for a career in engineering."
          />
          
        </div>

      </div>
    </section>
  );
};

export default Education;