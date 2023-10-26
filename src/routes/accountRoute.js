import express from "express";
const accountRoute = express.Router();

import { createADefaultAccount } from "../controllers/account.js";
import { createAnAccountInACurrency } from "../controllers/account.js";
import { getTheAccounts } from "../controllers/account.js";
import { authUser } from "../middlewares/authuser.js";
import { getASpecificAccount } from "../controllers/account.js";
import { deleteAnAccount } from "../controllers/account.js";

accountRoute.post("/create-default-account", authUser, createADefaultAccount);
accountRoute.post(
  "/create-account-in-currency",
  authUser,
  createAnAccountInACurrency
);
accountRoute.get("/get-accounts", authUser, getTheAccounts);
accountRoute.get("/get-specific-account", authUser, getASpecificAccount);
accountRoute.delete("/delete-account", authUser, deleteAnAccount);

export default accountRoute;
