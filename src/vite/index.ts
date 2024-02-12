import type { Plugin } from 'vite';

type Options = {

};

export default function honokit(options?: Options): Plugin {
  return {
    name: "HonoKit",
    // enforce: 'pre',
  };
};
