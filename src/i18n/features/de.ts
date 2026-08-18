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
		metaDescription:
			'So lässt der visuelle Monatskalender von clickTarot Calendar Kund:innen selbstständig buchen — ganz ohne Nachrichten hin und her.',
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
		metaDescription:
			'PayPal- und Stripe-Zahlungen direkt in clickTarot Calendar integriert: Kund:innen zahlen bei der Buchung, das Geld geht auf dein Konto.',
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
		metaDescription:
			'clickTarot Calendar erfasst Steuernummer/USt-IdNr. und Adresse automatisch bei der Buchung — Rechnungsstellung ohne Mehraufwand.',
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
		metaDescription:
			'Verkaufe Prepaid-Pakete mit mehreren Sitzungen über clickTarot Calendar: eine Zahlung, Kund:innen buchen ihre Termine flexibel.',
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
		metaDescription:
			'Erstelle prozentuale oder feste Rabattgutscheine in clickTarot Calendar, bereit für deine nächste Social-Media-Aktion.',
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
		metaDescription:
			'Kund:innen verschieben oder stornieren ihren Termin selbst über den E-Mail-Link — clickTarot Calendar übernimmt das für dich.',
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
		metaDescription:
			'clickTarot Calendar passt die Rechnungsfelder für Kund:innen außerhalb Italiens automatisch an: USt-IdNr., freie Postleitzahl und mehr.',
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
		metaDescription:
			'Buchungsformular, E-Mails und Admin-Dashboard von clickTarot Calendar sind auf Englisch, Spanisch, Deutsch und Italienisch verfügbar.',
		painPoint:
			'Ein Buchungsformular in einer Sprache, die der Kunde nicht liest, erzeugt genau in dem Moment Reibung, in dem du null Reibung willst: kurz vor der Zahlung.',
		howItWorks:
			'Buchungsformular, Bestätigungs-E-Mails und dein eigenes Admin-Dashboard sind alle übersetzt — Englisch, Spanisch, Deutsch und Italienisch — und wechseln automatisch je nach der auf deiner Website konfigurierten Sprache.',
		benefit:
			'Du brauchst keine separate Website, kein Übersetzungs-Plugin und keine Entwicklerin, um Kund:innen in mehreren Sprachen zu bedienen. Es ist bereits alles da.',
	},
	availability: {
		title: 'Flexible Verfügbarkeit',
		tagline: 'Blockiere ganze Tage oder einzelne Zeitfenster, wann immer du willst.',
		metaDescription:
			'Mit clickTarot Calendar blockierst du ganze Tage oder einzelne Zeitfenster in Sekunden, damit dein Kalender immer deine echte Verfügbarkeit zeigt.',
		painPoint:
			'Deine Verfügbarkeit sieht nicht jede Woche gleich aus — ein Retreat, ein familiärer Notfall, ein bereits voller Dienstag. Ein Buchungstool, das nur feste wöchentliche Zeiten erlaubt, zwingt dich entweder dazu, Buchungen abzulehnen, die du nicht einhalten kannst, oder Kund:innen manuell anzuschreiben, um abzusagen.',
		howItWorks:
			'Du legst deine regulären wöchentlichen Arbeitszeiten einmal fest und blockierst dann jeden einzelnen Tag oder Zeitraum, sobald sich etwas ändert — ein Arzttermin, ein Workshop, eine freie Woche. Blockierte Zeit verschwindet einfach aus dem, was Kund:innen buchen können, ganz ohne separate Stornierung.',
		benefit:
			'Du behältst die Kontrolle über deine eigene Zeit, ohne zur Vollzeit-Verwalterin deines Kalenders zu werden. Blockiere, was du blockieren musst, in wenigen Klicks, und widme dich wieder deiner eigentlichen Arbeit.',
	},
	notifications: {
		title: 'Automatische E-Mail-Benachrichtigungen',
		tagline: 'Bestätigungs- und Erinnerungs-E-Mails werden automatisch verschickt, komplett individuell anpassbar.',
		metaDescription:
			'clickTarot Calendar verschickt Bestätigungs- und Erinnerungs-E-Mails automatisch, mit Text, den du selbst schreibst — keine generischen, roboterhaften Nachrichten.',
		painPoint:
			'Kund:innen vergessen Termine. Ohne Erinnerung bedeutet eine vergessene Buchung eine verlorene Zeitschiene und ein unangenehmes Gespräch darüber, ob sie trotzdem berechnet wird. Die meisten Buchungstools lassen Erinnerungen aber entweder ganz weg oder verschicken E-Mails, die so generisch klingen, dass sie nicht nach dir klingen.',
		howItWorks:
			'Jede Buchung löst automatisch eine Bestätigungs-E-Mail an den Kunden und eine Benachrichtigung an dich aus, und du kannst eine Erinnerungs-E-Mail aktivieren, die eine einstellbare Anzahl Stunden vor dem Termin verschickt wird. Alle drei sind vollständig editierbar — du schreibst sie mit deinen eigenen Worten, nicht mit einer Vorlage.',
		benefit:
			'Weniger versäumte Termine, weniger Last-Minute-Nachrichten wie „Moment, wann war noch mal mein Termin?", und jede E-Mail, die eine Kundin erhält, klingt wirklich nach dir — nicht nach einer Software.',
	},
	socialLink: {
		title: 'Eigener Buchungslink',
		tagline: 'Ein öffentlicher Buchungslink, bereit für deine Instagram- oder TikTok-Bio — ohne zusätzliche Seite.',
		metaDescription:
			'Jeder Service in clickTarot Calendar bekommt einen eigenen öffentlichen Buchungslink, bereit für deine Instagram- oder TikTok-Bio.',
		painPoint:
			'Die meisten deiner Buchungen starten wahrscheinlich in den sozialen Medien, nicht auf der Startseite deiner Website. Aber jemanden, der dir folgt, auf eine allgemeine Kontaktseite zu schicken — wo diese Person dann den richtigen Service finden, scrollen und herausfinden muss, was zu tun ist — kostet dich Leute, die spontan gebucht hätten.',
		howItWorks:
			'Jeder Kalender, den du erstellst, bekommt automatisch seinen eigenen öffentlichen Buchungslink, ganz ohne separate Seite zu gestalten oder zu veröffentlichen. Setz ihn direkt in deine Instagram- oder TikTok-Bio oder teile ihn per DM — die Person landet exakt auf dem Buchungsformular für diesen einen Service.',
		benefit:
			'Der Abstand zwischen „jemand sieht deinen Content" und „jemand bucht eine Sitzung" wird so kurz wie möglich — genau dann, wenn das Interesse am größten ist, direkt nachdem dich jemand entdeckt hat.',
	},
	statistics: {
		title: 'Umsatzstatistiken',
		tagline: 'Sieh direkt im Dashboard, was du jeden Monat verdienst und welcher Service am besten läuft.',
		metaDescription:
			'Verfolge monatlichen Umsatz, bestätigte Buchungen und den erfolgreichsten Service direkt im clickTarot Calendar Dashboard.',
		painPoint:
			'Wenn du Beratungen als echtes Business betreibst, musst du wissen, ob es wirklich funktioniert — welcher Service deine Zeit wert ist, ob dieser Monat besser lief als der letzte, ob sich eine Gutschein-Aktion gelohnt hat. Das aus einer von Hand gepflegten Tabelle herauszuholen, ist eine Aufgabe, die die meisten Menschen einfach... nicht machen.',
		howItWorks:
			'Jede bestätigte Buchung und Zahlung wird automatisch erfasst. Dein Dashboard zeigt Gesamtumsatz, Umsatz aus Einzelsitzungen gegenüber Paketen, bestätigte Buchungen, deine Stornoquote, einen Monat-für-Monat-Trend und eine Aufschlüsselung nach einzelnem Kalender — ganz ohne manuelle Buchhaltung.',
		benefit:
			'Du kannst echte Entscheidungen treffen — einen Preis erhöhen, einen schwach laufenden Service einstellen, auf das setzen, was funktioniert — basierend auf echten Zahlen statt auf einem Bauchgefühl. Das ist mehr wert, als das Plugin selbst kostet.',
	},
};

export default de;
