import { PrismaClient } from '@prisma/client'

declare global {
    var prismadb: PrismaClient | undefined;
}

// Prevent multiple instances of PrismaClient in development
const client = globalThis.prismadb || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalThis.prismadb = client;

export default client;