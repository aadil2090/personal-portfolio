import { motion } from "framer-motion";

const Skills = () => {
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.section
      id="skills"
      className="px-8 pb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex text-sm items-center relative">
        <div className="mr-4 text-gray-600">04/08</div>
        <div className="font-bold">NEXT CHAPTER</div>
        <div className="ml-4 absolute top-1.5 left-42">
          <img src="/NextIcon.svg" className="h-4" />
        </div>
      </div>
      <div className="md:w-full">
        <div className="text-5xl pb-16 pt-20 font-bold">SKILLS</div>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.8 }}
          className="text-xl grid grid-cols-1 md:grid-cols-2 gap-8  md:w-2/3 w-full"
        >
          {[
            { name: "React", level: 90 },
            { name: "JavaScript/TypeScript", level: 85 },
            { name: "Tailwind CSS", level: 85 },
            { name: "API Integration", level: 80 },
            { name: "C#/.NET", level: 75 },
            { name: "SQL", level: 75 },
            { name: "UI/UX Design", level: 80 },
            { name: "Performance Optimization", level: 85 }
          ].map((skill, index) => (
            <div key={index} className="py-4">
              <div className="flex justify-between">
                <div>{skill.name}</div>
                <div>{skill.level}%</div>
              </div>
              <div className="relative">
                <div className="absolute h-[3px] w-[100%] bg-white opacity-10"></div>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute h-[3px] bg-white"
                ></motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
