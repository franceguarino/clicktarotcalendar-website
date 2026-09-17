import en, { guideUi as enUi } from './en';
import it, { guideUi as itUi } from './it';
import de, { guideUi as deUi } from './de';
import es, { guideUi as esUi } from './es';
import { guideKeys, guideSlugs } from './types';
import type { GuideDetail, GuideDictionary, GuideKey, GuideUiText } from './types';
import { locales, localePrefix, type Locale } from '../index';

export { guideKeys, guideSlugs };
export type { GuideKey, GuideDetail };

const dictionaries: Record<Locale, GuideDictionary> = { it, en, de, es };
const uiDictionaries: Record<Locale, GuideUiText> = { it: itUi, en: enUi, de: deUi, es: esUi };

export function getGuideDetail(locale: Locale, key: GuideKey): GuideDetail {
	return dictionaries[locale][key];
}

export function getGuideUi(locale: Locale): GuideUiText {
	return uiDictionaries[locale];
}

export function guidePath(locale: Locale, key: GuideKey): string {
	return `${localePrefix(locale)}/guides/${guideSlugs[key]}/`;
}

export function guideAlternateLinks(key: GuideKey): { locale: Locale; href: string }[] {
	return locales.map((locale) => ({ locale, href: guidePath(locale, key) }));
}
