import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteRight } from "react-icons/fa";
import image from "../../images/testimonials-bg.avif"
import maleTestimonialImg from "../../images/testimonial-m-1.webp"
import femaleTestimonialImg from "../../images/testimonial-f-1.webp"
import femaleTestimonialImgTwo from "../../images/testimonial-f-2.jpeg"

const testimonials = [
  {
    id: 1,
    text: "The dentists are amazing! They made me feel so comfortable during my procedure. My smile has never looked better!",
    name: "Dr. Emily Carter",
    image: femaleTestimonialImg, // Update with real paths
  },
  {
    id: 2,
    text: "This clinic is simply the best. Professional staff and great results! I recommend them to everyone.",
    name: "James Rodriguez",
    image: maleTestimonialImg,
  },
  {
    id: 3,
    text: "The team here is outstanding. They truly care about their patients and provide top-notch care.",
    name: "Sophia Martinez",
    image: femaleTestimonialImgTwo,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="relative py-24">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${image})`,
          zIndex: -1,
        }}
      ></div>

      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-12">
          What Our Patients Say
        </h2>
        <div className="relative">
          <div className="overflow-hidden w-full md:w-[80%] mx-auto">
            {/* Wrapper for sliding effect */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, i) => (
                <div
                  key={testimonial.id}
                  className="w-[calc(100%_-_32px)] mx-4 flex-shrink-0 bg-gradient-to-l from-primary to-accent shadow-xl rounded-xl p-8 flex flex-col items-center text-neutralLight"
                >
                  <div className="text-center flex flex-col items-center">
                    {/* Quote Icon */}
                    <FaQuoteRight size={40} className="text-secondary mb-4" />
                    {/* Testimonial Text */}
                    <p className="text-lg font-light italic text-neutralLight mb-6 max-w-lg">
                      "{testimonial.text}"
                    </p>
                    {/* Client Image */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-40 h-40 rounded-full border-4 border-secondary mb-4"
                    />
                    {/* Client Name */}
                    <h4 className="text-xl font-semibold text-primary-dark">
                      {testimonial.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-neutralLight text-accent p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-neutralLight text-primary p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials
