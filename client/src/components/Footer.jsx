import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-neutralDark text-neutralLight py-12 mt-1">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl font-semibold text-primary">Your Clinic</h2>
            <p className="mt-2 text-neutralLight text-center md:text-left">
              Empowering your smile with modern care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="hover:text-primary transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-primary transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  to="/booking/"
                  className="hover:text-primary transition duration-300"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-primary transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
            <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-primary mb-4">Contact Us</h3>
            <ul className="space-y-4">
                <li className="flex items-center hover:text-primary transition duration-300">
                <span className="mr-3">📞</span> +123-456-7890
                </li>
                <li className="flex items-center hover:text-primary transition duration-300">
                <span className="mr-3">📧</span> hello@reallygreatsite.com
                </li>
                <li className="flex items-center hover:text-primary transition duration-300">
                <span className="mr-3">📍</span> 123 Anywhere ST., Any City, 12345
                </li>
            </ul>
            </div>

          {/* Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-bold text-primary mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutralLight hover:text-primary transition duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutralLight hover:text-primary transition duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutralLight hover:text-primary transition duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutralLight hover:text-primary transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-neutralLight pt-4">
          <p className="text-sm text-center text-neutralLight">
            © {new Date().getFullYear()} Your Clinic. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


