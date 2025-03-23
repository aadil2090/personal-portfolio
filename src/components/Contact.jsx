import { motion } from "framer-motion";

const Contact = () => {
  const gridVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, type: "spring", stiffness: 100 },
    },
  };
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      id="contact"
      className="px-8 pb-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex text-sm items-center relative">
        <div className="mr-4 text-gray-600">06/10</div>
        <div className="font-bold">NEXT CHAPTER</div>
        <div className="ml-4 absolute top-1.5 left-42">
          <img src="../../public/NextIcon.svg" className="h-4" />
        </div>
      </div>
      <div className="w-[75%]">
        <div className="text-5xl pb-12 pt-20 font-bold relative">CONTACT</div>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.8 }}
          className="grid grid-cols-3"
        >
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="font-bold opacity-60 pt-4 pb-6">STAY IN TOUCH</div>
            <div>
              <div className="text-xl py-2">shaikhaadil3927@gmail.com</div>
              <div className="text-xl">+91-79905 12804</div>
            </div>
          </motion.div>
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="font-bold opacity-60 pt-4 pb-6">SOCIAL</div>
            <div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-xl py-1"
              >
                Facebook
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-xl py-1"
              >
                LinkedIn
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="text-xl py-1"
              >
                Twitter
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="font-bold opacity-60 pt-4 pb-6">ADDRESS</div>
            <div>
              <div className="text-xl pb-1">10/2057, Bhagatalav,</div>
              <div className="text-xl pb-1">Surat,</div>
              <div className="text-xl pb-1">Gujarat - 395003.</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 1.0 }}
          className="pt-20"
        >
          <div className="text-2xl font-bold">LEAVE A MESSAGE</div>
          <div>
            <motion.div
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex w-full gap-8 pb-10 pt-4"
            >
              <div className="w-1/2">
                <div className="py-2 font-bold">NAME</div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="border-b border-b-gray-500 focus:border-b-white w-full outline-none py-3"
                />
              </div>
              <div className="w-1/2">
                <div className="py-2 font-bold">E-MAIL</div>
                <input
                  type="text"
                  placeholder="@"
                  className="border-b border-b-gray-500 focus:border-b-white w-full outline-none py-3"
                />
              </div>
            </motion.div>
            <motion.div
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="py-2 font-bold">MESSAGE</div>
              <textarea
                placeholder="Your message"
                rows={4}
                className="border-b border-b-gray-500 focus:border-b-white w-full outline-none py-3"
              />
            </motion.div>
            <motion.div
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-20 mt-8"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  background: "#fff",
                  color: "#000",
                }}
                transition={{ duration: 0.3 }}
                className="border-2 rounded-md px-10 py-2 font-bold cursor-pointer"
              >
                SEND
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      {/* Optional footer marker */}
      <div className="text-gray-600 mt-4">07/10</div>
    </motion.section>
  );
};

export default Contact;
