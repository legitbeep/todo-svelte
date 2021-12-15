// since 1 of them will be undefined on either local or production
import Prisma, * as PrismaAll from '@prisma/client';

const PrismaClient = Prisma?.PrismaClient || PrismaAll?.PrismaClient;

export default PrismaClient;