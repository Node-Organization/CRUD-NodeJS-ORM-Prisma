
import { Request, Response } from 'express';
import { prisma } from '../PrismaClient';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export class AuthenticateUser{
    async handle(req: Request, res:Response){
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });

        if(!user) {
            return res.json({ error: 'Email is password invalited' }).status(400).end();
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch){
            return res.json({ error: 'Email is password invalited' }).status(400).end();
        }

        const token = sign(
            {

            },
            "45465446f5d65465fdfdf54654f6d46",
            {
                subject: user.id,
                expiresIn: '1000s'
            }
        );

        return res.json(token);
        
    }
}