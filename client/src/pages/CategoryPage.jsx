import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus } from 'react-icons/fa';
import insuranceImg from "../images/about-img-one.jpeg"
import Hero from './sections/Hero';
import heroImage from "../images/service-page-img-one.jpeg"
import Testimonials from './sections/Testimonials';
import ContactSection from './sections/Contact';
import BlogSection from './sections/BlogSection';
import { MdHealthAndSafety, MdVerified, MdCardGiftcard } from 'react-icons/md';    

//Images:
import bgImgOne from "../images/clinic-bg-4.jpg"
import bgImgTwo from "../images/clinic-bg-2.jpg"
import bgImgThree from "../images/clinic-bg-3.jpg"
import infoImg from "../images/children-patient-smiling.jpg"
import faqsOneImg from "../images/dentist-&-patient.jpg"
import faqsTwoImg from "../images/category-page-faqs-img-two.avif"
import faqsThreeImg from "../images/category-page-faqs-img-three.avif"
import PartnersSection from './sections/PartnersSection';

const CategoryPage = ({ category, services }) => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="">
      <Hero bgImage={heroImage} heading={category.heading} subheading={category.subheading} />
      <PartnersSection />

      {/* SECOND  SECTION - Insurance, Benefits, and Warranty Card */}
      <div className="py-24 flex justify-center items-center bg-neutralLight">
        <div className="w-[80%] h-fit flex flex-col lg:flex-row justify-between items-center lg:items-start p-8 shadow-lg mb-12 border-primary border-4 rounded-tl-[50px] rounded-br-[50px] overflow-hidden">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-neutralDark lg:mr-8">
            <h3 className="text-xl font-semibold text-primary mb-4">We Make It Easy For You</h3>
            <p className="text-sm mb-4 text-justify text-neutralDark">
              Our services come with comprehensive insurance coverage, ensuring that you're protected during your treatment. With a wide range of benefits, including reduced co-pays and easy claims, we aim to make your experience as hassle-free as possible. We also offer warranty coverage for many of our procedures, giving you peace of mind knowing that we're here for you even after your treatment is complete.
            </p>
            {/* Bullet Points */}
            <ul className="mb-6 space-y-2">
              <li className="flex items-center gap-2 text-primary">
                <span role="img" aria-label="Insurance Icon">🛡️</span>
                Comprehensive insurance for treatments
              </li>
              <li className="flex items-center gap-2 text-primary">
                <span role="img" aria-label="Warranty Icon">✅</span>
                Warranty coverage for procedures
              </li>
              <li className="flex items-center gap-2 text-primary">
                <span role="img" aria-label="Gift Icon">🎁</span>
                6-months teeth whitening gift for new clients
              </li>
            </ul>
            {/* Quote */}
            <blockquote className="italic text-neutralDark text-sm border-l-4 border-primary pl-4 mb-6 lg:mb-0">
              "Your smile deserves the best care and protection, and that's our promise to you."
            </blockquote>
          </div>
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={infoImg}
              alt="Insurance Benefits"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
      
      {/* THIRD SECTION - professionals cards */}
      <section className="relative py-20 px-12">
        <h2 className="text-neutralDark text-center text-3xl font-bold mb-20">
          Meet Our {category.category} Professionals
        </h2>
        <div className="absolute inset-0 opacity-40">
          <div className="h-1/2 w-full bg-transparent"></div>
          <div className="h-1/2 w-full bg-gradient-to-b from-blue-300 to-blue-500"></div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-start items-center md:items-start gap-12">
          {
            category.doctors.map(doctor => (
              <div className="relative z-10 bg-neutralLight w-[90%] sm:w-80 h-fit sm:h-[430px] flex flex-col justify-start items-start border-2 border-neutralDark overflow-hidden">
                <img src={doctor.image} alt="Image of the doctor" className='w-full h-auto' />

                <div className="w-full p-4 flex flex-col justify-start items-start">
                  <h2 className='font-extrabold text-lg text-neutralDark'>{doctor.fullName}</h2> 
                  <span className="text-md text-blue-800 font-bold">{doctor.experience} of experience</span>
                  <p className='mt-3'>{doctor.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      {/* FOURTH SECTION - Service Details */}
      {services.map((service, index) => (
        <div key={index}>
          {/* Service Title and Description */}
          <div className="relative py-12 px-8 md:px-0">
            {/* Background Image */}
            <div
              className="absolute inset-0 -z-10 bg-cover bg-center"
              style={{
                backgroundImage: `url(${index === 0 ? bgImgOne : index === 1 ? bgImgTwo : bgImgThree})`,
                opacity: 0.5,
              }}
            ></div>

            {/* Content Section */}
            <div className="w-fit h-fit mx-auto p-1 border-2 border-neutralDark rounded-lg">
              <div className="relative z-10 bg-neutralDark w-full md:w-[400px] px-8 py-12 rounded-lg">
                <h2 className="text-neutralLight text-xl md:text-3xl font-bold text-center my-4">
                  {service.name}
                </h2>
                <p className="text-sm md:text-lg leading-relaxed justify-center text-justify text-neutralLight">
                  {service.description}
                </p>
              </div>
            </div>
          </div>

          {/* FIFTH SECTION - FAQs Section */}
          <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} justify-between items-center bg-neutralDark py-12 px-6`}>
            <div className="w-full md:w-1/2 md:h-[400px] md:flex md:flex-col md:justify-start md:mr-8">
              <h4 className="text-xl font-semibold text-neutralLight mb-4">Frequently Asked Questions</h4>
              <ul className="text-sm text-neutralLight">
                {service.faqs.map((faq, idx) => (
                  <li
                    key={idx}
                    className={`mb-4 cursor-pointer border-neutralLight rounded-lg border-2 transition-all duration-300 ease-in-out ${
                      activeFaq === idx ? 'bg-primary text-white' : ''
                    } p-4 rounded-lg hover:bg-primary hover:text-white`}
                    onClick={() => toggleFaq(idx)}
                  >
                    <div className="flex items-center justify-between">
                      <strong>{faq.question}</strong>
                      {activeFaq === idx ? (
                        <FaMinus className="text-white" />
                      ) : (
                        <FaPlus className="text-white" />
                      )}
                    </div>
                    {activeFaq === idx && <p className="mt-2 pt-2 border-t-2 border-neutralLight">{faq.answer}</p>}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <img src={`${index === 0 ? faqsOneImg : index === 1 ? faqsTwoImg : faqsThreeImg}`} alt={service.name} className="w-full md:w-[90%] h-auto md:h-[400px] rounded-lg" />
            </div>
          </div>
        </div>
      ))}

      {/* FIFTH SECTION - Call to Action */}
      <div className="w-full flex flex-col items-center text-center mt-12 mb-6 px-4">
        <h2 className="text-3xl font-bold text-primary mb-6">
          Ready to Transform Your Smile?
        </h2>
        <p className="text-lg text-neutralDark text-left md:text-center mb-6 max-w-[90%] md:max-w-[70%]">
          Take the first step towards a healthier, brighter smile. Our experienced professionals are here to guide you every step of the way. 
          Schedule your consultation today and experience the best in dental care!
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8 max-w-[90%]">
          <div className="flex items-center text-primary w-full sm:w-auto">
            <MdHealthAndSafety size={24} className="mr-2" />
            <span className='text-left'>Comprehensive Insurance Coverage</span>
          </div>
          <div className="flex items-center text-primary w-full sm:w-auto">
            <MdVerified size={24} className="mr-2" />
            <span className='text-left'>Warranty on Procedures</span>
          </div>
          <div className="flex items-center text-primary w-full sm:w-auto">
            <MdCardGiftcard size={24} className="mr-2" />
            <span className='text-left'>6-Month Teeth Whitening Gift</span>
          </div>
        </div>

        <Link 
          to="/booking/" 
          className="bg-primary text-white py-3 px-8 rounded-lg shadow-lg hover:bg-accent transition duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Book an Appointment
        </Link>
      </div>

      {/* REUSED SECTIONS */}
      <Testimonials />
      <ContactSection />
      <BlogSection />
    </section>
  );
};

export default CategoryPage;
