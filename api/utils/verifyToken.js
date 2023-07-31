import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;
  // If there is Token
  if (!token) {
    return next(createError(401, "There is no Token !"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    // if Token is valid
    if (err) return next(createError(403, "Token is not valid!"));
          // if the id is the same in token or no
    if (user.id === req.params.id || user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
        // If there is Token
    return next(createError(401, "There is no Token !"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    // if Token is valid
    if (err) return next(createError(403, "Token is not valid!"));
    // if the id is the same in token or no and admin or no
    if (user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not Admin!"));
    }
  });
};
