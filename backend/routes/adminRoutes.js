const router = require("express").Router();
const {
  getAllAppointments,
} = require("../controllers/getAllAppointments");

router.get("/bookings", getAllAppointments);

module.exports = router;
