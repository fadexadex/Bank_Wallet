import { makeBillPayment } from "../models/bills.js";
import { getBillPayment } from "../models/bills.js";

export async function makeABillPayment(req, res) {
  try {
    const user_email = req.user_email;
    const data = await makeBillPayment(user_email);
    if (data === "Invalid Request") {
      return res.status(400).json({ error: "Error Invalid Request" });
    }
    if (data === "Insufficient funds") {
      return res.status(400).json({
        error: "You do not have sufficient funds to complete this transaction",
      });
    }
    if (data === "Bill account doesn't exist") {
      return res.status(400).json({
        error: "Bill account doesn't exist",
      });
    }
    return res.status(201).json({
      message: "Bill payment successful",
      bill_details: data,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}

export async function getABillPayment(req, res) {
  try {
    const data = await getBillPayment(req.body);
    if (data === "Invalid Request") {
      return res.status(400).json({ error: "Error Invalid Request" });
    }
    if (!data) {
      return res.status(400).json({
        error: "No bill history with Id ",
      });
    }
    return res.status(201).json({
      message: "Bill Payment",
      bill_details: data,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
}
