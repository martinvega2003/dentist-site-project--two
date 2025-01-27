import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-neutralDark py-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/" className="text-primary text-2xl font-bold hover:text-accent transition duration-300">
          YourBrand
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-neutralLight hover:text-accent transition duration-300">Home</Link>
            <Link to="/services" className="text-neutralLight hover:text-accent transition duration-300">Services</Link>
            <Link to="/about" className="text-neutralLight hover:text-accent transition duration-300">About</Link>
            <Link to="/contact" className="text-neutralLight hover:text-accent transition duration-300">Contact</Link>
          </nav>
          <Link
            to="/booking/"
            className="bg-primary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-accent transition duration-300"
          >
            Book Appointment
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-neutralLight hover:text-accent transition duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MdMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="bg-neutralDark text-center py-4 absolute top-full left-0 w-full shadow-lg">
          <nav className="space-y-4">
            <Link to="/" className="block text-neutralLight hover:text-accent transition duration-300">Home</Link>
            <Link to="/services" className="block text-neutralLight hover:text-accent transition duration-300">Services</Link>
            <Link to="/about" className="block text-neutralLight hover:text-accent transition duration-300">About</Link>
            <Link to="/contact" className="block text-neutralLight hover:text-accent transition duration-300">Contact</Link>
            <Link
              to="/booking/"
              className="bg-primary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-accent transition duration-300 inline-block"
            >
              Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;


