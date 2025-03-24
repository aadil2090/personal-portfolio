import { motion } from "framer-motion";

const Education = () => {
  const entryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="education"
      className="px-8 pb-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="flex items-center text-sm mb-12">
        <div className="mr-4 text-gray-600">05/07</div>
        <div className="font-bold">NEXT CHAPTER</div>
      </div>

      {/* Main Content */}
      <div className="w-2/3">
        {/* Title */}
        <div className="text-5xl pb-16 font-bold">EDUCATION</div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 w-[2px] h-full bg-white"></div>

          {/* Education 1 */}
          <motion.div
            variants={entryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="ml-8 mb-12"
          >
            <div className="flex items-center mb-4">
              <div className="text-gray-500 text-sm w-20">
                2023
              </div>
              <div className="ml-12">
                <div className="text-2xl font-bold">
                  DA-IICT
                </div>
                <div className="text-lg text-gray-300">
                  MSc. INFORMATION TECHNOLOGY
                </div>
              </div>
            </div>
            <div className="ml-32 text-gray-300">
              • GPA: 7.1
              • Built a Ride Sharing Web Application as a major project
              • Focus on modern web technologies and software development
              • Specialized in frontend development and UI/UX design
              • Active member of the Web Development Club
            </div>
          </motion.div>

          {/* Education 2 */}
          <motion.div
            variants={entryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="ml-8"
          >
            <div className="flex items-center mb-4">
              <div className="text-gray-500 text-sm w-20">
                2021
              </div>
              <div className="ml-12">
                <div className="text-2xl font-bold">
                  SDJ INTERNATIONAL COLLEGE
                </div>
                <div className="text-lg text-gray-300">
                  BACHELOR OF COMPUTER APPLICATIONS
                </div>
              </div>
            </div>
            <div className="ml-32 text-gray-300">
              • GPA: 7.5
              • Developed The Tajmahal Beverages e-commerce platform
              • Core focus on programming fundamentals and web development
              • Led the college coding club and organized tech events
              • Received recognition for academic excellence
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
