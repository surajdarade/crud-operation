import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import employeeRoute from "./routes/employeeRoute.js";
import cors from "cors";

const app = express();

//Middleware for parsing JSON data
app.use(express.json());

// Middleware for handling CORS
// Option 1: Allow All Origins with Default of CORS(*)
app.use(cors());
// Option 2: Allow Specific Origin
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET,POST,PUT,DELETE"],
//     allowedHeaders: "Content-Type,Authorization",
//   })
// );

app.get("/", (req, res) => {
  res.send("Welcome to Employee Management System API.");
});

app.use("/employees", employeeRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
  });
