import { writable } from 'svelte/store';
// lere el tema mantener la persistencia
const stored = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;

const prefersDark =
	typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

// esteblece el tema incial
const initial = stored || (prefersDark ? 'dark' : 'light');

export const theme = writable(initial);

theme.subscribe((value) => {
	if (typeof document !== 'undefined') {
		document.documentElement.classList.toggle('dark', value === 'dark');
		document.documentElement.setAttribute('data-theme', value); // ← DaisyUI
		localStorage.setItem('theme', value);
	}
});
