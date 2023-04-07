const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");

const { GetAllAppointment, AllAppointment, GetAppointmentbyID, UpdateAppointmentbyID, DeleteAppointmentbyID, CreateAppointment }  = require("../controllers/AppointmentController");



router.get('/appointments', AllAppointment);
router.get('/appointments/:name', authenticate, GetAllAppointment);
router.get('/appointment/:id', authenticate, GetAppointmentbyID);
router.post('/appointment/new', authenticate, CreateAppointment);
router.post('/appointment/update', authenticate, UpdateAppointmentbyID);
router.delete('/appointment/:id', authenticate, DeleteAppointmentbyID);


module.exports = router;

