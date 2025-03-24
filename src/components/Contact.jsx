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
        <div className="mr-4 text-gray-600">07/08</div>
        <div className="font-bold">NEXT CHAPTER</div>
        <div className="ml-4 absolute top-1.5 left-42">
          <img src="/NextIcon.svg" className="h-4" />
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
              <div className="text-xl py-2">
                <a href="mailto:shaikhaadil3927@gmail.com" className="hover:text-blue-400 transition-colors">
                  shaikhaadil3927@gmail.com
                </a>
              </div>
              <div className="text-xl">
                <a href="tel:+917990512804" className="hover:text-blue-400 transition-colors">
                  +91-79905 12804
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="font-bold opacity-60 pt-4 pb-6">SOCIAL MEDIA</div>
            <div>
              <a 
                href="https://www.linkedin.com/in/aadilshaikh1920" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl py-2 block hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/aadil2090" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl py-2 block hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="font-bold opacity-60 pt-4 pb-6">LOCATION</div>
            <div className="text-xl">
              Surat, Gujarat<br />
              India
            </div>
          </motion.div>
        </motion.div>
        <motion.form
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-8"
        >
          <div className="flex flex-col gap-2">
            <label className="font-bold opacity-60">NAME</label>
            <input
              type="text"
              className="bg-transparent border-b border-white focus:outline-none py-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold opacity-60">EMAIL</label>
            <input
              type="email"
              className="bg-transparent border-b border-white focus:outline-none py-2"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-bold opacity-60">MESSAGE</label>
            <textarea
              className="bg-transparent border-b border-white focus:outline-none py-2 min-h-[100px] resize-none"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-white text-black px-8 py-3 rounded-lg w-fit"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
      {/* Optional footer marker */}
      <div className="text-gray-600 mt-4">07/10</div>
    </motion.section>
  );
};

export default Contact;
