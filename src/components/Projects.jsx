import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import UpcomingProjectCard from "./UpcomingProjectCard";
import LeafyLaneEcommerce from "../assets/leafy lane  e commerce 2.webp"; 
import LeafyLaneMcommerce from "../assets/leafy lane m commerce.webp"; 
import LeafyLaneMcommerceAdminPanel from "../assets/leafy lane admin panel.webp"; 
import ZapChat from "../assets/zap chat.webp"; 
import CBCBank from "../assets/cbc.webp"; 
import BurgerHouse from "../assets/burger house.webp"; 
import BookClub from "../assets/the book club.webp"; 
import MediClinicPatientPortal from "../assets/medi clinic patient portal.webp"; 

const Projects = () => {

 
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadStep, setLoadStep] = useState(6);

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        
        setVisibleCount(3);
        setLoadStep(3);
      } else {
        
        setVisibleCount(6);
        setLoadStep(6);
      }
    };

    
    handleResize();

  }, []);

  const completedProjects = [
    {
      title: "Leafy Lane E-Commerce",
      description: "A comprehensive organic food e-commerce web platform featuring a secure database, intuitive user interface, and integrated payment processing.",
      image: LeafyLaneEcommerce,
      techStack: ["Java EE", "Hibernate", "MySQL", "PayHere"],
      githubLinks: [{ name: "GitHub Repo", url: "https://github.com/shan2003034/Leafy-Lane" }],
      liveLink: ""
    },
    {
      title: "Leafy Lane M-Commerce",
      description: "The dedicated Android mobile application for the Leafy Lane organic food store, featuring real-time syncing and map integration.",
      image: LeafyLaneMcommerce,
      techStack: ["Java", "Firebase", "Google Maps"],
      githubLinks: [{ name: "GitHub Repo", url: "https://github.com/shan2003034/Leafy-Lane-Android-Application" }],
      liveLink: ""
    },
    {
      title: "Leafy Lane M-Commerce Admin Panel",
      description: "A centralized management dashboard built to oversee operations, inventory, and analytics for the Leafy Lane M-Commerce app.",
      image: LeafyLaneMcommerceAdminPanel,
      techStack: ["Spring Boot", "Firestore"],
      githubLinks: [{ name: "GitHub Repo", url: "https://github.com/shan2003034/leafylane-android-application-admin-web" }],
      liveLink: ""
    },
    {
      title: "ZAP Chat App",
      description: "A cross-platform real-time chat application offering instant messaging capabilities powered by WebSockets.",
      image: ZapChat,
      techStack: ["React Native", "WebSockets", "MySQL"],
      githubLinks: [{ name: "GitHub Repo", url: "https://github.com/shan2003034/Zap-Chat-" }],
      liveLink: ""
    },
    {
      title: "CBC Banking System",
      description: "A robust standalone desktop application developed for bank staff to efficiently handle and monitor daily banking transactions.",
      image: CBCBank,
      techStack: ["Java Swing", "MySQL"],
      githubLinks: [{ name: "GitHub Repo", url: "https://github.com/Callisto-Software-Solution/CBC-Bank-System" }],
      liveLink: ""
    },
    {
     title: "Burger House POS",
      description: "A Point of Sale (POS) system built to handle sales processing and inventory management specifically for a bakery/fast-food shop.",
      image: BurgerHouse,
      techStack: ["Java Swing", "MySQL"],
      githubLinks: [{ name: "GitHub Repo", url: "https://github.com/shan2003034/Burger-House" }],
      liveLink: ""
    },
    {
     title: "The Book Club",
      description: "An online bookstore and e-commerce application allowing users to browse, purchase, and manage book collections securely.",
      image: BookClub,
      techStack: ["PHP", "MySQL","HTML/CSS"],
      githubLinks: [{ name: "GitHub Repo", url: "https://github.com/shan2003034/The-Book-Club-online-book-shop" }],
      liveLink: ""
    },
    {
     title: "MediClinic - Patient Portal",
      description: "A user-centric healthcare portal allowing patients to browse doctor specialties, check real-time availability, book channeling slots, download digital prescriptions, and securely view their medical history.",
      image: MediClinicPatientPortal,
      techStack: ["React.js", "Tailwind CSS","Axios","Vite"],
      githubLinks: [{ name: "GitHub Repo", url: "https://github.com/shan2003034/mediclinic-patient-portal" }],
      liveLink: ""
    }
  ];

  const upcomingProjects = [
    {
      title: "MediClinic Staff Management Portal",
      category: "Healthcare & Enterprise System",
      expectedDate: "Ongoing",
      description: "A modern, role-based dashboard application tailored for clinic receptionists and medical practitioners. It streamlines clinical workflows with modules for live appointment queues, instant patient registry, doctor schedule filtering, and dynamic financial summaries."
    },
    {
      title: "MediClinic Enterprise Backend Engine",
      category: "System Architecture & API Development",
      expectedDate: "Ongoing",
      description: "A secure, robust RESTful API layer built to orchestrate clinical business logic. Features secure JWT authentication, relational database mapping for multi-entity clinic workflows, automatic queue number generation, and high-performance filtering endpoints."
    }
  ];

  
  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + loadStep);
  };

  return (
    <section id="projects" className="py-16 lg:py-24 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Main Heading */}
        <div className="text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight uppercase"
          >
            Featured <span className="text-[#deff9a]">Projects.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1.5 bg-[#deff9a] mt-4 mx-auto"
          ></motion.div>
          <p className="text-gray-500 mt-4 md:mt-6 font-light text-base md:text-lg max-w-2xl mx-auto">
            A showcase of my full-stack applications, mobile developments, and ongoing innovations.
          </p>
        </div>

        {/* 1. Completed Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
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
          <div className="flex justify-center mb-16 md:mb-24">
            <button
              onClick={handleLoadMore}
              className="bg-[#111] text-white border border-[#deff9a]/50 hover:bg-[#deff9a] hover:text-black hover:border-[#deff9a] px-8 py-3 md:px-10 md:py-4 rounded-full text-sm md:text-base font-bold transition-all duration-300 shadow-lg"
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
          className={`pt-12 md:pt-16 border-t border-gray-900 ${visibleCount >= completedProjects.length ? 'mt-16 md:mt-24' : ''}`}
        >
          <div className="flex items-center gap-4 mb-8 md:mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white">What's <span className="text-gray-500">Next?</span></h3>
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