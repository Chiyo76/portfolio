/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_714e011d.mjs';
import 'clsx';
import { $ as $$Master } from './index_6adf1dea.mjs';

const $$Astro = createAstro();
const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  Astro2.props;
  await Astro2.glob(/* #__PURE__ */ Object.assign({"./blog/post-1.md": () => import('./post-1_ea9a76c5.mjs').then(n => n.p),"./blog/post-2.md": () => import('./post-2_0b79e96f.mjs'),"./blog/post-3.md": () => import('./post-3_6f2a4084.mjs'),"./blog/post-4.md": () => import('./post-4_63c2a149.mjs'),"./blog/post-5.md": () => import('./post-5_5da6fd43.mjs'),"./blog/post-6.md": () => import('./post-6_40824c05.mjs'),"./blog/post-7.md": () => import('./post-7_fc480525.mjs')}), () => "./blog/*.md");
  return renderTemplate`${renderComponent($$result, "Master", $$Master, {})}`;
}, "C:/Users/User/Desktop/astro/src/pages/test.astro", void 0);

const $$file = "C:/Users/User/Desktop/astro/src/pages/test.astro";
const $$url = "/test";

export { $$Test as default, $$file as file, $$url as url };
