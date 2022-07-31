
import { Request, Response } from 'express';
import { prisma } from '../PrismaClient';

export class ListUserParams{
    async handle(req: Request, res:Response){
        const { id } = req.params;

        const users = await prisma.user.findUnique({
            where: {
                id: id
            },
            select: {
                id:         true,
                name:       true,
                email:      true,
                admin:      true,
                created_at: true
            }
        });

        return res.json(users);
    }
}