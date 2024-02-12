# HonoKit
Framework for Hono like SvelteKit.

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
