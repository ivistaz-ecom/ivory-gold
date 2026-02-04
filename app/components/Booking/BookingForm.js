"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";


const services = ["Nails", "Manicure", "Pedicure", "Hair", "Beauty", "Makeup"];

const BookingForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    "your-name": "",
    "your-email": "",
    "your-phone": "",
    "your-service": "",
    "your-date": "",
    "your-time": "",
    "your-visit": "Yes"
  });

  // Date picker state
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // UI state
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null
  const [errors, setErrors] = useState({});
  const [cf7Errors, setCf7Errors] = useState([]);

  // Validation rules
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData["your-name"].trim()) {
      newErrors["your-name"] = "Name is required";
    } else if (formData["your-name"].trim().length < 2) {
      newErrors["your-name"] = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData["your-email"].trim()) {
      newErrors["your-email"] = "Email is required";
    } else if (!emailRegex.test(formData["your-email"])) {
      newErrors["your-email"] = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData["your-phone"]) {
      newErrors["your-phone"] = "Phone number is required";
    }

    // Service validation
    if (!formData["your-service"] || formData["your-service"] === "Select Services") {
      newErrors["your-service"] = "Please select a service";
    }

    // Date validation
    if (!formData["your-date"]) {
      newErrors["your-date"] = "Date is required";
    } else {
      const selectedDate = new Date(formData["your-date"]);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors["your-date"] = "Please select a future date";
      }
    }

    // Time validation
    if (!formData["your-time"]) {
      newErrors["your-time"] = "Time is required";
    }

    // Visited before validation
    if (!formData["your-visit"]) {
      newErrors["your-visit"] = "Please select if you've visited us before";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  // Handle phone number change
  const handlePhoneChange = (value) => {
    if (!value) {
      setFormData(prev => ({ ...prev, "your-phone": "" }));
      return;
    }
  
    // Extract digits only (remove + and spaces)
    const digits = value.replace(/\D/g, "");
  
    // Keep first 2–3 digits as country code, rest as actual number
    let countryCode = "";
    let number = "";
  
    if (digits.startsWith("91")) { // If India selected
      countryCode = "+91";
      number = digits.slice(2);
    } else {
      // General fallback (just take first 1–3 digits as code)
      countryCode = "+" + digits.slice(0, 3);
      number = digits.slice(3);
    }
  
    // Restrict to 10 digits max for number
    if (number.length > 10) {
      number = number.slice(0, 10);
    }
  
    const finalNumber = countryCode + number;
  
    setFormData(prev => ({
      ...prev,
      "your-phone": finalNumber
    }));
  
    // Clear error if fixed
    if (errors["your-phone"]) {
      setErrors(prev => ({ ...prev, "your-phone": "" }));
    }
  };

  // Handle date change
  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD format
      setFormData(prev => ({
        ...prev,
        "your-date": formattedDate
      }));
      
      // Clear error
      if (errors["your-date"]) {
        setErrors(prev => ({
          ...prev,
          "your-date": ""
        }));
      }
    }
  };

  // Handle time change
  const handleTimeChange = (time) => {
    setSelectedTime(time);
    if (time) {
      const formattedTime = time.toTimeString().slice(0, 5); // HH:MM format
      setFormData(prev => ({
        ...prev,
        "your-time": formattedTime
      }));
      
      // Clear error
      if (errors["your-time"]) {
        setErrors(prev => ({
          ...prev,
          "your-time": ""
        }));
      }
    }
  };
  
  // Handle service selection
  const handleServiceSelect = (service) => {
    setFormData(prev => ({
      ...prev,
      "your-service": service
    }));
    setIsOpen(false);
    
    // Clear error
    if (errors["your-service"]) {
      setErrors(prev => ({
        ...prev,
        "your-service": ""
      }));
    }
  };

  // Handle visited before selection
  const handleVisitedBefore = (value) => {
    setFormData(prev => ({
      ...prev,
      "your-visit": value
    }));
    
    // Clear error
    if (errors["your-visit"]) {
      setErrors(prev => ({
        ...prev,
        "your-visit": ""
      }));
    }
  };

  // Submit form to Contact Form 7 REST API
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setCf7Errors([]);

    try {
      // Create FormData for multipart/form-data submission
      const formDataToSend = new FormData();
      
      // Add all form fields
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      // Add CF7 required fields
      formDataToSend.append('_wpcf7', '10026'); // Your CF7 form ID
      formDataToSend.append('_wpcf7_version', '5.7.7');
      formDataToSend.append('_wpcf7_locale', 'en_US');
      formDataToSend.append('_wpcf7_unit_tag', 'wpcf7-f10026-p1-o1');
      formDataToSend.append('_wpcf7_container_post', '0');
      formDataToSend.append('_wpcf7_posted_data_hash', '');

      // Submit to Contact Form 7 REST API
      const response = await axios.post(
        'https://docs.ivoryandgold.in/wp-json/contact-form-7/v1/contact-forms/6/feedback',
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Check CF7 response
      if (response.data.status === 'mail_sent') {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          "your-name": "",
          "your-email": "",
          "your-phone": "",
          "your-service": "",
          "your-date": "",
          "your-time": "",
          "your-visit": "Yes"
        });
        setSelectedDate(null);
        setSelectedTime(null);
      } else {
        setSubmitStatus('error');
        // Handle CF7 validation errors
        if (response.data.invalid_fields) {
          setCf7Errors(response.data.invalid_fields);
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Handle CF7 validation errors from response
      if (error.response?.data?.invalid_fields) {
        setCf7Errors(error.response.data.invalid_fields);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center p-4 pb-20">
      <form onSubmit={handleSubmit} className="w-full container mx-auto">
        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-800">Booking request submitted successfully! We&apos;ll contact you soon.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <p className="text-red-800">Failed to submit booking. Please try again or contact us directly.</p>
          </div>
        )}

        {/* CF7 Validation Errors */}
        {cf7Errors.length > 0 && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <h4 className="text-red-800 font-medium mb-2">Please correct the following errors:</h4>
            <ul className="text-red-700 text-sm space-y-1">
              {cf7Errors.map((error, index) => (
                <li key={index}>• {error.message}</li>
              ))}
            </ul>
          </div>
        )}

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="your-name"
              placeholder="Your Name"
              value={formData["your-name"]}
              onChange={handleInputChange}
              className={`w-full rounded-xl border p-3 focus:outline-none ${
                errors["your-name"] ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors["your-name"] && <span className="text-red-500 text-sm mt-1">{errors["your-name"]}</span>}
          </div>
          
          <div>
            <input
              type="email"
              name="your-email"
              placeholder="Email ID"
              value={formData["your-email"]}
              onChange={handleInputChange}
              className={`w-full rounded-xl border p-3 focus:outline-none ${
                errors["your-email"] ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors["your-email"] && <span className="text-red-500 text-sm mt-1">{errors["your-email"]}</span>}
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {/* Phone Input */}
          <div>
            <div className={`border rounded-xl p-3 ${
              errors["your-phone"] ? 'border-red-500' : 'border-gray-300'
            }`}>
              <PhoneInput
                placeholder="Enter phone number"
                value={formData["your-phone"]}
                onChange={handlePhoneChange}
                defaultCountry="IN"
                international
                countryCallingCodeEditable={true}
                className="phone-input focus:outline-none focus:ring-0"
              />
            </div>
            {errors["your-phone"] && <span className="text-red-500 text-sm mt-1">{errors["your-phone"]}</span>}
          </div>

          {/* Custom Dropdown */}
          <div className="relative w-full">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className={`w-full flex justify-between items-center rounded-xl border p-3 focus:outline-none ${
                errors["your-service"] ? 'border-red-500' : 'border-gray-300'
              } bg-[#f5f0e8]`}
            >
              <span className="text-gray-800">{formData["your-service"] || "Select Services"}</span>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-gray-700" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {isOpen && (
              <ul className="absolute left-0 mt-1 w-full rounded-b-xl border border-t-0 border-gray-300 bg-[#f5f0e8] shadow-md z-10">
                {services.map((service, idx) => (
                  <li
                    key={idx}
                    onClick={() => handleServiceSelect(service)}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer border-b last:border-none"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            )}
            {errors["your-service"] && <span className="text-red-500 text-sm mt-1">{errors["your-service"]}</span>}
          </div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <div className={`relative border rounded-xl p-3 ${
              errors["your-date"] ? 'border-red-500' : 'border-gray-300'
            }`}>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Preferred Date (DD/MM/YYYY)"
                minDate={new Date()}
                className="w-full pr-10 focus:outline-none bg-transparent"
                showPopperArrow={false}
              />
              <FaRegCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black" />
            </div>
            {errors["your-date"] && <span className="text-red-500 text-sm mt-1">{errors["your-date"]}</span>}
          </div>
          
          <div>
            <div className={`relative border rounded-xl p-3 ${
              errors["your-time"] ? 'border-red-500' : 'border-gray-300'
            }`}>
              <DatePicker
                selected={selectedTime}
                onChange={handleTimeChange}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Preferred Time (HH:MM)"
                className="w-full pr-10 focus:outline-none bg-transparent"
                showPopperArrow={false}
              />
              <FaRegClock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black" />
            </div>
            {errors["your-time"] && <span className="text-red-500 text-sm mt-1">{errors["your-time"]}</span>}
          </div>
        </div>

        {/* Toggle */}
        <div className="mt-6 flex gap-10 items-center">
          <p className="text-gray-800 mb-2">Have you visited us before?</p>
          <div className="flex gap-0">
            <button
              type="button"
              onClick={() => handleVisitedBefore("Yes")}
              className={`px-4 py-1 rounded-l-3xl focus:outline-none border-0 ${
                formData["your-visit"] === "Yes"
                  ? 'bg-[#D4AF37] text-black duration-500 transition-all'
                  : 'bg-white border text-black'
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => handleVisitedBefore("No")}
              className={`px-4 py-1 rounded-r-3xl focus:outline-none border-0 ${
                formData["your-visit"] === "No"
                  ? 'bg-[#D4AF37] text-black duration-500 transition-all'
                  : 'bg-white border text-black'
              }`}
            >
              No
            </button>
          </div>
          {errors["your-visit"] && <span className="text-red-500 text-sm mt-1">{errors["your-visit"]}</span>}
        </div>

        {/* Submit */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 border rounded-xl shadow-sm hover:shadow-md transition font-medium border-[#D4AF37] flex items-center gap-2 ${
              isSubmitting 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white hover:bg-[#D4AF37]'
            }`}
          >
            {isSubmitting && <Loader2 className="w-4 h-4 animate-spin" />}
            {isSubmitting ? 'Submitting...' : 'Book A Slot'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
