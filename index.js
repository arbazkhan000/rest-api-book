import dbConnect from "./src/DB/dbConnect.js";
import app from "./src/app.js";
import { config } from "./src/config/config.js";

const startServer = async () => {
    await dbConnect();
    const port = config.port || 3004;

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
};

startServer();
