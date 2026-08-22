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

export type PageKey = 'home' | 'pricing' | 'compare' | 'faq' | 'support' | 'privacy' | 'terms' | 'feature' | 'about';

// Un'unica fonte di verità per gli slug per pagina/lingua: l'inglese è la
// lingua di default (mercato primario), quindi è quella "senza slug tradotto"
// in root; solo l'italiano ha slug localizzati (prezzi, termini).
// 'feature' e 'compare' non hanno una pagina indice propria: gli slug qui sono
// solo un fallback perché il tipo PageKey lo richiede — i percorsi reali delle
// singole pagine funzionalità/confronto sono calcolati da featurePath() in
// ./features/index.ts e da competitorPath() in ./competitors/index.ts.
const slugs: Record<Exclude<PageKey, 'home'>, Record<Locale, string>> = {
	pricing: { it: 'prezzi', en: 'pricing', de: 'pricing', es: 'pricing' },
	compare: { it: 'vs', en: 'vs', de: 'vs', es: 'vs' },
	faq: { it: 'faq', en: 'faq', de: 'faq', es: 'faq' },
	support: { it: 'supporto', en: 'support', de: 'support', es: 'support' },
	privacy: { it: 'privacy', en: 'privacy', de: 'privacy', es: 'privacy' },
	terms: { it: 'termini', en: 'terms', de: 'terms', es: 'terms' },
	feature: { it: 'features', en: 'features', de: 'features', es: 'features' },
	about: { it: 'chi-siamo', en: 'about', de: 'about', es: 'about' },
};

export function localePrefix(locale: Locale): string {
	return locale === 'en' ? '' : `/${locale}`;
}

export function pagePath(locale: Locale, page: PageKey): string {
	if (page === 'home') {
		return locale === 'en' ? '/' : `/${locale}/`;
	}
	return `${localePrefix(locale)}/${slugs[page][locale]}/`;
}

export function alternateLinks(page: PageKey): { locale: Locale; href: string }[] {
	return locales.map((locale) => ({ locale, href: pagePath(locale, page) }));
}
