import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(), // sass, etc

	kit: {
		adapter: adapter(), // deployment option such as vercel .

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;