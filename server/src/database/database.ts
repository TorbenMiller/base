import pgPromise, { IDatabase, IMain } from "pg-promise";
import { DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USER } from "../constants";

const pgp: IMain = pgPromise({ capSQL: true });
const connectionOptions = {
    host: "db",
    port: 5432,
    database: DATABASE_NAME,
    user: DATABASE_PASSWORD,
    password: DATABASE_USER,
};
export const helpers = pgp.helpers;

const db: IDatabase<object> = pgp(connectionOptions);

export { db };
