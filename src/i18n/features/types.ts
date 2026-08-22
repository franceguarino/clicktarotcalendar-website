export const featureKeys = [
	'calendar',
	'payments',
	'invoicing',
	'packages',
	'coupons',
	'reschedule',
	'international',
	'multilingual',
	'availability',
	'notifications',
	'socialLink',
	'statistics',
	'addToCalendar',
	'csvExport',
	'vacationBlock',
	'multiCalendar',
	'customColor',
	'guidedSetup',
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
	availability: 'flexible-availability',
	notifications: 'automatic-email-notifications',
	socialLink: 'dedicated-booking-link',
	statistics: 'revenue-statistics',
	addToCalendar: 'add-to-calendar',
	csvExport: 'csv-export',
	vacationBlock: 'block-time-off',
	multiCalendar: 'multiple-calendars',
	customColor: 'custom-calendar-color',
	guidedSetup: 'guided-setup',
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
