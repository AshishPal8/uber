const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const connectToDb = require("./db/db");

const userRoutes = require("./routes/user.route");
const captainRoutes = require("./routes/captain.route");
const mapRoutes = require("./routes/map.route");
const rideRoutes = require("./routes/ride.route");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);
app.use("/maps", mapRoutes);
app.use("/rides", rideRoutes);

module.exports = app;
