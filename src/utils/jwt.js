import jwt from "jsonwebtoken";

export async function generateToken(payload) {
  const generatedToken = jwt.sign(payload, "IIVSIUVISUBCIBUIWVFYUVWVY", {
    expiresIn: "24h",
  });
  return generatedToken;
}

export async function verifyToken(generatedToken) {
  return jwt.verify(generatedToken, "IIVSIUVISUBCIBUIWVFYUVWVY");
}
