import { motion } from "framer-motion";

const Projects = () => {
  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, type: "spring", stiffness: 100 },
    },
  };
  return (
    <motion.section
      id="projects"
      className="px-8 pb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex text-sm items-center relative">
        <div className="mr-4 text-gray-600">07/08</div>
        <div className="font-bold">NEXT CHAPTER</div>
        <div className="ml-4 absolute top-1.5 left-42">
          <img src="/NextIcon.svg" className="h-4" />
        </div>
      </div>
      <div className="w-[75%]">
        <div className="text-5xl pb-16 pt-20 font-bold">PROJECTS</div>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.8 }}
          className="text-xl grid grid-cols-3 gap-8"
        >
          <motion.div
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-lg cursor-pointer overflow-hidden"
            onClick={() => window.open('https://tangerine-boba-abe4af.netlify.app/', '_blank')}
          >
            <img
              src="/Ride-Share.png"
              className="h-44 border-2 border-white rounded-2xl transition-transform duration-300 hover:scale-110"
            />
            <div className="font-bold text-2xl pt-4 pb-1 px-2">Ride Share</div>
            <div className="px-2">Real-time Ride Hailing Platform</div>
            <div className="px-2 text-sm text-gray-300 mt-2">
              Built with React & Node.js • Interactive Maps • Real-time Booking
            </div>
            <div className="font-bold text-sm py-3 px-2">FULL STACK</div>
          </motion.div>
          <motion.div
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-lg cursor-pointer"
            onClick={() => window.open('https://github.com/aadil2090/Tajmahal-Beverages', '_blank')}
          >
            <img
              src="/TajmahalBeverages.png"
              className="h-44 border-2 border-white rounded-2xl w-full"
            />
            <div>
              <div className="font-bold text-2xl pt-4 pb-1 px-2">
                Tajmahal Beverages
              </div>
              <div className="px-2">E-Commerce Platform</div>
              <div className="px-2 text-sm text-gray-300 mt-2">
                ASP.NET & SQL Server • Secure Authentication • Payment Integration
              </div>
            </div>
            <div className="font-bold text-sm py-3 px-2">
              FULL STACK
            </div>
          </motion.div>
          <motion.div
            variants={projectVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
            }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-lg cursor-pointer"
            onClick={() => window.open('https://personal-portfolio-beta-inky.vercel.app/', '_blank')}
          >
            <img
              src="/Portfolio.png"
              className="h-44 border-2 border-white rounded-2xl"
            />
            <div>
              <div className="font-bold text-2xl pt-4 pb-1 px-2">
                Personal Portfolio
              </div>
              <div className="px-2">Modern Portfolio Website</div>
              <div className="px-2 text-sm text-gray-300 mt-2">
                React & Tailwind • AI Chatbot • Responsive Design
              </div>
            </div>
            <div className="font-bold text-sm py-3 px-2">FRONTEND</div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
