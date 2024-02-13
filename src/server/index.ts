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
    const route = file.replace(root, "").split("/").filter(Boolean).map(replaceEncode); // -> ["api", "notes", "create", "+POST.js"]

    //app[/(.+)\.(js|ts)/.exec([].at(-1).toLowerCase)]("いい感じに再構築したルート", route[file]["default"]);
  });

  return app;
}

// https://kit.svelte.dev/docs/advanced-routing#encoding
// [[[x+2a][u+d83e][u+dd2a]] -> [[*🤪
// 入力の末尾に ] があったらreturnでは消えるけど、 [x+5d] として渡されるはずなので問題ない。
function replaceEncode(str: string): string {
  return str.split("]").filter(Boolean).map((e)=>e.replace("[", ""))
    .map((e) =>
      (/^(x\+..|u\+....)$/.exec(e)!==null) ? String.fromCodePoint(Number(e.replace("x+", "0x").replace("u+", "0x"))) : e).join("");
}
