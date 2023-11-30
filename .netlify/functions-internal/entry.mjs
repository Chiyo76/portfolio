import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_6f9d9d42.mjs';

const _page0  = () => import('./chunks/generic_a0e0d0aa.mjs');
const _page1  = () => import('./chunks/index_966ff870.mjs');
const _page2  = () => import('./chunks/index_bb361705.mjs');
const _page3  = () => import('./chunks/index_c2c2d1db.mjs');
const _page4  = () => import('./chunks/index_c0bd14b1.mjs');
const _page5  = () => import('./chunks/index_6d67e0bc.mjs');
const _page6  = () => import('./chunks/index_a3bff6cf.mjs');
const _page7  = () => import('./chunks/index_7595517c.mjs');
const _page8  = () => import('./chunks/index_1394b042.mjs');
const _page9  = () => import('./chunks/post-1_b7133944.mjs');
const _page10  = () => import('./chunks/post-2_ff8e8c18.mjs');
const _page11  = () => import('./chunks/post-3_cb9f6c88.mjs');
const _page12  = () => import('./chunks/post-4_e3927b2b.mjs');
const _page13  = () => import('./chunks/post-5_f14a22d4.mjs');
const _page14  = () => import('./chunks/post-6_3d873708.mjs');
const _page15  = () => import('./chunks/post-7_40a35d12.mjs');
const _page16  = () => import('./chunks/test_aae3da7a.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/portfolio/index.astro", _page2],["src/pages/portfolio/ch1yoCoffee/index.html", _page3],["src/pages/portfolio/Bootstrap/index.html", _page4],["src/pages/portfolio/Tailwind/index.html", _page5],["src/pages/portfolio/MSI/index.html", _page6],["src/pages/portfolio/Vue/index.html", _page7],["src/pages/blog/index.astro", _page8],["src/pages/blog/post-1.md", _page9],["src/pages/blog/post-2.md", _page10],["src/pages/blog/post-3.md", _page11],["src/pages/blog/post-4.md", _page12],["src/pages/blog/post-5.md", _page13],["src/pages/blog/post-6.md", _page14],["src/pages/blog/post-7.md", _page15],["src/pages/test.astro", _page16]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
