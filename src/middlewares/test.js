// import { generateToken } from "../utils/jwt.js";
// import { verifyToken } from "../utils/jwt.js";
// const payload = {
//   email: "fadedrays192@gmail.com",
// };

// async function main() {
//   const token = generateToken(payload);
//   console.log(token);

//   try {
//     const check = await verifyToken(token);
//     console.log(check);
//   } catch (error) {
//     console.error(error);
//   }
// }

// main();

import { generateToken, verifyToken } from "../utils/jwt.js";

const payload = {
  email: "fadedrays192@gmail.com",
};

async function main() {
  try {
    const token = await generateToken(payload);
    console.log(token);

    const check = await verifyToken(token);
    console.log(check);
  } catch (error) {
    console.error(error);
  }
}

main();
