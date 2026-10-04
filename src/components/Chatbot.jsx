import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPaperPlane } from 'react-icons/fa'; 
import { Player } from '@lottiefiles/react-lottie-player';
import robotAnimation from '../assets/robot.json';


import BotProfileImage from '../assets/chatbot.jpg'; 

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", content: "Hi! I'm Lakshan's AI Assistant. Ask me anything about his skills or projects!" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

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
    <div className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 flex flex-col items-end">
      
      {/* Chat Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            /* පහළ Button එක නැති නිසා bottom-0 ලෙස වෙනස් කර ඇත */
            className="absolute bottom-0 right-0 w-[calc(100vw-2rem)] sm:w-[380px] h-[70vh] sm:h-[550px] max-h-[600px] flex flex-col bg-[#0a0a0a]/70 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden origin-bottom-right"
          >
            
            {/* Sleek Header */}
            <div className="px-5 py-4 flex justify-between items-center bg-white/5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative">
                  {/* Icon එක වෙනුවට Image එක යොදා ඇත */}
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-[#1a1a1a] flex items-center justify-center border border-[#deff9a]/30 shadow-[0_0_15px_rgba(222,255,154,0.15)]">
                    <img src={BotProfileImage} alt="AI Bot" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#deff9a] rounded-full border-2 border-[#0a0a0a] animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">AI Assistant</h3>
                  <p className="text-xs text-gray-400 font-light">Online & Ready</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
              >
                <FaTimes/>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={index} 
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed shadow-lg ${
                    msg.role === 'ai' 
                      ? 'bg-white/10 text-gray-200 self-start rounded-2xl rounded-tl-sm border border-white/5 backdrop-blur-md' 
                      : 'bg-gradient-to-r from-[#deff9a] to-[#c5f06a] text-black self-end rounded-2xl rounded-tr-sm font-medium shadow-[0_4px_15px_rgba(222,255,154,0.2)]'
                  }`}
                >
                  {msg.content}
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isLoading && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white/10 border border-white/5 backdrop-blur-md self-start rounded-2xl rounded-tl-sm px-4 py-4 flex gap-1.5 items-center shadow-lg"
                >
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Premium Input Form */}
            <form onSubmit={handleSend} className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-black/40 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#deff9a]/50 focus:bg-black/60 transition-all shadow-inner"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-tr from-[#deff9a] to-[#c5f06a] text-black w-11 h-11 flex items-center justify-center rounded-full hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 shadow-[0_0_15px_rgba(222,255,154,0.3)] flex-shrink-0"
              >
                <FaPaperPlane className="text-sm ml-[-2px]"/>
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button (Chat එක Open නැති වෙලාවට විතරක් පෙන්වයි) */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(true)}
          className="relative z-50 flex items-center justify-center focus:outline-none"
        >
          <div className="w-20 h-20 sm:w-28 sm:h-28 drop-shadow-[0_0_15px_rgba(222,255,154,0.3)]">
             <Player autoplay loop src={robotAnimation}/>
          </div>
        </motion.button>
      )}

    </div>
  );
};

export default Chatbot;