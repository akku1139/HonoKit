import { Hono } from 'hono';

const root = "/src/routes";

// SvelteKit互換ルーティングはやめてHonoネイティブに
// : はWindowsのPathに使えないらしいから[]で囲む
// やっぱSvelteKit互換に仕上げようかな
// routeの中でifを使うことも辞さない構え
export function createApp(): Hono {
  const routes: Record<string, object> = import.meta.glob(root+"/**/+*.(js|ts)", {
    eager: true,
  });

  const app = new Hono();

  Object.keys(routes).forEach((file) =>{
    const route = file.replace(root, "").split("/").filter((e) => Boolean(e));
    // ["api", "notes", "create", "+POST.js"]
    app[/(.+)\.(js|ts)/.exec([].at(-1).toLowerCase)]("いい感じに再構築したルート", route[file]["default"]);
  });

  return app;
}
