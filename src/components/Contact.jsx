import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
      setTimeout(() => setResult(""), 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
   
    <section id="contact" className="py-16 lg:py-24 bg-[#050505] text-white relative overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[50%] bg-[#deff9a] rounded-t-full blur-[200px] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">

       
        <div className="text-center mb-12 lg:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            
            className="text-3xl md:text-5xl font-bold tracking-tight uppercase"
          >
            Get In <span className="text-[#deff9a]">Touch.</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-1.5 bg-[#deff9a] mt-4 mx-auto"
          ></motion.div>
          <p className="text-gray-500 mt-4 md:mt-6 font-light text-base md:text-lg max-w-xl mx-auto">
            Have a project in mind, need a software solution, or just want to say hi? Feel free to reach out.
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left Side: Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10 lg:space-y-12"
          >
            {/* Contact Details */}
            <div className="space-y-6 lg:space-y-8">
              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-[#111] border border-gray-800 rounded-full flex items-center justify-center text-xl md:text-2xl text-[#deff9a] group-hover:bg-[#deff9a] group-hover:text-black transition-all duration-300">
                  <FaEnvelope />
                </div>
               
                <div className="overflow-hidden">
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:shangajanayake7@gmail.com" className="text-base md:text-xl font-medium hover:text-[#deff9a] transition-colors break-all">
                    shangajanayake7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-[#111] border border-gray-800 rounded-full flex items-center justify-center text-xl md:text-2xl text-[#deff9a] group-hover:bg-[#deff9a] group-hover:text-black transition-all duration-300">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-base md:text-xl font-medium">+94 70 562 9772</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 group">
                <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 bg-[#111] border border-gray-800 rounded-full flex items-center justify-center text-xl md:text-2xl text-[#deff9a] group-hover:bg-[#deff9a] group-hover:text-black transition-all duration-300">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-base md:text-xl font-medium">Matara, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Social Links & Brand */}
            <div className="pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-500 uppercase tracking-widest mb-6 text-center lg:text-left">Connect with me</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <a href="https://www.linkedin.com/in/prasannalakshan" className="w-12 h-12 bg-[#111] border border-gray-800 rounded-xl flex items-center justify-center text-xl hover:bg-[#deff9a] hover:text-black hover:-translate-y-1 transition-all duration-300">
                  <FaLinkedin />
                </a>
                <a href="https://github.com/shan2003034" className="w-12 h-12 bg-[#111] border border-gray-800 rounded-xl flex items-center justify-center text-xl hover:bg-[#deff9a] hover:text-black hover:-translate-y-1 transition-all duration-300">
                  <FaGithub />
                </a>
                <a href="https://wa.me/94705629772" className="w-12 h-12 bg-[#111] border border-gray-800 rounded-xl flex items-center justify-center text-xl hover:bg-[#deff9a] hover:text-black hover:-translate-y-1 transition-all duration-300">
                  <FaWhatsapp />
                </a>
                <a href="https://www.facebook.com/share/1GLKbAA9eq/" className="w-12 h-12 bg-[#111] border border-gray-800 rounded-xl flex items-center justify-center text-xl hover:bg-[#deff9a] hover:text-black hover:-translate-y-1 transition-all duration-300">
                  <FaFacebook />
                </a>
              </div>

              
              <div className="mt-6 flex justify-center lg:justify-start">
                <a href="https://www.facebook.com/share/17PbovQj3z/" className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-gray-700 px-6 py-3 rounded-full hover:border-[#deff9a] transition-all duration-300 group">
                  <SiFacebook className="text-[#1877F2] text-xl" />
                  <span className="font-medium text-gray-300 group-hover:text-white text-sm md:text-base">Follow <strong className="text-white">Byte Code LK</strong></span>
                </a>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a0a0a] border border-gray-800/50 p-6 md:p-10 rounded-3xl shadow-2xl"
          >
            <form onSubmit={onSubmit} className="space-y-5 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                <div className="space-y-2">
                  <label className="text-xs md:text-sm text-gray-400 font-medium ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#111] text-white border border-gray-800 rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base focus:outline-none focus:border-[#deff9a] focus:ring-1 focus:ring-[#deff9a] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs md:text-sm text-gray-400 font-medium ml-1">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-[#111] text-white border border-gray-800 rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base focus:outline-none focus:border-[#deff9a] focus:ring-1 focus:ring-[#deff9a] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs md:text-sm text-gray-400 font-medium ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#111] text-white border border-gray-800 rounded-xl px-4 py-3 md:px-5 md:py-4 text-sm md:text-base focus:outline-none focus:border-[#deff9a] focus:ring-1 focus:ring-[#deff9a] transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#deff9a] text-black font-bold text-base md:text-lg py-3 md:py-4 rounded-xl hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(222,255,154,0.2)] mt-2"
              >
                Send Message
              </button>

              {/* Status Message */}
              {result && (
                <p className={`text-center font-medium mt-4 text-sm md:text-base ${result.includes("Success") ? "text-green-500" : "text-[#deff9a]"}`}>
                  {result}
                </p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;