import dotenv from "dotenv";
import Express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";

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

app.get("/", (req, res) => {
  res.send("Hey, First requset!");
});

//middlewares
app.use("/api/auth", authRoute);

app.listen(8800, () => {
  connect();
  console.log("Connected to Back-End,Now you can developing.");
});
//mongodb+srv://thongekwpm:A6UEYrkxzOlxsuh1@cluster0.wiims9k.mongodb.net/?retryWrites=true&w=majority
