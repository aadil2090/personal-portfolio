import { motion } from "framer-motion";
import { useState } from "react";
import { VscLoading } from "react-icons/vsc";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try{
      const newErrors = handleValidation(formData);
      setErrors(newErrors)

      if(Object.keys(newErrors).length === 0)
      {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            time: new Date().toLocaleString()
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )

        setErrors({})
        setFormData({
          name: "",
          email: "",
          message: "",
        })
        setSubmitStatus("success")
        setTimeout(() => setSubmitStatus(null), 5000); 
      }
    }catch(err){
      setSubmitStatus("error")
    }finally{
      setIsSubmitting(false);
    }
  }

  const handleValidation = (formData) => {
    const err = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if(formData.name.trim() === "") {
      err.name = "Name cannot be empty";
    } else if(formData.name.trim().length < 2) {
      err.name = "Name must be at least 2 characters";
    }
  
    if(formData.email.trim() === "") {
      err.email = "Email cannot be empty";
    } else if(!emailRegex.test(formData.email)) {
      err.email = "Please enter a valid email address";
    }
  
    if(formData.message.trim() === "") {
      err.message = "Message cannot be empty";
    } else if(formData.message.trim().length < 10) {
      err.message = "Message must be at least 10 characters";
    }
  
    return err;
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
        <div className="mr-4 text-gray-600">08/08</div>
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
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-2">
            <label name="name" className="font-bold opacity-60">NAME</label>
            <input
            name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              autoComplete="true"
              className="bg-transparent border-b border-white focus:outline-none py-2"
            />
            <label className="text-sm text-red-500">{errors.name}</label>
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold opacity-60">EMAIL</label>
            <input
              type="email"
            name="email"              autoComplete="true"

              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-b border-white focus:outline-none py-2"
            />
            <label className="text-sm text-red-500">{errors.email}</label>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <label className="font-bold opacity-60">MESSAGE</label>
            <textarea
            name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border-b border-white focus:outline-none py-2 min-h-[100px] resize-none"
            />
            <label className="text-sm text-red-500">{errors.message}</label>

          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
            className="mt-8 bg-white text-black px-8 py-3 rounded-lg w-fit"
          >
            {isSubmitting ? <VscLoading className="animate-spin" / >
            :"Send Message"}
            
          </motion.button>
        </motion.form>
        {submitStatus === 'success' && (
          <div className="text-green-500 mt-4">Message sent successfully!</div>
        )}
        {submitStatus === 'error' && (
          <div className="text-red-500 mt-4">Failed to send message. Please try again.</div>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;
