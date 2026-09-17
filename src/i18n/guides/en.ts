import type { GuideDictionary, GuideUiText } from './types';

export const guideUi: GuideUiText = {
	eyebrow: 'Guide',
	otherGuidesTitle: 'More guides',
	backToHome: 'Back to home',
	comparisonsTitle: 'Full head-to-head comparisons',
};

const en: GuideDictionary = {
	setupBookings: {
		title: 'How to Set Up Online Bookings for Tarot Readings on WordPress',
		tagline: 'A step-by-step guide, no coding required.',
		metaDescription:
			'Step-by-step guide to setting up an online booking calendar for tarot readings on your WordPress site, from picking a plugin to taking your first payment.',
		intro:
			'If clients are still booking readings through DMs, emails, or a shared calendar link, you’re spending time on scheduling that should go into the readings themselves. Here’s exactly how to set up a booking calendar on your own WordPress site, from install to your first paid appointment.',
		sections: [
			{
				heading: '1. Make sure you have a WordPress site, not just Instagram',
				body: 'A booking calendar needs somewhere to live. If you only have an Instagram or TikTok profile today, a WordPress site doesn’t need to be elaborate: a single page describing your readings, plus the booking calendar itself, is enough to start. If you already have a WordPress site, you can add booking to any existing page.',
			},
			{
				heading: '2. Choose a booking plugin built for consultations, not a generic scheduler',
				body: 'General scheduling tools are usually built for teams, salons or clinics. Look for one with three things a solo consultation practice actually needs: a way to charge for the session at booking time, fields to collect billing/Tax ID details for invoicing, and the ability to sell multi-session packages. clickTarot Calendar is built specifically around this workflow and installs free from the WordPress plugin directory.',
			},
			{
				heading: '3. Install and activate the plugin',
				body: 'From your WordPress dashboard, go to Plugins → Add New, search for the plugin by name, click Install and then Activate. No FTP, no code editing.',
			},
			{
				heading: '4. Create your first calendar',
				body: 'Set the session duration and price, your working days and hours, and how much notice you need before a booking. If you offer more than one type of session, for example a quick draw and a full hour reading, create a separate calendar for each so pricing and duration stay clear.',
			},
			{
				heading: '5. Connect a payment method',
				body: 'Connect PayPal (included in the free version) so clients pay the moment they book, not after. This alone removes most of the awkwardness of asking for payment after a reading.',
			},
			{
				heading: '6. Publish the booking link',
				body: 'Drop the shortcode or dedicated booking link onto your site, and put that same link in your Instagram or TikTok bio. From this point on, every “are you free Thursday?” message can just get a link back instead of a back-and-forth.',
			},
			{
				heading: '7. Test it yourself before sending clients there',
				body: 'Book a test session as if you were a client, using a different email address, to see exactly what they’ll see: the calendar, the confirmation email, the payment step. It’s the fastest way to catch anything confusing before a real client does.',
			},
		],
		ctaTitle: 'Ready to set this up on your own site?',
		ctaBody: 'clickTarot Calendar installs free from WordPress.org and walks you through calendar setup step by step.',
	},
	bestPlugins: {
		title: 'Best WordPress Booking Plugins for Tarot Readers & Psychics (2026)',
		tagline: 'What actually matters when you’re choosing, and how the real options compare.',
		metaDescription:
			'A practical comparison of WordPress booking plugins for tarot readers, astrologers and psychics: what to look for, and how the main options stack up.',
		intro:
			'Most “best booking plugin” lists are written for salons, clinics or generic small businesses, and skip the things that actually matter for someone selling paid consultations: getting paid at booking time, collecting proper billing details, and selling multi-session packages. Here’s what to actually check, and how the real options compare.',
		sections: [
			{
				heading: 'What to look for before picking one',
				body: 'Four things matter more than the exact interface: can the client pay when they book, not after; does it collect Tax ID/VAT and billing address automatically, so you can actually invoice; can you sell a bundle of sessions with one payment instead of billing every visit separately; and is it built for a single practitioner, so you’re not paying for team features you’ll never use.',
			},
			{
				heading: 'Generic scheduling tools vs. tools built for consultations',
				body: 'Calendly, Acuity Scheduling, SimplyBook.me and TidyCal are solid, well-known tools, but none were built around selling paid, single-provider consultations: billing/invoicing fields and prepaid packages are either missing or gated behind higher-priced team plans. General-purpose WordPress booking plugins like Booknetic run into the same issue: broad feature sets built for salons and agencies, with the features a solo consultant needs often locked behind a premium tier.',
			},
			{
				heading: 'Tools built specifically for tarot readers and psychics',
				body: 'Two plugins target this niche directly: Daily Tarot, mainly a tool for publishing tarot content and readings, with booking as one feature among several and still early-stage; and Ozapp (formerly Book Appointment Online PRO), a general multi-employee appointment system sold on CodeCanyon with a landing page aimed at this niche, built first for teams rather than a solo practitioner. clickTarot Calendar is the one built end-to-end around a single consultation practitioner’s workflow, with a real free version on WordPress.org.',
			},
		],
		ctaTitle: 'See the full head-to-head comparisons',
		ctaBody: 'Every option above has a detailed, feature-by-feature comparison against clickTarot Calendar.',
		showComparisons: true,
	},
};

export default en;
