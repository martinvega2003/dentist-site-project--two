import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const ContactSection = () => {
  const position = [30.2672, -97.7431]; // Coordinates for Austin, Texas

  // Custom marker icon to avoid default icon issues
  const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <section className="bg-neutralDark py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Contact Form and Information */}
        <div className="bg-neutralLight shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-semibold text-primary mb-4">Contact Us</h2>
          <p className="text-neutralDark mb-6">
            Contact us for questions, technical assistance, or collaboration opportunities.
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              />
            </div>
            <textarea
              placeholder="Message"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full h-32"
            />
            <button
              type="submit"
              className="bg-primary text-neutralLight rounded-lg px-4 py-2 w-full hover:bg-accent transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="text-neutralLight">
            <h2 className="text-4xl font-bold mb-4 text-primary">Contact Us</h2>
            <p className="text-lg font-light mb-6">
              Contact us for questions, technical assistance, or collaboration
              opportunities via the contact information provided.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center hover:text-primary transition duration-300 cursor-pointer">
                <span className="bg-secondary text-white p-3 rounded-full mr-4">
                  📞
                </span>
                +123-456-7890
              </li>
              <li className="flex items-center hover:text-primary transition duration-300 cursor-pointer">
                <span className="bg-secondary text-white p-3 rounded-full mr-4">
                  📧
                </span>
                hello@reallygreatsite.com
              </li>
              <li className="flex items-center hover:text-primary transition duration-300 cursor-pointer">
                <span className="bg-secondary text-white p-3 rounded-full mr-4">
                  📍
                </span>
                123 Anywhere ST., Any City, 12345
              </li>
            </ul>
          </div>
        </div>

      {/* Map */}
      <div className="mt-8 rounded-lg overflow-hidden">
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: '300px', width: '100%', zIndex: 1, }}
          className="rounded-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
          <Marker position={position} icon={customIcon}>
            <Popup>Our Clinic Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default ContactSection;
