import { verifyToken } from "../utils/jwt.js";

export const authUserGeneral = (req, res, next) => {
  // const token = req.cookies.token;
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "UNAUTHORIZED" });
  } else {
    try {
      const decoded = verifyToken(token);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(403).json({ message: "INVALID TOKEN" });
      // next(error)
    }
  }
};

export const authUser = async (req, res, next) => {
  // const token = req.cookies.token;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "UNAUTHORIZED" });
  } else {
    try {
      const decoded = await verifyToken(token);
      const { email } = decoded;
      req.user_email = await email;
      next();
    } catch (error) {
      return res.status(403).json({ message: "INVALID TOKEN" });
      // next(error)
    }
  }
};

export const authUserReset = (req, res, next) => {
  const token = req.params.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "UNAUTHORIZED" });
  }
  try {
    const decoded = verifyToken(token);
    console.log(decoded);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "INVALID TOKEN" });
    // next(error)
  }
};
