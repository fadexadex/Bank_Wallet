import express from "express";
const authUserRoute = express.Router();

import { createAUserProfile } from "../controllers/userAuth.js";
import { logUser } from "../controllers/userAuth.js";
import { sendAResetLink } from "../controllers/userAuth.js";
import { resetPassword } from "../controllers/userAuth.js";
import { authUser } from "../middlewares/authuser.js";
import { authUserReset } from "../middlewares/authuser.js";

authUserRoute.post("/create-user-profile", createAUserProfile);
authUserRoute.post("/log-user", authUser, logUser);
authUserRoute.post("/send-reset-link", sendAResetLink);
authUserRoute.put("/reset-password/:token", authUserReset, resetPassword);

export default authUserRoute;
