import type { Dictionary } from './types';

const de: Dictionary = {
	meta: {
		title: 'WordPress Buchungsplugin für Kartenleger:innen | clickTarot Calendar',
		description:
			'Buchungsplugin für WordPress, gebaut für Kartenleger:innen und Astrolog:innen. Zahlungen und Pakete inklusive, DSGVO-freundlich auf deiner eigenen Website.',
	},
	nav: {
		home: 'Start',
		pricing: 'Preise',
		faq: 'FAQ',
		about: 'Über uns',
	},
	hero: {
		eyebrow: 'Das Plugin für alle, die Beratungen verkaufen, nicht Software',
		title: 'Schluss mit Nachrichten hin und her auf Instagram: Lass Kund:innen direkt bei dir buchen.',
		subtitle:
			'Jede Nachricht, die du erst spät beantwortest, ist eine Buchung, die woanders landet. clickTarot Calendar macht aus deiner Website ein Studio, das nie schließt: Kund:innen wählen Datum und Uhrzeit und bezahlen selbstständig, du bekommst nur die Benachrichtigung.',
	},
	features: {
		title: 'Alles, was du brauchst, um keine Kund:innen mehr zu verlieren',
		items: [
			{
				title: '📅 Visueller Monatskalender',
				description: 'Kein „hast du Dienstag Zeit?" mehr: Der Kunde sieht deine echte Verfügbarkeit und bucht selbstständig, ganz ohne Hin und Her.',
			},
			{
				title: '💳 Integrierte Zahlungen',
				description: 'PayPal und Kreditkarte (Stripe), direkt mit deinem eigenen Konto verbunden. Das Geld geht sofort an dich, ohne Umweg.',
			},
			{
				title: '🧾 Automatische Rechnungsdaten',
				description: 'Steuernummer und Adresse werden bei der Buchung automatisch erfasst: Die Rechnung ist bereits fertig zum Ausstellen.',
			},
			{
				title: '📦 Prepaid-Pakete',
				description: 'Verkaufe Blöcke mit mehreren Sitzungen zu einem vergünstigten Preis: Du kassierst sofort, der Kunde bucht wann immer gewünscht.',
			},
			{
				title: '🎟️ Rabattgutscheine',
				description: 'Aktionscodes mit Ablaufdatum und Nutzungslimit, bereit für deine nächste Social-Media-Aktion.',
			},
			{
				title: '🔄 Selbstbedienungs-Terminverschiebung',
				description: 'Der Kunde verschiebt oder storniert den Termin selbst über den Link in der E-Mail; du bist nicht länger seine Kalenderassistenz.',
			},
			{
				title: '🌍 Rechnungsstellung auch für internationale Kunden',
				description: 'Länderauswahl im Formular: USt-IdNr./Steuer-ID, Postleitzahl und Bundesland passen sich außerhalb Italiens automatisch an.',
			},
			{
				title: '🌐 Mehrsprachiges Plugin',
				description: 'Buchungsformular, E-Mails und Admin-Panel auf Deutsch, Englisch, Spanisch und Italienisch verfügbar: Du sprichst die Sprache deiner Kund:innen.',
			},
			{
				title: '🕒 Flexible Verfügbarkeit',
				description: 'Blockiere ganze Tage oder einzelne Zeitfenster, wann immer du willst: Dein Kalender passt sich dir an, nicht umgekehrt.',
			},
			{
				title: '✉️ Automatische E-Mail-Benachrichtigungen',
				description: 'Bestätigungs- und Erinnerungs-E-Mails werden automatisch verschickt, mit Text, den du selbst geschrieben hast.',
			},
			{
				title: '🔗 Eigener Buchungslink',
				description: 'Ein öffentlicher Buchungslink, bereit für deine Instagram- oder TikTok-Bio: Wer dich entdeckt, bucht sofort, ohne lange zu suchen.',
			},
			{
				title: '📊 Umsatzstatistiken',
				description: 'Sieh direkt im Dashboard, was du jeden Monat verdienst und welcher Service am besten läuft, mit echten Zahlen statt Bauchgefühl.',
			},
		],
	},
	screenshots: {
		title: 'So funktioniert es in der Praxis',
		items: [
			{
				src: '/screenshots/screenshot-2.png',
				alt: 'Kalender-Panel zum Erstellen und Anpassen deiner Leistungen',
				caption: 'Richte deine Leistung ein und organisiere deinen Terminplan',
			},
			{
				src: '/screenshots/screenshot-1.png',
				alt: 'Öffentlicher Buchungskalender mit Monatsansicht und Zeitfenstern',
				caption: 'Teile deinen Kalender und erhalte Buchungen und Zahlungen',
			},
			{
				src: '/screenshots/screenshot-3.png',
				alt: 'Statistik-Dashboard mit Umsätzen und monatlichem Verlauf',
				caption: 'Behalte deine Zahlen im Blick und sieh, was funktioniert',
			},
		],
	},
	audience: {
		title: 'Du bist kein Konzern. Warum sollte dein Buchungstool dich wie einen behandeln?',
		body:
			'Kartenleger:innen, Astrolog:innen, ganzheitliche Coaches und Fachleute für persönliche Weiterentwicklung: clickTarot Calendar deckt genau den Ablauf ab, den du als einzelne Beraterin mit Online- oder Präsenzterminen brauchst, ohne die Komplexität eines Tools, das für Unternehmensteams gebaut wurde, die du nie sein wirst.',
	},
	pricing: {
		eyebrow: 'Einfache Preise',
		title: 'Ein Plan, alle Funktionen',
		subtitle: 'Keine Funktion hinter einem teureren Plan versteckt, keine Kosten pro Nutzer: Jeder Plan enthält alles, was du wirklich brauchst. Wähl einfach die Zahlungsweise, die zu dir passt.',
		planName: 'clickTarot Calendar',
		priceNote: 'Alle Funktionen inklusive, Updates und Support bei jedem Plan',
		ctaLabel: 'Jetzt kaufen',
		included: [
			'Unbegrenzte Kalender für verschiedene Leistungen',
			'PayPal- und Stripe-Zahlungen',
			'Prepaid-Pakete und Rabattgutscheine',
			'Automatische Rechnungsstellung, auch für internationale Kunden',
			'Anpassbare automatische E-Mails',
			'Plugin in 4 Sprachen verfügbar',
			'Updates und Support inklusive',
		],
		guarantee: 'Geld-zurück-Garantie, direkt von Freemius beim Checkout abgewickelt.',
		recommendedLabel: 'Empfohlen',
		tiers: [
			{ label: 'Monatlich', price: '16,99 $', period: '/Monat', note: 'Monat für Monat zahlen, jederzeit kündbar.', highlighted: false },
			{ label: 'Jährlich', price: '180 $', period: '/Jahr', note: 'Bestes Preis-Leistungs-Verhältnis, entspricht 15 $/Monat.', highlighted: true },
			{ label: 'Lifetime', price: '1.499 $', period: 'einmalig', note: 'Einmal zahlen, für immer nutzen.', highlighted: false },
		],
	},
	faq: {
		title: 'Häufig gestellte Fragen',
		items: [
			{
				q: 'Muss ich programmieren können, um es zu nutzen?',
				a: 'Nein, Installation und Einrichtung sind für Personen ohne technische Kenntnisse konzipiert: nur wenige Klicks sind nötig.',
			},
			{
				q: 'Kann ich mehrere Leistungen zu unterschiedlichen Preisen anbieten?',
				a: 'Ja, du kannst für jede Leistung einen eigenen Kalender erstellen, jeweils mit eigener Dauer, eigenem Preis und eigenen Arbeitszeiten.',
			},
			{
				q: 'Wie werden die Zahlungen meiner Kunden abgewickelt?',
				a: 'Über PayPal und/oder Stripe, direkt mit deinem eigenen Konto verbunden: das Geld geht direkt an dich, das Plugin fasst es nie an.',
			},
			{
				q: 'Kann ich Pakete mit mehreren Sitzungen verkaufen?',
				a: 'Ja, du kannst Prepaid-Pakete mit mehreren Sitzungen erstellen: der Kunde bezahlt einmal und bucht seine Sitzungen, wann immer er möchte.',
			},
			{
				q: 'Passt sich das Rechnungsformular für Kund:innen aus verschiedenen Ländern an?',
				a: 'Ja, eine Länderauswahl passt die Felder automatisch an: die Standardfelder Steuernummer, Postleitzahl und Provinz für Italien, und eine USt-IdNr./Steuer-ID mit freiem Postleitzahlformat und Region für jedes andere Land. Das gesamte Plugin ist außerdem auf Deutsch, Englisch, Spanisch und Italienisch verfügbar.',
			},
			{
				q: 'Sind meine Daten und die meiner Kunden sicher?',
				a: 'Ja: alles bleibt ausschließlich auf deiner eigenen WordPress-Website gespeichert und wird niemals an Dritte weitergegeben.',
			},
		],
	},
	footer: {
		tagline:
			'Der Buchungskalender für Tarot-Beratungsprofis (und nicht nur) by Francesco <span style="color:var(--ct-primary-dark);font-weight:700">Guarino</span>.',
		freemiusNote: 'Verkauf und Rechnungsstellung werden von Freemius, unserem offiziellen Reseller, abgewickelt.',
		contactLabel: 'Kontakt',
		privacy: 'Datenschutz',
		terms: 'Nutzungsbedingungen',
		rights: 'Alle Rechte vorbehalten.',
	},
	legal: {
		privacyTitle: 'Datenschutzerklärung',
		privacyIntro:
			'Diese Seite beschreibt, wie clicktarotcalendar.com Daten verarbeitet, wenn du diese Vorstellungswebsite besuchst. Sie betrifft nicht die Datenverarbeitung durch das Plugin clickTarot Calendar auf deiner eigenen WordPress-Website; dafür bleibst du als Käufer und Installierender selbst verantwortlich.',
		privacyBody: [
			{
				heading: 'Hosting und technische Daten',
				body: 'Diese Website wird auf Cloudflare Pages gehostet. Cloudflare kann Standard-Techniklogs (IP-Adresse, User-Agent) zu Sicherheits- und Betriebszwecken erfassen.',
			},
			{
				heading: 'Statistiken',
				body: 'Wir nutzen Cloudflare Web Analytics, einen cookielosen Analysedienst ohne individuelle Besucherverfolgung: es ist kein Consent-Banner erforderlich.',
			},
			{
				heading: 'Zahlungen',
				body: 'Der Lizenzkauf erfolgt vollständig über die Plattform von Freemius, die als offizieller Wiederverkäufer (Merchant of Record) auftritt und Zahlungsdaten eigenständig gemäß ihrer eigenen Datenschutzerklärung verwaltet.',
			},
			{
				heading: 'Kontakt',
				body: 'Wenn du uns per E-Mail schreibst, verwenden wir deine Adresse ausschließlich, um dir zu antworten.',
			},
		],
		termsTitle: 'Nutzungsbedingungen',
		termsIntro: 'Mit der Nutzung von clicktarotcalendar.com akzeptierst du die auf dieser Seite beschriebenen Bedingungen.',
		termsBody: [
			{
				heading: 'Die Website',
				body: 'clicktarotcalendar.com ist die Vorstellungswebsite des WordPress-Plugins clickTarot Calendar. Die Inhalte dienen Informations- und Verkaufszwecken.',
			},
			{
				heading: 'Lizenzkauf',
				body: 'Kauf, Verlängerung und Abrechnung der Plugin-Lizenz werden von Freemius gemäß dessen eigenen Verkaufsbedingungen abgewickelt, die beim Checkout angezeigt werden.',
			},
			{
				heading: 'Geistiges Eigentum',
				body: 'Namen, Marken und Inhalte auf dieser Website gehören ihren jeweiligen Eigentümern. Genannte Namen von Drittprodukten (z. B. Calendly) werden zu beschreibenden/vergleichenden Zwecken verwendet.',
			},
			{
				heading: 'Haftungsbeschränkung',
				body: 'Diese Website wird "wie besehen" bereitgestellt. Für technischen Support zum Plugin nutze bitte die Kanäle, die nach dem Kauf im Freemius-Dashboard angegeben sind.',
			},
		],
	},
	about: {
		eyebrow: 'Über mich',
		title: 'Ich bin kein Unternehmen. Ich bin einer von euch, und ich hatte es satt, nach einem Tool zu suchen, das es nicht gab.',
		subtitle: 'clickTarot Calendar wurde nicht in einer Marketingabteilung entwickelt. Es entstand aus einem echten Problem, meinem, und aus einer Arbeit, die ich jeden Tag mache.',
		bioTitle: 'Wer ich bin',
		photoAlt: 'Francesco Guarino bei der Arbeit mit einem Tarot-de-Marseille-Kartendeck',
		photo2Alt: 'Francesco Guarino beim Überprüfen von Tarotkarten-Bedeutungen',
		bioBody: [
			'Ich heiße Francesco Guarino. Ich bin unabhängiger Forscher mit Schwerpunkt Sozialpsychologie und arbeite seit Jahren daran, eine Brücke zwischen Wissenschaft und Spiritualität zu bauen. Davor habe ich direkt bei Kartenmeistern die Tradition der Kartenherstellung studiert.',
			'Ich habe die <a href="https://scuolatdm.com/" target="_blank" rel="noopener">Scuola TdM</a> gegründet, Italiens führendes Ausbildungszentrum für das Tarot de Marseille, und die TdM-Methode entwickelt, ein Lern- und Interaktionsmodell für das Tarot de Marseille, das ich seit 2011 in Europa und Asien und seit 2017 auch in Amerika unterrichte.',
			'Ich bin Webmaster von <a href="https://www.tarocchi.blog/" target="_blank" rel="noopener">tarocchi.blog</a>, das als bester Tarot-Blog Italiens gilt, und habe <a href="https://www.clicktarot.net/" target="_blank" rel="noopener">clickTarot</a> gegründet, eine Community von einigen hundert Menschen, klein, aber echt, die ich persönlich betreue. Über meine Websites erreiche ich jedes Jahr anderthalb Millionen Tarot-Studierende, Liebhaber:innen und Fans. Ich habe außerdem den Dokumentarfilm „<a href="https://www.tarocchi.blog/oltre-il-tarot/" target="_blank" rel="noopener">Oltre il Tarot</a>" produziert und schreibe regelmäßig Bücher zu Psychologie und Spiritualität.',
		],
		searchTitle: 'Warum ich clickTarot Calendar gebaut habe',
		searchBody: [
			'Jahrelang habe ich nach einem Buchungstool gesucht, das zu meiner Arbeit passt: bezahlte Einzelberatungen, mit Kund:innen, die über die Zeit wiederkommen. Ich habe nie eines gefunden. Und ich sage es gleich vorweg, weil ich es nicht mag, wenn Leute übertreiben: Nicht die Tarot-Lesung selbst ist der eigentliche Engpass in diesem Beruf. Es sind die verpassten Nachrichten, die Termine, die man von Hand bestätigen muss, die Kundin, die auf eine Antwort wartet und in der Zwischenzeit woanders bucht.',
			'Ich habe Booknetic ausprobiert: Es hatte nicht die Funktionen, die ich wirklich brauchte. Ich bin zu Booknetic SaaS gewechselt, aber das war voller Fehler, und da die Entwickler mit kostenpflichtigen Add-ons Geld verdienen, schienen sie mehr daran interessiert, neue herauszubringen, als bestehende Probleme zu beheben. Ich bin sogar ihrer Discord-Community beigetreten, in der Hoffnung, Hilfe zu finden: Es war ein Friedhof voller Beschwerden, ohne Antworten.',
			'Ich habe TidyCal ausprobiert: Es warf ständig 404-Fehler auf meinen Kalendern, und der Kundensupport war praktisch nicht vorhanden, die gleiche Geschichte wie bei allen Produkten der „Sumo-Familie". Wer SendFox für seine E-Mails nutzt, weiß genau, wovon ich spreche.',
			'Ich hatte außerdem lange ein Plugin des CodePeople-Teams genutzt. Es funktionierte, bis es mit anderen wichtigen WordPress-Plugins in Konflikt geriet. Man baute mir eine individuelle Version, die aber nie wieder aktualisiert wurde, bis ein WordPress-Update sie endgültig unbrauchbar machte.',
			'An diesem Punkt habe ich aufgehört zu suchen. Ich habe mein Team zusammengerufen und es selbst gebaut. Danach habe ich etwas getan, das ich aus geschäftlicher Sicht vielleicht nicht hätte tun sollen: Ich habe es auch für dich geöffnet.',
		],
		whyTitle: 'Warum ich weiß, dass es funktioniert',
		whyBody: [
			'Nicht, weil dahinter ein Team professioneller Entwickler:innen steht: Das ist nicht der Fall, und ich werde nicht so tun, als wäre es anders. clickTarot Calendar funktioniert, weil ich es selbst bin, der es jeden Tag für die Beratungen in meinem eigenen, echten Geschäft nutzt, mit echten Kund:innen, die echtes Geld bezahlen.',
			'Genau deshalb liegt der Hauptfokus auf Updates und ständiger Verbesserung: Das ist kein Produkt, das ich einfach verkaufe und dann vergesse. Es ist das Tool, von dem meine eigene tägliche Arbeit abhängt, also muss es funktionieren, immer.',
		],
		linksTitle: 'Mehr erfahren',
		bookneticLinkLabel: 'Unser Vergleich mit Booknetic',
		tidycalLinkLabel: 'Unser Vergleich mit TidyCal',
		ctaTitle: 'Ich verkaufe dir keine Software. Ich gebe dir mein eigenes Werkzeug weiter.',
		ctaBody: 'Dasselbe, das ich jeden Tag für meine eigene Arbeit nutze, jetzt auch für deine verfügbar.',
	},
};

export default de;
