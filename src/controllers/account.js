import {
  createAccountInACurrency,
  createDefaultAccount,
  getAccounts,
  getSpecificAccount,
  deleteAccount,
} from "../models/account.js";

export async function createADefaultAccount(req, res) {
  try {
    const user_email = req.user_email;
    const data = await createDefaultAccount(user_email);
    const { account_details, account_number } = data;
    if (!data) {
      return res
        .status(400)
        .json({ error: "User Already Has An Account In Our Base Currency" });
    }
    return res.status(201).json({
      message: "ACCOUNT CREATED SUCESSFULLY",
      account_details: account_details,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

export async function createAnAccountInACurrency(req, res) {
  try {
    const user_email = req.user_email;
    const currency = req.body.currency;
    const data = await createAccountInACurrency(user_email, currency);
    const { account_details } = data;
    if (!data) {
      return res
        .status(400)
        .json({ error: "User Already Has An Account In This Currency" });
    }
    return res.status(201).json({
      message: "ACCOUNT CREATED SUCESSFULLY",
      account_details: account_details,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

export async function getTheAccounts(req, res) {
  try {
    const user_email = req.user_email;
    const data = await getAccounts(user_email);
    if (!data) {
      return res
        .status(400)
        .json({ error: "No accounts associated with this user" });
    }
    return res.status(201).json({
      message: "USER ACCOUNTS",
      accounts: data,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

export async function getASpecificAccount(req, res) {
  try {
    const user_email = req.user_email;
    const account_number = req.body.account_number;
    const data = await getSpecificAccount(user_email, account_number);
    if (!data) {
      return res
        .status(400)
        .json({
          error: `No account with account_number ${account_number} exists`,
        });
    }
    return res.status(201).json({
      message: "ACCOUNT",
      accounts: data,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

export async function deleteAnAccount(req, res) {
  try {
    const user_email = req.user_email;
    const account_number = req.body.account_number;
    const data = await deleteAccount(user_email, account_number);
    if (!data) {
      return res
        .status(400)
        .json({
          error: `No account with account_number ${account_number} exists`,
        });
    }
    return res.status(201).json({
      message: "ACCOUNT DELETED SUCCESSFULLY",
      accounts: data,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
