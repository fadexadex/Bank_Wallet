import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authUserRoute from "./src/routes/userAuthroute.js";
import accountRoute from "./src/routes/accountRoute.js";
import depositRoute from "./src/routes/depositRoute.js";
import { authUser } from "./src/middlewares/authuser.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/authUser", authUserRoute);
// app.use(authUser);
app.use("/account", accountRoute);
app.use("/deposit", depositRoute);

app.listen(6000, () => {
  console.log("Server running on port 6000");
});
