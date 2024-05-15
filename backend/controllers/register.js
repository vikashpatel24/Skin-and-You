const Appointment = require("../models/Appointment");
const sendEmail = require("./sendMail");

const register = async (req, res) => {
  const { name, email, phone, date } = req.body;
  console.log(req.body);

  try {
    await Appointment.create({
      name,
      email,
      phone,
      date,
    });

    // Send the response to the client
    res.json({ message: "Appointment booked successfully" });

    // Trigger the email sending asynchronously
    sendEmail({ name, email, phone, date });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { register };
