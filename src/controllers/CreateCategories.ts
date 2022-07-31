
import { Request, Response } from 'express';
import { prisma } from '../PrismaClient';

export class CreateCategories{
    async handle(req: Request, res:Response){
        const { name, description } = req.body;

        const result = await prisma.categories.create({
            data: {
                name,
                description
            },
        });    

        return res.json(result);
    }
}