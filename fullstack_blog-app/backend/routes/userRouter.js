import express from "express";
import userController from "../controllers/userController.js";
import userValidation from "../validations/userValidation.js";
import authUser from "../middleware/authUser.js";
import postController from "../controllers/postController.js";

const router = express.Router();
router.get("/posts", authUser.tokenVerification, userController.);
router.post(
  "/login",
  authUser.userInfo,
  userController.loginUser,
  // postController.getAllPost
);
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.put("/get-single-user/:id", userValidation, userController.getUser);
router.get("/get-all-users", userController.getAllusers);
router.delete("/delete-user/:id", userController.deleteUser);

export default router;
