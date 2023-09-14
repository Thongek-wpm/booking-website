import dotenv from "dotenv";
import Express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

const app = Express();
dotenv.config();

//เชื่อมกับmongoDB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB,For you can using mongoDB.");
  } catch (error) {
    throw error;
  }
};

//แจ้งสถานะของตัวMongoDB
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB Disconnected!");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB Connected!");
});

//middlewares

app.use(Express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", usersRoute);
app.use("/api/hotel", hotelRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to Back-End,Now you can developing.");
});
//mongodb+srv://thongekwpm:A6UEYrkxzOlxsuh1@cluster0.wiims9k.mongodb.net/?retryWrites=true&w=majority
