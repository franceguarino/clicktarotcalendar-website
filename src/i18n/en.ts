import type { Dictionary } from './types';

const en: Dictionary = {
	meta: {
		title: 'WordPress Booking Plugin for Tarot Readers | clickTarot Calendar',
		description:
			'A WordPress booking plugin for tarot readers, astrologers and consultants selling paid sessions. Built-in payments, invoicing and packages: a real Calendly alternative.',
	},
	nav: {
		home: 'Home',
		pricing: 'Pricing',
		faq: 'FAQ',
		about: 'About',
	},
	hero: {
		eyebrow: 'The plugin for people who sell consultations, not people who sell software',
		title: 'Stop chasing clients on Instagram. Make them <span class="ct-accent">book</span> with you instead.',
		subtitle:
			'Every message you answer late is a client booking somewhere else. clickTarot Calendar turns your site into a studio that never closes: the client picks a date, a time, and pays on their own; you just get the notification.',
		imageAlt: 'A client booking a consultation over the phone',
	},
	features: {
		title: 'Everything you need to stop losing <span class="ct-accent">clients</span>',
		items: [
			{
				title: '📅 Visual monthly calendar',
				description: 'No more "are you free Thursday?": the client sees your real availability and books on their own, fully independently.',
			},
			{
				title: '💳 Built-in payments',
				description: 'PayPal and credit card (Stripe), connected directly to your own account. The money goes straight to you, instantly, no middleman.',
			},
			{
				title: '🧾 Automatic invoice data',
				description: 'Tax ID and address collected automatically at booking time: the invoice is already ready to issue.',
			},
			{
				title: '📦 Prepaid packages',
				description: 'Sell bundles of multiple sessions at a discounted price: you get paid now, the client books whenever they like.',
			},
			{
				title: '🎟️ Discount coupons',
				description: 'Promo codes with expiry and usage limits, ready for your next social media campaign.',
			},
			{
				title: '🔄 Self-service rescheduling',
				description: 'The client moves or cancels the appointment on their own from the email link; you stop being their calendar assistant.',
			},
			{
				title: '🌍 Billing for international customers too',
				description: 'A country selector on the form shows the right fields for wherever your client is billing from: VAT number/Tax ID, postal code and state, all adapted automatically.',
			},
			{
				title: '🌐 Multilingual plugin',
				description: 'Booking form, emails and admin panel translated into English, Spanish, German and Italian: you speak the client’s language.',
			},
			{
				title: '🕒 Flexible availability',
				description: 'Block off entire days or single time slots whenever you need to: your calendar adapts to you, not the other way around.',
			},
			{
				title: '✉️ Automatic email notifications',
				description: 'Confirmation and reminder emails sent automatically, with text you wrote yourself: no robotic messages.',
			},
			{
				title: '🔗 Dedicated booking link',
				description: 'A public booking link ready for your Instagram or TikTok bio: whoever finds you books right away, no searching required.',
			},
			{
				title: '📊 Revenue statistics',
				description: 'See what you earn each month and which service performs best, in real numbers, not gut feeling.',
			},
			{
				title: '🗓️ Add to calendar',
				description: 'Clients get a link in their confirmation email that adds the appointment to their calendar in one tap: iPhone, Google, Outlook.',
			},
			{
				title: '📥 CSV export',
				description: 'Download every booking into a file ready for Excel or your accountant, with no row limit.',
			},
			{
				title: '🏖️ Block off a whole period in one click',
				description: 'Block an entire date range at once, not one day at a time: vacations and breaks handled in seconds.',
			},
			{
				title: '📁 Multiple calendars, one per service',
				description: 'Create a calendar for each service you offer, each with its own price, duration and hours: no one-size-fits-all form.',
			},
			{
				title: '🎨 Customizable color',
				description: 'The calendar takes on your brand color in one click: it blends into your site instead of looking like a bolted-on widget.',
			},
			{
				title: '🚀 Guided setup',
				description: 'No tech skills required: follow the step-by-step guide and your calendar is ready in minutes.',
			},
		],
	},
	screenshots: {
		title: 'How it works, in practice',
		items: [
			{
				src: '/screenshots/screenshot-2.png',
				alt: 'Calendars panel to create and customize your services',
				caption: 'Set up your service and organize your schedule',
			},
			{
				src: '/screenshots/screenshot-1.png',
				alt: 'Public booking calendar with monthly view and time slots',
				caption: 'Share your calendar to start receiving bookings and payments',
			},
			{
				src: '/screenshots/screenshot-3.png',
				alt: 'Statistics dashboard with revenue and monthly trends',
				caption: 'Check your stats to see what works and what doesn’t',
			},
		],
	},
	audience: {
		title: 'You’re not a <span class="ct-accent">corporation</span>. Why should your booking tool treat you like one?',
		body:
			'Tarot readers, astrologers, holistic counselors and personal growth professionals: clickTarot Calendar handles exactly the workflow you need as a single practitioner taking clients online or in person, without the complexity of a tool built for massive projects, one that’ll be full of bugs and stuff you’ll never use!',
	},
	pricing: {
		eyebrow: 'Simple pricing',
		title: 'One plan, every <span class="ct-accent">feature</span>',
		subtitle: 'No feature locked behind a pricier plan, no per-seat pricing: every plan includes everything you actually need. Just pick how you’d rather pay.',
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
			{ label: 'Annual', price: '$189.99', period: '/year', note: 'Best value, works out to about $15.83/month.', highlighted: true },
			{ label: 'Lifetime', price: '$509.99', period: 'one-time', note: 'Pay once, use it for as long as you like.', highlighted: false },
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
				q: 'Does the billing form adapt for clients in different countries?',
				a: 'Yes, a country selector adapts the billing fields automatically to wherever your client is: a VAT number/Tax ID with a free-format postal code and region for most countries, and Italy’s own Tax Code, postal code and province format when that’s who you’re billing. The whole plugin is also available in English, Spanish, German and Italian.',
			},
			{
				q: 'Is my data and my customers’ data safe?',
				a: 'Yes: everything stays saved only on your own WordPress site, and is never shared with third parties.',
			},
		],
	},
	support: {
		eyebrow: 'Help center',
		title: 'clickTarot Calendar guide',
		intro:
			'Everything you need to set up your calendar, take your first payment and manage bookings without surprises. If you can’t find what you’re looking for, you can reach us directly at the bottom of this page.',
		tocLabel: 'Contents',
		sections: [
			{
				id: 'first-calendar',
				title: 'Create your first calendar',
				paragraphs: [
					'Every calendar you create represents one bookable service: a single reading, a counseling session, a specific package. Go to clickTarot → Calendars and fill in the "Create new calendar" form: you’ll have a calendar ready to publish in a few minutes.',
					'The fields that really matter are the session duration (together with the buffer between appointments, it decides how often slots open up during the day), the price (set it to 0 for a free calendar, no payment required), the minimum notice and how far ahead clients can book (these keep out last-minute or too-far-out bookings), and your working hours, day by day.',
				],
				tip: 'You can create multiple calendars for different services, e.g. "Short reading" and "In-depth reading": each one has its own shortcode and its own rules, independent of the others.',
			},
			{
				id: 'publish-calendar',
				title: 'Publish the calendar on your site',
				paragraphs: [
					'Every calendar automatically generates a shortcode, which you’ll find in the "Existing calendars" table: paste it into any WordPress page or post (in a Shortcode block) and the full booking form appears there, with monthly view and time slots.',
					'You don’t need to build a dedicated page: if you’d rather, every calendar also gets its own public link ready to share directly (see "Public link and custom color" below).',
				],
			},
			{
				id: 'payments',
				title: 'Turn on payments',
				paragraphs: [
					'If you’ve set a price above zero on at least one calendar, go to clickTarot → Payments and connect at least one method. With PayPal, all you need is your Business account email, no keys to configure. With Stripe, enter the Publishable Key and Secret Key from your Stripe dashboard, then copy the webhook URL shown on the page and paste it into Stripe (Developers → Webhooks, event checkout.session.completed).',
				],
				tip: 'Without the Webhook Signing Secret configured, Stripe payments stay pending and never get confirmed automatically. If you don’t turn on any payment method, paid calendars show clients a notice instead: only free calendars stay bookable.',
			},
			{
				id: 'availability',
				title: 'Manage your availability',
				paragraphs: [
					'Go to clickTarot → Availability, pick a calendar and navigate to the month you need: the monthly view shows at a glance which days are open, closed, partly booked or fully blocked. Click a day to block it entirely, or to deselect just a few specific time slots.',
				],
				tip: 'For a longer absence (vacation, a break), you don’t need to open every day one by one: below the monthly calendar you’ll find "Block a period". Enter a start and end date, and the system automatically blocks every working day in that range.',
			},
			{
				id: 'bookings',
				title: 'Manage the bookings you receive',
				paragraphs: [
					'Go to clickTarot → Bookings for the full list, filterable by calendar and status: Pending (awaiting payment, frees itself up after an hour if the client doesn’t pay), Confirmed (payment received, or a free calendar), Cancelled (cancelled manually) and Expired (timed out without payment).',
					'The Billing column already shows the client’s Tax ID and address, collected as a required field at booking time: everything you need to issue an invoice is right there, no need to email and ask.',
				],
				tip: 'The "Export CSV" button downloads every booking matching your chosen filters into a file ready for Excel or your accountant, with no row limit like the on-screen view has.',
			},
			{
				id: 'emails',
				title: 'Customize your emails',
				paragraphs: [
					'On each calendar’s edit page you’ll find the Email and Reminder sections: leave the fields empty to use the default text, or write your own using the placeholders {{name}}, {{email}}, {{phone}}, {{service}}, {{date}}, {{time}}, {{manage_link}}, {{add_to_calendar_link}} and {{google_calendar_link}}, automatically replaced with the real booking details.',
					'{{manage_link}} is the link clients use to move or cancel their own appointment (see the next section). {{add_to_calendar_link}} downloads an .ics file that works with any calendar app (iPhone, Outlook, Google); {{google_calendar_link}} does the same with one direct click into Google Calendar. Both are already included in the default text.',
				],
				tip: 'The reminder, if you turn it on, goes out automatically a number of hours before the appointment, your choice.',
			},
			{
				id: 'public-link-color',
				title: 'Public link and custom color',
				paragraphs: [
					'Every calendar can generate a dedicated public link, something like yoursite.com/book/service-name/: ready to drop into your Instagram or TikTok bio, or send over WhatsApp, with no WordPress page to build. You’ll also find it in the "Existing calendars" table, with a "Copy link" button.',
					'On the same page you can also pick the color of the public form with a color picker, no code involved: leave it at the default and clickTarot’s standard color is used.',
				],
			},
			{
				id: 'coupons',
				title: 'Discount coupons',
				paragraphs: [
					'On clickTarot → Coupons you create discount codes to share with your clients, for a social media promo for example: percentage or fixed amount, valid on one specific calendar or all of them, with an optional maximum number of uses and an optional expiry date.',
					'The client enters the code on the booking form, under "Got a discount code?": the new price updates immediately, before they pay.',
				],
			},
			{
				id: 'packages',
				title: 'Prepaid packages',
				paragraphs: [
					'On clickTarot → Packages you create multi-session packages for a calendar, e.g. "3x Reading" at a discount compared to three separate bookings. The client pays for the whole package on a dedicated page, without picking a date yet, then books their sessions whenever they like: if the system recognizes their email among paid packages, payment is skipped automatically.',
				],
				tip: 'The "Customer purchases and credits" table shows how many sessions each client has left, and you can gift them an extra one with a click, for example to reward a loyal client without setting up a whole new package.',
			},
			{
				id: 'self-service',
				title: 'Self-service rescheduling and cancellation',
				paragraphs: [
					'Every confirmation and reminder email includes a "manage your booking" link: from there, the client moves the appointment to another open slot or cancels it themselves, without writing to you.',
				],
				tip: 'It only works as long as the calendar’s minimum notice period hasn’t passed yet (the same one used to block last-minute bookings): below that threshold, the client is invited to contact you directly. You’ll find the same link next to every confirmed booking in clickTarot → Bookings too, handy if a client asks for it over WhatsApp.',
			},
			{
				id: 'statistics',
				title: 'Statistics',
				paragraphs: [
					'On clickTarot → Statistics you’ll find your revenue, split between single bookings and packages so they don’t overlap, month-by-month trends, and a breakdown per calendar: which service earns the most, how many confirmed bookings you’ve received. Real numbers, not gut feeling, to decide what to raise the price on or what to retire.',
				],
			},
		],
		faqTitle: 'Frequently asked questions',
		faq: [
			{
				q: 'A client says they never got the confirmation email. What do I check?',
				a: 'First, the client’s spam folder, then the booking status in clickTarot → Bookings: if it’s still "Pending", the email never went out because payment wasn’t completed.',
			},
			{
				q: 'I need to close for a few days off. How do I do that?',
				a: 'Go to clickTarot → Availability and use "Block a period": enter a start and end date, no need to open every day one by one or touch the calendar’s working hours.',
			},
			{
				q: 'Is the PayPal and Stripe data I enter safe?',
				a: 'Yes: it stays saved only on your own site, is never shared with third parties, and Stripe’s Secret Key is never shown again once it’s saved.',
			},
			{
				q: 'Can I have multiple calendars at different prices?',
				a: 'Yes, create a calendar for each service: each one has its own shortcode, price, duration and settings, independent of the others.',
			},
		],
		contactTitle: 'Couldn’t find what you needed?',
		contactBody: 'Reach out directly: we reply to support requests within one business day.',
		contactCta: 'Contact us',
	},
	footer: {
		tagline:
			'The booking calendar for Tarot consultation professionals (and not only) by Francesco <span style="color:var(--ct-primary-dark);font-weight:700">Guarino</span>.',
		freemiusNote: 'Sales and billing handled by Freemius, our official reseller.',
		contactLabel: 'Contact',
		supportLabel: 'Support',
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
		title: 'I’m not a company. I’m <span class="ct-accent">one of you</span>, and I got sick of looking for a tool that didn’t exist.',
		subtitle:
			'clickTarot Calendar wasn’t built in a marketing office. It was built out of a real problem, mine, and a job I do every day.',
		bioTitle: 'Who I am',
		photoAlt: 'Francesco Guarino working with a Tarot de Marseille deck',
		photo2Alt: 'Francesco Guarino reviewing tarot card meanings',
		bioBody: [
			'My name is Francesco Guarino. I’m an independent researcher, a student of social psychology, and for years I’ve worked to build a bridge between science and spirituality. Before any of that, I studied directly with master card-makers the tradition of card production itself.',
			'I founded <a href="https://scuolatdm.com/" target="_blank" rel="noopener">Scuola TdM</a>, Italy’s leading training hub for Tarot de Marseille, and created the TdM Method, a study and interaction model for the Tarot de Marseille that I’ve taught across Europe and Asia since 2011, and in America since 2017.',
			'I’m the webmaster of <a href="https://www.tarocchi.blog/" target="_blank" rel="noopener">tarocchi.blog</a>, considered the best tarot blog in Italy, and I created <a href="https://www.clicktarot.net/" target="_blank" rel="noopener">clickTarot</a>, a community of a few hundred people, small but real, that I run myself. Across my sites I reach a million and a half tarot students, enthusiasts and lovers every year. I’ve also produced the documentary “<a href="https://www.tarocchi.blog/oltre-il-tarot/" target="_blank" rel="noopener">Oltre il Tarot</a>” and regularly write books on psychology and spirituality.',
		],
		searchTitle: 'Why I built clickTarot Calendar',
		searchBody: [
			'For years I looked for a booking tool that fit my work: paid, one-on-one consultations, with clients who come back over time. I never found one. And I’ll say this straight away, because I can’t stand people who oversell: it’s not the reading itself that’s the real bottleneck in this line of work. It’s the missed messages, the appointments you have to confirm by hand, the client who’s waiting for a reply and books somewhere else in the meantime.',
			'I tried Booknetic: it didn’t have the features I actually needed. I moved to Booknetic SaaS, but it was full of bugs, and since its developers make money selling paid add-ons, they seemed more interested in shipping new ones than fixing what was already broken. I even joined their Discord community hoping to find help: it was a graveyard of complaints, with no answers.',
			'I tried TidyCal: it kept throwing 404 errors on my calendars, and customer support was practically nonexistent, the same story as every product from the “Sumo family”. If you use SendFox for your emails, you know exactly what I mean.',
			'I’d also used a plugin from the CodePeople team for a long time. It worked, until it started conflicting with other major WordPress plugins. They built me a custom version, which was never updated again, until a WordPress update finally broke it for good.',
			'At that point I stopped looking. I gathered my team and built it myself. Then I did something that, from a business standpoint, I probably shouldn’t have: I opened it up to you too.',
		],
		whyTitle: 'Why I know it works',
		whyBody: [
			'Not because there’s a team of professional developers behind it: there isn’t, and I’m not going to pretend otherwise. clickTarot Calendar works because I’m the one using it, every day, for the consultations in my own real business, with real clients, who pay real money.',
			'That’s exactly why the main focus is on updates and constant improvement: this isn’t a product I just sell and move on from. It’s the tool my own daily work depends on, so it has to work, always.',
		],
		linksTitle: 'Read more',
		bookneticLinkLabel: 'Our comparison with Booknetic',
		tidycalLinkLabel: 'Our comparison with TidyCal',
		ctaTitle: 'I’m not selling you software. I’m handing you my own tool.',
		ctaBody: 'The same one I use every day for my own work, now available for yours.',
	},
};

export default en;
