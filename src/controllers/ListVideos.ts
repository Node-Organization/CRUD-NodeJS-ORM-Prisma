
import { Request, Response } from 'express';
import { prisma } from '../PrismaClient';

export class ListVideos{
    async handle(req: Request, res:Response){
        const users = await prisma.videos.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });
        return res.json(users);
    }
}