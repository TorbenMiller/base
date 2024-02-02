import { Context, Next } from "koa";

export async function measureResponseTime(
    ctx: Context,
    next: Next
): Promise<void> {
    const start: number = Date.now();
    await next();
    const ms: number = Date.now() - start;
    console.log(`${ctx.method}: ${ctx.url}`, ms);
}
