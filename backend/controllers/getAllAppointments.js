const Appointment = require("../models/Appointment");

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({}).sort({ date: 1 }); // 1 for ascending order
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error: " + error.message });
  }
};

module.exports = {
  getAllAppointments,
};
