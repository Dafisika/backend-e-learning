import express from "express";
import "dotenv/config";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use("/", routes);

BigInt.prototype.toJSON = function () {
    return this.toString();
};

app.listen(process.env.APP_PORT, () => {
    console.log(
        `Server running at http://${process.env.APP_HOST}:${process.env.APP_PORT}`,
    );
});
