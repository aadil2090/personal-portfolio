import { motion } from "framer-motion";

const Experiences = () => {
  // Animation variants for entries
  const entryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="experiences"
      className="px-8 pb-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <div className="flex items-center text-sm mb-12">
        <div className="mr-4 text-gray-600">05/08</div>
        <div className="font-bold">NEXT CHAPTER</div>
      </div>

      {/* Main Content */}
      <div className="w-full">
        {/* Title */}
        <div className="text-5xl pb-16 font-bold">EXPERIENCES</div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */} 
          <div className="absolute left-4 top-0 w-[2px] h-full bg-white"></div>

          {/* Experience 1 */}
          <motion.div
            variants={entryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="ml-8 mb-12 w-full md:w-2/3"
          >
            <div className="flex items-center mb-4">
              <div className="text-gray-500 text-sm w-20">
                NOV 2023 - FEB 2025
              </div>
              <div className="ml-12">
                <div className="text-2xl font-bold">APPGAMBIT</div>
                <div className="text-lg text-gray-300">REACT DEVELOPER</div>
              </div>
            </div>
            <div className="ml-32 text-gray-300">
              • Built & launched 4 full-scale web applications from scratch <br />
              • Developed Guardian Anjel - a real-time Military Incident Command Dashboard <br />
              • Engineered Active Inventory - reducing manual errors by 70% <br />
              • Created Shore Simple - a rental listing platform with interactive maps <br />
              • Collaborated using Git, Asana, and Agile methodologies
            </div>
          </motion.div>

          {/* Experience 2 */}
          <motion.div
            variants={entryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="ml-8"
          >
            <div className="flex items-center mb-4">
              <div className="text-gray-500 text-sm w-20">
                JAN 2023 - JULY 2023
              </div>
              <div className="ml-12">
                <div className="text-2xl font-bold">
                  TRIPTA INNOVATIONS PVT. LTD.
                </div>
                <div className="text-lg text-gray-300">
                  SOFTWARE DEVELOPER INTERN
                </div>
              </div>
            </div>
            <div className="ml-32 text-gray-300">
              • Enhanced Radix Accounting Software using C# and .NET <br />
              • Improved report generation by 20% <br />
              • Developed authentication & role-based access <br />
              • Refactored SQL queries for faster database performance
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experiences;
