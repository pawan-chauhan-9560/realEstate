import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashPassword = await bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashPassword });
  try {
    await newUser.save();
    res.status(201).json("record saved");
  } catch (error) {
    res.status(500).json(error.message);
  }
  console.log(username);
};
