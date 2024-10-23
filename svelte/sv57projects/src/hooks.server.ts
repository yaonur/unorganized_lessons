import type { Handle } from '@sveltejs/kit';
import { i18n } from '$lib/i18n';
import { svelte } from '@sveltejs/vite-plugin-svelte';
const handleParaglide: Handle = i18n.handle();
// export const handle: Handle = handleParaglide;
export const handle: Handle = async ({ event, resolve }) => {
	// console.log("<-----hooks.ts----------->")
	// console.log("hostName:",event.url.hostname)
	// console.log("event:",event)
	const response = await i18n.handle()({ event, resolve });
	const setCookie = response.headers.get('Set-Cookie');
	console.log("Set-Cookie header:", setCookie);

	if (response) {
		return response;
	}



	
	console.log('something went wrong returning svelte response');
	const svelteKitResponse = await resolve(event);
	return svelteKitResponse;
};
