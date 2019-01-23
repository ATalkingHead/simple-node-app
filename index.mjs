import Koa from "koa";
import log from "signale";
import Router from "koa-router";
import logger from "koa-logger";

const app = new Koa();
const router = new Router();
const PORT = process.env.PORT || 8080;
const node   = process.env.NODE_NAME;
const podName   = process.env.POD_NAME;
const podNamespace   = process.env.POD_NAMESPACE;
const podIP   = process.env.POD_IP;

app.use(logger())

router.get('/', (ctx, next) => {
    ctx.body = `<h1 style="text-align: center;">NodeJs application running on docker inside kubernetes!</h1>
                <br>
                <h2>Node: ${node}</h2>
                <h2>Pod Name: ${podName}</h2>
                <h2>Pod Namespace: ${podNamespace}</h2>
                <h2>Pod IP: ${podIP}</h2>`;
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(PORT, err => {
    log.success(`Successfully started on port ${PORT}!`);
});