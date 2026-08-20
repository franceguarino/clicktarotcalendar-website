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
		tagline: 'Basta scambiarsi messaggi solo per trovare <span class="ct-accent">un’ora libera</span>.',
		metaDescription:
			'Scopri come il calendario visuale mensile di clickTarot Calendar permette ai clienti di prenotare da soli, senza messaggi avanti e indietro.',
		painPoint:
			'Prenotare via DM o email significa una decina di messaggi avanti e indietro prima che qualcuno concordi un orario, e metà chiedono "sei libero la prossima settimana?" dopo che gliel’hai già detto due volte.',
		howItWorks:
			'Il cliente vede la tua disponibilità reale, in tempo reale, mostrata come un vero calendario: giorni in cui lavori, giorni in cui non lavori, orari già occupati. Sceglie un giorno, sceglie un orario, ed è prenotato. Niente avanti e indietro, niente doppie prenotazioni, niente controlli manuali da parte tua.',
		benefit:
			'Ogni ora che non passi a rispondere "sei libero martedì?" è un’ora che puoi dedicare alle consulenze, o a niente. Questo è il vero ritorno di uno strumento di prenotazione: tempo recuperato, non solo un modulo più bello.',
	},
	payments: {
		title: 'Pagamenti Integrati',
		tagline: 'Vieni pagato <span class="ct-accent">prima</span> della seduta, non dopo.',
		metaDescription:
			'Pagamenti PayPal e Stripe integrati in clickTarot Calendar: il cliente paga alla prenotazione, il denaro arriva sul tuo account.',
		painPoint:
			'Sollecitare un pagamento dopo una consulenza è imbarazzante per tutti. E mandare manualmente un link di pagamento per ogni prenotazione è un passaggio in più che può essere dimenticato, o ignorato.',
		howItWorks:
			'PayPal e Stripe si collegano direttamente al tuo account. Il cliente paga nel momento in cui prenota, dallo stesso modulo: nessuna fattura separata, nessun link a parte, nessun passaggio in più.',
		benefit:
			'Il denaro arriva sul tuo account, non su quello del plugin; clickTarot non tocca né trattiene mai un centesimo. Vieni pagato in tempo, ogni volta, senza doverlo chiedere.',
	},
	invoicing: {
		title: 'Dati di Fatturazione Automatici',
		tagline: 'I dati fiscali che ti servono sono <span class="ct-accent">già</span> nella tua dashboard.',
		metaDescription:
			'clickTarot Calendar raccoglie automaticamente codice fiscale/partita IVA e indirizzo alla prenotazione, per fatturare senza lavoro extra.',
		painPoint:
			'Emettere una fattura di solito significa scrivere al cliente dopo la seduta per chiedere codice fiscale e indirizzo di fatturazione, e aspettare la risposta prima di poter fatturare davvero.',
		howItWorks:
			'Codice fiscale (o partita IVA fuori dall’Italia) e indirizzo di fatturazione sono campi obbligatori nello stesso modulo di prenotazione. Quando l’appuntamento è confermato, tutto ciò che serve per fatturare è già registrato accanto alla prenotazione.',
		benefit:
			'Niente scambi di email per la burocrazia. Se lo fai come attività vera, e se paghi per un software probabilmente è così, la fatturazione corretta non dovrebbe essere la parte che ti rallenta.',
	},
	packages: {
		title: 'Pacchetti Prepagati',
		tagline: 'Vendi tre sedute <span class="ct-accent">oggi</span>, lascia che prenoti la terza a marzo.',
		metaDescription:
			'Vendi pacchetti prepagati multi-sessione con clickTarot Calendar: un pagamento, il cliente prenota le sedute quando vuole.',
		painPoint:
			'I clienti abituali sono i migliori, ma senza un sistema di pacchetti, ogni ritorno significa rifare il checkout da capo, senza un modo semplice per premiare chi prenota in anticipo.',
		howItWorks:
			'Crea un pacchetto, ad esempio 3 sedute a un prezzo scontato rispetto a pagarle singolarmente. Il cliente paga una volta sola e il credito resta legato alla sua email: alla prenotazione successiva il plugin lo riconosce e salta automaticamente il pagamento.',
		benefit:
			'I pacchetti trasformano clienti occasionali in un incasso ricorrente che hai già ottenuto, e danno ai clienti più fedeli un motivo per tornare da te invece di provare qualcun altro la prossima volta.',
	},
	coupons: {
		title: 'Codici Sconto',
		tagline: 'Fai una <span class="ct-accent">vera</span> promozione senza fare i conti a mente al checkout.',
		metaDescription:
			'Crea codici sconto percentuali o fissi in clickTarot Calendar, pronti per la tua prossima promozione sui social.',
		painPoint:
			'Gli sconti manuali significano modificare a mano un prezzo, o fidarsi della propria memoria per ricordare chi ha diritto al 20% e chi no; non proprio qualcosa da tenere su un quaderno.',
		howItWorks:
			'Crea un codice (percentuale o importo fisso) con scadenza e limite di utilizzo opzionali. Il cliente lo inserisce nel modulo di prenotazione e vede subito il nuovo prezzo, prima di pagare.',
		benefit:
			'I coupon sono uno dei modi più economici per trasformare i follower dei social in clienti paganti. Averli integrati significa che una promo su Instagram richiede cinque minuti, non un pomeriggio.',
	},
	reschedule: {
		title: 'Riprogrammazione e Cancellazione Autonoma',
		tagline: 'Lascia che i clienti spostino <span class="ct-accent">da soli</span> l’appuntamento; non devi fare da segretaria al loro calendario.',
		metaDescription:
			'Lascia che i clienti riprogrammino o cancellino da soli l’appuntamento dall’email di conferma, senza scriverti.',
		painPoint:
			'"Possiamo spostare martedì a giovedì?" è una richiesta normale e ragionevole, ed è anche il quinto messaggio della giornata che non ha nulla a che fare con una consulenza vera.',
		howItWorks:
			'Ogni email di conferma e promemoria include un link di gestione. Il cliente può riprogrammare su un altro orario libero o cancellare da solo, fino alla soglia minima di preavviso che hai configurato; dopo quella soglia, viene invitato a contattarti direttamente.',
		benefit:
			'Le richieste che prima interrompevano la tua giornata ora si risolvono da sole. Mantieni comunque piena visibilità e controllo; semplicemente non sei più tu a dover agire per ogni piccola variazione.',
	},
	international: {
		title: 'Fatturazione per Clienti Internazionali',
		tagline: '<span class="ct-accent">Un solo modulo</span>, corretto sia per un cliente a Roma che per uno a Berlino.',
		metaDescription:
			'clickTarot Calendar adatta automaticamente i campi di fatturazione per i clienti fuori dall’Italia: partita IVA, CAP libero e altro.',
		painPoint:
			'Campi di fatturazione pensati solo per un paese (codice fiscale italiano, formato del CAP italiano) non funzionano per un cliente all’estero, o raccolgono silenziosamente dati sbagliati o inutilizzabili.',
		howItWorks:
			'Un selettore del paese nel modulo di prenotazione adatta i campi automaticamente: per l’Italia restano i campi standard di codice fiscale, CAP e provincia; per ogni altro paese passa a partita IVA/tax ID opzionale, CAP in formato libero e provincia o stato in testo libero.',
		benefit:
			'Puoi dire sì a un cliente ovunque, senza soluzioni di ripiego. Se stai costruendo una clientela internazionale, o ce l’hai già, questa è la differenza tra un modulo che funziona per tutti e uno che silenziosamente allontana chi non è in Italia.',
	},
	multilingual: {
		title: 'Plugin Multilingua',
		tagline: 'Il tuo modulo di prenotazione parla la lingua del cliente. <span class="ct-accent">Letteralmente.</span>',
		metaDescription:
			'Il modulo di prenotazione, le email e la dashboard di clickTarot Calendar sono tradotti in inglese, spagnolo, tedesco e italiano.',
		painPoint:
			'Un modulo di prenotazione in una lingua che il cliente non legge crea attrito proprio nel momento in cui vuoi zero attrito: subito prima che paghi.',
		howItWorks:
			'Il modulo di prenotazione, le email di conferma e la tua dashboard di amministrazione sono tutti tradotti: inglese, spagnolo, tedesco e italiano, e cambiano automaticamente in base alla lingua configurata sul tuo sito.',
		benefit:
			'Non ti serve un sito separato, un plugin di traduzione o uno sviluppatore per servire clienti in più lingue. È già tutto pronto.',
	},
	availability: {
		title: 'Gestione Disponibilità Flessibile',
		tagline: 'Blocca giornate intere o singole fasce orarie <span class="ct-accent">ogni volta che ti serve</span>.',
		metaDescription:
			'clickTarot Calendar ti permette di bloccare giornate intere o singole fasce orarie in pochi secondi, così il calendario riflette sempre la tua disponibilità reale.',
		painPoint:
			'La tua disponibilità non è uguale ogni settimana: un ritiro, un imprevisto familiare, un martedì già pieno. Uno strumento di prenotazione che permette solo orari settimanali fissi ti costringe a rifiutare prenotazioni che non puoi onorare, oppure a scrivere a mano ai clienti per annullare.',
		howItWorks:
			'Imposti una volta i tuoi orari di lavoro settimanali standard, poi blocchi qualsiasi giorno o fascia oraria quando qualcosa cambia: una visita medica, un workshop a cui partecipi, una settimana di pausa. Il tempo bloccato scompare semplicemente da ciò che i clienti possono prenotare, senza bisogno di cancellazioni separate. Per un’assenza più lunga, come una vacanza, non serve bloccare giorno per giorno: indichi la data di inizio e quella di fine, e il sistema blocca in automatico tutte le giornate lavorative comprese nell’intervallo.',
		benefit:
			'Resti tu al comando del tuo tempo, senza diventare l’amministratore a tempo pieno del tuo calendario. Blocchi quello che ti serve, in pochi click, e torni al tuo lavoro vero.',
	},
	notifications: {
		title: 'Email Automatiche Personalizzabili',
		tagline: 'Conferme e promemoria inviati in automatico, con testo personalizzabile <span class="ct-accent">a tuo piacimento</span>.',
		metaDescription:
			'clickTarot Calendar invia email di conferma e promemoria in automatico, con un testo scritto da te. Niente messaggi generici e robotici.',
		painPoint:
			'I clienti dimenticano gli appuntamenti. Senza un promemoria, una prenotazione dimenticata significa una fascia oraria persa e una conversazione scomoda su se addebitarla o meno. Ma molti strumenti di prenotazione saltano del tutto i promemoria, oppure mandano email così generiche da non sembrare scritte da te.',
		howItWorks:
			'Ogni prenotazione attiva automaticamente un’email di conferma al cliente e una notifica a te, e puoi attivare un promemoria inviato un numero configurabile di ore prima dell’appuntamento. Tutte e tre sono completamente modificabili; le scrivi con le tue parole, non con un template.',
		benefit:
			'Meno assenze, meno messaggi dell’ultimo minuto tipo "scusa, a che ora era il mio appuntamento?", e ogni email che il cliente riceve suona davvero come se venisse da te, non da un software.',
	},
	socialLink: {
		title: 'Link di Prenotazione Dedicato',
		tagline: 'Un link pubblico pronto per la bio di Instagram o TikTok, <span class="ct-accent">senza dover creare nessuna pagina</span>.',
		metaDescription:
			'Ogni servizio di clickTarot Calendar ha il proprio link pubblico di prenotazione, pronto da mettere direttamente nella bio di Instagram o TikTok.',
		painPoint:
			'Probabilmente la maggior parte delle tue prenotazioni parte dai social, non dalla home del tuo sito. Ma mandare chi ti segue verso una pagina di contatto generica (dove poi deve trovare il servizio giusto, scorrere e capire cosa fare) fa perdere persone che avrebbero prenotato su due piedi.',
		howItWorks:
			'Ogni calendario che crei ottiene automaticamente un proprio link pubblico dedicato, senza nessuna pagina da progettare o pubblicare a parte. Certo, avrai il tuo shortcode per inserire il calendario nelle pagine e nei post del tuo sito, ma potrai beneficiare anche di un link dedicato immediato. Lo metti direttamente nella bio di Instagram o TikTok, o lo condividi in un DM, e la persona atterra esattamente sul modulo di prenotazione di quel servizio specifico.',
		benefit:
			'Il passaggio tra "qualcuno vede il tuo contenuto" e "qualcuno prenota una seduta" diventa il più breve possibile; proprio nel momento in cui l’interesse è più alto, appena dopo averti scoperto.',
	},
	statistics: {
		title: 'Statistiche sugli Incassi',
		tagline: 'Guarda quanto guadagni ogni mese e quale servizio va meglio, <span class="ct-accent">direttamente in dashboard</span>.',
		metaDescription:
			'Monitora incassi mensili, prenotazioni confermate e quale servizio rende di più, direttamente nella dashboard di clickTarot Calendar.',
		painPoint:
			'Se gestisci i consulti come un’attività vera, devi sapere se sta davvero funzionando: quale servizio vale il tuo tempo, se questo mese è andato meglio del precedente, se una campagna coupon ha ripagato. Estrarre questi dati da un foglio di calcolo da aggiornare a mano è una fatica che quasi nessuno fa davvero.',
		howItWorks:
			'Ogni prenotazione confermata e ogni pagamento vengono tracciati in automatico. La tua dashboard mostra incasso totale, incasso da sedute singole rispetto ai pacchetti, prenotazioni confermate, tasso di cancellazione, un andamento mese per mese e una ripartizione per singolo calendario, nessuna contabilità manuale.',
		benefit:
			'Puoi prendere decisioni vere (alzare un prezzo, ritirare un servizio che non rende, puntare su ciò che funziona) basandoti su numeri reali invece che su una sensazione. Vale più di quanto costi il plugin da solo.',
	},
	addToCalendar: {
		title: 'Aggiungi al Calendario',
		tagline: 'Il cliente se lo aggiunge da solo, <span class="ct-accent">con un tocco</span>.',
		metaDescription:
			'clickTarot Calendar aggiunge un link "Aggiungi al calendario" nell’email di conferma: file .ics universale più un link diretto per Google Calendar.',
		painPoint:
			'Un appuntamento confermato via email che il cliente non trascrive da nessuna parte è un appuntamento che si dimentica facilmente, soprattutto se prenotato con settimane di anticipo. Il risultato è un no-show: una sedia vuota che potevi vendere a qualcun altro.',
		howItWorks:
			'Ogni email di conferma e di promemoria include un link "Aggiungi al calendario": un file .ics che funziona con qualunque app di calendario (iPhone/Apple Calendar, Outlook, Google), più un secondo link diretto pensato per chi usa Google Calendar. Il cliente clicca una volta, e l’appuntamento è già segnato.',
		benefit:
			'Meno dimenticanze, meno "scusa, a che ora era la mia consulenza?" all’ultimo minuto, meno sedie vuote che nessuno ha pagato. Un dettaglio piccolo, che si nota solo quando manca.',
	},
	csvExport: {
		title: 'Esportazione CSV delle Prenotazioni',
		tagline: 'Tutti i tuoi incassi, <span class="ct-accent">pronti per il commercialista</span>.',
		metaDescription:
			'Esporta tutte le tue prenotazioni in un file CSV pronto per Excel o per il tuo commercialista, senza limiti di riga.',
		painPoint:
			'A fine mese ricostruisci a mano quanto hai incassato, da quali clienti, con quali coupon applicati? Copiare numeri da uno schermo a un foglio di calcolo è il tipo di lavoro che rimandi finché non diventa un problema più grande, tipo la dichiarazione dei redditi.',
		howItWorks:
			'Un bottone "Esporta CSV" nella pagina Prenotazioni scarica in un file tutti i dati di fatturazione, contatto e pagamento delle prenotazioni che rispettano i filtri scelti (calendario, stato), senza il limite di righe della vista a schermo. Lo apri in Excel, Google Sheets, o lo giri direttamente al tuo commercialista.',
		benefit:
			'La contabilità smette di essere un lavoro di ricopiatura manuale. Un file, tutti i dati che ti servono, pronto quando ti serve, non solo a fine anno.',
	},
};

export default it;
