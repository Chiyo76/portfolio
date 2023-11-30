/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, j as renderHead, k as renderSlot } from '../astro_714e011d.mjs';
import 'clsx';
/* empty css                            */
const $$Astro$8 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Nav;
  const { logo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="flex mx-auto justify-between px-3 py-4 text-m lg:text-2xl font-bold bg-slate-500" id="nav"> <a class="hover:text-white duration-300 ml-10" href="/">${logo}</a> <div class="flex space-x-8"> <a class="hover:text-white duration-300" href="/履歷.pdf" target="_blank">履歷</a> <a class="group hover:text-white duration-300 inline-block relative h-full" href="/portfolio">作品集</a> <a class="hover:text-white duration-300" href="/portfolio/Vue">Vue</a> <a class="hover:text-white duration-300" href="/portfolio/ch1yoCoffee">形象網站</a> <!-- <a class="hover:text-white duration-300" href="/blog">blog</a> --> </div> <div class="group ml-5 lg:mr-10"> <a class="px-2 hover:text-white duration-200" href="#"><i class="fa-solid fa-magnifying-glass hover:scale-110"></i></a> <a class="px-2 hover:text-white duration-200" href="#"><i class="fa-solid fa-user hover:scale-110"></i></a> <div class="hidden group-hover:block duration-200 bg-slate-500 text-white fixed top-[70px] sm:top-[50px] right-8 w-fit h-fit text-center py-1 px-3 z-50">
我是裝飾的
</div> </div> </nav>`;
}, "C:/Users/User/Desktop/astro/src/components/Nav.astro", void 0);

const $$Astro$7 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="flex bg-zinc-900 text-zinc-50 px-3 py-5 justify-between text-sm"> <div>
COPYRIGHTS&copy;2023.All Rights Reserved
</div> <div>
Design By Ch1yo.
</div> </footer>`;
}, "C:/Users/User/Desktop/astro/src/components/Footer.astro", void 0);

const $$Astro$6 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate", handleForms } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${handleForms ? renderTemplate`<meta name="astro-view-transitions-forms" content="true">` : ""}`;
}, "C:/Users/User/Desktop/astro/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$5 = createAstro();
const $$Master = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Master;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth" data-astro-cid-5oawr2cs> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Ch1yo's Site ${pageTitle && "- " + pageTitle}</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-5oawr2cs": true })}${renderHead()}</head> <body data-astro-cid-5oawr2cs> ${renderComponent($$result, "Nav", $$Nav, { "logo": "Ch1yo's website", "data-astro-cid-5oawr2cs": true })} ${renderSlot($$result, $$slots["default"])} <div class="p-2 fixed bottom-10 right-10 w-fit h-fit bg-slate-300 z-50 rounded-md hover:scale-125 hover:bg-slate-600 hover:text-white duration-200" data-astro-cid-5oawr2cs> <a href="#nav" class="font-bold text-2xl goTop" data-astro-cid-5oawr2cs> 回到頂端</a> </div> <!-- 要放 <slot /> 就可以套用樣板自定義內容 --> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5oawr2cs": true })} </body></html>`;
}, "C:/Users/User/Desktop/astro/src/layouts/Master.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  const { desc1 } = Astro2.props;
  const { desc2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header id="header" class="overflow-hidden"> <figure class="relative"> <img src="/images/header.jpg" alt="" class="aspect-[21/9] h-full w-full opacity-50"> <figcaption class="text-slate-800 text-2xl lg:text-8xl font-black absolute w-fit h-fit top-[100px] left-[100px] fig-left"> ${desc1} </figcaption> <figcaption class="text-slate-800 text-2xl lg:text-6xl font-black absolute w-fit h-fit bottom-[100px] right-[100px] fig-right"> ${desc2} </figcaption> ${renderSlot($$result, $$slots["default"])} </figure> </header>`;
}, "C:/Users/User/Desktop/astro/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Master", $$Master, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "desc1": "\u6B61\u8FCE\u4F86\u5230\u980E\u4F51\u7684\u500B\u4EBA\u7DB2\u9801!!", "desc2": "welcome to Ch1yo's personal website" })} ${maybeRenderHead()}<div class="relative"> <h2 class="text-4xl font-black py-10 text-center">我的履歷</h2> <a href="/履歷.pdf" target="_blank" class="text-2xl inline-block absolute left-2 bottom-2 font-bold text-slate-700 hover:text-slate-300 duration-200">履歷連結</a> </div> <div class="flex resume"> <div class="rounded-xl overflow-hidden h-[800px] w-1/2 relative z-50 bg-white"> <a href="/履歷.pdf"> <object data="/履歷.pdf" type="application/pdf" width="100%" height="100%" class="h-full"></object> </a> </div> <div class="w-1/2 relative overflow-hidden"> <div class="text-xl p-8 space-y-5 lg:text-4xl"> <h2>您好！謝謝您抽空觀賞我的網站:)</h2> <p>此網站是使用astro框架架設</p> <p>作品有使用到以下框架、套件：</p> <ul class="list-disc p-5 space-y-5 list-inside"> <li>Tailwindcss</li> <li>Bootstrap</li> <li>Vue.js</li> <li>gsap動畫效果</li> <li>AOS動畫效果</li> </ul> </div> <a href="/portfolio" class="group"> <div class="absolute bottom-[200px] right-40 w-fit h-fit bg-slate-300 z-50 rounded-md hover:scale-125 hover:bg-slate-600 hover:text-white p-[1vw] duration-200 font-bold">前往作品</div> <div class="opacity-0 group-hover:opacity-100 duration-200 text-xl absolute bottom-36 z-50 md:bottom-[280px] right-20 italic">上方主選單也可以選擇哦!</div> </a> <div class="w-[20vw] h-[20vh] run absolute left-[-200px] bottom-0"> <img src="/images/running.gif" alt="" class="w-full h-full object-cover"> </div> </div> </div>  ` })}`;
}, "C:/Users/User/Desktop/astro/src/pages/index.astro", void 0);

const $$file$2 = "C:/Users/User/Desktop/astro/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$2,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`<html lang="en" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title>${renderHead()}</head> <body> ${renderComponent($$result, "Master", $$Master, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "desc1": "\u9019\u88E1\u662F\u4F5C\u54C1\u96C6", "desc2": "Here Is My Portfolio" }, { "default": ($$result3) => renderTemplate` <figcaption class="keep p-2 md:p-5 absolute inset-0 top-[150px] left-4 w-fit h-fit md:m-auto md:-translate-y-full bg-slate-600 rounded-md hover:scale-125 hover:bg-slate-300 duration-200 z-[100]"> <a href="#layouts" class="font-bold text-3xl lg:text-6xl text-white hover:text-black">
繼續
</a> </figcaption> ` })} <section class="relative overflow-hidden" class="max-w-full min-h-full overflow-hidden" id="portfolio"> <!-- 兩側箱箱 --> <div class="box w-[8vw] h-[8vw] absolute bg-green-200"></div> <div class="box1 w-[8vw] h-[8vw] absolute right-0 bg-sky-200"></div> <!-- 作品集 --> <div class="py-40 bg-slate-200 w-3/4 container mx-auto flex flex-wrap"> <div class="w-full lg:w-10/12 flex flex-wrap lg:flex-nowrap justify-center items-center mx-auto space-y-5 lg:space-y-0 lg:space-x-10"> <!-- card-1 --> <div class="w-full lg:w-1/3 p-5 bg-slate-500 bg-gradient-to-b from-slate-50 rounded-xl group hover:scale-110 hover:bg-slate-700 duration-200" id="layouts"> <div class="w-full p-8"> <div class="rounded-full overflow-hidden aspect-[1/1]"> <img src="/images/portfolio/版型預覽.png" alt="" class="w-full h-full object-cover"> </div> </div> <div class="flex flex-col lg:w-2/3 w-full sm:pl-8 text-center sm:text-left space-y-2 py-5"> <div class="text-3xl font-bold text-white group-hover:text-blue-200 duration-200 relative flex flex-col"> <a href="#layouts" class="hover:scale-110 hover:text-cyan-200">
各式版型
</a> <p class="hidden group-hover:block text-lg font-bold text-stone-200 duration-200">
使用各種框架製作版型
</p> </div> <div class="text-xl mb-4"> <ul class="list-disc list-inside space-y-2 text-stone-300"> <li class="hover:text-white hover:font-bold duration-200"> <a href="/portfolio/Tailwind">Tailwind</a> </li> <li class="hover:text-white hover:font-bold duration-200"> <a href="/portfolio/Bootstrap">Bootstrap</a> </li> <li class="hover:text-white hover:font-bold duration-200"> <a href="/portfolio/MSI">仿微星官網</a> </li> </ul> </div> </div> </div> <!-- card-2 --> <div class="relative w-full lg:w-1/3 p-5 bg-slate-500 bg-gradient-to-b from-slate-50 rounded-xl group hover:scale-110 hover:bg-slate-700 duration-200" id="layouts"> <div class="w-full p-8"> <div class="rounded-full overflow-hidden aspect-[1/1]"> <img src="/images/portfolio/vueCart.png" alt="" class="w-full h-full object-cover"> </div> </div> <div class="flex flex-col w-full sm:pl-8 text-center sm:text-left space-y-2 py-5"> <div class="text-3xl font-bold text-white group-hover:text-blue-200 duration-200 relative flex flex-col"> <a href="/portfolio/Vue" class="hover:scale-110 hover:text-cyan-200">
Vue購物網站
</a> <p class="hidden group-hover:block text-lg font-bold text-stone-200 duration-200">
使用Vue.js編寫
</p> </div> <div class="text-xl mb-4 w-full"> <ul class="list-disc list-inside space-y-2 text-stone-300"> <li class="hover:text-white hover:font-bold duration-200">
使用fakestore api
</li> <li class="hover:text-white hover:font-bold duration-200">
前端簡易購物車
</li> <li class="hover:text-white hover:font-bold duration-200">
簡易天氣查詢
</li> </ul> </div> <a href="/portfolio/Vue" class="bg-cyan-100 rounded-xl hover:bg-slate-400 font-bold ml-auto -translate-x-2 hover:text-white hover:font-bold duration-200 px-4 py-2 inline-block">
前往
</a> </div> </div> <!-- card-3 --> <div class="relative w-full lg:w-1/3 p-5 bg-slate-500 bg-gradient-to-b from-slate-50 rounded-xl group hover:scale-110 hover:bg-slate-700 duration-200" id="layouts"> <div class="w-full p-8"> <div class="rounded-full overflow-hidden aspect-[1/1]"> <img src="/images/portfolio/vueCart.png" alt="" class="w-full h-full object-cover"> </div> </div> <div class="flex flex-col w-full sm:pl-8 text-center sm:text-left space-y-2 py-5"> <div class="text-3xl font-bold text-white group-hover:text-blue-200 duration-200 relative flex flex-col"> <a href="/portfolio/ch1yoCoffee" class="hover:scale-110 hover:text-cyan-200">
形象網站
</a> <p class="hidden group-hover:block text-lg font-bold text-stone-200 duration-200">
模擬個人品牌
</p> </div> <div class="text-xl mb-4 w-full"> <ul class="list-disc list-inside space-y-2 text-stone-300"> <li class="hover:text-white hover:font-bold duration-200">
使用Tailwind CSS編寫
</li> <li class="hover:text-white hover:font-bold duration-200">
大量aos動畫效果
</li> <li class="hover:text-white hover:font-bold duration-200">
swiper轉盤
</li> </ul> </div> <a href="/portfolio/ch1yoCoffee" class="bg-cyan-100 rounded-xl hover:bg-slate-400 font-bold ml-auto -translate-x-2 hover:text-white hover:font-bold duration-200 px-4 py-2 inline-block">
前往
</a> </div> </div> </div> </div> </section> ` })}  </body> </html>`;
}, "C:/Users/User/Desktop/astro/src/pages/portfolio/index.astro", void 0);

const $$file$1 = "C:/Users/User/Desktop/astro/src/pages/portfolio/index.astro";
const $$url$1 = "/portfolio";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index$1,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Post = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Post;
  const { title, pubDate, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="border border-zinc-700 p-5 w-1/2 mx-auto mb-4"> <h3 class="text-3xl font-bold text-sky-400">${title}</h3> <div>${pubDate}</div> <a${addAttribute(url, "href")}>繼續閱讀</a> </div>`;
}, "C:/Users/User/Desktop/astro/src/components/Post.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./post-1.md": () => import('./post-1_ea9a76c5.mjs').then(n => n.p),"./post-2.md": () => import('./post-2_0b79e96f.mjs'),"./post-3.md": () => import('./post-3_6f2a4084.mjs'),"./post-4.md": () => import('./post-4_63c2a149.mjs'),"./post-5.md": () => import('./post-5_5da6fd43.mjs'),"./post-6.md": () => import('./post-6_40824c05.mjs'),"./post-7.md": () => import('./post-7_fc480525.mjs')}), () => "./*.md");
  return renderTemplate`${renderComponent($$result, "Master", $$Master, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2 class="text-4xl p-5">
部落格練習，全部都是md檔
</h2> ${posts.map(
    (post) => renderTemplate`${renderComponent($$result2, "Post", $$Post, { "title": post.frontmatter.title, "pubDate": post.frontmatter.pubDate, "url": post.url })}`
  )}` })}`;
}, "C:/Users/User/Desktop/astro/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/User/Desktop/astro/src/pages/blog/index.astro";
const $$url = "/blog";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Master as $, index$1 as a, index as b, index$2 as i };
