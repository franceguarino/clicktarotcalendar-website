export const featureKeys = [
	'calendar',
	'payments',
	'invoicing',
	'packages',
	'coupons',
	'reschedule',
	'international',
	'multilingual',
] as const;
export type FeatureKey = (typeof featureKeys)[number];

// Stesso slug in inglese per tutte le lingue (semplificazione v1, come per
// le pagine di confronto): evita di dover tradurre altri 8 slug per lingua.
export const featureSlugs: Record<FeatureKey, string> = {
	calendar: 'visual-calendar',
	payments: 'built-in-payments',
	invoicing: 'automatic-invoicing',
	packages: 'prepaid-packages',
	coupons: 'discount-coupons',
	reschedule: 'self-service-rescheduling',
	international: 'international-billing',
	multilingual: 'multilingual-plugin',
};

export interface FeatureDetail {
	title: string;
	tagline: string;
	metaDescription: string;
	painPoint: string;
	howItWorks: string;
	benefit: string;
}

export type FeatureDetailDictionary = Record<FeatureKey, FeatureDetail>;

export interface FeatureUiText {
	eyebrow: string;
	painPointLabel: string;
	howItWorksLabel: string;
	benefitLabel: string;
	otherFeaturesTitle: string;
	ctaTitle: string;
	ctaBody: string;
	backToHome: string;
}
