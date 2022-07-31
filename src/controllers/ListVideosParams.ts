
import { Request, Response } from 'express';
import { prisma } from '../PrismaClient';

export class ListVideosParams{
    async handle(req: Request, res:Response){
        const { id } = req.params;

        const users = await prisma.videos.findUnique({
            where: {
                id: id
            },
            include: {
                category: true
            }
        });

        return res.json(users);
    }
}