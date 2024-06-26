import { createI18n } from '@inlang/paraglide-sveltekit';
import * as runtime from '$lib/paraglide/runtime.js';

export const i18n = createI18n(runtime, {
	pathnames: {
		'/about': {
			en: '/about',
			tr: '/hakkında'
		},

		'/lessons': {
			en: '/lessons',
			tr: '/dersler'
		}
	}
});
