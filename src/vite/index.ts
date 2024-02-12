import type { Plugin } from 'vite';

export default function honokit(): Plugin {
  return {
    name: "HonoKit",
    enforce: 'pre',

  }
};
