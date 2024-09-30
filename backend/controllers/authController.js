import User from "../models/userModel.js";
import { secretToken } from "../util/secretToken.js";
import bcrypt from "bcrypt";

const Signup = async (req, res, next) => {
  try {
    const { username, email, password, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({ username, email, password, createdAt });
    const token = secretToken(user._id);
    res.cookie("token", token, { withCredentials: true, httpOnly: false });
    res
      .status(201)
      .json({ message: "User created successfully", success: true, user });
    next();
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
    console.log(error);
  }
};

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = secretToken(user._id);
    res.cookie("token", token, { withCredentials: true, httpOnly: false });
    res.status(201).json({ message: "Login successful", success: true });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", success: false });
    console.log(error);
  }
};

export { Signup, Login };
