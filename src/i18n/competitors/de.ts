import type { CompetitorDictionary } from './types';

const de: CompetitorDictionary = {
	calendly: {
		eyebrow: 'Vergleich',
		title: 'clickTarot Calendar vs Calendly',
		subtitle:
			'Calendly ist ein gutes generisches Tool für Meetings aller Art. clickTarot Calendar ist speziell für alle gebaut, die kostenpflichtige Beratungen verkaufen.',
		colFeature: 'Funktion',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Calendly',
		rows: [
			{ feature: 'Erfassung der Rechnungsdaten (Steuernummer/USt-IdNr., Adresse)', clicktarot: 'Automatisch, ins Formular integriert', competitor: 'Nicht vorgesehen' },
			{ feature: 'Prepaid-Pakete mit mehreren Sitzungen', clicktarot: 'Enthalten', competitor: 'Nicht verfügbar' },
			{ feature: 'Farbe & Branding des Formulars', clicktarot: 'Mit einem Klick anpassbar', competitor: 'Nur in teureren Tarifen' },
			{ feature: 'Gemacht für', clicktarot: 'Einzelne Berater mit Kundenterminen', competitor: 'Teams und Unternehmen jeder Art' },
			{ feature: 'Wo es läuft', clicktarot: 'Auf deiner eigenen WordPress-Website, deine Daten bleiben bei dir', competitor: 'Externe Plattform' },
			{ feature: 'Preismodell', clicktarot: 'Einzellizenz, keine Kosten pro Nutzer', competitor: 'Monatsabo, oft pro Sitzplatz' },
		],
		painPointsTitle: 'Was Einzelunternehmer:innen bei Calendly erleben',
		painPointsIntro: 'Calendly ist ein solides Tool; es ist nur nicht für jemanden gebaut, der kostenpflichtige Beratungen als Einzelperson verkauft.',
		painPoints: [
			'Kostenlose und Standard-Tarife begrenzen dich auf wenige Terminarten und zeigen weiterhin das Branding von Calendly auf deiner Buchungsseite; es zu entfernen bedeutet einen Wechsel zu einem Tarif, der für Teams gebaut ist, nicht für Einzelunternehmer:innen.',
			'Es gibt kein natives Feld für Steuernummer, USt-IdNr. oder Rechnungsadresse, und keine Möglichkeit, aus einer Buchung eine Rechnung zu erzeugen; dafür bräuchtest du ein separates Rechnungstool und müsstest die Daten manuell übertragen.',
			'Ein Paket aus mehreren Sitzungen mit einer einzigen Zahlung zu verkaufen wird nicht unterstützt: Jede Buchung ist eine eigene Transaktion, sodass ein wiederkehrender Kunde, und du bei der Rechnungsstellung, jeden Termin einzeln abwickelt.',
		],
		ctaTitle: 'Bereit, etwas auszuprobieren, das genau für dich gemacht ist?',
		ctaBody: 'Installiere clickTarot Calendar in wenigen Minuten auf deiner WordPress-Website, ganz ohne technische Kenntnisse.',
		faq: [
			{
				q: 'Ist clickTarot Calendar für eine einzelne Beraterin wirklich günstiger als Calendly?',
				a: 'clickTarot Calendar ist ein einziger Plan mit allen Funktionen inklusive, egal wie du bezahlst: monatlich, jährlich oder als einmaligen Lifetime-Kauf. Calendlys kostenpflichtige Tarife werden monatlich abgerechnet und stecken Funktionen wie individuelles Branding hinter teureren Stufen, sodass sich das für eine Einzelperson über die Zeit meist auf mehr summiert als der Jahres- oder Lifetime-Plan von clickTarot Calendar.',
			},
			{
				q: 'Kann ich bei der Buchung die Steuernummer oder USt-IdNr. des Kunden erfassen, so wie bei clickTarot Calendar?',
				a: 'Nicht nativ. Calendly hat kein eingebautes Rechnungsfeld, du bräuchtest also ein separates Formular oder eine manuelle Nachfrage, um diese Daten zu erfassen, bevor du eine Rechnung stellen kannst.',
			},
		],
		otherComparisonsTitle: 'So schneiden wir im Vergleich zu anderen Terminplanungs-Tools ab',
	},
	acuity: {
		eyebrow: 'Vergleich',
		title: 'clickTarot Calendar vs Acuity Scheduling',
		subtitle:
			'Acuity Scheduling ist ein ausgereiftes, gut bewertetes Terminplanungs-Tool. clickTarot Calendar ist speziell für eine einzelne Beraterin gebaut, zu einem einzigen Festpreis.',
		colFeature: 'Funktion',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Acuity Scheduling',
		rows: [
			{ feature: 'Erfassung der Rechnungsdaten (Steuernummer/USt-IdNr., Adresse)', clicktarot: 'Automatisch, ins Formular integriert', competitor: 'Kein eigenes Feld; du müsstest dir selbst ein generisches Formular bauen' },
			{ feature: 'Prepaid-Pakete mit mehreren Sitzungen', clicktarot: 'Enthalten', competitor: 'Erfordert den Standard-Tarif (ca. 27 $/Monat bei jährlicher Abrechnung) oder höher' },
			{ feature: 'Farbe & Branding des Formulars', clicktarot: 'Mit einem Klick anpassbar', competitor: 'Acuitys eigenes Branding bleibt bis zum Premium-Tarif (ca. 49 $/Monat bei jährlicher Abrechnung)' },
			{ feature: 'Gemacht für', clicktarot: 'Einzelne Berater mit Kundenterminen', competitor: 'Von Einzelpersonen bis Unternehmen mit mehreren Standorten, gestaffelt nach Anzahl der Kalender' },
			{ feature: 'Wo es läuft', clicktarot: 'Auf deiner eigenen WordPress-Website, deine Daten bleiben bei dir', competitor: 'Externe Plattform' },
			{ feature: 'Preismodell', clicktarot: 'Einzellizenz, keine Kosten pro Nutzer', competitor: 'Monatsabo, der Preis-Tarif bestimmt, welche Funktionen du bekommst' },
		],
		painPointsTitle: 'Was Einzelunternehmer:innen bei Acuity Scheduling erleben',
		painPointsIntro: 'Acuity ist ein wirklich gut gebautes Tool mit insgesamt starken Bewertungen, aber ein paar Dinge solltest du kennen, bevor du einen Tarif wählst.',
		painPoints: [
			'Um überhaupt Pakete mit mehreren Sitzungen zu bekommen, brauchst du den Standard-Tarif, ca. 27 $/Monat bei jährlicher Abrechnung; der Einstiegstarif Starter enthält sie nicht.',
			'Acuitys eigenes Branding von deiner Buchungsseite zu entfernen erfordert den obersten Premium-Tarif, ca. 49 $/Monat bei jährlicher Abrechnung.',
			'Capterra- und G2-Bewertungen für Acuity sind insgesamt hoch (4,7-4,8/5), doch wiederkehrende schlechtere Bewertungen nennen eine steile, „technische" Lernkurve und einen Support, der nicht immer zur Qualität des Produkts passt.',
			'Auf Trustpilot sieht das Bild auffällig anders aus; etwa 1,5/5, mit Bewertungen, die Buchungsfehler und Paketcodes beschreiben, die Sitzungslimits nicht korrekt durchsetzen. Ein Unterschied, den man kennen sollte, auch wenn er allein nicht die ganze Geschichte erzählt.',
		],
		ctaTitle: 'Bereit, etwas auszuprobieren, das genau für dich gemacht ist?',
		ctaBody: 'Installiere clickTarot Calendar in wenigen Minuten auf deiner WordPress-Website, ganz ohne technische Kenntnisse.',
		faq: [
			{
				q: 'Kann ich bei Acuity Scheduling im günstigsten Tarif Prepaid-Pakete verkaufen?',
				a: 'Nein, Pakete mit mehreren Sitzungen sind erst ab dem Standard-Tarif verfügbar, ca. 27 $/Monat bei jährlicher Abrechnung. clickTarot Calendar enthält Prepaid-Pakete in der Einzellizenz, ohne Upgrade nötig.',
			},
			{
				q: 'Warum sehen Acuitys Bewertungen auf Trustpilot so anders aus als auf G2 oder Capterra?',
				a: 'Acuity erreicht hohe Werte auf G2 (ca. 4,7/5) und Capterra (ca. 4,8/5), liegt aber bei Trustpilot bei etwa 1,5/5, wo Bewertungen von Buchungsfehlern und nicht korrekt durchgesetzten Paketlimits berichten. Es lohnt sich, vor der Entscheidung selbst ein paar Bewertungen auf jeder Plattform zu lesen; lieber mit offenen Augen entscheiden, als uns einfach zu glauben.',
			},
		],
		otherComparisonsTitle: 'So schneiden wir im Vergleich zu anderen Terminplanungs-Tools ab',
	},
	simplybook: {
		eyebrow: 'Vergleich',
		title: 'clickTarot Calendar vs SimplyBook.me',
		subtitle:
			'SimplyBook.me deckt über einen Marktplatz kostenpflichtiger Zusatzfunktionen viele Geschäftsarten ab. clickTarot Calendar deckt genau das ab, was eine Beraterin braucht; von Anfang an.',
		colFeature: 'Funktion',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'SimplyBook.me',
		rows: [
			{ feature: 'Erfassung der Rechnungsdaten (Steuernummer/USt-IdNr., Adresse)', clicktarot: 'Automatisch, ins Formular integriert', competitor: 'Nicht nativ; würde einen deiner begrenzten kostenpflichtigen „Custom Feature"-Plätze für ein generisches Formular belegen' },
			{ feature: 'Prepaid-Pakete mit mehreren Sitzungen', clicktarot: 'Enthalten', competitor: 'Eine von begrenzt vielen kostenpflichtigen „Custom Features" pro Tarif; konkurriert mit anderen Funktionen um diesen Platz' },
			{ feature: 'Farbe & Branding des Formulars', clicktarot: 'Mit einem Klick anpassbar', competitor: 'Vollständiges White-Label-Branding ist dem Premium-Tarif (ca. 50 €/Monat) oder höher vorbehalten' },
			{ feature: 'Gemacht für', clicktarot: 'Einzelne Berater mit Kundenterminen', competitor: 'Allgemeine Terminplanung für viele Geschäftsarten, aufgebaut um einen Funktions-Marktplatz' },
			{ feature: 'Wo es läuft', clicktarot: 'Auf deiner eigenen WordPress-Website, deine Daten bleiben bei dir', competitor: 'Externe Plattform' },
			{ feature: 'Preismodell', clicktarot: 'Einzellizenz, keine Kosten pro Nutzer', competitor: 'Monatstarif nach Buchungen, Anzahl der Anbieter und Anzahl aktiver kostenpflichtiger Add-ons' },
		],
		painPointsTitle: 'Was Einzelunternehmer:innen bei SimplyBook.me erleben',
		painPointsIntro: 'SimplyBook.me bietet über seinen Add-on-Marktplatz enorm viel; der Kompromiss ist, dass fast nichts standardmäßig enthalten ist.',
		painPoints: [
			'Fast jede Funktion, die für eine Beratungspraxis wichtig ist (individuelle Aufnahmefelder, Pakete, Gutscheine) ist nicht standardmäßig enthalten: Es handelt sich um „Custom Features" aus einem Marktplatz mit Dutzenden kostenpflichtiger Add-ons, und jeder Tarif begrenzt, wie viele du gleichzeitig aktivieren kannst (nur 1 im kostenlosen Tarif, 3 im Basic-Tarif).',
			'Das bedeutet, dass du dich in den Einstiegstarifen oft zwischen Paketen und Gutscheinen entscheiden musst, statt beides zu haben; ein Kompromiss, den clickTarot Calendar nicht erzwingt, da Pakete und Gutscheine von Anfang an beide enthalten sind.',
			'G2- und Capterra-Bewertungen (darunter eine Person mit über 15 Jahren UX-/Entwicklungserfahrung) beschreiben die Ersteinrichtung als verwirrend, gerade weil schwer zu erkennen ist, welche der vielen Zusatzfunktionen tatsächlich aktiv sind.',
			'Vollständiges White-Label-Branding (Entfernen des SimplyBook.me-Namens) ist auf den Premium-Tarif und höher beschränkt, ca. 50 €/Monat bei jährlicher Abrechnung.',
		],
		ctaTitle: 'Bereit, etwas auszuprobieren, das genau für dich gemacht ist?',
		ctaBody: 'Installiere clickTarot Calendar in wenigen Minuten auf deiner WordPress-Website, ganz ohne technische Kenntnisse.',
		faq: [
			{
				q: 'Kann ich im kostenlosen Tarif von SimplyBook.me gleichzeitig Prepaid-Pakete verkaufen und Rabattgutscheine anbieten?',
				a: 'Nicht ohne Weiteres, der kostenlose Tarif erlaubt nur 1 aktives „Custom Feature", und sowohl Pakete als auch Gutscheine sind separate kostenpflichtige Add-ons, sodass du dich meist für eines entscheiden musst. clickTarot Calendar enthält beides in der Einzellizenz.',
			},
			{
				q: 'Ist der Preis von SimplyBook.me im Voraus leicht vorherzusagen?',
				a: 'Nicht ganz, die monatlichen Kosten hängen von deinem Buchungsvolumen, der Anzahl der Anbieter und der Anzahl aktivierter kostenpflichtiger Zusatzfunktionen ab, sodass der Endpreis höher ausfallen kann als der beworbene Startpreis. clickTarot Calendar ist ein fester Plan (monatlich, jährlich oder lebenslang) zum gleichen Preis, unabhängig davon, wie viele Buchungen du erhältst.',
			},
		],
		otherComparisonsTitle: 'So schneiden wir im Vergleich zu anderen Terminplanungs-Tools ab',
	},
	tidycal: {
		eyebrow: 'Vergleich',
		title: 'clickTarot Calendar vs TidyCal',
		subtitle:
			'TidyCal ist ein wirklich erschwingliches, gut bewertetes Terminplanungs-Tool. clickTarot Calendar ist speziell für eine einzelne Beraterin gebaut, direkt auf deiner eigenen WordPress-Website.',
		colFeature: 'Funktion',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'TidyCal',
		rows: [
			{ feature: 'Erfassung der Rechnungsdaten (Steuernummer/USt-IdNr., Adresse)', clicktarot: 'Automatisch, ins Formular integriert', competitor: 'Kein eigenes Feld; für eine Rechnung braucht es eine separate Integration' },
			{ feature: 'Prepaid-Pakete mit mehreren Sitzungen', clicktarot: 'Enthalten', competitor: 'Auch im kostenlosen Tarif enthalten' },
			{ feature: 'Branding des Formulars', clicktarot: 'Mit einem Klick anpassbar', competitor: 'TidyCals eigenes Branding bleibt selbst in kostenpflichtigen Tarifen auf der Seite sichtbar' },
			{ feature: 'Mehrwährungsunterstützung', clicktarot: 'Rechnungsfelder passen sich automatisch nach Land an', competitor: 'Nur eine Währung gleichzeitig aktiv' },
			{ feature: 'Gemacht für', clicktarot: 'Einzelne Berater mit Kundenterminen', competitor: 'Allgemeine Terminplanung; Team-/Agentur-Tarife skalieren laut Bewertungen nicht wie beworben' },
			{ feature: 'Wo es läuft', clicktarot: 'Auf deiner eigenen WordPress-Website, deine Daten bleiben bei dir', competitor: 'Externe Plattform' },
			{ feature: 'Preismodell', clicktarot: 'Einzellizenz, keine Kosten pro Nutzer', competitor: 'Einmalige Lifetime-Tarife oder Monatsabo; laut Bewertungen braucht jedes weitere Teammitglied eine eigene kostenpflichtige Lizenz' },
		],
		painPointsTitle: 'Was Einzelunternehmer:innen bei TidyCal erleben',
		painPointsIntro: 'TidyCal ist fair bepreist und spart nicht an Zahlungen oder Paketen wie manche andere Tools, aber ein paar echte Einschränkungen solltest du kennen, bevor du dich entscheidest.',
		painPoints: [
			'Es gibt kein eigenes Feld für Steuernummer, USt-IdNr. oder Rechnungsadresse und keine integrierte Möglichkeit, eine Rechnung zu erstellen; dafür bräuchtest du eine separate Integration.',
			'TidyCals eigenes Branding bleibt auf deiner Buchungsseite sichtbar, selbst in kostenpflichtigen Tarifen; Capterra-Bewertungen nennen explizit das bestehen bleibende Logo, das teils die Oberfläche stört.',
			'Es ist immer nur eine Währung gleichzeitig aktiv, was Bewertungen als echte Einschränkung nennen, wenn du Buchungen von Kund:innen mit unterschiedlichen Zahlungswährungen erhältst.',
			'Der Tarifname „Agency" legt nahe, dass er für Teams gemacht ist, aber Bewertungen berichten, dass jedes zusätzliche Teammitglied eine eigene kostenpflichtige Lizenz braucht; eine Kostenfalle, die erst bei der Nutzung sichtbar wird.',
		],
		ctaTitle: 'Bereit, etwas auszuprobieren, das genau für dich gemacht ist?',
		ctaBody: 'Installiere clickTarot Calendar in wenigen Minuten auf deiner WordPress-Website, ganz ohne technische Kenntnisse.',
		faq: [
			{
				q: 'Ist TidyCal wirklich eine einmalige Zahlung statt eines Abos, anders als clickTarot Calendar?',
				a: 'Tatsächlich bietet auch clickTarot Calendar eine einmalige Lifetime-Option, neben monatlicher und jährlicher Abrechnung, du bist also in keinem der beiden Fälle an ein Abo gebunden. Der eigentliche Unterschied liegt im Funktionsumfang: clickTarot Calendar hat die automatische Erfassung von Steuernummer/USt-IdNr. und Rechnungsdaten von Anfang an in jedem Plan integriert, etwas, das TidyCal nicht nativ bietet.',
			},
			{
				q: 'Erfasst TidyCal bei der Buchung Steuernummer oder USt-IdNr. des Kunden, so wie clickTarot Calendar?',
				a: 'Nein, TidyCal hat kein eingebautes Rechnungs-/Steuerfeld, du müsstest also ein separates Rechnungstool anbinden und diese Daten manuell erfassen, bevor du korrekt abrechnen kannst.',
			},
		],
		otherComparisonsTitle: 'So schneiden wir im Vergleich zu anderen Terminplanungs-Tools ab',
	},
	booknetic: {
		eyebrow: 'Vergleich',
		title: 'clickTarot Calendar vs Booknetic',
		subtitle:
			'Booknetic ist ein allgemeines WordPress-Buchungsplugin, das von Salons, Kliniken und Agenturen genutzt wird. clickTarot Calendar ist speziell um den Arbeitsablauf einer einzelnen Beraterin herum gebaut.',
		colFeature: 'Funktion',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Booknetic',
		rows: [
			{ feature: 'Erfassung der Rechnungsdaten (Steuernummer/USt-IdNr., Adresse)', clicktarot: 'Automatisch, in der Einzellizenz enthalten', competitor: 'Nur im Premium-Tarif (149 $/Jahr oder 599 $ lebenslang); nicht im Basic- oder Standard-Tarif' },
			{ feature: 'Rabattgutscheine', clicktarot: 'Enthalten', competitor: 'Ebenfalls nur im Premium-Tarif; nicht in den günstigeren Tarifen' },
			{ feature: 'Gemacht für', clicktarot: 'Einzelne Berater mit Kundenterminen', competitor: 'Allgemein, branchenübergreifend (Salons, Kliniken, Agenturen)' },
			{ feature: 'Wo es läuft', clicktarot: 'Auf deiner eigenen WordPress-Website', competitor: 'Ebenfalls auf deiner eigenen WordPress-Website; gleiches Hosting-Modell wie clickTarot Calendar' },
			{ feature: 'Preismodell', clicktarot: 'Ein Plan, alle Funktionen enthalten: monatlich, jährlich oder einmalig lebenslang', competitor: 'Gestaffelte Preise, die günstigsten Tarife (45-99 $/Jahr) schließen Funktionen aus, die du wahrscheinlich brauchst' },
			{ feature: 'Support', clicktarot: 'Im Lizenzpreis enthalten', competitor: '6-12 Monate enthalten je nach Kaufkanal, danach kostenpflichtige Verlängerung' },
		],
		painPointsTitle: 'Was Einzelunternehmer:innen bei Booknetic erleben',
		painPointsIntro: 'Booknetic verkauft sich gut und erzielt hohe Bewertungen im eigenen Marktplatz-Listing, aber ein paar Dinge solltest du kennen, bevor du einen Tarif wählst.',
		painPoints: [
			'Rechnungs-/Steuerfelder und Rabattgutscheine sind in den günstigeren Tarifen nicht enthalten; sie sind hinter dem Premium-Tarif (149 $/Jahr oder 599 $ lebenslang) gesperrt, sodass der beworbene Einstiegspreis von 45-99 $/Jahr nicht das enthält, was eine Beratungspraxis wahrscheinlich braucht.',
			'Eine Capterra-Bewertung eines Spa-Unternehmens berichtet, dass das System überlappende, bezahlte Doppelbuchungen für dieselbe Ressource auf einer Live-Website akzeptiert hat, bei langsamem, generischem Support selbst nach Markierung als dringend.',
			'Bewertungen beschreiben, dass „zahlreiche teure Add-ons für volle Funktionalität" nötig sind, eine Person berichtete von über 520 $ Gesamtausgaben und nannte das Preis-Leistungs-Verhältnis „schlecht".',
			'Support ist je nach Kaufkanal für 6 bis 12 Monate enthalten, danach wird eine kostenpflichtige Verlängerung fällig; ein anderes Modell als eine Lizenz mit laufendem Support und Updates.',
		],
		ctaTitle: 'Bereit, etwas auszuprobieren, das genau für dich gemacht ist?',
		ctaBody: 'Installiere clickTarot Calendar in wenigen Minuten auf deiner WordPress-Website, ganz ohne technische Kenntnisse.',
		faq: [
			{
				q: 'Enthält Booknetic Rechnungsstellung und die Erfassung von Steuerdaten wie clickTarot Calendar?',
				a: 'Nur im Premium-Tarif (149 $/Jahr oder 599 $ lebenslang); die günstigeren Basic- und Standard-Tarife enthalten es nicht. clickTarot Calendar enthält die automatische Erfassung von Steuernummer/USt-IdNr. und Adresse in der Einzellizenz, ohne Upgrade nötig.',
			},
			{
				q: 'Ist Booknetic speziell für Beraterinnen mit Kundenterminen gebaut, so wie clickTarot Calendar?',
				a: 'Nein, Booknetic ist ein allgemeines Buchungsplugin für Salons, Kliniken, Agenturen und viele andere Geschäftsarten. clickTarot Calendar ist speziell um den Arbeitsablauf einer einzelnen Beraterin herum gebaut: Kartenlegerin, Astrologin, Coach.',
			},
		],
		otherComparisonsTitle: 'So schneiden wir im Vergleich zu anderen Terminplanungs-Tools ab',
	},
	dailytarot: {
		eyebrow: 'Vergleich',
		title: 'clickTarot Calendar vs Daily Tarot',
		subtitle:
			'Daily Tarot ist in erster Linie ein Tool zum Veröffentlichen von Tarot-Lesungen, Decks und Legesystemen; Buchung ist eine von mehreren, noch frühen Funktionen. clickTarot Calendar ist von Grund auf für Terminbuchung und Bezahlung von Beratungen gebaut.',
		colFeature: 'Funktion',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Daily Tarot',
		rows: [
			{ feature: 'Hauptzweck', clicktarot: 'Terminbuchung und Bezahlung von Beratungen', competitor: 'Veröffentlichen von Tarot-Lesungen, Decks und Legesystemen; Buchung ist ein Nebenmodul' },
			{ feature: 'Bearbeitbarer Kalenderzeitraum (kostenlose Version)', clicktarot: 'Unbegrenzt, jedes zukünftige Datum', competitor: 'Kostenlose Version erlaubt nur die Bearbeitung von heute und morgen; weitere Termine erfordern das kostenpflichtige Pro-Upgrade' },
			{ feature: 'Bezahlte Buchung (kostenlose Version)', clicktarot: 'PayPal enthalten', competitor: 'Nicht verfügbar; Zahlungsoptionen sind eine reine Pro-Funktion' },
			{ feature: 'Erfassung der Rechnungsdaten (Steuernummer/USt-IdNr., Adresse)', clicktarot: 'Automatisch, enthalten', competitor: 'In keinem Tarif angeboten' },
			{ feature: 'Prepaid-Pakete für mehrere Sitzungen', clicktarot: 'Enthalten', competitor: 'Nicht angeboten' },
			{ feature: 'Wo es läuft', clicktarot: 'Auf deiner eigenen WordPress-Website', competitor: 'Ebenfalls auf deiner eigenen WordPress-Website' },
		],
		painPointsTitle: 'Was du vor der Wahl von Daily Tarot für Buchungen wissen solltest',
		painPointsIntro: 'Das eigene WordPress.org-Listing von Daily Tarot zeigt eine noch frühe Software, in dieser Hinsicht ähnlich wie clickTarot Calendar. Es lohnt sich zu wissen, was der kostenlose Tarif wirklich enthält, bevor du einen Buchungsablauf darauf aufbaust.',
		painPoints: [
			'Die kostenlose Version beschränkt die Kalenderbearbeitung auf heute und morgen; weiter im Voraus planen erfordert das Pro-Upgrade.',
			'Buchungszahlungen (PayPal oder Stripe) sind eine reine Pro-Funktion; die kostenlose Version kann Buchungsanfragen entgegennehmen, aber nicht dafür kassieren.',
			'Es gibt in keinem Tarif Rechnungsstellung, Erfassung von Steuernummer/USt-IdNr. oder ein Prepaid-Paket-System, Funktionen, die eine bezahlte Beratungspraxis meist eher früher als später braucht.',
		],
		ctaTitle: 'Bereit, etwas auszuprobieren, das genau für dich gemacht ist?',
		ctaBody: 'Installiere clickTarot Calendar in wenigen Minuten auf deiner WordPress-Website, ganz ohne technische Kenntnisse.',
		faq: [
			{
				q: 'Kann ich mit der kostenlosen Version von Daily Tarot für Buchungen kassieren?',
				a: 'Nein. Zahlungsmethoden (PayPal und Stripe) sind nur im kostenpflichtigen Pro-Tarif von Daily Tarot verfügbar; die kostenlose Version kann Buchungsanfragen entgegennehmen, aber nicht dafür kassieren. clickTarot Calendar akzeptiert PayPal-Zahlungen bereits in der kostenlosen Version, Stripe in Premium.',
			},
			{
				q: 'Ist Daily Tarot wie clickTarot Calendar auf Buchungen ausgelegt?',
				a: 'Nicht in erster Linie. Der Hauptfokus von Daily Tarot liegt auf dem Veröffentlichen von Tarot-Lesungen, Decks und Legesystemen, mit einem Buchungsmodul als einer von mehreren Funktionen. clickTarot Calendar ist von Grund auf für Terminbuchung und Bezahlung von Beratungen gebaut.',
			},
		],
		otherComparisonsTitle: 'So schneiden wir im Vergleich zu anderen Terminplanungs-Tools ab',
	},
	ozapp: {
		eyebrow: 'Vergleich',
		title: 'clickTarot Calendar vs Ozapp',
		subtitle:
			'Ozapp (früher Book Appointment Online PRO) ist ein allgemeines, mitarbeiterfähiges Terminplugin, das auf CodeCanyon verkauft wird, mit einer Landingpage für Astrolog:innen und Psychics unter mehreren anderen Nischen. clickTarot Calendar ist von Grund auf für eine einzelne Beraterin gebaut.',
		colFeature: 'Funktion',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Ozapp',
		rows: [
			{ feature: 'Gemacht für', clicktarot: 'Einzelne Berater mit Kundenterminen', competitor: 'Teams mit mehreren Mitarbeitenden und Filialen; die Astrologie/Psychic-Seite ist eine von mehreren Nischen-Landingpages für dasselbe allgemeine Tool' },
			{ feature: 'Vertrieb', clicktarot: 'WordPress.org, mit einer echten, dauerhaft kostenlosen Version', competitor: 'Nur CodeCanyon-Marktplatz; kein WordPress.org-Listing, kein kostenloser Tarif' },
			{ feature: 'Preismodell', clicktarot: 'Ein Plan, alle Funktionen enthalten: monatlich, jährlich oder lebenslang, mit einem kostenlosen Tarif, der kostenlos bleibt', competitor: 'Einmalige Standardlizenz für 79 $, Support für 6 Monate enthalten, gegen Aufpreis verlängerbar' },
			{ feature: 'Erfassung der Rechnungsdaten (Steuernummer/USt-IdNr., Adresse)', clicktarot: 'Automatisch, enthalten', competitor: 'Nicht unter den aufgeführten Funktionen' },
			{ feature: 'Prepaid-Pakete für mehrere Sitzungen', clicktarot: 'Enthalten', competitor: 'Nicht verfügbar; eine Warenkorb-Funktion zum Bündeln von Sitzungen steht auf der Roadmap' },
			{ feature: 'Zahlungsanbieter', clicktarot: 'PayPal (kostenlos), Stripe (Premium): die zwei gängigsten für Einzelberater:innen', competitor: 'Stripe, PayPal, WooCommerce, Square, Yandex Kassa: breit aufgestellt, aber auf multi-Markt- und mitarbeiterstarke Unternehmen ausgelegt' },
		],
		painPointsTitle: 'Was du vor der Wahl von Ozapp für eine Einzelpraxis wissen solltest',
		painPointsIntro: 'Ozapp ist ein leistungsfähiges, breites Terminsystem, zuerst für Unternehmen mit mehreren Mitarbeitenden gebaut, nicht für eine einzelne Beraterin.',
		painPoints: [
			'Es wird nur auf CodeCanyon verkauft: kein WordPress.org-Listing, keine Möglichkeit, eine echte kostenlose Version vor der Zahlung von 79 $ auszuprobieren, und Support über die ersten 6 Monate hinaus kostet extra.',
			'Der Funktionsumfang (Mitarbeiterverwaltung, ein Filialleiter-Feature auf der Roadmap, Videokonferenzen) ist auf Teams ausgelegt; eine einzelne Kartenlegerin oder Astrologin zahlt für viel Funktionalität, die für eine andere Art von Unternehmen gedacht ist.',
			'Es gibt keine Rechnungsstellung/Steuernummer-Erfassung und keine Prepaid-Pakete für Sitzungen, zwei Dinge, die eine Beratungspraxis meist früh braucht.',
		],
		ctaTitle: 'Bereit, etwas auszuprobieren, das genau für dich gemacht ist?',
		ctaBody: 'Installiere clickTarot Calendar in wenigen Minuten auf deiner WordPress-Website, ganz ohne technische Kenntnisse.',
		faq: [
			{
				q: 'Kann ich Ozapp vor dem Kauf kostenlos testen?',
				a: 'Nein. Ozapp wird als einmalige Lizenz für 79 $ auf CodeCanyon verkauft, ohne kostenlosen Tarif und ohne WordPress.org-Listing. clickTarot Calendar hat eine echte, dauerhaft kostenlose Version, die du direkt von WordPress.org installieren kannst.',
			},
			{
				q: 'Ist Ozapp für eine einzelne Kartenlegerin oder Astrologin gebaut?',
				a: 'Nicht speziell. Ozapp ist ein allgemeines, mitarbeiterfähiges Terminsystem; seine Astrologie/Psychic-Seite ist eine von mehreren Nischen-Landingpages für dasselbe generische Tool. clickTarot Calendar ist von Grund auf für den Arbeitsablauf einer einzelnen Beraterin gebaut.',
			},
		],
		otherComparisonsTitle: 'So schneiden wir im Vergleich zu anderen Terminplanungs-Tools ab',
	},
};

export const bookneticSaasClarification = {
	eyebrow: 'Kein direkter Vergleich',
	title: 'Ist Booknetic SaaS wie Calendly? Nicht wirklich',
	subtitle:
		'Booknetic SaaS löst ein anderes Problem als clickTarot Calendar. Hier erfährst du, was es wirklich ist, und wo du nachschauen solltest, wenn du Buchungstools für deine eigene Praxis vergleichst.',
	whatItIsTitle: 'Was Booknetic SaaS wirklich ist',
	whatItIsBody:
		'Booknetic SaaS ist kein Tool, um deine eigenen Termine entgegenzunehmen; es ist eine White-Label-Plattform, um ein Buchungssoftware-Geschäft aufzubauen und an andere Unternehmen weiterzuverkaufen. Du installierst es und meldest dann andere Unternehmen als zahlende Mandanten an, die jeweils ihr eigenes Buchungssystem unter deiner Marke betreiben. Es ist für Unternehmer:innen gemacht, die ein SaaS-Produkt starten, nicht für Kartenleger:innen, Astrolog:innen oder Berater:innen, die Buchungen von ihren eigenen Kund:innen entgegennehmen.',
	whyNotFitTitle: 'Warum wir keinen Funktionsvergleich erzwingen',
	whyNotFitBody:
		'Wenn du Tools zur Verwaltung deiner eigenen Kundentermine vergleichst, löst Booknetic SaaS ein völlig anderes Problem, und liegt preislich in einem anderen Bereich, mit Tarifen für ein Multi-Mandanten-Reseller-Geschäft statt für eine einzelne Praxis. Eine Funktion-für-Funktion-Tabelle gegen clickTarot Calendar wäre kein ehrlicher Vergleich, also erfinden wir keinen.',
	realComparisonLabel: 'Sieh dir unseren echten Vergleich mit Booknetics WordPress-Plugin an',
	ctaTitle: 'clickTarot Calendar ist genau dafür gemacht: deine eigenen Buchungen entgegennehmen',
	ctaBody: 'Ein Plugin, auf deiner eigenen WordPress-Website, mit einem Preis für eine einzelne Beratungspraxis, nicht für ein Reseller-Geschäft.',
};

export default de;
