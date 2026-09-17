import type { GuideDictionary, GuideUiText } from './types';

export const guideUi: GuideUiText = {
	eyebrow: 'Guida',
	otherGuidesTitle: 'Altre guide',
	backToHome: 'Torna alla home',
	comparisonsTitle: 'I confronti completi, uno per uno',
};

const it: GuideDictionary = {
	setupBookings: {
		title: 'Come Attivare le Prenotazioni Online per Consulti di Tarocchi su WordPress',
		tagline: 'Una guida passo passo, senza scrivere una riga di codice.',
		metaDescription:
			'Guida passo passo per attivare un calendario di prenotazione online per consulti di tarocchi sul tuo sito WordPress, dalla scelta del plugin al primo pagamento incassato.',
		intro:
			'Se i clienti prenotano ancora un consulto via DM, email o un link a un calendario condiviso, stai perdendo tempo in organizzazione che potrebbe andare nei consulti stessi. Ecco esattamente come attivare un calendario di prenotazione sul tuo sito WordPress, dall’installazione al primo appuntamento pagato.',
		sections: [
			{
				heading: '1. Assicurati di avere un sito WordPress, non solo Instagram',
				body: 'Un calendario di prenotazione ha bisogno di un posto dove stare. Se oggi hai solo un profilo Instagram o TikTok, un sito WordPress non deve essere elaborato: basta una singola pagina che descrive i tuoi consulti, più il calendario di prenotazione stesso, per iniziare. Se hai già un sito WordPress, puoi aggiungere la prenotazione a qualsiasi pagina esistente.',
			},
			{
				heading: '2. Scegli un plugin di prenotazione pensato per i consulti, non uno scheduler generico',
				body: 'Gli strumenti di scheduling generici sono di solito pensati per team, saloni o cliniche. Cercane uno con tre cose di cui uno studio da solo ha davvero bisogno: un modo per farsi pagare la seduta al momento della prenotazione, campi per raccogliere dati di fatturazione/Codice Fiscale, e la possibilità di vendere pacchetti di più sedute. clickTarot Calendar è costruito specificamente attorno a questo flusso di lavoro e si installa gratis dalla directory dei plugin di WordPress.',
			},
			{
				heading: '3. Installa e attiva il plugin',
				body: 'Dalla dashboard di WordPress, vai su Plugin → Aggiungi nuovo, cerca il plugin per nome, clicca Installa e poi Attiva. Nessun FTP, nessuna modifica di codice.',
			},
			{
				heading: '4. Crea il tuo primo calendario',
				body: 'Imposta durata e prezzo della seduta, i tuoi giorni e orari di lavoro, e quanto preavviso serve prima di una prenotazione. Se offri più di un tipo di seduta, ad esempio una carta veloce e un consulto di un’ora intera, crea un calendario separato per ciascuna così prezzo e durata restano chiari.',
			},
			{
				heading: '5. Collega un metodo di pagamento',
				body: 'Collega PayPal (incluso nella versione gratuita) così i clienti pagano nel momento in cui prenotano, non dopo. Questo da solo elimina gran parte dell’imbarazzo di chiedere il pagamento dopo un consulto.',
			},
			{
				heading: '6. Pubblica il link di prenotazione',
				body: 'Metti lo shortcode o il link dedicato di prenotazione sul tuo sito, e lo stesso link nella bio di Instagram o TikTok. Da qui in poi, ogni messaggio "sei libera giovedì?" può ricevere semplicemente un link invece di un botta e risposta.',
			},
			{
				heading: '7. Provalo tu stessa prima di mandarci i clienti',
				body: 'Prenota una seduta di prova come se fossi un cliente, usando un indirizzo email diverso, per vedere esattamente cosa vedranno: il calendario, l’email di conferma, il passaggio di pagamento. È il modo più veloce per accorgersi di qualcosa di confuso prima che lo faccia un cliente vero.',
			},
		],
		ctaTitle: 'Pronta ad attivarlo sul tuo sito?',
		ctaBody: 'clickTarot Calendar si installa gratis da WordPress.org e ti guida passo passo nella configurazione del calendario.',
	},
	bestPlugins: {
		title: 'I Migliori Plugin WordPress di Prenotazione per Tarologi e Astrologi (2026)',
		tagline: 'Cosa conta davvero nella scelta, e come si confrontano le opzioni reali.',
		metaDescription:
			'Un confronto pratico tra i plugin WordPress di prenotazione per tarologi, astrologi e counselor: cosa controllare davvero, e come si posizionano le principali opzioni.',
		intro:
			'La maggior parte delle liste "i migliori plugin di prenotazione" è scritta per saloni, cliniche o piccole attività generiche, e salta le cose che contano davvero per chi vende consulti a pagamento: farsi pagare al momento della prenotazione, raccogliere i dati di fatturazione corretti, vendere pacchetti di più sedute. Ecco cosa controllare davvero, e come si confrontano le opzioni reali.',
		sections: [
			{
				heading: 'Cosa cercare prima di sceglierne uno',
				body: 'Quattro cose contano più dell’interfaccia esatta: il cliente può pagare quando prenota, non dopo; raccoglie automaticamente Codice Fiscale/Partita IVA e indirizzo di fatturazione, così puoi davvero emettere fattura; puoi vendere un pacchetto di più sedute con un solo pagamento invece di fatturare ogni visita separatamente; ed è pensato per un singolo professionista, così non paghi funzionalità da team che non userai mai.',
			},
			{
				heading: 'Strumenti di scheduling generici vs strumenti costruiti per i consulti',
				body: 'Calendly, Acuity Scheduling, SimplyBook.me e TidyCal sono strumenti solidi e conosciuti, ma nessuno è stato costruito attorno alla vendita di consulti a pagamento con un singolo professionista: i campi di fatturazione e i pacchetti prepagati sono assenti o bloccati dietro piani team più costosi. I plugin WordPress di prenotazione generici come Booknetic hanno lo stesso problema: funzionalità ampie pensate per saloni e agenzie, con le funzioni di cui un consulente singolo ha bisogno spesso chiuse dietro un piano premium.',
			},
			{
				heading: 'Strumenti pensati specificamente per tarologi e astrologi',
				body: 'Due plugin puntano direttamente a questa nicchia: Daily Tarot, principalmente uno strumento per pubblicare contenuti e letture di tarocchi, con la prenotazione come una delle tante funzionalità e ancora agli inizi; e Ozapp (in precedenza Book Appointment Online PRO), un sistema di appuntamenti generico e multi-dipendente venduto su CodeCanyon con una landing rivolta a questa nicchia, costruito prima di tutto per i team più che per un singolo professionista. clickTarot Calendar è quello costruito da zero attorno al flusso di lavoro di un singolo professionista dei consulti, con una vera versione gratuita su WordPress.org.',
			},
		],
		ctaTitle: 'Guarda tutti i confronti diretti, uno per uno',
		ctaBody: 'Ogni opzione sopra ha un confronto dettagliato, funzionalità per funzionalità, con clickTarot Calendar.',
		showComparisons: true,
	},
};

export default it;
