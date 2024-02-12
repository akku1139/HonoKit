import { Hono } from 'hono';

const root = "/src/routes";

/// SvelteKit風なルーティングをHono風なルーティングに変換する
// とりあえずフラットにルートを作るようにするけど
// routeを入れ後にしたほうが良さそうならディレクトリごとで回す
/* 最下位
src/routes/[...catchall]/+page.svelte
src/routes/[[a=x]]/+page.svelte
src/routes/[b]/+page.svelte
src/routes/foo-[c]/+page.svelte
src/routes/foo-abc/+page.svelte
一位
*/
export function createApp() {
  const routes: Record<string, object> = import.meta.glob(root+"/**/+*.(js|ts)", {
    eager: true,
  });

  const app = new Hono();

  Object.keys(routes).forEach((file) =>{
    file.replace(root, "").split("/").filter((e) => Boolean(e));
    // ["api", "notes", "create", "+POST.js"]
    [].at(-1);
  });
}
