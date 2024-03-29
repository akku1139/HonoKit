# HonoKit
Framework for Hono like SvelteKit.

## Template
```
.
|- src
|  |- lib # import ... from "$lib/..."
|  |  |- index.ts
|  |- routes
|  |  |- +GET.ts
|  |- static
|  |  |- favicon.png
|  |- server.ts
|- package.json
|- tsconfig.json
|- vite.config.ts
```

### `vite.config.ts`
```ts
import { defineConfig } from 'vite'
import honokit from 'honokit/vite'

export default defineConfig({
  plugins: [honokit()],
})
```

## Routing
HonoKit does directory-based routing.
The file with the HTTP method name after + is the route file.
example: `+GET.tsx` `+post.js` `+Put.ts`
Each route file exports the function that receives Hono's Context and returns a Response as `default`.
```js
export default (c) => {
  return c.json({ message: 'Hello!' });
};
```

If there is a `+route.*`, it will pass the Request to the default and expect a Response to come back.
```ts
export default (req: Request) => {
  return Response();
};
```

Routing is done according to [Hono](https://hono.dev/api/routing), but some characters must be escaped.
https://kit.svelte.dev/docs/advanced-routing#encoding

## Middleware
