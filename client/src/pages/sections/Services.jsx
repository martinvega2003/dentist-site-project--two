import React from "react";
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md"; // React Icons for arrow
import { servicesData } from "../../data/servicesData";
import { Link } from "react-router-dom";

const Services = () => {

  return (
    <section className="bg-neutralDark px-8 md:px-20 py-16 font-body" id="services">
      <h2 className="text-2xl md:text-4xl font-heading font-bold text-neutralLight text-center mb-12">
        Our Services
      </h2>
      <div className="relative flex flex-col items-center">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
          {servicesData.slice(0, 2).map((service, index) => (
            <motion.div
              key={index}
              className="relative h-fit w-[90%] md:h-[350px] md:w-[330px] lg:h-[450px] lg:w-[450px] rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:scale-110 transition duration-300 bg-neutralLight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={service.image}
                alt={service.category}
                className="w-full h-[55%] object-cover"
              />
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {service.category}
                  </h3>
                  <p className="w-[90%] lg:w-[75%] text-sm text-neutralDark mb-2">{service.description}</p>
                  <Link to={`/category/${service.category}`} className="text-neutralDark font-medium flex items-center gap-2 hover:text-accent transition duration-300">
                    See Services <MdArrowForward size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Row 2 */}
        <motion.div
          className="relative h-fit w-[90%] md:h-[350px] md:w-[330px] lg:h-[450px] lg:w-[450px] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 bg-neutralLight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <img
            src={servicesData[2].image}
            alt={servicesData[2].category}
            className="w-full h-[55%] object-cover"
          />
          <div className="p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {servicesData[2].category}
              </h3>
              <p className="w-[75%] text-sm text-neutralDark mb-2">{servicesData[2].description}</p>
              <Link to={`/category/${servicesData[2].category}`} className="text-neutralDark font-medium flex items-center gap-2 hover:text-accent transition duration-300">
                See Services <MdArrowForward size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;


