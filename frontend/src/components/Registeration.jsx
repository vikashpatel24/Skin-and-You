import React, { useState } from "react";
import axios from "axios";

const Registeration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear errors when user starts typing again
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date
    ) {
      setErrors({ message: "Please fill out all fields." });
      return;
    }
    try {
      await axios.post("https://skin-and-you-backend.vercel.app/register", formData);
      alert("Appointment booked successfully! Please check your email.");
      setFormData({ name: "", email: "", phone: "", date: "" });
    } catch (err) {
      console.error(err);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-8">Book Appointment</h1>
      {errors.message && <p className="text-red-500 mb-4">{errors.message}</p>}
      <form onSubmit={handleSubmit} className="w-80">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-semibold mb-1">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-semibold mb-1">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500  text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registeration;
