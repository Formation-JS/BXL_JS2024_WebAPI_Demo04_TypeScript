declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: string;
            PORT: string;
            JWT_SECRET: string;
            JWT_ISSUER: string;
            JWT_AUDIENCE: string;
        }
    }
}

export default global