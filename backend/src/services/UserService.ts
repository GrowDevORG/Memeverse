import {UserRepository} from "../repositories/UserRepository";

export class UserService {
    private userRepo = new UserRepository();

    async registerUser(clerkId : string, name : string, email : string, password?: string) {
        const existingUser = await this.userRepo.findUserByEmail(email);

        if (existingUser) {
            throw new Error("User already exists");
        }

        return this.userRepo.createUser(clerkId, name, email, password)
    }
}