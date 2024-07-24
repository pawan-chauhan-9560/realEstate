import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = await bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("record saved");
  } catch (error) {
    next(error);
  }
  console.log(username);
};
