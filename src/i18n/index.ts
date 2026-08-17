import it from './it';
import en from './en';
import de from './de';
import es from './es';
import type { Dictionary } from './types';

export const locales = ['it', 'en', 'de', 'es'] as const;
export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
	it: 'Italiano',
	en: 'English',
	de: 'Deutsch',
	es: 'Español',
};

const dictionaries: Record<Locale, Dictionary> = { it, en, de, es };

export function getDictionary(locale: Locale): Dictionary {
	return dictionaries[locale];
}

export type PageKey = 'home' | 'pricing' | 'compare' | 'faq' | 'privacy' | 'terms';

// Un'unica fonte di verità per gli slug per pagina/lingua: solo l'italiano ha
// slug localizzati (prezzi, termini), le altre lingue condividono gli slug
// inglesi per tenere il v1 semplice (vedi piano del sito).
const slugs: Record<Exclude<PageKey, 'home'>, Record<Locale, string>> = {
	pricing: { it: 'prezzi', en: 'pricing', de: 'pricing', es: 'pricing' },
	compare: { it: 'vs/calendly', en: 'vs/calendly', de: 'vs/calendly', es: 'vs/calendly' },
	faq: { it: 'faq', en: 'faq', de: 'faq', es: 'faq' },
	privacy: { it: 'privacy', en: 'privacy', de: 'privacy', es: 'privacy' },
	terms: { it: 'termini', en: 'terms', de: 'terms', es: 'terms' },
};

export function localePrefix(locale: Locale): string {
	return locale === 'it' ? '' : `/${locale}`;
}

export function pagePath(locale: Locale, page: PageKey): string {
	if (page === 'home') {
		return locale === 'it' ? '/' : `/${locale}/`;
	}
	return `${localePrefix(locale)}/${slugs[page][locale]}/`;
}

export function alternateLinks(page: PageKey): { locale: Locale; href: string }[] {
	return locales.map((locale) => ({ locale, href: pagePath(locale, page) }));
}
