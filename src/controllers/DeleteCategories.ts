
import { Request, Response } from 'express';
import { prisma } from '../PrismaClient';

export class DeleteCategories{
    async handle(req: Request, res:Response){
        const { id } = req.params;

        try {
            await prisma.categories.delete({
                where: {
                  id: id
                },
            });
            return res.status(204).end();
        } catch (error) {
            return res.status(400).end();
        }
    }
}