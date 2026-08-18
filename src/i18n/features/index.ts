import en, { featureUi as enUi } from './en';
import it, { featureUi as itUi } from './it';
import de, { featureUi as deUi } from './de';
import es, { featureUi as esUi } from './es';
import { featureKeys, featureSlugs } from './types';
import type { FeatureDetail, FeatureDetailDictionary, FeatureKey, FeatureUiText } from './types';
import { locales, localePrefix, type Locale } from '../index';

export { featureKeys, featureSlugs };
export type { FeatureKey, FeatureDetail };

const dictionaries: Record<Locale, FeatureDetailDictionary> = { it, en, de, es };
const uiDictionaries: Record<Locale, FeatureUiText> = { it: itUi, en: enUi, de: deUi, es: esUi };

export function getFeatureDetail(locale: Locale, key: FeatureKey): FeatureDetail {
	return dictionaries[locale][key];
}

export function getFeatureUi(locale: Locale): FeatureUiText {
	return uiDictionaries[locale];
}

export function featurePath(locale: Locale, key: FeatureKey): string {
	return `${localePrefix(locale)}/features/${featureSlugs[key]}/`;
}

export function featureAlternateLinks(key: FeatureKey): { locale: Locale; href: string }[] {
	return locales.map((locale) => ({ locale, href: featurePath(locale, key) }));
}
