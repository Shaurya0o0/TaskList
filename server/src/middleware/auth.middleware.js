import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export default async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 🔥 fetch full user
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;  // now has _id
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};