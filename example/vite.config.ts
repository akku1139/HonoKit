import client from 'honox/vite/client'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  return {
    plugins: [client()],
  };
});
