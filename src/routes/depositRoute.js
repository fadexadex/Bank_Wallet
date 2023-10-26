import express from "express";
const depositRoute = express.Router();

import { depositToAnAccount } from "../controllers/deposit.js";
import { getADeposit } from "../controllers/deposit.js";
import { getDepositsOnAnAccount } from "../controllers/deposit.js";
import { authUser } from "../middlewares/authuser.js";

depositRoute.post("/deposit-money", authUser, depositToAnAccount);
depositRoute.get("/get-deposit", authUser, getADeposit);
depositRoute.get("/get-all-deposit", authUser, getDepositsOnAnAccount);

export default depositRoute;
