# Ocean Prism

A Prism plugin for Ocean.

```js
import { Ocean } from 'https://cdn.spooky.click/r/ocean/latest/mod.js';
import { OceanPrism } from 'https://cdn.spooky.click/ocean-prism/0.0.1/mod.js';

let { html } = new Ocean({
  document,
  plugins: [OceanPrism.createInstance]
});
let iter = html`<pre><code class="language-js">let foo = 'bar'</code></pre>`;

let out = '';
for await(let chunk of iter) {
  out += chunk;
}
console.log(out); // Syntax highlighted HTML
```