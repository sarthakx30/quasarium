import { PrismaClient } from "@prisma/client";

// hot reload doesn't initialize too many db client
// if enviroment isn't production

declare global {
    var prisma:PrismaClient | undefined;
};

export const db=globalThis.prisma||new PrismaClient();

if(process.env.NODE_ENV!=="production") globalThis.prisma=db;