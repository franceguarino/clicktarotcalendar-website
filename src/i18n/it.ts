import type { Dictionary } from './types';

const it: Dictionary = {
	meta: {
		title: 'clickTarot Calendar — Calendario di prenotazione per cartomanti e astrologi',
		description:
			'Il calendario di prenotazione pensato per cartomanti, astrologi e counselor olistici. Pagamenti PayPal e Stripe, fatturazione automatica, pacchetti prepagati. Provalo oggi.',
	},
	nav: {
		home: 'Home',
		pricing: 'Prezzi',
		faq: 'FAQ',
	},
	hero: {
		eyebrow: 'Plugin WordPress per professionisti dell’esoterico',
		title: 'Il calendario di prenotazione fatto su misura per il tuo studio di consulti',
		subtitle:
			'Trasforma il tuo sito in uno studio sempre aperto: i clienti prenotano e pagano da soli, tu ricevi solo le notifiche. Nessuno scambio infinito di messaggi.',
		ctaSecondary: 'Confronta con Calendly',
	},
	features: {
		title: 'Tutto quello che serve, niente di superfluo',
		items: [
			{
				title: 'Calendario visuale a vista mensile',
				description: 'Il cliente sceglie data e ora da solo, in piena autonomia: niente più messaggi avanti e indietro.',
			},
			{
				title: 'Pagamenti integrati',
				description: 'PayPal e carta di credito (Stripe), collegati direttamente al tuo account. Il denaro arriva a te.',
			},
			{
				title: 'Fatturazione automatica',
				description: 'Codice Fiscale e indirizzo raccolti in automatico in fase di prenotazione: pronto per emettere fattura.',
			},
			{
				title: 'Pacchetti prepagati',
				description: 'Vendi blocchi di più sessioni a prezzo scontato: il cliente paga una volta, prenota quando vuole.',
			},
			{
				title: 'Coupon sconto',
				description: 'Codici promozionali con scadenza e limite di utilizzi, per le tue campagne sui social.',
			},
			{
				title: 'Riprogrammazione self-service',
				description: 'Il cliente sposta o annulla l’appuntamento da solo dal link nell’email, senza scriverti.',
			},
			{
				title: 'Fatturazione anche per l’estero',
				description: 'Selettore Paese nel form: Partita IVA/Tax ID, codice postale e provincia/stato si adattano fuori dall’Italia.',
			},
			{
				title: 'Plugin multilingua',
				description: 'Form, email e pannello di amministrazione tradotti in italiano, inglese, spagnolo e tedesco.',
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
	compareCalendly: {
		eyebrow: 'Confronto',
		title: 'clickTarot Calendar vs Calendly',
		subtitle:
			'Calendly è un ottimo tool generico per meeting di ogni tipo. clickTarot Calendar è costruito specificamente per chi vende consulti a pagamento: la differenza si vede nei dettagli.',
		colFeature: 'Funzionalità',
		colClicktarot: 'clickTarot Calendar',
		colCalendly: 'Calendly',
		rows: [
			{ feature: 'Raccolta dati fatturazione (Codice Fiscale/Partita IVA, indirizzo)', clicktarot: 'Automatica, integrata nel form', calendly: 'Non prevista' },
			{ feature: 'Pacchetti prepagati multi-sessione', clicktarot: 'Incluso', calendly: 'Non disponibile' },
			{ feature: 'Colore e branding del form', clicktarot: 'Personalizzabile in un click', calendly: 'Limitato ai piani più costosi' },
			{ feature: 'Pensato per', clicktarot: 'Un singolo professionista dei consulti', calendly: 'Team e aziende di ogni settore' },
			{ feature: 'Dove gira', clicktarot: 'Sul tuo sito WordPress, i dati restano tuoi', calendly: 'Piattaforma esterna' },
			{ feature: 'Modello di prezzo', clicktarot: 'Licenza singola, senza costo per utente', calendly: 'Abbonamento mensile, spesso per posto' },
		],
		ctaTitle: 'Pronto a provare qualcosa fatto apposta per te?',
		ctaBody: 'Installa clickTarot Calendar sul tuo sito WordPress in pochi minuti, senza competenze tecniche.',
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
};

export default it;
