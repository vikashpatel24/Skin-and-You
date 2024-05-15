const router = require("express").Router();
const {
  getAllAppointments,
} = require("../controllers/getAllAppointments");

router.get("/users", getAllAppointments);

module.exports = router;
