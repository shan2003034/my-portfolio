import EducationItem from "./EducationItem";
import bcuLogo from "../assets/BCU logo.png"; 
import rahulaLogo from "../assets/rahula collage logo.png"; 
import JavaInsLogo from "../assets/java institute logo.png"; 

const Education = () => {
  return (
    <section id="education" className="py-24 bg-black text-white relativeSelection">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* Section Heading (Centered) */}
        <div className="text-center mb-20 inline-block w-full">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase">
            Education & <span className="text-[#deff9a]">Qualifications.</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#deff9a] mt-4 mx-auto"></div>
        </div>

        {/* List of Education Items (Centered) */}
        <div className="space-y-12">
          
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