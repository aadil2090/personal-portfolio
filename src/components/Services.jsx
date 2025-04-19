import { motion } from "framer-motion";

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.section
      id="services"
      className="px-8 pb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex text-sm items-center relative">
        <div className="mr-4 text-gray-600">03/08</div>
        <div className="font-bold">NEXT CHAPTER</div>
        <div className="ml-4 absolute top-1.5 left-42">
          <img src="/NextIcon.svg" className="h-4" />
        </div>
      </div>
      <div className="w-full">
        <div className="text-5xl py-20 font-bold">MY SERVICES</div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.8 }}
          className="text-xl grid grid-cols-1 md:grid-cols-3 md:gap-8 md:w-2/3 w-full"
        >
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="p-6 rounded-lg"
          >
            <div className="text-5xl pb-6 font-bold opacity-70">#1</div>
            <div className="text-2xl font-bold pb-6">Frontend Development</div>
            <div>
              Specialized in building modern web applications using React and related technologies. 
              Expert in creating responsive, performant UIs with a focus on:
              • Component architecture
              • State management
              • API integration
              • Performance optimization
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="p-6 rounded-lg"
          >
            <div className="text-5xl pb-6 font-bold opacity-70">#2</div>
            <div className="text-2xl font-bold pb-6">UI/UX Design</div>
            <div>
              Creating intuitive and beautiful user interfaces using modern design tools and frameworks:
              • Tailwind CSS expertise
              • Modern UI components
              • Responsive layouts
              • Interactive animations
              • User-centric design
            </div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="p-6 rounded-lg"
          >
            <div className="text-5xl pb-6 font-bold opacity-70">#3</div>
            <div className="text-2xl font-bold pb-6">Full Stack Solutions</div>
            <div>
              Experience in end-to-end web application development:
              • Backend integration (C#, .NET)
              • Database design (SQL)
              • Authentication systems
              • API development
              • Performance optimization
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
