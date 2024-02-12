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
|  |- server.js
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
