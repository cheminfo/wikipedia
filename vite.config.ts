import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const injectHead = process.env.BUILD_INJECT_HEAD;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ...(injectHead ? [htmlPlugin(injectHead)] : [])],
});

function htmlPlugin(injectHead: string) {
  return {
    name: 'html-transform',
    transformIndexHtml(html: string) {
      return html.replace('</head>', `${injectHead}</head>`);
    },
  };
}
