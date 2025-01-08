import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_D6y9k2BJ.mjs';
import { manifest } from './manifest_BAngiTHz.mjs';

const serverIslandMap = new Map([
	['BookStore', () => import('./chunks/BookStore_D33h13o-.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_TvX-Kyqo.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.1.2_jiti@1.21.7_rollup@4.29.2_typescript@5.7.2_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "361275ec-41a8-490b-a540-47221b4b318f",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
