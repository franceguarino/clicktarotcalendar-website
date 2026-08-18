import { SITE_URL } from '../config';
import type { Locale } from '../i18n';

// Niente prezzo: sul sito non viene mostrata una cifra numerica (il prezzo
// reale è deciso da Freemius al checkout), quindi l'Offer verrebbe inventata.
export function softwareApplicationSchema(locale: Locale, name: string, description: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name,
		description,
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'WordPress',
		url: SITE_URL,
		inLanguage: locale,
	};
}

export function faqPageSchema(items: { q: string; a: string }[]) {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: items.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.a,
			},
		})),
	};
}
