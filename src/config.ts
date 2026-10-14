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

// Offerta Founding members: coupon Freemius FOUNDING100 (100% sul primo
// pagamento, solo piano annuale, max 20 utilizzi). Scade il 31/12/2026 00:00
// GMT come il coupon: il riquadro in /pricing/ si nasconde da solo dopo
// quella data anche senza una nuova build (vedi PricingContent.astro).
export const FOUNDING_ENDS = '2026-12-31T00:00:00Z';

export function getFoundingCheckoutUrl(locale: Locale): string {
	return `${getCheckoutUrl(locale)}&billing_cycle=annual&coupon=FOUNDING100`;
}

export const SOCIAL_LINKS = {
	instagram: 'https://www.instagram.com/franceguarino/',
	facebook: 'https://www.facebook.com/scuolatdm',
	youtube: 'https://www.youtube.com/channel/UCHxmNaZUDZzL3GofQ6ETkPQ?sub_confirmation=1',
} as const;
