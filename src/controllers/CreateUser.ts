
import { Request, Response } from 'express';
import { prisma } from '../PrismaClient';
import { hash } from 'bcryptjs';

export class CreateUser{
    async handle(req: Request, res:Response){
        const { name, email, password, admin } = req.body;

        const passwordHash = await hash(password, 8);

        const userExists = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if(userExists){
            return res.json({ error: 'User exists' }).status(400).end();
        }

        const result = await prisma.user.create({
            data: {
                name, 
                email, 
                password: passwordHash, 
                admin
            }
        })

        return res.json(result);
    }
}