import { motion } from "framer-motion";

const AboutMe = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const paraContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const paraVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="aboutme"
      className="px-8 pb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        variants={itemVariants}
        className="text-sm items-center relative"
      >
        <div className="flex">
          <div className="mr-4 text-gray-600">02/08</div>
          <div className="font-bold">NEXT CHAPTER</div>
          <div className="ml-4 absolute top-1.5 left-42">
            <img src="/NextIcon.svg" className="h-4" />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="text-5xl py-20 font-bold">ABOUT ME</div>

          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.8 }}
            className="text-xl flex flex-col gap-8"
          >
            <motion.p variants={paraVariants}>
              I'm a passionate frontend developer with a strong focus on React and modern web technologies. Currently working as a React Developer in Surat, Gujarat, I specialize in building full-scale web applications with emphasis on UI/UX and performance optimization.
            </motion.p>

            <motion.p variants={paraVariants}>
              With a Master's degree in Information Technology from DA-IICT and hands-on experience at APPGAMBiT, I've successfully built and launched multiple web applications, reducing API response times and implementing efficient solutions.
            </motion.p>

            <motion.p variants={paraVariants}>
              My expertise includes React, TypeScript, and modern frontend tools. I'm particularly interested in performance optimization and modern UI development, always staying updated with the latest web technologies and best practices.
            </motion.p>

            <motion.div variants={paraVariants} className="flex gap-8 mt-4">
              <div>
                <div className="text-6xl font-bold">4+</div>
                <div className="text-sm mt-2">COMPLETED PROJECTS</div>
              </div>
              <div>
                <div className="text-6xl font-bold">1+</div>
                <div className="text-sm mt-2">YEARS EXPERIENCE</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
