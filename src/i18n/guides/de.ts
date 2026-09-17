import type { GuideDictionary, GuideUiText } from './types';

export const guideUi: GuideUiText = {
	eyebrow: 'Anleitung',
	otherGuidesTitle: 'Weitere Anleitungen',
	backToHome: 'Zurück zur Startseite',
	comparisonsTitle: 'Alle direkten Vergleiche im Detail',
};

const de: GuideDictionary = {
	setupBookings: {
		title: 'Online-Buchungen für Tarot-Beratungen in WordPress einrichten',
		tagline: 'Eine Schritt-für-Schritt-Anleitung, ganz ohne Programmierkenntnisse.',
		metaDescription:
			'Schritt-für-Schritt-Anleitung, um einen Online-Buchungskalender für Tarot-Beratungen auf deiner WordPress-Website einzurichten, von der Plugin-Wahl bis zur ersten Zahlung.',
		intro:
			'Wenn Kund:innen Beratungen noch per DM, E-Mail oder einem geteilten Kalenderlink buchen, verbringst du Zeit mit Terminorganisation, die eigentlich in die Beratungen selbst fließen sollte. So richtest du genau einen Buchungskalender auf deiner eigenen WordPress-Website ein, von der Installation bis zum ersten bezahlten Termin.',
		sections: [
			{
				heading: '1. Stelle sicher, dass du eine WordPress-Website hast, nicht nur Instagram',
				body: 'Ein Buchungskalender braucht einen Ort, an dem er lebt. Wenn du heute nur ein Instagram- oder TikTok-Profil hast, muss eine WordPress-Website nicht aufwendig sein: eine einzelne Seite mit einer Beschreibung deiner Beratungen plus dem Buchungskalender selbst reicht zum Start. Hast du schon eine WordPress-Website, kannst du die Buchung auf jeder bestehenden Seite ergänzen.',
			},
			{
				heading: '2. Wähle ein Buchungsplugin, das für Beratungen gebaut ist, keinen allgemeinen Terminplaner',
				body: 'Allgemeine Terminplanungs-Tools sind meist für Teams, Salons oder Kliniken gebaut. Achte auf drei Dinge, die eine Einzelpraxis wirklich braucht: eine Möglichkeit, die Sitzung direkt bei der Buchung zu berechnen, Felder zur Erfassung von Rechnungs-/Steuerdaten, und die Möglichkeit, Pakete mit mehreren Sitzungen zu verkaufen. clickTarot Calendar ist genau um diesen Arbeitsablauf herum gebaut und lässt sich kostenlos aus dem WordPress-Plugin-Verzeichnis installieren.',
			},
			{
				heading: '3. Plugin installieren und aktivieren',
				body: 'Gehe im WordPress-Dashboard zu Plugins → Installieren, suche das Plugin nach Namen, klicke auf Installieren und dann Aktivieren. Kein FTP, keine Codeänderungen.',
			},
			{
				heading: '4. Deinen ersten Kalender erstellen',
				body: 'Lege Dauer und Preis der Sitzung fest, deine Arbeitstage und -zeiten, und wie viel Vorlauf du vor einer Buchung brauchst. Bietest du mehr als eine Art von Sitzung an, zum Beispiel eine kurze Karte und eine ganze Stunde Beratung, erstelle für jede einen eigenen Kalender, damit Preis und Dauer klar bleiben.',
			},
			{
				heading: '5. Eine Zahlungsmethode verbinden',
				body: 'Verbinde PayPal (in der kostenlosen Version enthalten), damit Kund:innen im Moment der Buchung zahlen, nicht danach. Das allein nimmt den meisten der Unbeholfenheit, nach der Beratung um Zahlung zu bitten.',
			},
			{
				heading: '6. Den Buchungslink veröffentlichen',
				body: 'Setze den Shortcode oder den eigenen Buchungslink auf deine Website, und denselben Link in deine Instagram- oder TikTok-Bio. Von jetzt an kann jede Nachricht „Hast du Donnerstag Zeit?" einfach einen Link als Antwort bekommen statt eines Hin und Her.',
			},
			{
				heading: '7. Selbst testen, bevor du Kund:innen dorthin schickst',
				body: 'Buche eine Testsitzung, als wärst du eine Kundin, mit einer anderen E-Mail-Adresse, um genau zu sehen, was sie sehen werden: den Kalender, die Bestätigungs-E-Mail, den Zahlungsschritt. So findest du am schnellsten alles Verwirrende, bevor es eine echte Kundin tut.',
			},
		],
		ctaTitle: 'Bereit, das auf deiner eigenen Website einzurichten?',
		ctaBody: 'clickTarot Calendar installiert sich kostenlos von WordPress.org und führt dich Schritt für Schritt durch die Kalendereinrichtung.',
	},
	bestPlugins: {
		title: 'Die besten WordPress-Buchungsplugins für Kartenlegerinnen und Astrolog:innen (2026)',
		tagline: 'Was bei der Wahl wirklich zählt, und wie die echten Optionen abschneiden.',
		metaDescription:
			'Ein praktischer Vergleich von WordPress-Buchungsplugins für Kartenlegerinnen, Astrolog:innen und Psychics: worauf es wirklich ankommt, und wie die wichtigsten Optionen abschneiden.',
		intro:
			'Die meisten „beste Buchungsplugins"-Listen sind für Salons, Kliniken oder allgemeine Kleinunternehmen geschrieben und übergehen das, was für den Verkauf bezahlter Beratungen wirklich zählt: bei der Buchung bezahlt werden, richtige Rechnungsdaten erfassen, Pakete mit mehreren Sitzungen verkaufen. So prüfst du wirklich, und so schneiden die echten Optionen ab.',
		sections: [
			{
				heading: 'Worauf du vor der Wahl achten solltest',
				body: 'Vier Dinge zählen mehr als die genaue Oberfläche: Kann der Kunde bei der Buchung zahlen, nicht danach; erfasst es automatisch Steuernummer/USt-IdNr. und Rechnungsadresse, damit du wirklich Rechnungen stellen kannst; kannst du ein Paket mehrerer Sitzungen mit einer Zahlung verkaufen, statt jeden Besuch einzeln abzurechnen; und ist es für eine einzelne Praxis gebaut, sodass du nicht für Team-Funktionen zahlst, die du nie nutzt.',
			},
			{
				heading: 'Allgemeine Terminplanungs-Tools vs. für Beratungen gebaute Tools',
				body: 'Calendly, Acuity Scheduling, SimplyBook.me und TidyCal sind solide, bekannte Tools, aber keines wurde für den Verkauf bezahlter Einzelberatungen gebaut: Rechnungs-/Steuerfelder und Prepaid-Pakete fehlen entweder oder sind hinter teureren Team-Tarifen versperrt. Allgemeine WordPress-Buchungsplugins wie Booknetic haben dasselbe Problem: breite Funktionsumfänge für Salons und Agenturen, mit den Funktionen, die ein:e Einzelberater:in braucht, oft hinter einem Premium-Tarif gesperrt.',
			},
			{
				heading: 'Speziell für Kartenlegerinnen und Astrolog:innen gebaute Tools',
				body: 'Zwei Plugins zielen direkt auf diese Nische: Daily Tarot, in erster Linie ein Tool zum Veröffentlichen von Tarot-Inhalten und Lesungen, mit Buchung als einer von mehreren, noch frühen Funktionen; und Ozapp (früher Book Appointment Online PRO), ein allgemeines, mitarbeiterfähiges Terminsystem, das auf CodeCanyon verkauft wird, mit einer Landingpage für diese Nische, zuerst für Teams statt für eine einzelne Praxis gebaut. clickTarot Calendar ist dasjenige, das von Grund auf um den Arbeitsablauf einer einzelnen Beraterin herum gebaut ist, mit einer echten kostenlosen Version auf WordPress.org.',
			},
		],
		ctaTitle: 'Alle direkten Vergleiche im Detail ansehen',
		ctaBody: 'Jede Option oben hat einen detaillierten, funktionsweisen Vergleich mit clickTarot Calendar.',
		showComparisons: true,
	},
};

export default de;
