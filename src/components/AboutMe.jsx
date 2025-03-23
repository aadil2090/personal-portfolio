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
        <div className="flex text-sm items-center relative">
          <div className="mr-4 text-gray-600">01/10</div>
          <div className="font-bold">NEXT CHAPTER</div>
          <div className="ml-4 absolute top-1.5 left-42">
            <img src="/NextIcon.svg" className="h-4" />
          </div>
        </div>
        <div className="w-2/3">
          <div className="text-5xl py-20 font-bold">ABOUT ME</div>

          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.8 }}
            className="text-xl flex flex-col gap-8"
          >
            <motion.p variants={paraVariants}>
              I'm freelance webdeveloper lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </motion.p>
            <motion.p variants={paraVariants}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </motion.p>
            <motion.p variants={paraVariants}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna. Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et
              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
