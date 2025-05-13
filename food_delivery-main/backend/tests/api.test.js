// tests/api.test.js
import request from "supertest";
import express from "express";
import foodRouter from "../routes/foodRoute.js";
import userRouter from "../routes/userRoute.js";
import cartRouter from "../routes/cartRoute.js";
import orderRouter from "../routes/orderRoute.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working ");
});

describe("API Endpoints", () => {
  it("GET / should return 'API Working'", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("API Working ");
  });
});
