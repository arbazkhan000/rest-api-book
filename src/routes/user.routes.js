import express from "express";
import { Register } from "../controller/user.ctrl.js";

const userRoutes = express.Router();

userRoutes.route("/user/register").post(Register);

export default userRoutes;
