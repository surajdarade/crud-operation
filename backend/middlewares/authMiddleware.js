import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

export const userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized", status: false });
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized", status: false });
    } else {
      const user = await User.findById(data.id);
      if (user) {
        return res
          .status(200)
          .json({ message: "Authorized", status: true, user: user.username });
      } else {
        return res.status(401).json({ message: "Unauthorized", status: false });
      }
    }
  });
};
