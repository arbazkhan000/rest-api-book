import express from "express";
import userRoutes from "../src/routes/user.routes.js";

const app = express();

app.use(express.json());

app.use(userRoutes);

app.use("/", (req, res,) => {
   res.json({message:"Welocome to rest api"})
});

export default app;
