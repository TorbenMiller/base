import { getEnvironmentVariable } from "./utils/environment";

export const ENVIRONMENT: string = getEnvironmentVariable("NODE_ENV");

export const DATABASE_NAME: string = getEnvironmentVariable("POSTGRES_DB");
export const DATABASE_USER: string = getEnvironmentVariable("POSTGRES_USER");
export const DATABASE_PASSWORD: string =
    getEnvironmentVariable("POSTGRES_PASSWORD");
