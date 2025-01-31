import React from "react";
import { FaArrowDown } from "react-icons/fa"; // Importing the arrow icon
import { motion } from "framer-motion"; // Importing framer-motion
import image from "../../images/about-img.webp";

const About = () => {
  return (
    <motion.section
      id="about"
      className="flex flex-col md:flex-row items-center md:items-start gap-12 px-8 md:px-20 py-16 bg-gradient-to-br from-white via-neutralLight to-blue-300 font-body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }} // Fade-in animation for the section
    >
      {/* Content */}
      <motion.div
        className="w-full md:w-1/2 p-6 border-primary rounded-tl-[50px] rounded-br-[50px] border-4 text-center md:pb-16 md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }} // Slide-up animation
      >
        <h2 className="text-lg md:text-xl lg:text-4xl font-heading font-bold text-primary">
          Serving Austin Families Since 2001
        </h2>
        <p className="mt-4 text-sm md:text-base lg:text-lg text-neutralDark">
          At our dental clinic in Austin, TX, we prioritize your family's dental health with a blend of expertise and compassion. Whether you need a routine check-up or advanced cosmetic dentistry, our experienced team is here for you.
        </p>
        <a
          href="#services"
          className="inline-block mt-6 text-primary font-semibold hover:text-accent hover:scale-105 transition duration-200 focus:outline-none relative group"
        >
          Explore Our Services
          {/* Arrow icon with animation */}
          <span className="ml-2">
            <FaArrowDown className="inline-block" />
          </span>
        </a>
      </motion.div>

      {/* Image */}
      <motion.div
        className="w-full md:w-1/2 h-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} // Slide-up animation with delay
      >
        <img
          src={image}
          alt="A welcoming dental clinic in Austin, TX"
          className="w-[80%] h-auto mx-auto rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.section>
  );
};

export default About;
