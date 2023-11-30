export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/post-1_ea9a76c5.mjs').then(n => n.p);

export { page };
