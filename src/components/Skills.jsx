import { motion } from "framer-motion";

// Icons
import { FaReact, FaJava, FaPhp, FaGithub } from "react-icons/fa";
import { SiFlutter, SiTailwindcss, SiSpringboot, SiMysql, SiSqlite, SiHibernate, SiFirebase, SiAndroidstudio, SiArduino } from "react-icons/si";
import { TbBrandHtml5, TbDeviceMobileCode, TbServer, TbDatabase, TbTools, TbRobot } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {

  const skillCategories = [
    {
      title: "Frontend & Mobile",
      icon: <TbDeviceMobileCode className="text-3xl text-[#deff9a]" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      skills: [
        { name: "React Native", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Flutter", icon: <SiFlutter className="text-[#02569B]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "HTML/CSS/JS", icon: <TbBrandHtml5 className="text-[#E34F26]" /> },
      ]
    },
    {
      title: "Backend Core",
      icon: <TbServer className="text-3xl text-[#deff9a]" />,
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      skills: [
        { name: "Java", icon: <FaJava className="text-[#ED8B00]" /> },
        { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
        { name: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
      ]
    },
    {
      title: "Databases & ORM",
      icon: <TbDatabase className="text-3xl text-[#deff9a]" />,
      colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
      skills: [
        { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
        { name: "SQLite", icon: <SiSqlite className="text-[#003B57]" /> },
        { name: "Hibernate", icon: <SiHibernate className="text-[#59666C]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
      ]
    },
    {
      title: "Development Tools",
      icon: <TbTools className="text-3xl text-[#deff9a]" />,
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      skills: [
        { name: "VS Code", icon: <VscVscode className="text-[#007ACC]" /> },
        { name: "Android Studio", icon: <SiAndroidstudio className="text-[#3DDC84]" /> },
        { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
        { name: "IntelliJ IDEA", icon: <FaJava className="text-gray-400" /> },
        { name: "Arduino IDE", icon: <SiArduino className="text-[#00979D]" /> },
      ]
    },
    {
      title: "AI Assistants",
      icon: <TbRobot className="text-3xl text-[#deff9a]" />,
      colSpan: "col-span-1 md:col-span-3 lg:col-span-3",
      skills: [
        { name: "ChatGPT", icon: <TbRobot className="text-green-500" /> },
        { name: "Gemini", icon: <TbRobot className="text-blue-500" /> },
        { name: "GitHub Copilot", icon: <FaGithub className="text-white" /> },
        { name: "Cursor IDE", icon: <TbTools className="text-gray-300" /> },
      ]
    }
  ];

  return (
    
    <section id="skills" className="py-16 lg:py-24 bg-[#050505] text-white relative overflow-hidden">

      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#deff9a] rounded-full blur-[250px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">

       
        <div className="text-center mb-12 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            className="text-3xl md:text-5xl font-bold tracking-tight uppercase"
          >
            Technical <span className="text-[#deff9a]">Arsenal.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1.5 bg-[#deff9a] mt-4 mx-auto"
          ></motion.div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              
              className={`bg-[#0a0a0a] border border-gray-800/50 rounded-3xl p-6 md:p-8 hover:border-[#deff9a]/30 transition-all duration-500 group ${category.colSpan}`}
            >
              
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="p-3 bg-[#111] rounded-2xl group-hover:bg-[#deff9a]/10 transition-colors">
                  {category.icon}
                </div>
             
                <h3 className="text-xl md:text-2xl font-bold text-white">{category.title}</h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                   
                    className="flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-[#111] border border-gray-800 rounded-full text-sm md:text-base text-gray-300 font-medium hover:text-black hover:bg-[#deff9a] hover:border-[#deff9a] hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <span className="text-base md:text-lg group-hover:scale-110 transition-transform">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;