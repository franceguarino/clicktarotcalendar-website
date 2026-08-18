import type { Dictionary } from './types';

const en: Dictionary = {
	meta: {
		title: 'WordPress Booking Plugin for Tarot Readers | clickTarot Calendar',
		description:
			'A WordPress booking plugin for tarot readers, astrologers and consultants selling paid sessions. Built-in payments, invoicing and packages — a real Calendly alternative.',
	},
	nav: {
		home: 'Home',
		pricing: 'Pricing',
		faq: 'FAQ',
		about: 'About',
	},
	hero: {
		eyebrow: 'WordPress plugin for spiritual & wellness professionals',
		title: 'The booking calendar built for your consultation practice',
		subtitle:
			'Turn your site into an always-open studio: customers book and pay on their own, you just get the notifications. No more endless back-and-forth messages.',
	},
	features: {
		title: 'Everything you need, nothing you don’t',
		items: [
			{
				title: '📅 Visual monthly calendar',
				description: 'The customer picks the date and time on their own, fully independently: no more back-and-forth messages.',
			},
			{
				title: '💳 Built-in payments',
				description: 'PayPal and credit card (Stripe), connected directly to your own account. The money goes straight to you.',
			},
			{
				title: '🧾 Automatic invoice data',
				description: 'Tax ID and address collected automatically at booking time: everything you need to issue an invoice.',
			},
			{
				title: '📦 Prepaid packages',
				description: 'Sell bundles of multiple sessions at a discounted price: the customer pays once, books whenever they like.',
			},
			{
				title: '🎟️ Discount coupons',
				description: 'Promo codes with expiry and usage limits, ready for your social media campaigns.',
			},
			{
				title: '🔄 Self-service rescheduling',
				description: 'The customer moves or cancels the appointment on their own from the email link, without writing to you.',
			},
			{
				title: '🌍 Billing for international customers too',
				description: 'A Country selector on the form: VAT number/Tax ID, postal code and state adapt automatically outside Italy.',
			},
			{
				title: '🌐 Multilingual plugin',
				description: 'Booking form, emails and admin panel translated into English, Spanish, German and Italian.',
			},
			{
				title: '🕒 Flexible availability',
				description: 'Block off entire days or single time slots whenever you need to — your calendar, your rules.',
			},
			{
				title: '✉️ Automatic email notifications',
				description: 'Confirmation and reminder emails sent automatically, fully customizable in your own words.',
			},
			{
				title: '🔗 Dedicated booking link',
				description: 'A public booking link ready for your Instagram or TikTok bio — no extra page to build.',
			},
			{
				title: '📊 Revenue statistics',
				description: 'See what you earn each month and which service performs best, right in your dashboard.',
			},
		],
	},
	screenshots: {
		title: 'How it works, in practice',
		items: [
			{ src: '/screenshots/screenshot-1.png', alt: 'Public booking calendar with monthly view and time slots' },
			{ src: '/screenshots/screenshot-2.png', alt: 'Calendars panel to create and customize your services' },
			{ src: '/screenshots/screenshot-3.png', alt: 'Statistics dashboard with revenue and monthly trends' },
		],
	},
	audience: {
		title: 'Built for consultation practices, not corporate offices',
		body:
			'Tarot readers, astrologers, holistic counselors and personal growth professionals: clickTarot Calendar handles exactly the workflow you need as a single practitioner taking clients online or in person, without the complexity of a tool built for corporate teams.',
	},
	pricing: {
		eyebrow: 'Simple pricing',
		title: 'One plan, every feature',
		subtitle: 'No hidden feature tiers, no per-seat pricing: every plan includes everything. Just pick the billing that works for you.',
		planName: 'clickTarot Calendar',
		priceNote: 'Every feature included, updates and support on every plan',
		ctaLabel: 'Buy now',
		included: [
			'Unlimited calendars for different services',
			'PayPal and Stripe payments',
			'Prepaid packages and discount coupons',
			'Automatic invoicing, including international customers',
			'Customizable automatic emails',
			'Plugin translated into 4 languages',
			'Updates and support included',
		],
		guarantee: 'Money-back guarantee handled directly by Freemius at checkout.',
		recommendedLabel: 'Recommended',
		tiers: [
			{ label: 'Monthly', price: '$16.99', period: '/month', note: 'Pay as you go, cancel anytime.', highlighted: false },
			{ label: 'Annual', price: '$180', period: '/year', note: 'Best value — works out to $15/month.', highlighted: true },
			{ label: 'Lifetime', price: '$1,499', period: 'one-time', note: 'Pay once, use it for as long as you like.', highlighted: false },
		],
	},
	faq: {
		title: 'Frequently asked questions',
		items: [
			{
				q: 'Do I need to know how to code to use it?',
				a: 'No, installation and setup are designed for people with no technical skills: just a few clicks.',
			},
			{
				q: 'Can I offer multiple services at different prices?',
				a: 'Yes, you can create a calendar for each service, each with its own duration, price and working hours.',
			},
			{
				q: 'How are my customers’ payments handled?',
				a: 'Through PayPal and/or Stripe, connected directly to your own account: the money goes straight to you, the plugin never touches or holds it.',
			},
			{
				q: 'Can I sell multi-session packages?',
				a: 'Yes, you can create multi-session prepaid packages: the customer pays once and books their sessions whenever they like.',
			},
			{
				q: 'Does it work for customers outside Italy too?',
				a: 'Yes: the form adapts automatically for international customers (VAT number/Tax ID instead of Italian Tax Code, free-format postal code), and the whole plugin is available in English, Spanish, German and Italian.',
			},
			{
				q: 'Is my data and my customers’ data safe?',
				a: 'Yes: everything stays saved only on your own WordPress site, and is never shared with third parties.',
			},
		],
	},
	footer: {
		tagline:
			'The booking calendar for Tarot consultation professionals (and not only) by Francesco <span style="color:var(--ct-primary-dark);font-weight:700">Guarino</span>.',
		freemiusNote: 'Sales and billing handled by Freemius, our official reseller.',
		contactLabel: 'Contact',
		privacy: 'Privacy',
		terms: 'Terms',
		rights: 'All rights reserved.',
	},
	legal: {
		privacyTitle: 'Privacy Policy',
		privacyIntro:
			'This page describes how clicktarotcalendar.com handles data when you visit this showcase site. It does not cover data processing performed by the clickTarot Calendar plugin on your own WordPress site, for which you remain the data controller as the purchaser and installer.',
		privacyBody: [
			{
				heading: 'Hosting and technical data',
				body: 'This site is hosted on Cloudflare Pages. Cloudflare may collect standard technical logs (IP address, user agent) for security and service operation purposes.',
			},
			{
				heading: 'Analytics',
				body: 'We use Cloudflare Web Analytics, a cookieless analytics service with no individual visitor tracking: it does not require a consent banner.',
			},
			{
				heading: 'Payments',
				body: 'License purchases happen entirely on the Freemius platform, which acts as the official reseller (merchant of record) and independently manages payment data according to its own privacy policy.',
			},
			{
				heading: 'Contact',
				body: 'If you email us, we will only use your address to reply to you.',
			},
		],
		termsTitle: 'Terms of Use',
		termsIntro: 'By using clicktarotcalendar.com you agree to the terms described on this page.',
		termsBody: [
			{
				heading: 'The site',
				body: 'clicktarotcalendar.com is the showcase site for the clickTarot Calendar WordPress plugin. Its content is for informational and commercial purposes.',
			},
			{
				heading: 'License purchase',
				body: 'Purchase, renewal and billing of the plugin license are handled by Freemius under its own sales terms, shown during checkout.',
			},
			{
				heading: 'Intellectual property',
				body: 'Names, trademarks and content on this site belong to their respective owners. Third-party product names mentioned (e.g. Calendly) are used for descriptive/comparative purposes.',
			},
			{
				heading: 'Limitation of liability',
				body: 'This site is provided "as is". For technical support on the plugin, please refer to the channels listed in the Freemius dashboard after purchase.',
			},
		],
	},
	about: {
		eyebrow: 'About',
		title: 'Not a team of developers. A tarot reader who uses this tool every day.',
		subtitle:
			'clickTarot Calendar wasn’t built by a software company. It was built out of a real problem — mine — and a job I do every day.',
		bioTitle: 'Who I am',
		bioBody: [
			'My name is Francesco Guarino. I’m an independent researcher, a student of social psychology, and for years I’ve worked to build a bridge between science and spirituality. Before any of that, I studied directly with master card-makers the tradition of card production itself.',
			'I founded <a href="https://scuolatdm.com/" target="_blank" rel="noopener">Scuola TdM</a>, Italy’s leading training hub for Tarot de Marseille, and created the TdM Method, a study and interaction model for the Tarot de Marseille that I’ve taught across Europe and Asia since 2011, and in America since 2017.',
			'I’m the webmaster of <a href="https://www.tarocchi.blog/" target="_blank" rel="noopener">tarocchi.blog</a>, considered the best tarot blog in Italy, and I created <a href="https://www.clicktarot.net/" target="_blank" rel="noopener">clickTarot</a>, a community built to be as inclusive as possible. Across my sites I reach a million and a half tarot students, enthusiasts and lovers every year. I’ve also produced the documentary “<a href="https://www.tarocchi.blog/oltre-il-tarot/" target="_blank" rel="noopener">Oltre il Tarot</a>” and regularly write books on psychology and spirituality.',
		],
		searchTitle: 'Why I built clickTarot Calendar',
		searchBody: [
			'For years I looked for a booking tool that fit my work: paid, one-on-one consultations, with clients who come back over time. I never found one.',
			'I tried Booknetic — it didn’t have the features I actually needed. I moved to Booknetic SaaS, but it was full of bugs, and since its developers make money selling paid add-ons, they seemed more interested in shipping new ones than fixing what was already broken. I even joined their Discord community hoping to find help: it was a graveyard of complaints, with no answers.',
			'I tried TidyCal — it kept throwing 404 errors on my calendars, and customer support was practically nonexistent, the same story as every product from the “Sumo family”. If you use SendFox for your emails, you know exactly what I mean.',
			'I’d also used a plugin from the CodePeople team for a long time. It worked, until it started conflicting with other major WordPress plugins. They built me a custom version, which was never updated again — until a WordPress update finally broke it for good.',
			'At that point I gathered my team and built it myself. Then I decided to open it up to anyone else who, like me, had never found the right tool.',
		],
		whyTitle: 'Why I know it works',
		whyBody: [
			'Not because there’s a team of professional developers behind it — there isn’t, and I’m not going to pretend otherwise. clickTarot Calendar works because it’s the exact tool I use, every day, to run the consultations in my own business.',
			'That’s why the main focus is on updates and constant improvement: this isn’t a product we just sell and move on from. It’s the tool my own daily work depends on, so it has to work — always.',
		],
		linksTitle: 'Read more',
		bookneticLinkLabel: 'Our comparison with Booknetic',
		tidycalLinkLabel: 'Our comparison with TidyCal',
		ctaTitle: 'Try it for yourself',
		ctaBody: 'The same tool I use every day for my own work, now available for yours.',
	},
};

export default en;
