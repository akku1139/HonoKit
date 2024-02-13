import kit from 'honokit'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    plugins: [kit()],
  };
});
