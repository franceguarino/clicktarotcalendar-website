import en, { bookneticSaasClarification as enClarification } from './en';
import it, { bookneticSaasClarification as itClarification } from './it';
import de, { bookneticSaasClarification as deClarification } from './de';
import es, { bookneticSaasClarification as esClarification } from './es';
import { competitorKeys, competitorSlugs, competitorNames, bookneticSaasSlug } from './types';
import type { CompetitorDetail, CompetitorDictionary, CompetitorKey, ClarificationDetail } from './types';
import { locales, localePrefix, type Locale } from '../index';

export { competitorKeys, competitorSlugs, competitorNames, bookneticSaasSlug };
export type { CompetitorKey, CompetitorDetail, ClarificationDetail };

const dictionaries: Record<Locale, CompetitorDictionary> = { it, en, de, es };
const clarificationDictionaries: Record<Locale, ClarificationDetail> = {
	it: itClarification,
	en: enClarification,
	de: deClarification,
	es: esClarification,
};

export function getCompetitorDetail(locale: Locale, key: CompetitorKey): CompetitorDetail {
	return dictionaries[locale][key];
}

export function getBookneticSaasClarification(locale: Locale): ClarificationDetail {
	return clarificationDictionaries[locale];
}

export function competitorPath(locale: Locale, key: CompetitorKey): string {
	return `${localePrefix(locale)}/vs/${competitorSlugs[key]}/`;
}

export function bookneticSaasPath(locale: Locale): string {
	return `${localePrefix(locale)}/vs/${bookneticSaasSlug}/`;
}

export function competitorAlternateLinks(key: CompetitorKey): { locale: Locale; href: string }[] {
	return locales.map((locale) => ({ locale, href: competitorPath(locale, key) }));
}

export function bookneticSaasAlternateLinks(): { locale: Locale; href: string }[] {
	return locales.map((locale) => ({ locale, href: bookneticSaasPath(locale) }));
}
