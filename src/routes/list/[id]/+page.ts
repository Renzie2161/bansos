import { error } from '@sveltejs/kit';
import { bansosList } from '$lib/data/bansos';
import type { EntryGenerator } from './$types';

// Tells SvelteKit which dynamic pages to prerender
export const entries: EntryGenerator = () => {
	return bansosList.map((item) => ({ id: item.id }));
};

export function load({ params }) {
	const item = bansosList.find((b) => b.id === params.id);
	if (!item) {
		throw error(404, {
			message: 'Waduh, Bansos ini gak ketemu atau udah digondol koruptor, fr fr 😭'
		});
	}
	return { item };
}
