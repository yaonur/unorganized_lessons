import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	async default({ request }) {
		const data = await request.formData();
		const value = data.get('value');
		console.log(value);
		return { success: true };
	}
};
