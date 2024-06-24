import { config as conf } from "dotenv";
conf();

const _config = {
    port: process.env.PORT,
    mongodbUri: process.env.MONGOODB_URI,
    jwtSecret: process.env.JWT_SECRET,
};

export const config = Object.freeze(_config);
