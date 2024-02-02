import { Context, Next } from "koa";

export async function handleErrorsInDevelopment(ctx: Context, next: Next) {
    try {
        await next();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log(error);
        ctx.response.status = 500;
        ctx.response.body = {
            message: error.message,
        };
    }
}
