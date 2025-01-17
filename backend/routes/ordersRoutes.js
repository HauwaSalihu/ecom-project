import express from "express";
import { createCustomerOrder } from "../controllers/orders/createCustomerOrder.js";

const router = express.Router();

router.post("/create-order", createCustomerOrder);

export default router;
