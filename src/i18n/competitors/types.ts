// 'booknetic-saas' NON è qui: non è un vero competitor confrontabile a tabella
// (è una piattaforma white-label per rivendere booking-as-a-service ad altre
// attività, non uno strumento per gestire le proprie prenotazioni). Ha invece
// una pagina "chiarificatrice" dedicata — vedi ClarificationDetail più sotto.
export const competitorKeys = ['calendly', 'acuity', 'simplybook', 'tidycal', 'booknetic'] as const;
export type CompetitorKey = (typeof competitorKeys)[number];

export const competitorNames: Record<CompetitorKey, string> = {
	calendly: 'Calendly',
	acuity: 'Acuity Scheduling',
	simplybook: 'SimplyBook.me',
	tidycal: 'TidyCal',
	booknetic: 'Booknetic',
};

// Stesso slug in inglese per tutte le lingue, come per le pagine funzionalità:
// evita di dover tradurre altri slug per lingua.
export const competitorSlugs: Record<CompetitorKey, string> = {
	calendly: 'calendly',
	acuity: 'acuity-scheduling',
	simplybook: 'simplybook-me',
	tidycal: 'tidycal',
	booknetic: 'booknetic',
};

export interface CompetitorRow {
	feature: string;
	clicktarot: string;
	competitor: string;
}

export interface CompetitorFaqItem {
	q: string;
	a: string;
}

export interface CompetitorDetail {
	eyebrow: string;
	title: string;
	subtitle: string;
	colFeature: string;
	colClicktarot: string;
	colCompetitor: string;
	rows: CompetitorRow[];
	painPointsTitle: string;
	painPointsIntro: string;
	painPoints: string[];
	ctaTitle: string;
	ctaBody: string;
	faq: CompetitorFaqItem[];
	otherComparisonsTitle: string;
}

export type CompetitorDictionary = Record<CompetitorKey, CompetitorDetail>;

export const bookneticSaasSlug = 'booknetic-saas';

export interface ClarificationDetail {
	eyebrow: string;
	title: string;
	subtitle: string;
	whatItIsTitle: string;
	whatItIsBody: string;
	whyNotFitTitle: string;
	whyNotFitBody: string;
	realComparisonLabel: string;
	ctaTitle: string;
	ctaBody: string;
}
