import Router from "koa-router";

const routerPrefix: string = "/dummy";

const router = new Router();

router.get(`${routerPrefix}/hello`, async (ctx) => {
    ctx.status = 200;
});

export default router;
