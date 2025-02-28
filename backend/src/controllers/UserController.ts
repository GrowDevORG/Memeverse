import { Request, Response } from "express";
import {UserService} from "../services/UserService";

const userService = new UserService();

// wip : send responses

export class UserController {
    static async  register(req : Request, res : Response) {
        try {
            const {name, email, password, clerkId} = req.body;
            const user = await userService.registerUser(clerkId, name, email, password);
            res.status(201).json({user, message : "User Created"});
        } catch (e) {
            console.log(e);
            res.status(403).json({error : "Error"});
        }
    }
}