// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://clicktarotcalendar.com',
	integrations: [sitemap()],
	i18n: {
		defaultLocale: 'en',
		locales: ['it', 'en', 'de', 'es'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
