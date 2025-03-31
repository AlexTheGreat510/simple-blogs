/* SELECTORS */

const picoCss = document.getElementById('pico-css');
const websiteScheme = document.getElementById('website-scheme');
const websiteColorscheme = document.getElementById('website-colorscheme');

/* EVENTS */

websiteScheme.addEventListener('change', () => {
	document.documentElement.setAttribute('data-theme', websiteScheme.value)
});

websiteColorscheme.addEventListener('change', () => {
	picoCss.setAttribute('href', `node_modules/@picocss/pico/css/pico.${websiteColorscheme.value}.min.css`);
});