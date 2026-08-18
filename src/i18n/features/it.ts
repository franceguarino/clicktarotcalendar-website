import type { FeatureDetailDictionary, FeatureUiText } from './types';

export const featureUi: FeatureUiText = {
	eyebrow: 'Funzionalità',
	painPointLabel: 'Il problema',
	howItWorksLabel: 'Come funziona',
	benefitLabel: 'Perché conta',
	otherFeaturesTitle: 'Scopri le altre funzionalità',
	ctaTitle: 'Pronto a smettere di perdere tempo con i messaggi avanti e indietro per le prenotazioni?',
	ctaBody: 'Una sola licenza, tutte le funzionalità incluse, nessun costo per postazione aggiuntiva.',
	backToHome: 'Torna alla home',
};

const it: FeatureDetailDictionary = {
	calendar: {
		title: 'Calendario Visuale Mensile',
		tagline: 'Basta scambiarsi messaggi solo per trovare un’ora libera.',
		painPoint:
			'Prenotare via DM o email significa una decina di messaggi avanti e indietro prima che qualcuno concordi un orario — e metà chiedono "sei libero la prossima settimana?" dopo che gliel’hai già detto due volte.',
		howItWorks:
			'Il cliente vede la tua disponibilità reale, in tempo reale, mostrata come un vero calendario: giorni in cui lavori, giorni in cui non lavori, orari già occupati. Sceglie un giorno, sceglie un orario, ed è prenotato. Niente avanti e indietro, niente doppie prenotazioni, niente controlli manuali da parte tua.',
		benefit:
			'Ogni ora che non passi a rispondere "sei libero martedì?" è un’ora che puoi dedicare alle consulenze — o a niente. Questo è il vero ritorno di uno strumento di prenotazione: tempo recuperato, non solo un modulo più bello.',
	},
	payments: {
		title: 'Pagamenti Integrati',
		tagline: 'Vieni pagato prima della seduta, non dopo.',
		painPoint:
			'Sollecitare un pagamento dopo una consulenza è imbarazzante per tutti. E mandare manualmente un link di pagamento per ogni prenotazione è un passaggio in più che può essere dimenticato — o ignorato.',
		howItWorks:
			'PayPal e Stripe si collegano direttamente al tuo account. Il cliente paga nel momento in cui prenota, dallo stesso modulo — nessuna fattura separata, nessun link a parte, nessun passaggio in più.',
		benefit:
			'Il denaro arriva sul tuo account, non su quello del plugin — clickTarot non tocca né trattiene mai un centesimo. Vieni pagato in tempo, ogni volta, senza doverlo chiedere.',
	},
	invoicing: {
		title: 'Dati di Fatturazione Automatici',
		tagline: 'I dati fiscali che ti servono sono già nella tua dashboard.',
		painPoint:
			'Emettere una fattura di solito significa scrivere al cliente dopo la seduta per chiedere codice fiscale e indirizzo di fatturazione — e aspettare la risposta prima di poter fatturare davvero.',
		howItWorks:
			'Codice fiscale (o partita IVA fuori dall’Italia) e indirizzo di fatturazione sono campi obbligatori nello stesso modulo di prenotazione. Quando l’appuntamento è confermato, tutto ciò che serve per fatturare è già registrato accanto alla prenotazione.',
		benefit:
			'Niente scambi di email per la burocrazia. Se lo fai come attività vera — e se paghi per un software probabilmente è così — la fatturazione corretta non dovrebbe essere la parte che ti rallenta.',
	},
	packages: {
		title: 'Pacchetti Prepagati',
		tagline: 'Vendi tre sedute oggi, lascia che prenoti la terza a marzo.',
		painPoint:
			'I clienti abituali sono i migliori — ma senza un sistema di pacchetti, ogni ritorno significa rifare il checkout da capo, senza un modo semplice per premiare chi prenota in anticipo.',
		howItWorks:
			'Crea un pacchetto — ad esempio 3 sedute a un prezzo scontato rispetto a pagarle singolarmente. Il cliente paga una volta sola e il credito resta legato alla sua email: alla prenotazione successiva il plugin lo riconosce e salta automaticamente il pagamento.',
		benefit:
			'I pacchetti trasformano clienti occasionali in un incasso ricorrente che hai già ottenuto, e danno ai clienti più fedeli un motivo per tornare da te invece di provare qualcun altro la prossima volta.',
	},
	coupons: {
		title: 'Codici Sconto',
		tagline: 'Fai una vera promozione senza fare i conti a mente al checkout.',
		painPoint:
			'Gli sconti manuali significano modificare a mano un prezzo, o fidarsi della propria memoria per ricordare chi ha diritto al 20% e chi no — non proprio qualcosa da tenere su un quaderno.',
		howItWorks:
			'Crea un codice — percentuale o importo fisso — con scadenza e limite di utilizzo opzionali. Il cliente lo inserisce nel modulo di prenotazione e vede subito il nuovo prezzo, prima di pagare.',
		benefit:
			'I coupon sono uno dei modi più economici per trasformare i follower dei social in clienti paganti. Averli integrati significa che una promo su Instagram richiede cinque minuti, non un pomeriggio.',
	},
	reschedule: {
		title: 'Riprogrammazione e Cancellazione Autonoma',
		tagline: 'Lascia che i clienti spostino da soli l’appuntamento — non devi fare da segretaria al loro calendario.',
		painPoint:
			'"Possiamo spostare martedì a giovedì?" è una richiesta normale e ragionevole — ed è anche il quinto messaggio della giornata che non ha nulla a che fare con una consulenza vera.',
		howItWorks:
			'Ogni email di conferma e promemoria include un link di gestione. Il cliente può riprogrammare su un altro orario libero o cancellare da solo, fino alla soglia minima di preavviso che hai configurato — dopo quella soglia, viene invitato a contattarti direttamente.',
		benefit:
			'Le richieste che prima interrompevano la tua giornata ora si risolvono da sole. Mantieni comunque piena visibilità e controllo — semplicemente non sei più tu a dover agire per ogni piccola variazione.',
	},
	international: {
		title: 'Fatturazione per Clienti Internazionali',
		tagline: 'Un solo modulo, corretto sia per un cliente a Roma che per uno a Berlino.',
		painPoint:
			'Campi di fatturazione pensati solo per un paese — codice fiscale italiano, formato del CAP italiano — o non funzionano per un cliente all’estero, o raccolgono silenziosamente dati sbagliati o inutilizzabili.',
		howItWorks:
			'Un selettore del paese nel modulo di prenotazione adatta i campi automaticamente: per l’Italia restano i campi standard di codice fiscale, CAP e provincia; per ogni altro paese passa a partita IVA/tax ID opzionale, CAP in formato libero e provincia o stato in testo libero.',
		benefit:
			'Puoi dire sì a un cliente ovunque, senza soluzioni di ripiego. Se stai costruendo una clientela internazionale — o ce l’hai già — questa è la differenza tra un modulo che funziona per tutti e uno che silenziosamente allontana chi non è in Italia.',
	},
	multilingual: {
		title: 'Plugin Multilingua',
		tagline: 'Il tuo modulo di prenotazione parla la lingua del cliente — letteralmente.',
		painPoint:
			'Un modulo di prenotazione in una lingua che il cliente non legge crea attrito proprio nel momento in cui vuoi zero attrito: subito prima che paghi.',
		howItWorks:
			'Il modulo di prenotazione, le email di conferma e la tua dashboard di amministrazione sono tutti tradotti — inglese, spagnolo, tedesco e italiano — e cambiano automaticamente in base alla lingua configurata sul tuo sito.',
		benefit:
			'Non ti serve un sito separato, un plugin di traduzione o uno sviluppatore per servire clienti in più lingue. È già tutto pronto.',
	},
};

export default it;
