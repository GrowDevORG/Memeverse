import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

export class UserRepository {
    async createUser(clerkId : string, name : string, email : string, password?: string) {
        const newUser = await prisma.user.create({
            data : {
                clerkId,
                password,
                email,
                name
            }
        })
        return newUser
    }

    async findUserByEmail (email : string) {
        const findUser = await prisma.user.findUnique({where : {email}})
        return findUser;
    }
}