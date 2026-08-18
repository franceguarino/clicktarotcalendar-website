import type { FeatureDetailDictionary, FeatureUiText } from './types';

export const featureUi: FeatureUiText = {
	eyebrow: 'Feature',
	painPointLabel: 'The problem',
	howItWorksLabel: 'How it works',
	benefitLabel: 'Why it matters',
	otherFeaturesTitle: 'Explore the other features',
	ctaTitle: 'Ready to stop losing time to back-and-forth booking messages?',
	ctaBody: 'One license, every feature included, no per-seat pricing.',
	backToHome: 'Back to home',
};

const en: FeatureDetailDictionary = {
	calendar: {
		title: 'Visual Monthly Calendar',
		tagline: "Stop trading messages just to find a free hour.",
		painPoint:
			"Booking by DM or email means a dozen back-and-forth messages before anyone agrees on a time — and half of them ask “do you have anything free next week?” after you've already answered that twice.",
		howItWorks:
			"Clients see your real, live availability laid out as an actual calendar: days you work, days you don't, slots already taken. They pick a day, pick a time, and it's booked. No back-and-forth, no double-booking, no manual checking on your end.",
		benefit:
			"Every hour you don't spend answering “are you free Tuesday?” is an hour you can spend doing readings — or nothing at all. That's the real return on a booking tool: time back, not just a prettier form.",
	},
	payments: {
		title: 'Built-in Payments',
		tagline: 'Get paid before the session, not after.',
		painPoint:
			"Chasing payment after a reading is awkward for everyone involved. And manually sending a payment link for each booking is one more step that can be forgotten — or ignored.",
		howItWorks:
			"PayPal and Stripe connect directly to your own account. The client pays the moment they book, right through the same form — no separate invoice, no separate link, no separate step.",
		benefit:
			"The money lands in your account, not the plugin's — clickTarot never touches or holds a cent of it. You get paid on time, every time, without having to ask.",
	},
	invoicing: {
		title: 'Automatic Invoice Data',
		tagline: 'The tax details you need are already sitting in your dashboard.',
		painPoint:
			"Issuing an invoice usually means emailing the client afterward to ask for their tax ID and billing address — then waiting for a reply before you can actually bill them.",
		howItWorks:
			"Tax ID (or VAT number outside Italy) and billing address are required fields in the booking form itself. By the time the appointment is confirmed, everything you need to invoice is already recorded next to the booking.",
		benefit:
			"No back-and-forth for paperwork. If you're running this as a real business — and if you're paying for software, you probably are — proper invoicing shouldn't be the part that slows you down.",
	},
	packages: {
		title: 'Prepaid Packages',
		tagline: 'Sell three sessions today, let them book the third one in March.',
		painPoint:
			"Repeat clients are the best clients — but without a package system, every return visit means going through checkout again, with no easy way to reward someone for booking ahead.",
		howItWorks:
			"Create a bundle — say, 3 sessions at a discount versus paying for each one separately. The client pays once, and their credit is tied to their email: next time they book, the plugin recognizes them and skips payment automatically.",
		benefit:
			"Packages turn one-off clients into recurring revenue you've already collected, and give your most loyal clients a reason to come back instead of trying someone else next time.",
	},
	coupons: {
		title: 'Discount Coupons',
		tagline: 'Run a real promotion without doing the math in your head at checkout.',
		painPoint:
			"Manual discounts mean manually adjusting a price, or trusting yourself to remember who gets 20% off and who doesn't — not something you want to be tracking in a notebook.",
		howItWorks:
			"Create a code — percentage or fixed amount — with an optional expiry date and usage limit. The client enters it in the booking form and sees the new price immediately, before paying.",
		benefit:
			"Coupons are one of the cheapest ways to turn social media followers into paying clients. Having them built in means an Instagram promo takes five minutes to set up, not an afternoon.",
	},
	reschedule: {
		title: 'Self-Service Rescheduling & Cancellation',
		tagline: "Let clients move their own appointment — you shouldn't be their calendar assistant.",
		painPoint:
			"“Can we move Tuesday to Thursday?” is a normal, reasonable request — and also the fifth message today that has nothing to do with an actual reading.",
		howItWorks:
			"Every confirmation and reminder email includes a management link. Clients can reschedule to another open slot or cancel on their own, right up until your configured minimum-notice window — after that, they're asked to contact you directly.",
		benefit:
			"The requests that used to interrupt your day now resolve themselves. You keep full visibility and control — you just stop being the one who has to act on every small change.",
	},
	international: {
		title: 'Billing for International Customers',
		tagline: 'One form, correct for a client in Rome and a client in Berlin.',
		painPoint:
			"Billing fields built for only one country — an Italian Tax Code, an Italian postal code format — either don't work for a client abroad, or quietly collect wrong, unusable data from them.",
		howItWorks:
			"A country selector on the booking form adapts the fields automatically: Italy keeps the standard Tax Code, ZIP and province fields; every other country switches to an optional VAT/Tax ID, a free-format postal code, and a free-text state or province.",
		benefit:
			"You can say yes to a client anywhere without a workaround. If you're building an international practice — or already have one — this is the difference between a form that works for everyone and one that quietly turns away anyone outside Italy.",
	},
	multilingual: {
		title: 'Multilingual Plugin',
		tagline: "Your booking form speaks your client's language — literally.",
		painPoint:
			"A booking form in a language your client doesn't read creates friction at exactly the moment you want zero friction: right before they pay.",
		howItWorks:
			"The booking form, confirmation emails, and your own admin dashboard are all translated — English, Spanish, German and Italian — and switch automatically based on your site's configured language.",
		benefit:
			"You don't need a separate site, a translation plugin, or a developer to serve clients in more than one language. It's already there.",
	},
};

export default en;
