import Koa from "koa";
import { ENVIRONMENT } from "../constants";

import { handleErrorsInDevelopment } from "./middleware/handleErrors";
import { measureResponseTime } from "./middleware/measureResponseTime";
import dummyRouter from "./routers/dummyRouter";

export class Server {
    private koaApp: Koa;

    private static INSTANCES: number = 0;

    constructor() {
        Server.INSTANCES++;
        if (Server.INSTANCES > 1) {
            throw new Error(
                `${Server.INSTANCES} server instances. Only one is allowed`
            );
        }
        this.koaApp = new Koa();
        this.setupRouters();
        this.setupGlobalMiddleware();
    }

    private setupRouters(): void {
        this.koaApp.use(dummyRouter.routes()).use(dummyRouter.allowedMethods());
        // more routers go here
    }

    private setupGlobalMiddleware(): void {
        // all global middleware goes here
        if (ENVIRONMENT === "development") {
            this.koaApp.use(handleErrorsInDevelopment);
        }
        this.koaApp.use(measureResponseTime);
    }

    public start(): void {
        this.koaApp.listen(3333, (): void => {
            console.log(`Server started.`);
        });
    }
}
