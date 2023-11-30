import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_5d476ac1.mjs';

const _page0  = () => import('./chunks/generic_6af4174b.mjs');
const _page1  = () => import('./chunks/index_387c9e07.mjs');
const _page2  = () => import('./chunks/index_f90c0a90.mjs');
const _page3  = () => import('./chunks/index_17afa04c.mjs');
const _page4  = () => import('./chunks/index_01b8bce2.mjs');
const _page5  = () => import('./chunks/index_854dbfa2.mjs');
const _page6  = () => import('./chunks/index_bdb3bc63.mjs');
const _page7  = () => import('./chunks/index_208f88ef.mjs');
const _page8  = () => import('./chunks/test_4b7ba958.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/portfolio/index.astro", _page2],["src/pages/portfolio/ch1yoCoffee/index.html", _page3],["src/pages/portfolio/Bootstrap/index.html", _page4],["src/pages/portfolio/Tailwind/index.html", _page5],["src/pages/portfolio/MSI/index.html", _page6],["src/pages/portfolio/Vue/index.html", _page7],["src/pages/test.astro", _page8]]);
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
