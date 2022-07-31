
import { Request, Response } from 'express';
import { prisma } from '../PrismaClient';

export class ListCategories{
    async handle(req: Request, res:Response){
        const users = await prisma.categories.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });
        return res.json(users);
    }
}