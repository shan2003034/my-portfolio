import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import myLogo from "../assets/logo.png"; 

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#deff9a] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: Text Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">
                About <span className="text-[#deff9a]">Me.</span>
              </h2>
              <div className="h-1 w-12 bg-[#deff9a] mt-2"></div>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-gray-400 font-light leading-relaxed">
              <p>
                Hello! I'm a passionate <span className="text-white font-medium">Full Stack Software Engineer</span>. 
                I am currently studying Software Engineering at the <span className="text-white font-medium">Java Institute for Advanced Technology</span> 
                and reading for my top-up degree from <span className="text-white font-medium">Birmingham City University</span>.
              </p>
              <p>
                I specialize in building diverse digital solutions, including scalable websites, standalone applications, and intuitive mobile apps. 
                Alongside software development, I have practical experience working with <span className="text-[#deff9a]">IoT technologies</span>.
              </p>
              <p>
                My focus is always on writing <span className="text-white font-medium">clean code</span> and delivering exceptional user experiences.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a href="#" className="text-2xl text-gray-500 hover:text-[#deff9a] transition-colors">
                <FaGithub />
              </a>
              <a href="#" className="text-2xl text-gray-500 hover:text-[#deff9a] transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="text-2xl text-gray-500 hover:text-[#deff9a] transition-colors">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Card/Image representation */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="bg-[#111] p-8 rounded-3xl border border-gray-900 hover:border-[#deff9a]/30 transition-colors">
                <h3 className="text-[#deff9a] font-bold text-sm uppercase tracking-widest mb-2">Education</h3>
                <p className="text-white font-medium">Java Institute & BCU</p>
              </div>
              <div className="bg-[#111] p-8 rounded-3xl border border-gray-900 hover:border-[#deff9a]/30 transition-colors">
                <h3 className="text-[#deff9a] font-bold text-sm uppercase tracking-widest mb-2">IoT</h3>
                <p className="text-white font-medium">Practical Experience</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-[#111] p-8 rounded-3xl border border-gray-900 hover:border-[#deff9a]/30 transition-colors">
                <h3 className="text-[#deff9a] font-bold text-sm uppercase tracking-widest mb-2">Code</h3>
                <p className="text-white font-medium">Clean & Scalable</p>
              </div>

              {/* 2. පින්තූරය ඇතුළත් කරන කොටස මෙන්න */}
              <div className="bg-[#111] p-6 rounded-3xl border border-gray-900 hover:border-[#deff9a]/30 transition-colors h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src={myLogo} 
                  alt="Personal Logo" 
                  className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity" 
                />
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;