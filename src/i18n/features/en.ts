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
		tagline: 'Stop trading messages just to find <span class="ct-accent">a free hour</span>.',
		metaDescription:
			"See how clickTarot Calendar's visual monthly calendar lets clients book their own consultation slot instantly, with no back-and-forth messages.",
		painPoint:
			"Booking by DM or email means a dozen back-and-forth messages before anyone agrees on a time, and half of them ask “do you have anything free next week?” after you've already answered that twice.",
		howItWorks:
			"Clients see your real, live availability laid out as an actual calendar: days you work, days you don't, slots already taken. They pick a day, pick a time, and it's booked. No back-and-forth, no double-booking, no manual checking on your end.",
		benefit:
			"Every hour you don't spend answering “are you free Tuesday?” is an hour you can spend doing readings, or nothing at all. That's the real return on a booking tool: time back, not just a prettier form.",
	},
	payments: {
		title: 'Built-in Payments',
		tagline: 'Get paid <span class="ct-accent">before</span> the session, not after.',
		metaDescription:
			'PayPal and Stripe payments built into clickTarot Calendar: clients pay when they book, and the money goes straight to your own account.',
		painPoint:
			"Chasing payment after a reading is awkward for everyone involved. And manually sending a payment link for each booking is one more step that can be forgotten, or ignored.",
		howItWorks:
			"PayPal and Stripe connect directly to your own account. The client pays the moment they book, right through the same form: no separate invoice, no separate link, no separate step.",
		benefit:
			"The money lands in your account, not the plugin's; clickTarot never touches or holds a cent of it. You get paid on time, every time, without having to ask.",
	},
	invoicing: {
		title: 'Automatic Invoice Data',
		tagline: 'The tax details you need are <span class="ct-accent">already</span> sitting in your dashboard.',
		metaDescription:
			'clickTarot Calendar collects Tax ID/VAT number and billing address automatically at booking time, so invoicing your clients takes no extra work.',
		painPoint:
			"Issuing an invoice usually means emailing the client afterward to ask for their tax ID and billing address, then waiting for a reply before you can actually bill them.",
		howItWorks:
			'Tax ID/VAT number and billing address are required fields in the booking form itself, automatically matched to your client’s country. By the time the appointment is confirmed, everything you need to invoice is already recorded next to the booking.',
		benefit:
			"No back-and-forth for paperwork. If you're running this as a real business, and if you're paying for software, you probably are; proper invoicing shouldn't be the part that slows you down.",
	},
	packages: {
		title: 'Prepaid Packages',
		tagline: 'Sell three sessions <span class="ct-accent">today</span>, let them book the third one in March.',
		metaDescription:
			'Sell prepaid multi-session packages with clickTarot Calendar: clients pay once, then book their sessions whenever they like.',
		painPoint:
			"Repeat clients are the best clients, but without a package system, every return visit means going through checkout again, with no easy way to reward someone for booking ahead.",
		howItWorks:
			"Create a bundle, say 3 sessions at a discount versus paying for each one separately. The client pays once, and their credit is tied to their email: next time they book, the plugin recognizes them and skips payment automatically.",
		benefit:
			"Packages turn one-off clients into recurring revenue you've already collected, and give your most loyal clients a reason to come back instead of trying someone else next time.",
	},
	coupons: {
		title: 'Discount Coupons',
		tagline: 'Run a <span class="ct-accent">real</span> promotion without doing the math in your head at checkout.',
		metaDescription:
			'Create percentage or fixed-amount discount coupons in clickTarot Calendar, ready for your next social media promotion.',
		painPoint:
			"Manual discounts mean manually adjusting a price, or trusting yourself to remember who gets 20% off and who doesn't; not something you want to be tracking in a notebook.",
		howItWorks:
			"Create a code (percentage or fixed amount) with an optional expiry date and usage limit. The client enters it in the booking form and sees the new price immediately, before paying.",
		benefit:
			"Coupons are one of the cheapest ways to turn social media followers into paying clients. Having them built in means an Instagram promo takes five minutes to set up, not an afternoon.",
	},
	reschedule: {
		title: 'Self-Service Rescheduling & Cancellation',
		tagline: 'Let clients move their <span class="ct-accent">own</span> appointment; you shouldn’t be their calendar assistant.',
		metaDescription:
			'Let clients reschedule or cancel their own appointment straight from the confirmation email; clickTarot Calendar handles it without you.',
		painPoint:
			"“Can we move Tuesday to Thursday?” is a normal, reasonable request, and also the fifth message today that has nothing to do with an actual reading.",
		howItWorks:
			"Every confirmation and reminder email includes a management link. Clients can reschedule to another open slot or cancel on their own, right up until your configured minimum-notice window; after that, they're asked to contact you directly.",
		benefit:
			"The requests that used to interrupt your day now resolve themselves. You keep full visibility and control; you just stop being the one who has to act on every small change.",
	},
	international: {
		title: 'Billing for International Customers',
		tagline: '<span class="ct-accent">One form</span>, correct for a client in Rome and a client in Berlin.',
		metaDescription:
			'clickTarot Calendar automatically adapts its billing fields to your client’s country: VAT/Tax ID, postal code format and more, wherever they’re based.',
		painPoint:
			"Billing fields built for only one country (an Italian Tax Code, an Italian postal code format) either don't work for a client abroad, or quietly collect wrong, unusable data from them.",
		howItWorks:
			'A country selector on the booking form shows the right fields automatically for wherever your client is billing from: a VAT number/Tax ID, postal code and state or region, matched to what that country actually requires. Italy is the one exception, with its own stricter format (a specific Tax Code, ZIP and province), and the form handles that automatically too.',
		benefit:
			'You can say yes to a client anywhere without a workaround. If you’re building an international practice, or already have one; this is the difference between a form that works for everyone, everywhere, and one that quietly turns away anyone whose country it wasn’t built for.',
	},
	multilingual: {
		title: 'Multilingual Plugin',
		tagline: 'Your booking form speaks your client’s language. <span class="ct-accent">Literally.</span>',
		metaDescription:
			"clickTarot Calendar's booking form, emails and admin dashboard are translated into English, Spanish, German and Italian.",
		painPoint:
			"A booking form in a language your client doesn't read creates friction at exactly the moment you want zero friction: right before they pay.",
		howItWorks:
			"The booking form, confirmation emails, and your own admin dashboard are all translated: English, Spanish, German and Italian, and switch automatically based on your site's configured language.",
		benefit:
			"You don't need a separate site, a translation plugin, or a developer to serve clients in more than one language. It's already there.",
	},
	availability: {
		title: 'Flexible Availability Management',
		tagline: 'Block off entire days or single time slots <span class="ct-accent">whenever you need to</span>.',
		metaDescription:
			'clickTarot Calendar lets you block entire days or single time slots in seconds, so your calendar always matches your real availability.',
		painPoint:
			"Your availability doesn't look the same every week: a retreat, a family emergency, a fully booked Tuesday. A booking tool that only lets you set fixed weekly hours forces you to either turn away bookings you can't honor, or manually message clients to cancel.",
		howItWorks:
			"Set your regular weekly working hours once, then block off any single day or time slot whenever something changes: a doctor's appointment, a workshop you're attending, a week off. Blocked time simply disappears from what clients can book, with no separate cancellation step.",
		benefit:
			"You stay in control of your own time without becoming your calendar's full-time administrator. Block what you need to block, in a few clicks, and get back to your actual work.",
	},
	notifications: {
		title: 'Automatic Email Notifications',
		tagline: 'Confirmation and reminder emails sent automatically, fully customizable <span class="ct-accent">in your own words</span>.',
		metaDescription:
			"clickTarot Calendar sends confirmation and reminder emails automatically, with text you write yourself; no generic, robotic messages.",
		painPoint:
			"Clients forget appointments. Without a reminder, a forgotten booking means a wasted time slot and an awkward conversation about whether to charge for it. But most booking tools either skip reminders entirely or send emails so generic they don't sound like you.",
		howItWorks:
			'Every booking automatically triggers a confirmation email to the client and a notification to you, and you can turn on a reminder email sent a configurable number of hours before the appointment. All three are fully editable; write them in your own voice, not a template’s.',
		benefit:
			"Fewer no-shows, fewer last-minute “wait, when was my appointment again?” messages, and every email a client receives actually sounds like it came from you; not from a piece of software.",
	},
	socialLink: {
		title: 'Dedicated Booking Link',
		tagline: 'A public booking link ready for your Instagram or TikTok bio, <span class="ct-accent">no extra page to build</span>.',
		metaDescription:
			'Every clickTarot Calendar service gets its own public booking link, ready to drop straight into your Instagram or TikTok bio.',
		painPoint:
			"Most of your bookings probably start on social media, not on your website's homepage. But sending a follower to a generic contact page (where they then have to find the right service, scroll, and figure out what to do) loses people who would have booked on the spot.",
		howItWorks:
			"Every calendar you create gets its own dedicated public booking link automatically, with no separate page to design or publish. You'll still have a shortcode to embed the calendar in your site's own pages and posts, but you also get an instant standalone link on top of that. Put it straight in your Instagram or TikTok bio, or share it directly in a DM, and the person lands exactly on the booking form for that specific service.",
		benefit:
			"The gap between “someone sees your content” and “someone books a session” gets as short as possible; which matters most exactly when someone's interest is highest, right after they've found you.",
	},
	statistics: {
		title: 'Revenue Statistics',
		tagline: 'See what you earn each month and which service performs best, <span class="ct-accent">right in your dashboard</span>.',
		metaDescription:
			'Track monthly revenue, confirmed bookings and which service earns the most, directly in your clickTarot Calendar dashboard.',
		painPoint:
			"If you're running consultations as a real business, you need to know if it's actually working; which service is worth your time, whether this month was better than last, whether a coupon campaign paid off. Digging that out of a spreadsheet you have to update by hand is a chore most people just... don't do.",
		howItWorks:
			'Every confirmed booking and payment is tracked automatically. Your dashboard shows total revenue, revenue from single sessions versus packages, confirmed bookings, your cancellation rate, a month-by-month trend, and a breakdown by individual calendar; no manual bookkeeping required.',
		benefit:
			"You can make real decisions (raise a price, retire an underperforming service, double down on what's working) based on actual numbers instead of a gut feeling. That's worth more than the plugin costs on its own.",
	},
};

export default en;
