export interface Dictionary {
	meta: {
		title: string;
		description: string;
	};
	nav: {
		home: string;
		pricing: string;
		faq: string;
	};
	hero: {
		eyebrow: string;
		title: string;
		subtitle: string;
		ctaSecondary: string;
	};
	features: {
		title: string;
		items: { title: string; description: string }[];
	};
	screenshots: {
		title: string;
		items: { src: string; alt: string }[];
	};
	audience: {
		title: string;
		body: string;
	};
	pricing: {
		eyebrow: string;
		title: string;
		subtitle: string;
		planName: string;
		priceNote: string;
		ctaLabel: string;
		included: string[];
		guarantee: string;
	};
	compareCalendly: {
		eyebrow: string;
		title: string;
		subtitle: string;
		colFeature: string;
		colClicktarot: string;
		colCalendly: string;
		rows: { feature: string; clicktarot: string; calendly: string }[];
		ctaTitle: string;
		ctaBody: string;
	};
	faq: {
		title: string;
		items: { q: string; a: string }[];
	};
	footer: {
		tagline: string;
		contactLabel: string;
		privacy: string;
		terms: string;
		rights: string;
	};
	legal: {
		privacyTitle: string;
		privacyIntro: string;
		privacyBody: { heading: string; body: string }[];
		termsTitle: string;
		termsIntro: string;
		termsBody: { heading: string; body: string }[];
	};
}
