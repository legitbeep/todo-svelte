// adapter tries to determine the environment we trying to build & deploy to
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
		target: '#svelte',
		vite: {
			server: {
				// hot module reloading
				hmr: {
					clientPort: process.env.HMR_HOST ? 443 : 3000,
					host: process.env.HMR_HOST ? process.env.HMR_HOST.substring("https://".length) : "localhost"
				}
			},
			
			ssr: {
				external: ['@xstate/svelte']
			  }
		}
	}
};

export default config;
