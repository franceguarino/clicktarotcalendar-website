import type { CompetitorDictionary } from './types';

const en: CompetitorDictionary = {
	calendly: {
		eyebrow: 'Comparison',
		title: 'clickTarot Calendar vs Calendly',
		subtitle:
			'Calendly is a great generic tool for meetings of any kind. clickTarot Calendar is built specifically for people selling paid consultations.',
		colFeature: 'Feature',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Calendly',
		rows: [
			{ feature: 'Invoice data collection (Tax ID/VAT number, address)', clicktarot: 'Automatic, built into the form', competitor: 'Not available' },
			{ feature: 'Multi-session prepaid packages', clicktarot: 'Included', competitor: 'Not available' },
			{ feature: 'Form color & branding', clicktarot: 'Customizable in one click', competitor: 'Limited to higher-priced plans' },
			{ feature: 'Built for', clicktarot: 'A single consultation practitioner', competitor: 'Teams and companies of every kind' },
			{ feature: 'Where it runs', clicktarot: 'On your own WordPress site, your data stays yours', competitor: 'External platform' },
			{ feature: 'Pricing model', clicktarot: 'Single license, no per-seat cost', competitor: 'Monthly subscription, often per seat' },
		],
		painPointsTitle: 'What solo practitioners run into with Calendly',
		painPointsIntro: 'Calendly is a solid tool; it just isn’t built for someone selling paid, single-provider consultations.',
		painPoints: [
			'Free and Standard plans cap you at a small number of event types and keep Calendly’s own branding on your booking page; removing it means moving up to a paid tier built around teams, not solo practitioners.',
			'There’s no native field for a tax ID, VAT number, or billing address, and no way to generate an invoice from a booking; you’d need to bolt on a separate invoicing tool and copy the data over by hand.',
			'Selling a bundle of sessions with one payment isn’t supported: every booking is a separate transaction, so a returning client pays, and you invoice, one appointment at a time.',
		],
		ctaTitle: 'Ready to try something built just for you?',
		ctaBody: 'Install clickTarot Calendar on your WordPress site in a few minutes, no technical skills required.',
		faq: [
			{
				q: 'Is clickTarot Calendar really more affordable than Calendly for a single consultant?',
				a: 'clickTarot Calendar is one plan with every feature included, however you choose to pay: monthly, annual, or a one-time lifetime purchase. Calendly’s paid plans bill monthly and gate features like custom branding behind higher tiers, so for one practitioner the cost usually adds up to more over time than clickTarot Calendar’s annual or lifetime option.',
			},
			{
				q: 'Can I collect a client’s Tax ID or VAT number when they book, like I can with clickTarot Calendar?',
				a: 'Not natively. Calendly doesn’t have a built-in billing/invoicing field, so you’d need a separate form or manual follow-up to collect that information before you can issue an invoice.',
			},
		],
		otherComparisonsTitle: 'See how we compare to other scheduling tools',
	},
	acuity: {
		eyebrow: 'Comparison',
		title: 'clickTarot Calendar vs Acuity Scheduling',
		subtitle:
			'Acuity Scheduling is a polished, well-reviewed scheduling tool. clickTarot Calendar is built for a single consultation practitioner, at one flat price.',
		colFeature: 'Feature',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Acuity Scheduling',
		rows: [
			{ feature: 'Invoice data collection (Tax ID/VAT number, address)', clicktarot: 'Automatic, built into the form', competitor: 'No dedicated field; you’d build a generic custom form yourself' },
			{ feature: 'Multi-session prepaid packages', clicktarot: 'Included', competitor: 'Requires the Standard plan (around $27/month billed annually) or higher' },
			{ feature: 'Form color & branding', clicktarot: 'Customizable in one click', competitor: 'Acuity’s own branding stays until you reach the Premium plan (around $49/month billed annually)' },
			{ feature: 'Built for', clicktarot: 'A single consultation practitioner', competitor: 'Solo to multi-location businesses, priced by number of calendars' },
			{ feature: 'Where it runs', clicktarot: 'On your own WordPress site, your data stays yours', competitor: 'External platform' },
			{ feature: 'Pricing model', clicktarot: 'Single license, no per-seat cost', competitor: 'Monthly subscription, price tier gates which features you get' },
		],
		painPointsTitle: 'What solo practitioners run into with Acuity Scheduling',
		painPointsIntro: 'Acuity is a genuinely well-built tool with strong reviews overall, but a few things are worth knowing before you pick a plan.',
		painPoints: [
			'To get multi-session packages at all, you need the Standard plan, around $27/month billed annually; the entry-level Starter tier doesn’t include them.',
			'Removing Acuity’s own branding from your booking page requires the top Premium tier, around $49/month billed annually.',
			'Capterra and G2 reviewers rate Acuity highly overall (4.7–4.8/5), but recurring lower-starred reviews call out a steep, “techy” learning curve and support that doesn’t always match the product’s polish.',
			'On Trustpilot, the picture looks strikingly different, around 1.5/5, with reviewers describing booking errors and package codes that don’t correctly enforce session limits. It’s a gap worth knowing about before you commit, even if it doesn’t tell the whole story on its own.',
		],
		ctaTitle: 'Ready to try something built just for you?',
		ctaBody: 'Install clickTarot Calendar on your WordPress site in a few minutes, no technical skills required.',
		faq: [
			{
				q: 'Does Acuity Scheduling let me sell prepaid packages on its cheapest plan?',
				a: 'No, multi-session packages are gated behind the Standard plan, around $27/month billed annually. clickTarot Calendar includes prepaid packages in its single license, no upgrade required.',
			},
			{
				q: 'Why do Acuity’s reviews look so different on Trustpilot compared to G2 or Capterra?',
				a: 'Acuity scores highly on G2 (around 4.7/5) and Capterra (around 4.8/5), but sits around 1.5/5 on Trustpilot, where reviewers report booking errors and package codes not enforcing limits correctly. It’s worth reading a few reviews on each platform yourself before deciding; we’d rather you go in with eyes open than take our word for it.',
			},
		],
		otherComparisonsTitle: 'See how we compare to other scheduling tools',
	},
	simplybook: {
		eyebrow: 'Comparison',
		title: 'clickTarot Calendar vs SimplyBook.me',
		subtitle:
			'SimplyBook.me covers many business types through a marketplace of paid add-ons. clickTarot Calendar includes exactly what a consultation practitioner needs, from day one.',
		colFeature: 'Feature',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'SimplyBook.me',
		rows: [
			{ feature: 'Invoice data collection (Tax ID/VAT number, address)', clicktarot: 'Automatic, built into the form', competitor: 'Not native; would use one of your limited paid “custom feature” slots for a generic form' },
			{ feature: 'Multi-session prepaid packages', clicktarot: 'Included', competitor: 'One of a capped number of paid “custom features” per plan; competes with other features for that slot' },
			{ feature: 'Form color & branding', clicktarot: 'Customizable in one click', competitor: 'Full white-label branding gated to the Premium plan (around €50/month) or higher' },
			{ feature: 'Built for', clicktarot: 'A single consultation practitioner', competitor: 'General-purpose scheduling for many business types, built around a feature marketplace' },
			{ feature: 'Where it runs', clicktarot: 'On your own WordPress site, your data stays yours', competitor: 'External platform' },
			{ feature: 'Pricing model', clicktarot: 'Single license, no per-seat cost', competitor: 'Monthly tier priced by bookings, providers, and number of active paid add-ons' },
		],
		painPointsTitle: 'What solo practitioners run into with SimplyBook.me',
		painPointsIntro: 'SimplyBook.me packs in an enormous amount through its add-on marketplace; the trade-off is that almost nothing is included by default.',
		painPoints: [
			'Nearly every feature that matters for a consultation practice (custom intake fields, packages, coupons) isn’t included by default: it’s a “custom feature” pulled from a marketplace of dozens of paid add-ons, and every plan caps how many you can run at once (just 1 on the free plan, 3 on Basic).',
			'That means on the entry-level plans you’re often choosing between having packages and having coupons, not getting both; a trade-off clickTarot Calendar doesn’t force, since packages and coupons are both included from day one.',
			'G2 and Capterra reviewers (including one with 15+ years of UX/development experience) describe the setup process as confusing specifically because it’s hard to tell which of the many add-on features are actually turned on.',
			'Full white-label branding (removing SimplyBook.me’s own name) is limited to the Premium plan and above, around €50/month billed annually.',
		],
		ctaTitle: 'Ready to try something built just for you?',
		ctaBody: 'Install clickTarot Calendar on your WordPress site in a few minutes, no technical skills required.',
		faq: [
			{
				q: 'Can I use SimplyBook.me’s free plan to sell prepaid packages and offer discount coupons at the same time?',
				a: 'Not easily, the free plan allows only 1 active “custom feature”, and both packages and coupons are separate paid add-ons, so you’d generally have to choose one. clickTarot Calendar includes both in its single license.',
			},
			{
				q: 'Is SimplyBook.me’s pricing easy to predict in advance?',
				a: 'Not entirely, the monthly cost depends on your booking volume, number of providers, and how many paid add-on features you activate, so the final price can end up higher than the advertised starting figure. clickTarot Calendar is one flat plan (monthly, annual, or lifetime) at the same price regardless of how many bookings you take.',
			},
		],
		otherComparisonsTitle: 'See how we compare to other scheduling tools',
	},
	tidycal: {
		eyebrow: 'Comparison',
		title: 'clickTarot Calendar vs TidyCal',
		subtitle:
			'TidyCal is a genuinely affordable, well-reviewed scheduling tool. clickTarot Calendar is built specifically for a single consultation practitioner, living on your own WordPress site.',
		colFeature: 'Feature',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'TidyCal',
		rows: [
			{ feature: 'Invoice data collection (Tax ID/VAT number, address)', clicktarot: 'Automatic, built into the form', competitor: 'No dedicated field; generating an invoice needs a separate integration' },
			{ feature: 'Multi-session prepaid packages', clicktarot: 'Included', competitor: 'Also included, even on the free plan' },
			{ feature: 'Form branding', clicktarot: 'Customizable in one click', competitor: 'TidyCal’s own branding stays visible on your page, even on paid tiers' },
			{ feature: 'Multi-currency support', clicktarot: 'Billing fields adapt automatically by country', competitor: 'Only one currency active at a time' },
			{ feature: 'Built for', clicktarot: 'A single consultation practitioner', competitor: 'General-purpose scheduling; team/agency plans reportedly don’t scale as advertised' },
			{ feature: 'Where it runs', clicktarot: 'On your own WordPress site, your data stays yours', competitor: 'External platform' },
			{ feature: 'Pricing model', clicktarot: 'Single license, no per-seat cost', competitor: 'One-time lifetime tiers or a monthly subscription; each extra team member reportedly needs a separate paid license' },
		],
		painPointsTitle: 'What solo practitioners run into with TidyCal',
		painPointsIntro: 'TidyCal is priced fairly and doesn’t skimp on payments or packages the way some tools do, but a few real limitations are worth knowing before you commit.',
		painPoints: [
			'There’s no dedicated field for a tax ID, VAT number, or billing address, and no built-in way to generate an invoice; you’d need a separate integration to handle that step.',
			'TidyCal’s own branding stays visible on your booking page even on paid tiers; Capterra reviewers specifically call out the logo persisting and, at times, getting in the way of the interface.',
			'Only one currency is active at a time, which reviewers flag as a real limitation if you take bookings from clients paying in different currencies.',
			'The “Agency” plan name suggests it’s built for teams, but reviewers report that each additional team member needs their own separate paid license; a cost that isn’t obvious until you’re already using it.',
		],
		ctaTitle: 'Ready to try something built just for you?',
		ctaBody: 'Install clickTarot Calendar on your WordPress site in a few minutes, no technical skills required.',
		faq: [
			{
				q: 'Is TidyCal really a one-time payment instead of a subscription, unlike clickTarot Calendar?',
				a: 'Actually, clickTarot Calendar also offers a one-time lifetime option, alongside monthly and annual billing, so you’re not limited to a subscription either way. The real difference is what’s included: clickTarot Calendar has automatic Tax ID/VAT and invoicing data collection built in from day one, on every plan, which TidyCal doesn’t have natively.',
			},
			{
				q: 'Does TidyCal collect a client’s Tax ID or VAT number when they book, like clickTarot Calendar does?',
				a: 'No, TidyCal doesn’t have a built-in billing/tax field, so you’d need to connect a separate invoicing tool and collect that information manually before you can bill correctly.',
			},
		],
		otherComparisonsTitle: 'See how we compare to other scheduling tools',
	},
	booknetic: {
		eyebrow: 'Comparison',
		title: 'clickTarot Calendar vs Booknetic',
		subtitle:
			'Booknetic is a general-purpose WordPress booking plugin used by salons, clinics and agencies. clickTarot Calendar is built specifically around a single consultation practitioner’s workflow.',
		colFeature: 'Feature',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Booknetic',
		rows: [
			{ feature: 'Invoice data collection (Tax ID/VAT number, address)', clicktarot: 'Automatic, included in the single license', competitor: 'Only on the Premium tier ($149/year or $599 lifetime); not in the Basic or Standard plans' },
			{ feature: 'Discount coupons', clicktarot: 'Included', competitor: 'Also gated behind the Premium tier; not in the cheaper plans' },
			{ feature: 'Built for', clicktarot: 'A single consultation practitioner', competitor: 'General-purpose, multi-industry (salons, clinics, agencies)' },
			{ feature: 'Where it runs', clicktarot: 'On your own WordPress site', competitor: 'Also on your own WordPress site; same hosting model as clickTarot Calendar' },
			{ feature: 'Pricing model', clicktarot: 'One plan, every feature included: pay monthly, annually, or once for lifetime', competitor: 'Tiered pricing; the cheapest plans ($45–$99/year) exclude features you’d likely need' },
			{ feature: 'Support', clicktarot: 'Included with the license', competitor: '6–12 months included depending on purchase channel, then a paid renewal' },
		],
		painPointsTitle: 'What solo practitioners run into with Booknetic',
		painPointsIntro: 'Booknetic sells well and scores high on its own marketplace listing, but a few things are worth knowing before you pick a plan.',
		painPoints: [
			'Invoicing/tax fields and discount coupons aren’t included on the cheaper plans; they’re locked behind the Premium tier ($149/year or $599 lifetime), so the advertised $45–$99/year entry price doesn’t get you what a consultation practice would actually need.',
			'A Capterra reviewer running a spa business reported the system accepting overlapping, paid double-bookings for the same resource on a live site, with slow, generic support even after marking the issue urgent.',
			'Reviewers describe needing “numerous expensive add-ons for full functionality”, one reported spending over $520 in total and called the value “poor.”',
			'Support is included for 6 to 12 months depending on the purchase channel, then becomes a paid renewal; a different model from a license that includes ongoing support and updates.',
		],
		ctaTitle: 'Ready to try something built just for you?',
		ctaBody: 'Install clickTarot Calendar on your WordPress site in a few minutes, no technical skills required.',
		faq: [
			{
				q: 'Does Booknetic include invoicing and tax data collection like clickTarot Calendar does?',
				a: 'Only on its Premium tier ($149/year or $599 lifetime); the cheaper Basic and Standard plans don’t include it. clickTarot Calendar includes automatic Tax ID/VAT and address collection in its single license, no upgrade required.',
			},
			{
				q: 'Is Booknetic built specifically for consultation practitioners like clickTarot Calendar?',
				a: 'No, Booknetic is a general-purpose booking plugin aimed at salons, clinics, agencies and many other business types. clickTarot Calendar is built specifically around the workflow of a single consultation practitioner: tarot readers, astrologers, counselors.',
			},
		],
		otherComparisonsTitle: 'See how we compare to other scheduling tools',
	},
	dailytarot: {
		eyebrow: 'Comparison',
		title: 'clickTarot Calendar vs Daily Tarot',
		subtitle:
			'Daily Tarot is mainly a tool for publishing tarot readings, decks and spreads, with booking as one feature among several, still early-stage. clickTarot Calendar is built end-to-end around scheduling and getting paid for consultations.',
		colFeature: 'Feature',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Daily Tarot',
		rows: [
			{ feature: 'Core purpose', clicktarot: 'Booking and getting paid for consultations', competitor: 'Publishing tarot readings, decks and spreads; booking is a secondary module' },
			{ feature: 'Calendar editing range (free version)', clicktarot: 'Unlimited, any future date', competitor: 'Free version only lets you edit today and tomorrow; further dates require the paid Pro upgrade' },
			{ feature: 'Charging for a booking (free version)', clicktarot: 'PayPal included', competitor: 'Not available; payment options are a Pro-only feature' },
			{ feature: 'Invoice data collection (Tax ID/VAT number, address)', clicktarot: 'Automatic, included', competitor: 'Not offered at any tier' },
			{ feature: 'Prepaid session packages', clicktarot: 'Included', competitor: 'Not offered' },
			{ feature: 'Where it runs', clicktarot: 'On your own WordPress site', competitor: 'Also on your own WordPress site' },
		],
		painPointsTitle: 'What to know before choosing Daily Tarot for bookings',
		painPointsIntro: 'Daily Tarot’s own WordPress.org listing shows it’s early-stage software, similar in that respect to clickTarot Calendar. Worth knowing what its free tier actually includes before building a booking workflow around it.',
		painPoints: [
			'The free version restricts calendar editing to today and tomorrow only; scheduling further out requires upgrading to Pro.',
			'Booking payments (PayPal or Stripe) are a Pro-only feature; the free version can take a booking request but has no way to charge for it.',
			'There’s no invoicing, Tax ID/VAT collection or prepaid package system at any tier, features a paying consultation practice usually needs sooner rather than later.',
		],
		ctaTitle: 'Ready to try something built just for you?',
		ctaBody: 'Install clickTarot Calendar on your WordPress site in a few minutes, no technical skills required.',
		faq: [
			{
				q: 'Can I charge for bookings with Daily Tarot’s free version?',
				a: 'No. Payment methods (PayPal and Stripe) are only available on Daily Tarot’s paid Pro tier; the free version can take booking requests but cannot charge for them. clickTarot Calendar accepts PayPal payments in its free version, with Stripe on Premium.',
			},
			{
				q: 'Is Daily Tarot built for booking, like clickTarot Calendar?',
				a: 'Not primarily. Daily Tarot’s main focus is publishing tarot readings, decks and spreads, with a booking module as one feature among several. clickTarot Calendar is built end-to-end around scheduling and getting paid for consultations.',
			},
		],
		otherComparisonsTitle: 'See how we compare to other scheduling tools',
	},
	ozapp: {
		eyebrow: 'Comparison',
		title: 'clickTarot Calendar vs Ozapp',
		subtitle:
			'Ozapp (formerly Book Appointment Online PRO) is a general-purpose, multi-employee appointment plugin sold on CodeCanyon, with a landing page aimed at astrologers and psychics among several other niches. clickTarot Calendar is built end-to-end for a single consultation practitioner.',
		colFeature: 'Feature',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Ozapp',
		rows: [
			{ feature: 'Built for', clicktarot: 'A single consultation practitioner', competitor: 'Teams with multiple staff and branches; the astrology/psychic page is one of several niche landing pages for the same general-purpose tool' },
			{ feature: 'Distribution', clicktarot: 'WordPress.org, with a real, permanently free version', competitor: 'CodeCanyon marketplace only; no WordPress.org listing, no free tier' },
			{ feature: 'Pricing model', clicktarot: 'One plan, every feature included: monthly, annual or lifetime, with a free tier that stays free', competitor: '$79 one-time regular license, support included for 6 months, extendable for an extra fee' },
			{ feature: 'Invoice data collection (Tax ID/VAT number, address)', clicktarot: 'Automatic, included', competitor: 'Not listed among its features' },
			{ feature: 'Prepaid session packages', clicktarot: 'Included', competitor: 'Not available; a shopping-cart feature for bundling sessions is listed as a future roadmap item' },
			{ feature: 'Payment gateways', clicktarot: 'PayPal (free), Stripe (Premium): the two most common for solo consultants', competitor: 'Stripe, PayPal, WooCommerce, Square, Yandex Kassa: broad, but aimed at multi-market, multi-employee businesses' },
		],
		painPointsTitle: 'What to know before choosing Ozapp for a solo consultation practice',
		painPointsIntro: 'Ozapp is a capable, broad appointment system, built first for businesses with multiple staff rather than a single consultation practitioner.',
		painPoints: [
			'It’s sold only on CodeCanyon: no WordPress.org listing, no way to try a real free version before paying $79, and support beyond the first 6 months costs extra.',
			'The feature set (employee management, a branch manager on the roadmap, video conferencing) is built around teams; a solo tarot reader or astrologer pays for a lot of functionality aimed at a different kind of business.',
			'There’s no invoicing/Tax ID collection or prepaid session packages, two things a consultation practice usually needs early on.',
		],
		ctaTitle: 'Ready to try something built just for you?',
		ctaBody: 'Install clickTarot Calendar on your WordPress site in a few minutes, no technical skills required.',
		faq: [
			{
				q: 'Can I try Ozapp for free before paying?',
				a: 'No. Ozapp is sold as a one-time $79 license on CodeCanyon, with no free tier and no WordPress.org listing. clickTarot Calendar has a real, permanently free version you can install directly from WordPress.org.',
			},
			{
				q: 'Is Ozapp built for a solo tarot reader or astrologer?',
				a: 'Not specifically. Ozapp is a general-purpose, multi-employee appointment system; its astrology/psychic page is one of several niche landing pages for the same generic tool. clickTarot Calendar is built end-to-end around a single consultation practitioner’s workflow.',
			},
		],
		otherComparisonsTitle: 'See how we compare to other scheduling tools',
	},
};

export const bookneticSaasClarification = {
	eyebrow: 'Not a direct comparison',
	title: 'Is Booknetic SaaS Like Calendly? Not Really',
	subtitle:
		'Booknetic SaaS solves a different problem than clickTarot Calendar. Here’s what it actually is, and where to look if you’re comparing booking tools for your own practice.',
	whatItIsTitle: 'What Booknetic SaaS actually is',
	whatItIsBody:
		'Booknetic SaaS isn’t a tool for taking your own appointments; it’s a white-label platform for building and reselling a booking-software business to other companies. You install it, then sign up other businesses as paying tenants, each running their own booking system under your brand. It’s built for entrepreneurs launching a SaaS product, not for tarot readers, astrologers or consultants taking bookings from their own clients.',
	whyNotFitTitle: 'Why we’re not forcing a feature comparison',
	whyNotFitBody:
		'If you’re comparing tools to manage your own client appointments, Booknetic SaaS solves a different problem entirely, and sits at a different price point, with plans built for running a multi-tenant reseller business rather than a single practice. A feature-by-feature table against clickTarot Calendar wouldn’t be an honest comparison, so we’re not going to fake one.',
	realComparisonLabel: 'See our real comparison with Booknetic’s WordPress plugin',
	ctaTitle: 'clickTarot Calendar is built for exactly this: taking your own bookings',
	ctaBody: 'One plugin, on your own WordPress site, priced for a single consultation practice, not a reseller business.',
};

export default en;
