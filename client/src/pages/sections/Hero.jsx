import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import image from "../../images/hero-bg.jpeg"
import { Link } from "react-router-dom";

const Hero = ({bgImage, heading, subheading}) => {
  const [typedText, setTypedText] = useState(""); // Track the typing progress
  const fullText = heading; // Full text to animate

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length - 1) {
        setTypedText((prev) => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval); // Stop the animation when the text is complete
      }
    }, 50); // Typing speed (in milliseconds)

    return () => clearInterval(interval); // Cleanup on unmount
  }, [fullText]);

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center right", // Default position for larger screens
        backgroundSize: "cover", // Ensure the image covers the entire section 
    }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-neutralDark bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center lg:items-start px-8 md:px-20 text-neutralLight h-full lg:max-w-[60%]">
        {/* Data above the headline */}
        <p className="uppercase text-sm font-body font-semibold tracking-wide text-accent text-center lg:text-left">
          Over 10,000 happy smiles
        </p>

        {/* Headline with typing animation */}
        <h1 className="text-xl md:text-4xl lg:text-6xl font-heading font-bold leading-tight text-textHighlight text-center lg:text-left">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {typedText}
          </motion.span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-sm md:text-md lg:text-xl font-body text-center lg:text-left">
          {subheading}
        </p>

        {/* Button */}
        <Link
          to="/booking/"
          className="mt-6 flex items-center justify-center lg:justify-start gap-3 bg-primary hover:bg-accent hover:scale-105 text-white font-semibold py-2 px-6 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        >
          <span>Schedule Appointment</span>
          <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
