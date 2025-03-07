declare global {
    namespace NodeJS {
        interface ProcessEnv {
            // Common
            NODE_ENV: string;
            PORT: string;
            // JWT
            JWT_SECRET: string;
            JWT_ISSUER: string;
            JWT_AUDIENCE: string;
            // DB
            DB_HOST: string;
            DB_PORT: string;
            DB_DATABASE: string;
            DB_USERNAME: string;
            DB_PASSWORD: string;
        }
    }
}

export default global