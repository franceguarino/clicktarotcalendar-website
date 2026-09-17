export const guideKeys = ['setupBookings', 'bestPlugins'] as const;
export type GuideKey = (typeof guideKeys)[number];

// Stesso slug in inglese per tutte le lingue, come per pagine funzionalità e
// di confronto: evita di dover tradurre altri slug per lingua.
export const guideSlugs: Record<GuideKey, string> = {
	setupBookings: 'setup-tarot-bookings-wordpress',
	bestPlugins: 'best-wordpress-booking-plugins-tarot-readers',
};

export interface GuideSection {
	heading: string;
	body: string;
}

export interface GuideDetail {
	title: string;
	tagline: string;
	metaDescription: string;
	intro: string;
	sections: GuideSection[];
	ctaTitle: string;
	ctaBody: string;
	// Solo la guida comparativa ("bestPlugins") mostra in coda l'elenco dei
	// confronti /vs/ già scritti, riusando i dati di ../competitors invece di
	// duplicarli nel contenuto della guida.
	showComparisons?: boolean;
}

export type GuideDictionary = Record<GuideKey, GuideDetail>;

export interface GuideUiText {
	eyebrow: string;
	otherGuidesTitle: string;
	backToHome: string;
	comparisonsTitle: string;
}
