/* empty css                           */import { f as createComponent, r as renderTemplate, i as renderComponent, u as unescapeHTML } from '../astro_714e011d.mjs';
import 'clsx';
import { $ as $$MDlayout } from './post-1_ea9a76c5.mjs';

const html = "<h1 id=\"hello\">hello</h1>";

				const frontmatter = {"layout":"../../layouts/MDLayout.astro","title":"test 2","description":"desc","author":"76","pubDate":"20231124"};
				const file = "C:/Users/User/Desktop/astro/src/pages/blog/post-2.md";
				const url = "/blog/post-2";
				function rawContent() {
					return "# hello";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"hello","text":"hello"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MDlayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
