import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import User from "../schemas/user.schemas.js";

export const Register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res
                .status(400)
                .json({ message: "All fields are required", success: false });
        }

        const existUser = await User.findOne({ email });
        if (existUser) {
            return res
                .status(400)
                .json({ message: "User already exists", success: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        const payload = {
            id: newUser._id,
        };

        // Generate JWT token
        const token = jwt.sign(payload, config.jwtSecret, {
            expiresIn: "1d",
        });

        res.status(201).json({
            message: "User created successfully",
            success: true,
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email,
            },
            token: token,
        });
    } catch (error) {
        res.status(500).json({
            message: "User registration failed",
            error: error.message,
        });
    }
};
