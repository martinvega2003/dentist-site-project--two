import React from "react";
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebook, FaTwitch, FaYoutube } from "react-icons/fa";

const PartnersSection = () => {
    return (
        <div className="flex flex-wrap justify-around items-center bg-gradient-to-r from-blue-400 to-blue-200 px-4 py-8 gap-8 border-y-2 border-white">
            <FaApple className="text-white text-4xl sm:text-7xl lg:text-8xl" />
            <FaGoogle className="text-white text-4xl sm:text-7xl lg:text-8xl" />
            <FaAmazon className="text-white text-4xl sm:text-7xl lg:text-8xl" />
            <FaMicrosoft className="text-white text-4xl sm:text-7xl lg:text-8xl" />
            <FaFacebook className="text-white text-4xl sm:text-7xl lg:text-8xl" />
            <FaYoutube className="text-white text-4xl sm:text-7xl lg:text-8xl" />
        </div>
    );
};

export default PartnersSection;


