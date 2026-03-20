import express from "express";
import { createOrder, getAllOrders } from "../Controller/order.controller.js";

const router = express.Router();

router.post("/create", createOrder);

// ADMIN
router.get("/all", getAllOrders);

export default router;
