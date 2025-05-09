import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext.jsx";
import { personalInfo } from "../data/personalInfo";
import axios from "axios";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { theme, themes } = useTheme();
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: `Hey there! 👋 I'm an AI assistant for Aadil's portfolio. Feel free to ask me about his skills, experience, or projects!`,
    },
  ]);

  const chatBodyRef = useRef();

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const toggleChatbot = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const generateResponse = async (query) => {
    try {
      const isGreeting = /^(hi|hello|hey|greetings|hi there|hello there)$/i.test(query.trim());
  
      const prompt = isGreeting ? 
        "Respond with a friendly, generic greeting for a portfolio AI assistant. Do not mention Aadil by name. Keep it under 15 words and sound welcoming." :
        `You are an AI assistant for Aadil's portfolio. Answer this question: "${query}"
  
  Based on this information:
  ${personalInfo}
  
  Response Guidelines:
  1. Be concise - keep responses under 100 words unless specifically asked for details
  2. Break long responses into short paragraphs
  3. Links are already in markdown format - use them as is
  4. For skills/technologies, group them by category with points
  5. If asking for clarification, list 2-3 clear options with points
  6. Speak as an informative, neutral assistant about Aadil in the third person`;
  
      const response = await axios.post(import.meta.env.VITE_API_URL, {
        contents: [{
          parts: [{ text: prompt }]
        }]
      });

      let formattedResponse = response.data.candidates[0].content.parts[0].text
        .replace(/[*_]/g, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

        
      return formattedResponse;
    } catch (err) {
      console.error(err);
      return "Sorry, I encountered an error. Please try again.";
    }
  };

  const handleSendMessage = async () => {
    if (!msg.trim()) return;

    setMessages((prev) => [...prev, { text: msg, role: "user" }]);
    setIsTyping(true);
    setMsg("");

    const response = await generateResponse(msg);
    setIsTyping(false);
    setMessages((prev) => [...prev, { role: "model", text: response }]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 w-[380px] h-[500px] rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md"
            style={{
              background: themes[theme].chatBackground || "rgba(17, 17, 17, 0.95)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
            }}
          >
            {/* Chat Header */}
            <div className="flex justify-between items-center p-2.5" style={{ background: "rgba(0, 0, 0, 0.8)" }}>
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <img src="/Chatbot.svg" className="w-8 h-8" alt="Chatbot" />
                </motion.div>
                <div className="font-bold text-white">AI Assistant</div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleChatbot}
                className="p-1 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <img src="/DownArrow.svg" className="h-6 w-6" alt="Close" />
              </motion.button>
            </div>

            {/* Chat Body */}
            <div
              ref={chatBodyRef}
              className="h-[330px] overflow-y-auto p-4 space-y-4 scroll-smooth chat-scrollbar"
              style={{ background: "transparent" }}
            >
              <AnimatePresence>
                {messages.map((message, index) =>
                  !message.hideInChat ? (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className={`flex ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.role === "user"
                            ? "bg-white text-black"
                            : themes[theme].chatMessageBackground || "bg-zinc-900 text-white"
                        }`}
                        style={{
                          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 0 40px rgba(0, 0, 0, 0.2)",
                        }}
                      >
                        {message.text}
                      </div>
                    </motion.div>
                  ) : null
                )}
              </AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-800 p-3 rounded-2xl">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                      }}
                      className="flex space-x-1"
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                      <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-white/10">
              <div className="relative">
                <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="w-full p-3 pr-12 rounded-xl bg-white/10 text-white placeholder-gray-400 resize-none"
                  style={{ minHeight: "50px", maxHeight: "100px" }}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSendMessage}
                  className="absolute right-2 bottom-4 p-2 rounded-full bg-white text-black hover:bg-gray-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M3.478 2.404a.75.75 0 00-.926.941l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.404z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChatbot}
        className="bg-white p-4 rounded-full cursor-pointer shadow-lg relative hover:bg-gray-100 transition-colors"
        style={{
          boxShadow: isOpen
            ? "none"
            : "0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2)",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <img src="/Chatbot.svg" className="w-6 h-6" alt="Chatbot" />
          )}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default Chatbot;
