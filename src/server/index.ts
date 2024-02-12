import { Hono } from 'hono';

const root = "/src/routes";

/// SvelteKit風なルーティングをHono風なルーティングに変換する
// とりあえずフラットにルートを作るようにするけど
// routeを入れ後にしたほうが良さそうならディレクトリごとで回す
export function createApp() {
  const routes: Record<string, object> = import.meta.glob(root+"/**/+*.(js|ts)", {
    eager: true,
  });
  Object.keys(routes).forEach((file) =>{
    file.split("/")./* 空白を除去 */filter((e) => Boolean(e))
  });
}
