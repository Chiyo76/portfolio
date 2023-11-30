/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent } from '../astro_e576cef1.mjs';
import 'html-escaper';
import 'clsx';
import { $ as $$Master } from './index_bddfda86.mjs';

const $$Astro = createAstro();
const $$Test = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Test;
  Astro2.props;
  await Astro2.glob(/* #__PURE__ */ Object.assign({}), () => "./blog/*.md");
  return renderTemplate`${renderComponent($$result, "Master", $$Master, {})}`;
}, "C:/Users/User/Desktop/astro/src/pages/test.astro", void 0);

const $$file = "C:/Users/User/Desktop/astro/src/pages/test.astro";
const $$url = "/test";

export { $$Test as default, $$file as file, $$url as url };
