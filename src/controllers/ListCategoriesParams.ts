
import { Request, Response } from 'express';
import { prisma } from '../PrismaClient';

export class ListCategoriesParams{
    async handle(req: Request, res:Response){
        const { id } = req.params;

        const users = await prisma.categories.findUnique({
            where: {
                id: id
            }
        });

        return res.json(users);
    }
}