import { c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_BLDN4tx6.mjs';
import { s as setOnSetGetEnv } from './runtime_BaX0UJyD.mjs';

// @ts-check

setOnSetGetEnv(() => {
	
});
const SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookStore = createComponent(async ($$result, $$props, $$slots) => {
  const res = await fetch(SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${maybeRenderHead()}<span class="text-xs" id="score"> ${`\u{1F929} Puntuaci\xF3n ${scoreValue.trim()}/5`} </span>`;
}, "C:/Users/juanm/OneDrive/Desktop/Learning_Traine/Astro/dev-books Astro 5.0/src/components/BookStore.astro", void 0);

const $$file = "C:/Users/juanm/OneDrive/Desktop/Learning_Traine/Astro/dev-books Astro 5.0/src/components/BookStore.astro";
const $$url = undefined;

export { $$BookStore as default, $$file as file, $$url as url };
