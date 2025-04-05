// const express = require("express"); // METHODS: method-1
import express from "express"; // method-2
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import messageRoute from "./routes/messageRoute.js";
import cors from "cors";
import { app,server } from "./socket/socket.js";
dotenv.config({});

// const app = express();

const PORT = process.env.PORT || 5000;

// NOTE: middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOption));

// routes
app.use("/api/v1/user", userRoute);
// PATH: http://localhost:8080/api/v1/user/(register/login/logout)

app.use("/api/v1/message", messageRoute);

server.listen(PORT, () => {
  connectDB();
  console.log(`Server listen at port ${PORT}`);
});
