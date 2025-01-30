import React, { useState } from "react";
import axios from "axios";
import { servicesData } from "../data/servicesData";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export const BookingPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [insurance, setInsurance] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");
  const [isInsuranceDropdownOpen, setIsInsuranceDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  const insuranceOptions = [
    "Delta",
    "Aetna",
    "United Healthcare",
    "AFLAC"
  ]
  
  const availableHours = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
  ];

  const handleSubmit = async () => {
    const data = {
      fullName,
      email,
      phoneNumber,
      insurance,
      service: selectedService,
      date: selectedDate,
      time,
    };
    console.log("Final Form Data:", data);

    try {
      const response = await axios.post("http://localhost:5000/api/bookings", data);
      console.log("Booking successful:", response.data);
      alert("Booking completed successfully!");
    } catch (error) {
      console.error("Error completing the booking:", error);
      alert("There was an error completing the booking. Please try again.");
    }
  };

  // Step 1 JSX
  const stepOne = (
    <div className="w-[90%] mx-auto flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Fill With Your Personal information</h2>
  
        {error && <div className="text-red-500 mb-4">{error}</div>}
  
        <div className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          {/* Insurance Dropdown */}
          <div className="relative">
            <button
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
              onClick={() => setIsInsuranceDropdownOpen(!isInsuranceDropdownOpen)}
            >
              {insurance || "Select Insurance"}
            </button>
            {isInsuranceDropdownOpen && (
              <ul className="absolute z-10 w-full bg-white border rounded-md shadow-md">
                {insuranceOptions.map((option, i) => (
                  <li
                    key={i}
                    className="p-2 hover:bg-blue-100 cursor-pointer"
                    onClick={() => {
                      setInsurance(option);
                      setIsInsuranceDropdownOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Service Dropdown */}
          <div className="relative">
            <button
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
              onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
            >
              {selectedService || "Select a Service"}
            </button>
            {isServiceDropdownOpen && (
              <ul className="absolute z-10 w-full bg-white border rounded-md shadow-md">
                {servicesData.map((category) => (
                  <React.Fragment key={category.category}>
                    <li className="p-2 text-gray-500 font-semibold">{category.category}</li>
                    {category.services.map((service) => (
                      <li
                        key={service.name}
                        className="p-2 pl-6 hover:bg-blue-100 cursor-pointer"
                        onClick={() => {
                          setSelectedService(service.name);
                          setIsServiceDropdownOpen(false);
                        }}
                      >
                        {service.name}
                      </li>
                    ))}
                  </React.Fragment>
                ))}
              </ul>
            )}
          </div>

        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentStep(2)}
            className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-600"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
  

  // Step 2 JSX
  const stepTwo = (
    <div className="w-[90%] mx-auto flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">Select The Time That Work best For You</h2>

        <div className="space-y-6">
          <div className="flex flex-col items-start justify-center mb-12">
            <label className="block mb-2 text-gray-600 font-bold">Select a Date</label>
            <Calendar
              className="rounded-xl shadow-2xl overflow-hidden"
              onChange={(date) => setSelectedDate(date)}
              view="month"
              next2Label={null}
              prev2Label={null}
              tileClassName={({ date, view }) =>
                view === "month" && date.toDateString() === selectedDate.toDateString()
                  ? "highlighted-date"
                  : null
              }
              showNeighboringMonth={false}
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-600 font-bold">Select a Time</label>
            <div className="flex space-x-2 overflow-x-auto pb-6">
              {availableHours.map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={`min-w-[100px] py-2 border border-primary rounded-3xl ${
                    t === time
                      ? "bg-primary text-white"
                      : "bg-white text-primary hover:bg-blue-100"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentStep(1)}
            className="bg-gray-400 text-white px-6 py-3 rounded hover:bg-gray-500 text-[10px] sm:text-base"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-600 text-[10px] sm:text-base"
          >
            Complete Booking
          </button>
        </div>
      </div>
    </div>
  );

  return <div className="bg-neutralLight py-6">
    {
      currentStep === 1 ? stepOne : stepTwo
    }
  </div>;
};