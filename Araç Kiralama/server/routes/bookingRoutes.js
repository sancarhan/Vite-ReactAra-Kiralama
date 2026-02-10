import express from "express";
import { checkAvailabilityOfCar, createBooking } from "../controllers/bookingController.js";

const bookingRouter = express.Router();

bookingRouter.post('/check-availability', checkAvailabilityOfCar)
bookingRouter.post('/create', protect, createBooking)