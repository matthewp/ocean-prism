import './shim.js';
import { OceanPrism } from '../lib/mod.js';
import { assert, Ocean } from './deps.js';
import { consume, parse } from './helpers.js';

Deno.test('Renders syntax', async () => {
  let { html } = new Ocean({
    document,
    plugins: [OceanPrism.createInstance]
  });
  let iter = html`<pre><code class="language-js">var foo = 'bar'</code></pre>`;
  let out = await consume(iter);
  let doc = parse(out);
  assert(doc.querySelector('.language-js .token'));
});

Deno.test('Works with lang-* class name', async () => {
  let { html } = new Ocean({
    document,
    plugins: [OceanPrism.createInstance]
  });
  let iter = html`<pre><code class="lang-js">var foo = 'bar'</code></pre>`;
  let out = await consume(iter);
  let doc = parse(out);
  assert(doc.querySelector('.language-js .token'));
});