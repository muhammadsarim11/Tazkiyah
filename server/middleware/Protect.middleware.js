import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";
import catchAsync from "../utils/WrapAsync.js";

const protect = catchAsync(async (req, res, next) => {
  let token = req.cookies?.accessToken;

  // Fallback: Authorization header (for Postman)
  if (!token && req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, token missing" });
  }

  // Token verify karo
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  // DB se user fetch karo (authentic bhi hai ya nahi?)
  const user = await User.findById(decoded.id).select("-password");

  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }

  // User ko request object par chipka do
  req.user = user;

  next();
});

export default protect;
