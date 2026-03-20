import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import contactRoute from "./route/contact.route.js";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import adminRoute from "./route/admin.route.js";
import adminAuthRoute from "./route/admin.auth.route.js";

import orderRoute from "./route/order.route.js";

dotenv.config();

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= ENV ================= */
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MogoDBURI;

/* ================= DATABASE ================= */
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.error("MongoDB Error:", error));

/* ================= ROUTES ================= */
app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/contact", contactRoute);

// Admin Authentication (signup & login)
app.use("/admin", adminAuthRoute);

// Admin Panel (users, books, contacts)
app.use("/admin", adminRoute);

app.use("/order", orderRoute);

/* ================= SERVER ================= */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
