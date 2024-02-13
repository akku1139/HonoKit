import type { Context } from "hono";

export default (c: Context) =>
  c.text('HonoKit!');
