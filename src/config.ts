import type { Locale } from './i18n';

// Valori centrali riusati in tutto il sito: un solo posto da aggiornare se cambiano.
export const CHECKOUT_URL = 'https://checkout.freemius.com/plugin/36819/plan/61064/';
export const CONTACT_EMAIL = 'clicktarot@clicktarot.net';
export const SITE_URL = 'https://clicktarotcalendar.com';

// Il checkout Freemius mostra USD/inglese di default se non gli si passano
// valuta e lingua esplicite. Le abbiniamo alla lingua della pagina (coerente
// coi prezzi già mostrati nei dizionari i18n: EN in USD, IT/DE/ES in EUR)
// invece di affidarci alla geolocalizzazione IP di Freemius (currency=auto),
// che potrebbe mostrare una valuta diversa da quella già vista in pagina.
const CHECKOUT_CURRENCY: Record<Locale, 'usd' | 'eur'> = {
	en: 'usd',
	it: 'eur',
	de: 'eur',
	es: 'eur',
};

export function getCheckoutUrl(locale: Locale): string {
	return `${CHECKOUT_URL}?currency=${CHECKOUT_CURRENCY[locale]}&language=${locale}`;
}

export const SOCIAL_LINKS = {
	instagram: 'https://www.instagram.com/franceguarino/',
	facebook: 'https://www.facebook.com/scuolatdm',
	youtube: 'https://www.youtube.com/channel/UCHxmNaZUDZzL3GofQ6ETkPQ?sub_confirmation=1',
} as const;
