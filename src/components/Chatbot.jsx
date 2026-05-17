import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { Player } from '@lottiefiles/react-lottie-player';
import robotAnimation from '../assets/robot.json';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hi! I'm Lakshan's AI Assistant. Ask me anything about his skills or projects!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessages((prev) => [...prev, { role: "ai", content: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: "ai", content: "Sorry, I'm having connection issues right now." }]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, { role: "ai", content: "Oops! Something went wrong." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end">
      
      {/* Chat Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-[#111] border border-gray-800 rounded-2xl w-[85vw] sm:w-96 shadow-2xl overflow-hidden mb-4 mr-2 sm:mr-16"
          >
           
            <div className="bg-gray-900 px-4 py-3 flex justify-between items-center border-b border-gray-800">
              <div className="flex items-center gap-2">
                <FaRobot className="text-[#deff9a] text-xl" />
                <span className="text-white font-semibold">AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <FaTimes />
              </button>
            </div>

            {/* Messages Area */}
            <div className="h-80 p-4 overflow-y-auto flex flex-col gap-3 scrollbar-thin scrollbar-thumb-gray-800">
              {messages.map((msg, index) => (
                <div key={index} className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${msg.role === 'ai' ? 'bg-gray-800 text-gray-200 self-start rounded-tl-none' : 'bg-[#deff9a] text-black self-end rounded-tr-none font-medium'}`}>
                  {msg.content}
                </div>
              ))}
              {isLoading && (
                <div className="bg-gray-800 text-gray-400 text-xs px-4 py-2 self-start rounded-2xl rounded-tl-none animate-pulse">
                  Typing...
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 border-t border-gray-800 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="flex-1 bg-gray-900 border border-gray-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[#deff9a] transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-[#deff9a] text-black p-3 rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center focus:outline-none z-50"
      >
        {isOpen ? (
         
          <div className="bg-[#deff9a] text-black w-14 h-14 rounded-full shadow-[0_0_20px_rgba(222,255,154,0.3)] flex items-center justify-center hover:shadow-[0_0_30px_rgba(222,255,154,0.5)] transition-shadow duration-300">
            <FaTimes className="text-2xl" /> 
          </div>
        ) : (
         
          <div className="w-25 h-25 sm:w-40 sm:h-40 drop-shadow-[0_0_15px_rgba(222,255,154,0.3)]">
             <Player autoplay loop src={robotAnimation}  />
          </div>
        )}
      </motion.button>

    </div>
  );
};

export default Chatbot;