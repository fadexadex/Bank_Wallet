import bcrypt from "bcrypt";

export const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};

export const passwordMatches = async (password, userpassword) => {
  return await bcrypt.compare(password, userpassword);
};
