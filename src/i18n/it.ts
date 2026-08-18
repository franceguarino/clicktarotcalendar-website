import type { Dictionary } from './types';

const it: Dictionary = {
	meta: {
		title: 'Plugin di Prenotazione WordPress, Alternativa a Calendly | clickTarot Calendar',
		description:
			'Plugin di prenotazione per WordPress pensato per cartomanti, astrologi e counselor. Pagamenti, fatturazione e pacchetti inclusi — una vera alternativa a Calendly.',
	},
	nav: {
		home: 'Home',
		pricing: 'Prezzi',
		faq: 'FAQ',
		about: 'Chi siamo',
	},
	hero: {
		eyebrow: 'Plugin WordPress per professionisti dell’esoterico',
		title: 'Il calendario di prenotazione fatto su misura per il tuo studio di consulti',
		subtitle:
			'Trasforma il tuo sito in uno studio sempre aperto: i clienti prenotano e pagano da soli, tu ricevi solo le notifiche. Nessuno scambio infinito di messaggi.',
	},
	features: {
		title: 'Tutto quello che serve, niente di superfluo',
		items: [
			{
				title: '📅 Calendario visuale a vista mensile',
				description: 'Il cliente sceglie data e ora da solo, in piena autonomia: niente più messaggi avanti e indietro.',
			},
			{
				title: '💳 Pagamenti integrati',
				description: 'PayPal e carta di credito (Stripe), collegati direttamente al tuo account. Il denaro arriva a te.',
			},
			{
				title: '🧾 Fatturazione automatica',
				description: 'Codice Fiscale e indirizzo raccolti in automatico in fase di prenotazione: pronto per emettere fattura.',
			},
			{
				title: '📦 Pacchetti prepagati',
				description: 'Vendi blocchi di più sessioni a prezzo scontato: il cliente paga una volta, prenota quando vuole.',
			},
			{
				title: '🎟️ Coupon sconto',
				description: 'Codici promozionali con scadenza e limite di utilizzi, per le tue campagne sui social.',
			},
			{
				title: '🔄 Riprogrammazione self-service',
				description: 'Il cliente sposta o annulla l’appuntamento da solo dal link nell’email, senza scriverti.',
			},
			{
				title: '🌍 Fatturazione anche per l’estero',
				description: 'Selettore Paese nel form: Partita IVA/Tax ID, codice postale e provincia/stato si adattano fuori dall’Italia.',
			},
			{
				title: '🌐 Plugin multilingua',
				description: 'Form, email e pannello di amministrazione tradotti in italiano, inglese, spagnolo e tedesco.',
			},
			{
				title: '🕒 Disponibilità flessibile',
				description: 'Blocca giornate intere o singole fasce orarie ogni volta che ti serve: il calendario si adatta a te.',
			},
			{
				title: '✉️ Email automatiche personalizzabili',
				description: 'Conferme e promemoria inviati in automatico, con testo personalizzabile a tuo piacimento.',
			},
			{
				title: '🔗 Link di prenotazione dedicato',
				description: 'Un link pubblico pronto per la bio di Instagram o TikTok, senza dover creare nessuna pagina.',
			},
			{
				title: '📊 Statistiche sugli incassi',
				description: 'Guarda quanto guadagni ogni mese e quale servizio va meglio, direttamente in dashboard.',
			},
		],
	},
	screenshots: {
		title: 'Come funziona, in pratica',
		items: [
			{ src: '/screenshots/screenshot-1.png', alt: 'Calendario di prenotazione pubblico con vista mensile e fasce orarie' },
			{ src: '/screenshots/screenshot-2.png', alt: 'Pannello Calendari per creare e personalizzare i tuoi servizi' },
			{ src: '/screenshots/screenshot-3.png', alt: 'Dashboard Statistiche con incassi e andamento mensile' },
		],
	},
	audience: {
		title: 'Pensato per chi lavora con i consulti, non per uffici aziendali',
		body:
			'Cartomanti, astrologi, tarologi, counselor olistici e professionisti della crescita personale: clickTarot Calendar gestisce esattamente i flussi di cui hai bisogno tu, un singolo professionista che riceve clienti online o in presenza, senza le complicazioni di un tool pensato per team aziendali.',
	},
	pricing: {
		eyebrow: 'Prezzo semplice',
		title: 'Un prezzo, tutte le funzionalità',
		subtitle: 'Nessun piano nascosto, nessun costo per utente aggiuntivo: paghi per il tuo studio, non per una scrivania in più.',
		planName: 'clickTarot Calendar',
		priceNote: 'Licenza annuale, aggiornamenti e supporto inclusi',
		ctaLabel: 'Acquista ora',
		included: [
			'Calendari illimitati per servizi diversi',
			'Pagamenti PayPal e Stripe',
			'Pacchetti prepagati e coupon sconto',
			'Fatturazione automatica, anche per clienti esteri',
			'Email automatiche personalizzabili',
			'Plugin tradotto in 4 lingue',
			'Aggiornamenti e supporto inclusi',
		],
		guarantee: 'Garanzia soddisfatti o rimborsati gestita direttamente da Freemius al momento del checkout.',
	},
	faq: {
		title: 'Domande frequenti',
		items: [
			{
				q: 'Serve sapere programmare per usarlo?',
				a: 'No, l’installazione e la configurazione sono pensate per chi non ha competenze tecniche: bastano pochi click.',
			},
			{
				q: 'Posso avere più servizi con prezzi diversi?',
				a: 'Sì, puoi creare un calendario per ogni servizio, ognuno con la propria durata, prezzo e orari di lavoro.',
			},
			{
				q: 'Come vengono gestiti i pagamenti dei miei clienti?',
				a: 'Tramite PayPal e/o Stripe, collegati direttamente al tuo account: il denaro arriva a te, il plugin non lo tocca né lo trattiene.',
			},
			{
				q: 'Posso vendere pacchetti di più sessioni?',
				a: 'Sì, puoi creare pacchetti prepagati multi-sessione: il cliente paga una volta e prenota le sue sessioni quando vuole.',
			},
			{
				q: 'Funziona anche per clienti fuori dall’Italia?',
				a: 'Sì: il form si adatta automaticamente per i clienti esteri (Partita IVA/Tax ID invece di Codice Fiscale, codice postale libero), e l’intero plugin è disponibile in italiano, inglese, spagnolo e tedesco.',
			},
			{
				q: 'I miei dati e quelli dei clienti sono al sicuro?',
				a: 'Sì: tutto resta salvato solo sul tuo sito WordPress, non viene mai condiviso con terzi.',
			},
		],
	},
	footer: {
		tagline: 'Il calendario di prenotazione per professionisti dei consulti.',
		contactLabel: 'Contatti',
		privacy: 'Privacy',
		terms: 'Termini',
		rights: 'Tutti i diritti riservati.',
	},
	legal: {
		privacyTitle: 'Informativa sulla privacy',
		privacyIntro:
			'Questa pagina descrive come clicktarotcalendar.com tratta i dati durante la visita al sito vetrina. Non riguarda il trattamento dei dati effettuato dal plugin clickTarot Calendar sul tuo sito WordPress, di cui resti titolare tu in quanto acquirente ed installatore.',
		privacyBody: [
			{
				heading: 'Hosting e dati tecnici',
				body: 'Il sito è ospitato su Cloudflare Pages. Cloudflare può raccogliere log tecnici standard (indirizzo IP, user agent) per finalità di sicurezza e funzionamento del servizio.',
			},
			{
				heading: 'Statistiche',
				body: 'Usiamo Cloudflare Web Analytics, un servizio di statistiche senza cookie e senza tracciamento individuale del visitatore: non richiede consenso tramite banner.',
			},
			{
				heading: 'Pagamenti',
				body: 'L’acquisto della licenza avviene interamente sulla piattaforma di Freemius, che agisce come rivenditore ufficiale (merchant of record) e gestisce in autonomia i dati di pagamento secondo la propria informativa privacy.',
			},
			{
				heading: 'Contatti',
				body: 'Se ci scrivi via email, useremo il tuo indirizzo esclusivamente per risponderti.',
			},
		],
		termsTitle: 'Termini di utilizzo',
		termsIntro: 'Utilizzando clicktarotcalendar.com accetti i termini descritti in questa pagina.',
		termsBody: [
			{
				heading: 'Il sito',
				body: 'clicktarotcalendar.com è il sito vetrina del plugin WordPress clickTarot Calendar. I contenuti hanno scopo informativo e commerciale.',
			},
			{
				heading: 'Acquisto della licenza',
				body: 'L’acquisto, il rinnovo e la fatturazione della licenza del plugin sono gestiti da Freemius secondo i relativi termini di vendita, mostrati durante il checkout.',
			},
			{
				heading: 'Proprietà intellettuale',
				body: 'Nomi, marchi e contenuti presenti su questo sito sono di proprietà dei rispettivi titolari. I nomi di prodotti terzi citati (es. Calendly) sono usati a scopo descrittivo/comparativo.',
			},
			{
				heading: 'Limitazione di responsabilità',
				body: 'Il sito viene fornito "così com’è". Per il supporto tecnico sul plugin fai riferimento ai canali indicati nella dashboard Freemius dopo l’acquisto.',
			},
		],
	},
	about: {
		eyebrow: 'Chi siamo',
		title: 'Non un team di sviluppatori. Un cartomante che usa questo strumento ogni giorno.',
		subtitle: 'clickTarot Calendar non nasce da un’azienda software. Nasce da un problema vero, il mio, e da un lavoro che faccio ogni giorno.',
		bioTitle: 'Chi sono',
		bioBody: [
			'Mi chiamo Francesco Guarino. Sono conferenziere, studioso di psicologia sociale e da anni lavoro per costruire un ponte tra scienza e spiritualità. Prima di tutto questo, ho studiato direttamente con i Mastri Cartai la tradizione dei produttori di carte.',
			'Ho fondato <a href="https://scuolatdm.com/" target="_blank" rel="noopener">Scuola TdM</a>, il principale polo di formazione sui Tarocchi di Marsiglia in Italia, e ho ideato il Metodo TdM, un modello di studio e interazione con i Tarocchi di Marsiglia che insegno dal 2011 tra Europa e Asia, e dal 2017 anche in America.',
			'Sono il webmaster di <a href="https://www.tarocchi.blog/" target="_blank" rel="noopener">tarocchi.blog</a>, considerato il miglior blog italiano sui Tarocchi, e ho creato <a href="https://www.clicktarot.net/" target="_blank" rel="noopener">clickTarot</a>, una community pensata per essere il più inclusiva possibile. Attraverso i miei domini raggiungo un milione e mezzo di studiosi, amanti e appassionati di Tarocchi ogni anno. Ho anche prodotto il documentario "<a href="https://www.tarocchi.blog/oltre-il-tarot/" target="_blank" rel="noopener">Oltre il Tarot</a>" e scrivo regolarmente libri di natura psicologica e spirituale.',
		],
		searchTitle: 'Perché ho creato clickTarot Calendar',
		searchBody: [
			'Per anni ho cercato uno strumento di prenotazione adatto al mio lavoro: consulti a pagamento, uno alla volta, con clienti che tornano nel tempo. Non l’ho mai trovato.',
			'Ho provato Booknetic: non aveva le funzionalità che mi servivano davvero. Sono passato a Booknetic SaaS, ma era pieno di bug — e dato che gli sviluppatori guadagnano vendendo componenti aggiuntivi a pagamento, sembravano più interessati a produrne di nuovi che a sistemare quelli esistenti. Ho anche frequentato la loro community su Discord, sperando di trovare aiuto: era un cimitero di lamentele, senza risposte.',
			'Ho provato TidyCal: mi restituiva errori 404 sui miei calendari, e l’assistenza clienti era praticamente inesistente — la stessa storia di tutti i prodotti della "famiglia Sumo". Se usi SendFox per le tue email, sai esattamente di cosa parlo.',
			'Avevo anche usato per molto tempo un plugin del team di CodePeople. Funzionava, finché non è entrato in conflitto con altri plugin importanti di WordPress. Mi avevano preparato una versione personalizzata, che però non è mai stata aggiornata — fino a quando un aggiornamento di WordPress non l’ha resa definitivamente inutilizzabile.',
			'A quel punto ho riunito il mio team e l’ho costruito da solo. Poi ho deciso di aprirlo anche a chi, come me, non aveva mai trovato lo strumento giusto.',
		],
		whyTitle: 'Perché so che funziona',
		whyBody: [
			'Non perché dietro c’è un team di sviluppatori professionisti — non è così, e non ho intenzione di far finta che lo sia. clickTarot Calendar funziona perché è lo stesso strumento che uso io, ogni giorno, per gestire i consulti della mia attività.',
			'È per questo che il focus principale è sugli aggiornamenti e sui miglioramenti costanti: non è un prodotto che vendiamo e basta. È lo strumento da cui dipende il mio lavoro quotidiano, quindi deve funzionare, sempre.',
		],
		linksTitle: 'Approfondisci',
		bookneticLinkLabel: 'Il confronto con Booknetic',
		tidycalLinkLabel: 'Il confronto con TidyCal',
		ctaTitle: 'Provalo anche tu',
		ctaBody: 'Lo stesso strumento che uso ogni giorno per il mio lavoro, ora disponibile anche per il tuo.',
	},
};

export default it;
