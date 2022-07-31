
import { Request, Response } from 'express';
import { prisma } from '../PrismaClient';

export class CreateVideos{
    async handle(req: Request, res:Response){
        const { name, description, duration, category_id } = req.body;

        const result = await prisma.videos.create({
            data: {
                name,
                description,
                duration,
                category_id
            }
        });    

        return res.json(result);
    }
}