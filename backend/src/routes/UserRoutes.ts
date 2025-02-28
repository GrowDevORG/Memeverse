import {Router} from "express"
import {UserController} from "../controllers/UserController";

const userRouter = Router();

userRouter.post("/register", UserController.register);

export default userRouter