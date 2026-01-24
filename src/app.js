import express from "express";
import "dotenv/config";
import routes from "./routes/index.js";
import logRoutes from "../lib/logRoutes.js";

const app = express();

app.use(express.json());
app.use("/api", routes);

BigInt.prototype.toJSON = function () {
    return this.toString();
};

app.listen(process.env.APP_PORT, () => {
    logRoutes(app);
    console.log(
        `Server running at http://${process.env.APP_HOST}:${process.env.APP_PORT}`,
    );
});
