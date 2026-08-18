import type { FeatureDetailDictionary, FeatureUiText } from './types';

export const featureUi: FeatureUiText = {
	eyebrow: 'Funktion',
	painPointLabel: 'Das Problem',
	howItWorksLabel: 'So funktioniert es',
	benefitLabel: 'Warum das wichtig ist',
	otherFeaturesTitle: 'Weitere Funktionen entdecken',
	ctaTitle: 'Bereit, keine Zeit mehr mit Buchungs-Nachrichten hin und her zu verlieren?',
	ctaBody: 'Eine Lizenz, alle Funktionen inklusive, keine Kosten pro Arbeitsplatz.',
	backToHome: 'Zurück zur Startseite',
};

const de: FeatureDetailDictionary = {
	calendar: {
		title: 'Visueller Monatskalender',
		tagline: 'Schluss mit Nachrichten hin und her nur, um eine freie Stunde zu finden.',
		painPoint:
			'Buchungen per DM oder E-Mail bedeuten ein Dutzend Nachrichten hin und her, bevor sich überhaupt jemand auf einen Termin einigt — und die Hälfte fragt „hast du nächste Woche was frei?", obwohl du das schon zweimal beantwortet hast.',
		howItWorks:
			'Kund:innen sehen deine echte, live aktualisierte Verfügbarkeit als tatsächlichen Kalender: Arbeitstage, freie Tage, bereits belegte Termine. Sie wählen einen Tag, wählen eine Uhrzeit — fertig gebucht. Kein Hin und Her, keine Doppelbuchungen, keine manuelle Kontrolle deinerseits.',
		benefit:
			'Jede Stunde, die du nicht mit „hast du Dienstag Zeit?" verbringst, ist eine Stunde für Lesungen — oder für dich selbst. Das ist der eigentliche Nutzen eines Buchungstools: gewonnene Zeit, nicht nur ein hübscheres Formular.',
	},
	payments: {
		title: 'Integrierte Zahlungen',
		tagline: 'Bezahlt werden vor der Sitzung, nicht danach.',
		painPoint:
			'Einer Zahlung nach der Lesung hinterherzulaufen ist für beide Seiten unangenehm. Und für jede Buchung manuell einen Zahlungslink zu verschicken ist ein zusätzlicher Schritt, der vergessen — oder ignoriert — werden kann.',
		howItWorks:
			'PayPal und Stripe werden direkt mit deinem eigenen Konto verbunden. Der Kunde zahlt im Moment der Buchung, direkt über dasselbe Formular — keine separate Rechnung, kein separater Link, kein zusätzlicher Schritt.',
		benefit:
			'Das Geld landet auf deinem Konto, nicht bei clickTarot — wir fassen es nie an und halten es nie zurück. Du wirst pünktlich bezahlt, jedes Mal, ohne nachfragen zu müssen.',
	},
	invoicing: {
		title: 'Automatische Rechnungsdaten',
		tagline: 'Die Steuerdaten, die du brauchst, stehen schon in deinem Dashboard.',
		painPoint:
			'Eine Rechnung zu stellen bedeutet meist, dem Kunden im Nachhinein zu schreiben und nach Steuernummer und Rechnungsadresse zu fragen — und auf die Antwort zu warten, bevor du überhaupt abrechnen kannst.',
		howItWorks:
			'Steuernummer (bzw. USt-IdNr. außerhalb Italiens) und Rechnungsadresse sind Pflichtfelder im Buchungsformular selbst. Sobald der Termin bestätigt ist, steht alles, was du für die Rechnung brauchst, bereits bei der Buchung.',
		benefit:
			'Kein Hin und Her für den Papierkram. Wenn du das als echtes Business betreibst — und wer für Software bezahlt, tut das meist — sollte korrekte Rechnungsstellung nicht der Teil sein, der dich ausbremst.',
	},
	packages: {
		title: 'Vorausbezahlte Pakete',
		tagline: 'Verkaufe heute drei Sitzungen, lass die dritte im März gebucht werden.',
		painPoint:
			'Stammkund:innen sind die besten Kund:innen — aber ohne Paketsystem bedeutet jeder erneute Besuch, den kompletten Checkout noch einmal zu durchlaufen, ohne eine einfache Möglichkeit, Vorausbuchungen zu belohnen.',
		howItWorks:
			'Erstelle ein Paket — zum Beispiel 3 Sitzungen zu einem reduzierten Preis gegenüber Einzelbuchungen. Der Kunde zahlt einmal, das Guthaben ist an seine E-Mail-Adresse gebunden: Bei der nächsten Buchung erkennt das Plugin ihn automatisch und überspringt die Zahlung.',
		benefit:
			'Pakete verwandeln Einmalkund:innen in bereits eingenommenen, wiederkehrenden Umsatz — und geben deinen treuesten Kund:innen einen Grund, wiederzukommen, statt beim nächsten Mal jemand anderen auszuprobieren.',
	},
	coupons: {
		title: 'Rabattgutscheine',
		tagline: 'Starte eine echte Aktion, ohne beim Checkout im Kopf zu rechnen.',
		painPoint:
			'Manuelle Rabatte bedeuten, einen Preis von Hand anzupassen oder sich darauf zu verlassen, im Kopf zu behalten, wer 20 % Rabatt bekommt und wer nicht — nichts, was man in einem Notizbuch nachhalten möchte.',
		howItWorks:
			'Erstelle einen Code — prozentual oder als fester Betrag — mit optionalem Ablaufdatum und Nutzungslimit. Der Kunde gibt ihn im Buchungsformular ein und sieht den neuen Preis sofort, noch vor der Zahlung.',
		benefit:
			'Gutscheine sind eine der günstigsten Möglichkeiten, Social-Media-Follower in zahlende Kund:innen zu verwandeln. Da sie eingebaut sind, ist eine Instagram-Aktion in fünf Minuten eingerichtet, nicht in einem Nachmittag.',
	},
	reschedule: {
		title: 'Eigenständige Terminverschiebung & Stornierung',
		tagline: 'Lass Kund:innen ihren eigenen Termin verschieben — du bist nicht ihre Kalenderassistenz.',
		painPoint:
			'„Können wir Dienstag auf Donnerstag verschieben?" ist eine normale, nachvollziehbare Bitte — und gleichzeitig die fünfte Nachricht des Tages, die nichts mit einer echten Lesung zu tun hat.',
		howItWorks:
			'Jede Bestätigungs- und Erinnerungs-E-Mail enthält einen Verwaltungslink. Kund:innen können selbstständig auf einen anderen freien Termin verschieben oder stornieren, bis zu der von dir konfigurierten Mindestvorlaufzeit — danach werden sie gebeten, dich direkt zu kontaktieren.',
		benefit:
			'Die Anfragen, die früher deinen Tag unterbrochen haben, lösen sich jetzt von selbst. Du behältst volle Übersicht und Kontrolle — musst nur nicht mehr bei jeder kleinen Änderung selbst tätig werden.',
	},
	international: {
		title: 'Abrechnung für internationale Kund:innen',
		tagline: 'Ein Formular, korrekt für Kund:innen in Rom genauso wie in Berlin.',
		painPoint:
			'Rechnungsfelder, die nur für ein Land ausgelegt sind — italienische Steuernummer, italienisches Postleitzahlformat — funktionieren für Kund:innen im Ausland entweder nicht, oder erfassen still falsche, unbrauchbare Daten.',
		howItWorks:
			'Eine Länderauswahl im Buchungsformular passt die Felder automatisch an: Für Italien bleiben die Standardfelder Steuernummer, PLZ und Provinz; für jedes andere Land wechselt es zu optionaler USt-IdNr./Steuernummer, frei formatierbarer Postleitzahl und frei einzugebendem Bundesland oder Region.',
		benefit:
			'Du kannst überall Ja zu einem Kunden sagen, ohne Workaround. Wenn du eine internationale Praxis aufbaust — oder bereits hast — ist das der Unterschied zwischen einem Formular, das für alle funktioniert, und einem, das jeden außerhalb Italiens still abweist.',
	},
	multilingual: {
		title: 'Mehrsprachiges Plugin',
		tagline: 'Dein Buchungsformular spricht die Sprache deiner Kund:innen — wörtlich.',
		painPoint:
			'Ein Buchungsformular in einer Sprache, die der Kunde nicht liest, erzeugt genau in dem Moment Reibung, in dem du null Reibung willst: kurz vor der Zahlung.',
		howItWorks:
			'Buchungsformular, Bestätigungs-E-Mails und dein eigenes Admin-Dashboard sind alle übersetzt — Englisch, Spanisch, Deutsch und Italienisch — und wechseln automatisch je nach der auf deiner Website konfigurierten Sprache.',
		benefit:
			'Du brauchst keine separate Website, kein Übersetzungs-Plugin und keine Entwicklerin, um Kund:innen in mehreren Sprachen zu bedienen. Es ist bereits alles da.',
	},
};

export default de;
