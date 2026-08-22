import type { Dictionary } from './types';

const it: Dictionary = {
	meta: {
		title: 'Plugin di Prenotazione WordPress per Lettori di Tarocchi | clickTarot Calendar',
		description:
			'Plugin di prenotazione per WordPress pensato per tarologi, astrologi e counselor. Pagamenti, fatturazione e pacchetti inclusi: una vera alternativa a Calendly.',
	},
	nav: {
		home: 'Home',
		pricing: 'Prezzi',
		faq: 'FAQ',
		about: 'Chi siamo',
	},
	hero: {
		eyebrow: 'Il plugin per chi vende consulti, non per chi vende software',
		title: 'Smetti di rincorrere clienti su Instagram. Fai in modo che siano loro a <span class="ct-accent">prenotare</span> da te.',
		subtitle:
			'Ogni messaggio a cui rispondi in ritardo è un cliente che prenota altrove. clickTarot Calendar trasforma il tuo sito in uno studio aperto ventiquattr’ore su ventiquattro: il cliente sceglie data, ora e paga in autonomia; tu ricevi solo la notifica.',
		imageAlt: 'Una cliente prenota una consulenza al telefono',
	},
	features: {
		title: 'Tutto quello che ti serve per non perdere più un <span class="ct-accent">cliente</span>',
		items: [
			{
				title: '📅 Calendario visuale a vista mensile',
				description: 'Niente più "sei libera giovedì?": il cliente vede la tua disponibilità vera e prenota da solo, in piena autonomia.',
			},
			{
				title: '💳 Pagamenti integrati',
				description: 'PayPal e carta di credito (Stripe), collegati direttamente al tuo account. Il denaro arriva a te, subito, senza intermediari.',
			},
			{
				title: '🧾 Fatturazione automatica',
				description: 'Codice Fiscale e indirizzo raccolti in automatico in fase di prenotazione: la fattura è già pronta da fare.',
			},
			{
				title: '📦 Pacchetti prepagati',
				description: 'Vendi blocchi di più sessioni a prezzo scontato: incassi subito, il cliente prenota quando vuole.',
			},
			{
				title: '🎟️ Coupon sconto',
				description: 'Codici promozionali con scadenza e limite di utilizzi, pronti per la tua prossima promo sui social.',
			},
			{
				title: '🔄 Riprogrammazione self-service',
				description: 'Il cliente sposta o annulla l’appuntamento da solo dal link nell’email; tu non devi più fare da segretaria.',
			},
			{
				title: '🌍 Fatturazione anche per l’estero',
				description: 'Selettore Paese nel form: Partita IVA/Tax ID, codice postale e provincia si adattano da soli fuori dall’Italia.',
			},
			{
				title: '🌐 Plugin multilingua',
				description: 'Form, email e pannello di amministrazione tradotti in italiano, inglese, spagnolo e tedesco: parli la lingua del cliente.',
			},
			{
				title: '🕒 Disponibilità flessibile',
				description: 'Blocca giornate intere o singole fasce orarie ogni volta che ti serve: il calendario si adatta a te, non il contrario.',
			},
			{
				title: '✉️ Email automatiche personalizzabili',
				description: 'Conferme e promemoria inviati in automatico, con testo scritto da te: nessun messaggio robotico.',
			},
			{
				title: '🔗 Link di prenotazione dedicato',
				description: 'Un link pubblico pronto per la bio di Instagram o TikTok: chi ti scopre, prenota subito, senza cercarti altrove.',
			},
			{
				title: '📊 Statistiche sugli incassi',
				description: 'Guarda quanto guadagni ogni mese e quale servizio va meglio, in numeri veri, non a sensazione.',
			},
			{
				title: '🗓️ Aggiungi al calendario',
				description: 'Il cliente riceve un link nell’email di conferma che aggiunge l’appuntamento al suo calendario in un tocco: iPhone, Google, Outlook.',
			},
			{
				title: '📥 Esportazione CSV',
				description: 'Scarica tutte le prenotazioni in un file pronto per Excel o per il tuo commercialista, senza limiti di riga.',
			},
		],
	},
	screenshots: {
		title: 'Come funziona, in pratica',
		items: [
			{
				src: '/screenshots/screenshot-2.png',
				alt: 'Pannello Calendari per creare e personalizzare i tuoi servizi',
				caption: 'Crea il tuo prodotto e organizza l’agenda',
			},
			{
				src: '/screenshots/screenshot-1.png',
				alt: 'Calendario di prenotazione pubblico con vista mensile e fasce orarie',
				caption: 'Condividi il tuo calendario per ricevere prenotazioni e pagamenti',
			},
			{
				src: '/screenshots/screenshot-3.png',
				alt: 'Dashboard Statistiche con incassi e andamento mensile',
				caption: 'Controlla le statistiche per vedere cosa va e cosa non va',
			},
		],
	},
	audience: {
		title: 'Non sei un’<span class="ct-accent">azienda</span>. Perché il tuo strumento di prenotazione dovrebbe trattarti come tale?',
		body:
			'Tarologi, astrologi, counselor olistici e professionisti della crescita personale: clickTarot Calendar gestisce esattamente i flussi di cui hai bisogno tu, un singolo professionista che riceve clienti online o in presenza, senza le complicazioni di un tool pensato per progetti immensi, ma che sarà pieno di bug e roba che non userai mai!',
	},
	pricing: {
		eyebrow: 'Prezzo semplice',
		title: 'Un solo piano, tutte le <span class="ct-accent">funzionalità</span>',
		subtitle: 'Niente funzionalità bloccate dietro un piano più caro, niente costo per utente aggiuntivo: ogni piano include tutto quello che serve davvero. Scegli solo come preferisci pagare.',
		planName: 'clickTarot Calendar',
		priceNote: 'Tutte le funzionalità incluse, aggiornamenti e supporto su ogni piano',
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
		recommendedLabel: 'Consigliato',
		tiers: [
			{ label: 'Mensile', price: '14,72€', period: '/mese', note: 'Paghi mese per mese, disdici quando vuoi.', highlighted: false },
			{ label: 'Annuale', price: '155,95€', period: '/anno', note: 'Il più conveniente, equivale a circa 13€/mese.', highlighted: true },
			{ label: 'Lifetime', price: '499,99€', period: 'pagamento unico', note: 'Paghi una volta sola, lo usi per sempre.', highlighted: false },
		],
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
		tagline:
			'Il calendario di prenotazione per professionisti dei consulti di Tarocchi (e non solo) by Francesco <span style="color:var(--ct-primary-dark);font-weight:700">Guarino</span>.',
		freemiusNote: 'Vendite e fatturazione gestite da Freemius, rivenditore ufficiale.',
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
		title: 'Non sono un’azienda. Sono <span class="ct-accent">uno di voi</span>, e mi sono rotto le scatole di cercare uno strumento che non esisteva.',
		subtitle: 'clickTarot Calendar non nasce in un ufficio marketing. Nasce da un problema vero, il mio, e da un lavoro che faccio ogni giorno.',
		bioTitle: 'Chi sono',
		photoAlt: 'Francesco Guarino al lavoro con un mazzo di Tarocchi di Marsiglia',
		photo2Alt: 'Francesco Guarino mentre analizza il significato delle carte',
		bioBody: [
			'Mi chiamo Francesco Guarino. Sono un ricercatore indipendente, studioso di psicologia sociale e da anni lavoro per costruire un ponte tra scienza e spiritualità. Prima di tutto questo, ho studiato direttamente con i Mastri Cartai la tradizione dei produttori di carte.',
			'Ho fondato <a href="https://scuolatdm.com/" target="_blank" rel="noopener">Scuola TdM</a>, il principale polo di formazione sui Tarocchi di Marsiglia in Italia, e ho ideato il Metodo TdM, un modello di studio e interazione con i Tarocchi di Marsiglia che insegno dal 2011 tra Europa e Asia, e dal 2017 anche in America.',
			'Sono il webmaster di <a href="https://www.tarocchi.blog/" target="_blank" rel="noopener">tarocchi.blog</a>, considerato il miglior blog italiano sui Tarocchi, e ho creato <a href="https://www.clicktarot.net/" target="_blank" rel="noopener">clickTarot</a>, una community di qualche centinaio di persone, piccola ma vera, che curo personalmente. Attraverso i miei domini raggiungo un milione e mezzo di studiosi, amanti e appassionati di Tarocchi ogni anno. Ho anche prodotto il documentario "<a href="https://www.tarocchi.blog/oltre-il-tarot/" target="_blank" rel="noopener">Oltre il Tarot</a>" e scrivo regolarmente libri di natura psicologica e spirituale.',
		],
		searchTitle: 'Perché ho creato clickTarot Calendar',
		searchBody: [
			'Per anni ho cercato uno strumento di prenotazione adatto al mio lavoro: consulti a pagamento, uno alla volta, con clienti che tornano nel tempo. Non l’ho mai trovato. E te lo dico subito, perché odio chi vende fumo: non è la lettura delle carte il vero collo di bottiglia di questo mestiere. Sono i messaggi persi, gli appuntamenti da confermare a mano, il cliente che aspetta una risposta e nel frattempo prenota altrove.',
			'Ho provato Booknetic: non aveva le funzionalità che mi servivano davvero. Sono passato a Booknetic SaaS, ma era pieno di bug; e dato che gli sviluppatori guadagnano vendendo componenti aggiuntivi a pagamento, sembravano più interessati a produrne di nuovi che a sistemare quelli esistenti. Ho anche frequentato la loro community su Discord, sperando di trovare aiuto: era un cimitero di lamentele, senza risposte.',
			'Ho provato TidyCal: mi restituiva errori 404 sui miei calendari, e l’assistenza clienti era praticamente inesistente, la stessa storia di tutti i prodotti della "famiglia Sumo". Se usi SendFox per le tue email, sai esattamente di cosa parlo.',
			'Avevo anche usato per molto tempo un plugin del team di CodePeople. Funzionava, finché non è entrato in conflitto con altri plugin importanti di WordPress. Mi avevano preparato una versione personalizzata, che però non è mai stata aggiornata, fino a quando un aggiornamento di WordPress non l’ha resa definitivamente inutilizzabile.',
			'A quel punto ho smesso di cercare. Ho riunito il mio team e l’ho costruito io. Poi ho fatto una cosa che, dal punto di vista del business, forse non avrei dovuto fare: l’ho aperto anche a te.',
		],
		whyTitle: 'Perché so che funziona',
		whyBody: [
			'Non perché dietro ci sono sviluppatori professionisti: non è così, e non ho intenzione di far finta che lo sia. clickTarot Calendar funziona perché ci sono io, ogni giorno, a usarlo per i consulti della mia attività vera, con clienti veri, che pagano soldi veri.',
			'Ed è per questo che il focus principale è sugli aggiornamenti e sui miglioramenti costanti: non è un prodotto che vendo e basta. È lo strumento da cui dipende il mio lavoro quotidiano, quindi deve funzionare, sempre.',
		],
		linksTitle: 'Approfondisci',
		bookneticLinkLabel: 'Il confronto con Booknetic',
		tidycalLinkLabel: 'Il confronto con TidyCal',
		ctaTitle: 'Non ti sto vendendo un software. Ti sto passando il mio strumento.',
		ctaBody: 'Lo stesso che uso ogni giorno per il mio lavoro, ora disponibile anche per il tuo.',
	},
};

export default it;
