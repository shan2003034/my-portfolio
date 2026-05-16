import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import UpcomingProjectCard from "./UpcomingProjectCard";

const Projects = () => {
 
  const [visibleCount, setVisibleCount] = useState(6);

  // 1. Completed Projects Data
  const completedProjects = [
    {
      title: "Leafy Lane",
      description: "An organic food e-commerce platform featuring a native Android application and a robust enterprise-level backend. Designed to connect users with fresh, organic products seamlessly.",
      image: "", 
      techStack: ["Android (Java)", "Spring Boot", "MySQL", "Hibernate"],
      githubLinks: [
        { name: "Frontend Repo", url: "#" },
        { name: "Backend Repo", url: "#" }
      ],
      liveLink: "" 
    },
    {
      title: "Zap Chat",
      description: "A real-time cross-platform chat application providing instant messaging capabilities. Features a smooth UI and reliable backend infrastructure for real-time data sync.",
      image: "", 
      techStack: ["React Native", "Java", "Hibernate"],
      githubLinks: [{ name: "GitHub", url: "#" }],
      liveLink: ""
    },
    {
      title: "Burger House",
      description: "A comprehensive desktop application designed for managing a burger shop's daily operations, including billing, Jasper reports, and barcode generation.",
      image: "", 
      techStack: ["Java (Desktop)", "MySQL", "Jasper Reports"],
      githubLinks: [{ name: "GitHub", url: "#" }],
      liveLink: ""
    },
    
    {
      title: "Portfolio Website",
      description: "My personal portfolio website designed with React and Tailwind CSS.",
      image: "", techStack: ["React", "Tailwind CSS"], githubLinks: [], liveLink: ""
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin panel for managing products, orders, and users.",
      image: "", techStack: ["React", "Node.js"], githubLinks: [], liveLink: ""
    },
    {
      title: "Weather App",
      description: "A simple weather application using OpenWeather API.",
      image: "", techStack: ["JavaScript", "API"], githubLinks: [], liveLink: ""
    },
    {
      title: "Task Manager",
      description: "A to-do list app with advanced categorization.",
      image: "", techStack: ["Flutter", "Firebase"], githubLinks: [], liveLink: ""
    }
  ];

  // 2. Upcoming Projects Data
  const upcomingProjects = [
    {
      title: "Byte Code LK Platform",
      category: "EdTech & Content",
      expectedDate: "Ongoing",
      description: "A comprehensive digital platform and community hub focused on sharing software development knowledge, tutorials, and tech content."
    },
    {
      title: "Smart Agriculture IoT System",
      category: "IoT & Hardware",
      expectedDate: "In Research",
      description: "An integrated hardware and software solution using ESP32/Arduino for smart greenhouse management and acoustic pest detection."
    }
  ];

  
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <section id="projects" className="py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        
        {/* Main Heading */}
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase"
          >
            Featured <br/> <span className="text-[#deff9a]">Projects.</span>
          </motion.h2>
          <p className="text-gray-500 mt-6 font-light text-lg max-w-2xl mx-auto">
            A showcase of my full-stack applications, mobile developments, and ongoing innovations.
          </p>
        </div>

        {/* 1. Completed Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
         
          {completedProjects.slice(0, visibleCount).map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              techStack={project.techStack}
              githubLinks={project.githubLinks}
              liveLink={project.liveLink}
            />
          ))}
        </div>

        
        {visibleCount < completedProjects.length && (
          <div className="flex justify-center mb-24">
            <button 
              onClick={handleLoadMore}
              className="bg-[#111] text-white border border-[#deff9a]/50 hover:bg-[#deff9a] hover:text-black hover:border-[#deff9a] px-10 py-4 rounded-full font-bold transition-all duration-300 shadow-lg"
            >
              See More Projects
            </button>
          </div>
        )}

        {/* 2. Upcoming Projects Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`pt-16 border-t border-gray-900 ${visibleCount >= completedProjects.length ? 'mt-24' : ''}`}
        >
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-3xl font-bold text-white">What's <span className="text-gray-500">Next?</span></h3>
            <div className="flex-grow h-px bg-gray-900"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingProjects.map((project, index) => (
              <UpcomingProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                expectedDate={project.expectedDate}
                category={project.category}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;