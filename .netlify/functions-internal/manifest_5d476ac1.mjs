import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'mime';
import 'html-escaper';
import 'clsx';
import './chunks/astro_e576cef1.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.3f662e6c.js"}],"styles":[{"type":"external","src":"/_astro/index.f72631fd.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}html{scroll-behavior:smooth}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.a3b75a59.js"}],"styles":[{"type":"external","src":"/_astro/index.f72631fd.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}html{scroll-behavior:smooth}\n"}],"routeData":{"route":"/portfolio","type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/index.astro","pathname":"/portfolio","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.f72631fd.css"}],"routeData":{"route":"/portfolio/ch1yocoffee","type":"page","pattern":"^\\/portfolio\\/ch1yoCoffee\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"ch1yoCoffee","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/ch1yoCoffee/index.html","pathname":"/portfolio/ch1yoCoffee","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.f72631fd.css"}],"routeData":{"route":"/portfolio/bootstrap","type":"page","pattern":"^\\/portfolio\\/Bootstrap\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"Bootstrap","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/Bootstrap/index.html","pathname":"/portfolio/Bootstrap","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.f72631fd.css"}],"routeData":{"route":"/portfolio/tailwind","type":"page","pattern":"^\\/portfolio\\/Tailwind\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"Tailwind","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/Tailwind/index.html","pathname":"/portfolio/Tailwind","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.f72631fd.css"}],"routeData":{"route":"/portfolio/msi","type":"page","pattern":"^\\/portfolio\\/MSI\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"MSI","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/MSI/index.html","pathname":"/portfolio/MSI","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.f72631fd.css"}],"routeData":{"route":"/portfolio/vue","type":"page","pattern":"^\\/portfolio\\/Vue\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}],[{"content":"Vue","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio/Vue/index.html","pathname":"/portfolio/Vue","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.65310f9c.js"}],"styles":[{"type":"external","src":"/_astro/index.f72631fd.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}html{scroll-behavior:smooth}\n"}],"routeData":{"route":"/test","type":"page","pattern":"^\\/test\\/?$","segments":[[{"content":"test","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/test.astro","pathname":"/test","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/User/Desktop/astro/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/Desktop/astro/src/pages/portfolio/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/User/Desktop/astro/src/pages/test.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_b0bed294.mjs","/src/pages/test.astro":"chunks/pages/test_f993c8b8.mjs","\u0000@astrojs-manifest":"manifest_5d476ac1.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_6af4174b.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_387c9e07.mjs","\u0000@astro-page:src/pages/portfolio/index@_@astro":"chunks/index_f90c0a90.mjs","\u0000@astro-page:src/pages/portfolio/ch1yoCoffee/index@_@html":"chunks/index_17afa04c.mjs","\u0000@astro-page:src/pages/portfolio/Bootstrap/index@_@html":"chunks/index_01b8bce2.mjs","\u0000@astro-page:src/pages/portfolio/Tailwind/index@_@html":"chunks/index_854dbfa2.mjs","\u0000@astro-page:src/pages/portfolio/MSI/index@_@html":"chunks/index_bdb3bc63.mjs","\u0000@astro-page:src/pages/portfolio/Vue/index@_@html":"chunks/index_208f88ef.mjs","\u0000@astro-page:src/pages/test@_@astro":"chunks/test_4b7ba958.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.3f662e6c.js","/astro/hoisted.js?q=1":"_astro/hoisted.a3b75a59.js","/astro/hoisted.js?q=2":"_astro/hoisted.65310f9c.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/index.f72631fd.css","/favicon.svg","/履歷.pdf","/images/header.jpg","/images/running.gif","/_astro/hoisted.3f662e6c.js","/_astro/hoisted.65310f9c.js","/_astro/hoisted.a3b75a59.js","/_astro/ScrollTrigger.1fe021b6.js","/css/msi-css/global.css","/css/msi-css/style.css","/images/Ch1yoCoffee/1.jpg","/images/Ch1yoCoffee/11.jpg","/images/Ch1yoCoffee/2.jpg","/images/Ch1yoCoffee/3.jpg","/images/Ch1yoCoffee/4.jpg","/images/Ch1yoCoffee/about.jpg","/images/Ch1yoCoffee/p1.jpg","/images/Ch1yoCoffee/p10.jpg","/images/Ch1yoCoffee/p2.jpg","/images/Ch1yoCoffee/p3.jpg","/images/Ch1yoCoffee/p4.jpg","/images/Ch1yoCoffee/p5.jpg","/images/Ch1yoCoffee/p6.jpg","/images/Ch1yoCoffee/p7.jpg","/images/Ch1yoCoffee/p8.jpg","/images/Ch1yoCoffee/p9.jpg","/images/Ch1yoCoffee/pexels-brigitte-tohm-143640.jpg","/images/Ch1yoCoffee/pexels-cesur-çete-18836997.jpg","/images/Ch1yoCoffee/pexels-flo-dahm-1065030.jpg","/images/Ch1yoCoffee/pexels-photo-2379864.jpeg","/images/Ch1yoCoffee/pexels-polina-tankilevitch-4109745.jpg","/images/portfolio/Ch1yo's-Coffee.png","/images/portfolio/vueCart.png","/images/portfolio/版型預覽.png"]});

export { manifest };
