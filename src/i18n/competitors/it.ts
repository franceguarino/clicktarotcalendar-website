import type { CompetitorDictionary } from './types';

const it: CompetitorDictionary = {
	calendly: {
		eyebrow: 'Confronto',
		title: 'clickTarot Calendar vs Calendly',
		subtitle:
			'Calendly è un ottimo tool generico per meeting di ogni tipo. clickTarot Calendar è costruito specificamente per chi vende consulti a pagamento.',
		colFeature: 'Funzionalità',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Calendly',
		rows: [
			{ feature: 'Raccolta dati fatturazione (Codice Fiscale/Partita IVA, indirizzo)', clicktarot: 'Automatica, integrata nel form', competitor: 'Non prevista' },
			{ feature: 'Pacchetti prepagati multi-sessione', clicktarot: 'Incluso', competitor: 'Non disponibile' },
			{ feature: 'Colore e branding del form', clicktarot: 'Personalizzabile in un click', competitor: 'Limitato ai piani più costosi' },
			{ feature: 'Pensato per', clicktarot: 'Un singolo professionista dei consulti', competitor: 'Team e aziende di ogni settore' },
			{ feature: 'Dove gira', clicktarot: 'Sul tuo sito WordPress, i dati restano tuoi', competitor: 'Piattaforma esterna' },
			{ feature: 'Modello di prezzo', clicktarot: 'Licenza singola, senza costo per utente', competitor: 'Abbonamento mensile, spesso per posto' },
		],
		painPointsTitle: 'Cosa incontra chi lavora da solo su Calendly',
		painPointsIntro: 'Calendly è uno strumento valido — semplicemente non è pensato per chi vende consulti a pagamento come singolo professionista.',
		painPoints: [
			'I piani gratuiti e Standard limitano a poche tipologie di evento e mantengono il branding di Calendly sulla pagina di prenotazione — rimuoverlo richiede di passare a un piano pensato per i team, non per i singoli professionisti.',
			'Non esiste un campo nativo per codice fiscale, partita IVA o indirizzo di fatturazione, né un modo per generare una fattura dalla prenotazione — serve uno strumento di fatturazione separato e copiare i dati a mano.',
			'Vendere un pacchetto di sedute con un unico pagamento non è previsto: ogni prenotazione è una transazione a sé, quindi un cliente abituale paga — e tu fatturi — un appuntamento alla volta.',
		],
		ctaTitle: 'Pronto a provare qualcosa fatto apposta per te?',
		ctaBody: 'Installa clickTarot Calendar sul tuo sito WordPress in pochi minuti, senza competenze tecniche.',
		faq: [
			{
				q: 'clickTarot Calendar è davvero più economico di Calendly per un singolo consulente?',
				a: 'clickTarot Calendar è un unico piano con tutte le funzionalità incluse, comunque tu scelga di pagare — mensile, annuale o un acquisto lifetime una tantum. I piani a pagamento di Calendly sono mensili e mettono funzionalità come il branding personalizzato dietro piani più costosi — per un solo professionista, nel tempo il totale supera spesso il piano annuale o lifetime di clickTarot Calendar.',
			},
			{
				q: 'Posso raccogliere codice fiscale o partita IVA del cliente alla prenotazione, come con clickTarot Calendar?',
				a: 'Non in modo nativo. Calendly non ha un campo di fatturazione integrato, quindi serve un modulo separato o un contatto manuale successivo per raccogliere quei dati prima di poter emettere fattura.',
			},
		],
		otherComparisonsTitle: 'Scopri come ci confrontiamo con altri strumenti di prenotazione',
	},
	acuity: {
		eyebrow: 'Confronto',
		title: 'clickTarot Calendar vs Acuity Scheduling',
		subtitle:
			'Acuity Scheduling è uno strumento di prenotazione curato e ben recensito. clickTarot Calendar è costruito per un singolo professionista dei consulti, a un prezzo unico fisso.',
		colFeature: 'Funzionalità',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Acuity Scheduling',
		rows: [
			{ feature: 'Raccolta dati fatturazione (Codice Fiscale/Partita IVA, indirizzo)', clicktarot: 'Automatica, integrata nel form', competitor: 'Nessun campo dedicato — bisogna costruirsi un modulo personalizzato generico' },
			{ feature: 'Pacchetti prepagati multi-sessione', clicktarot: 'Incluso', competitor: 'Richiede il piano Standard (circa 27$/mese con fatturazione annuale) o superiore' },
			{ feature: 'Colore e branding del form', clicktarot: 'Personalizzabile in un click', competitor: 'Il branding di Acuity resta finché non si passa al piano Premium (circa 49$/mese con fatturazione annuale)' },
			{ feature: 'Pensato per', clicktarot: 'Un singolo professionista dei consulti', competitor: 'Da attività singole a multi-sede, con prezzo basato sul numero di calendari' },
			{ feature: 'Dove gira', clicktarot: 'Sul tuo sito WordPress, i dati restano tuoi', competitor: 'Piattaforma esterna' },
			{ feature: 'Modello di prezzo', clicktarot: 'Licenza singola, senza costo per utente', competitor: 'Abbonamento mensile, il piano di prezzo determina quali funzionalità ottieni' },
		],
		painPointsTitle: 'Cosa incontra chi lavora da solo su Acuity Scheduling',
		painPointsIntro: 'Acuity è uno strumento costruito bene e con recensioni complessivamente solide — ma ci sono alcune cose da sapere prima di scegliere un piano.',
		painPoints: [
			'Per avere i pacchetti multi-sessione serve il piano Standard, circa 27$/mese con fatturazione annuale — il piano base Starter non li include.',
			'Rimuovere il branding di Acuity dalla pagina di prenotazione richiede il piano Premium, circa 49$/mese con fatturazione annuale.',
			'Le recensioni su Capterra e G2 sono complessivamente alte per Acuity (4,7-4,8/5), ma alcune recensioni più basse segnalano una curva di apprendimento ripida e "tecnica", e un supporto che non sempre è all’altezza della qualità del prodotto.',
			'Su Trustpilot il quadro cambia in modo netto — circa 1,5/5, con recensioni che segnalano errori durante la prenotazione e codici pacchetto che non rispettano correttamente i limiti di sedute. È un divario da conoscere prima di impegnarsi, anche se da solo non racconta tutta la storia.',
		],
		ctaTitle: 'Pronto a provare qualcosa fatto apposta per te?',
		ctaBody: 'Installa clickTarot Calendar sul tuo sito WordPress in pochi minuti, senza competenze tecniche.',
		faq: [
			{
				q: 'Acuity Scheduling permette di vendere pacchetti prepagati nel piano più economico?',
				a: 'No — i pacchetti multi-sessione sono disponibili solo dal piano Standard in su, circa 27$/mese con fatturazione annuale. clickTarot Calendar include i pacchetti prepagati nella licenza singola, senza bisogno di upgrade.',
			},
			{
				q: 'Perché le recensioni di Acuity su Trustpilot sono così diverse da quelle su G2 o Capterra?',
				a: 'Acuity ha punteggi alti su G2 (circa 4,7/5) e Capterra (circa 4,8/5), ma si ferma a circa 1,5/5 su Trustpilot, dove le recensioni segnalano errori di prenotazione e codici pacchetto che non rispettano correttamente i limiti. Vale la pena leggere qualche recensione su ciascuna piattaforma prima di decidere — meglio farsi un’idea diretta che fidarsi solo della nostra parola.',
			},
		],
		otherComparisonsTitle: 'Scopri come ci confrontiamo con altri strumenti di prenotazione',
	},
	simplybook: {
		eyebrow: 'Confronto',
		title: 'clickTarot Calendar vs SimplyBook.me',
		subtitle:
			'SimplyBook.me copre molti tipi di attività attraverso un marketplace di componenti aggiuntivi a pagamento. clickTarot Calendar include esattamente ciò che serve, fin dal primo giorno.',
		colFeature: 'Funzionalità',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'SimplyBook.me',
		rows: [
			{ feature: 'Raccolta dati fatturazione (Codice Fiscale/Partita IVA, indirizzo)', clicktarot: 'Automatica, integrata nel form', competitor: 'Non nativa — richiederebbe uno degli slot limitati di "funzionalità personalizzate" a pagamento per un modulo generico' },
			{ feature: 'Pacchetti prepagati multi-sessione', clicktarot: 'Incluso', competitor: 'Una delle "funzionalità personalizzate" a pagamento con un tetto per piano — compete con le altre funzionalità per quello slot' },
			{ feature: 'Colore e branding del form', clicktarot: 'Personalizzabile in un click', competitor: 'Il branding completamente personalizzato è riservato al piano Premium (circa 50€/mese) o superiore' },
			{ feature: 'Pensato per', clicktarot: 'Un singolo professionista dei consulti', competitor: 'Prenotazioni generiche per molti tipi di attività, costruito attorno a un marketplace di funzionalità' },
			{ feature: 'Dove gira', clicktarot: 'Sul tuo sito WordPress, i dati restano tuoi', competitor: 'Piattaforma esterna' },
			{ feature: 'Modello di prezzo', clicktarot: 'Licenza singola, senza costo per utente', competitor: 'Piano mensile calcolato su prenotazioni, operatori e numero di componenti aggiuntivi attivi' },
		],
		painPointsTitle: 'Cosa incontra chi lavora da solo su SimplyBook.me',
		painPointsIntro: 'SimplyBook.me offre moltissimo attraverso il suo marketplace di componenti aggiuntivi — il compromesso è che quasi nulla è incluso di default.',
		painPoints: [
			'Quasi tutte le funzionalità che contano per un’attività di consulti — campi personalizzati, pacchetti, coupon — non sono incluse di default: sono "funzionalità personalizzate" da un marketplace di decine di componenti aggiuntivi a pagamento, e ogni piano limita quante puoi attivarne insieme (solo 1 nel piano gratuito, 3 nel Basic).',
			'Questo significa che nei piani base spesso devi scegliere tra avere i pacchetti o avere i coupon, non entrambi — un compromesso che clickTarot Calendar non impone, perché pacchetti e coupon sono entrambi inclusi fin dal primo giorno.',
			'Le recensioni su G2 e Capterra — inclusa quella di una persona con oltre 15 anni di esperienza UX/sviluppo — descrivono la configurazione iniziale come confusa proprio perché è difficile capire quali delle tante funzionalità aggiuntive siano effettivamente attive.',
			'Il branding completamente personalizzato (rimuovere il nome di SimplyBook.me) è limitato al piano Premium e superiori, circa 50€/mese con fatturazione annuale.',
		],
		ctaTitle: 'Pronto a provare qualcosa fatto apposta per te?',
		ctaBody: 'Installa clickTarot Calendar sul tuo sito WordPress in pochi minuti, senza competenze tecniche.',
		faq: [
			{
				q: 'Posso usare il piano gratuito di SimplyBook.me per vendere pacchetti prepagati e offrire coupon sconto insieme?',
				a: 'Non facilmente — il piano gratuito permette solo 1 "funzionalità personalizzata" attiva, e sia i pacchetti che i coupon sono componenti aggiuntivi a pagamento separati, quindi in genere devi sceglierne uno. clickTarot Calendar include entrambi nella licenza singola.',
			},
			{
				q: 'Il prezzo di SimplyBook.me è facile da prevedere in anticipo?',
				a: 'Non del tutto — il costo mensile dipende dal volume di prenotazioni, dal numero di operatori e da quanti componenti aggiuntivi a pagamento attivi, quindi il prezzo finale può risultare più alto della cifra di partenza pubblicizzata. clickTarot Calendar è un unico piano fisso — mensile, annuale o lifetime — allo stesso prezzo indipendentemente dal numero di prenotazioni.',
			},
		],
		otherComparisonsTitle: 'Scopri come ci confrontiamo con altri strumenti di prenotazione',
	},
	tidycal: {
		eyebrow: 'Confronto',
		title: 'clickTarot Calendar vs TidyCal',
		subtitle:
			'TidyCal è uno strumento di prenotazione genuinamente economico e ben recensito. clickTarot Calendar è costruito specificamente per un singolo professionista dei consulti, integrato nel tuo sito WordPress.',
		colFeature: 'Funzionalità',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'TidyCal',
		rows: [
			{ feature: 'Raccolta dati fatturazione (Codice Fiscale/Partita IVA, indirizzo)', clicktarot: 'Automatica, integrata nel form', competitor: 'Nessun campo dedicato — generare una fattura richiede un’integrazione separata' },
			{ feature: 'Pacchetti prepagati multi-sessione', clicktarot: 'Incluso', competitor: 'Incluso anche nel piano gratuito' },
			{ feature: 'Branding del form', clicktarot: 'Personalizzabile in un click', competitor: 'Il branding di TidyCal resta visibile sulla pagina anche nei piani a pagamento' },
			{ feature: 'Supporto multi-valuta', clicktarot: 'I campi di fatturazione si adattano automaticamente per paese', competitor: 'Una sola valuta attiva alla volta' },
			{ feature: 'Pensato per', clicktarot: 'Un singolo professionista dei consulti', competitor: 'Prenotazioni generiche; i piani team/agenzia secondo le recensioni non scalano come promesso' },
			{ feature: 'Dove gira', clicktarot: 'Sul tuo sito WordPress, i dati restano tuoi', competitor: 'Piattaforma esterna' },
			{ feature: 'Modello di prezzo', clicktarot: 'Licenza singola, senza costo per utente', competitor: 'Piani a pagamento singolo una tantum o abbonamento mensile — ogni membro del team aggiuntivo richiederebbe una licenza a pagamento separata secondo le recensioni' },
		],
		painPointsTitle: 'Cosa incontra chi lavora da solo su TidyCal',
		painPointsIntro: 'TidyCal ha un prezzo onesto e non lesina su pagamenti o pacchetti come fanno altri strumenti — ma ci sono alcuni limiti reali da conoscere prima di impegnarsi.',
		painPoints: [
			'Non esiste un campo dedicato per codice fiscale, partita IVA o indirizzo di fatturazione, né un modo integrato per generare una fattura — serve un’integrazione separata per gestire questo passaggio.',
			'Il branding di TidyCal resta visibile sulla pagina di prenotazione anche nei piani a pagamento — le recensioni su Capterra segnalano specificamente il logo che resta e, a volte, ostacola l’interfaccia.',
			'È attiva una sola valuta alla volta, un limite reale segnalato dalle recensioni per chi riceve prenotazioni da clienti che pagano in valute diverse.',
			'Il nome del piano "Agency" lascia intendere che sia pensato per i team, ma le recensioni segnalano che ogni membro aggiuntivo del team richiede una propria licenza a pagamento separata — un costo che non è ovvio finché non lo si sta già usando.',
		],
		ctaTitle: 'Pronto a provare qualcosa fatto apposta per te?',
		ctaBody: 'Installa clickTarot Calendar sul tuo sito WordPress in pochi minuti, senza competenze tecniche.',
		faq: [
			{
				q: 'TidyCal è davvero un pagamento unico invece di un abbonamento, a differenza di clickTarot Calendar?',
				a: 'In realtà anche clickTarot Calendar offre un’opzione lifetime a pagamento unico, oltre a quella mensile e annuale, quindi non sei vincolato a un abbonamento in nessuno dei due casi. La vera differenza è cosa include: clickTarot Calendar ha la raccolta automatica di Codice Fiscale/Partita IVA e dati di fatturazione integrata fin dal primo giorno, su ogni piano, cosa che TidyCal non ha in modo nativo.',
			},
			{
				q: 'TidyCal raccoglie codice fiscale o partita IVA del cliente alla prenotazione, come fa clickTarot Calendar?',
				a: 'No — TidyCal non ha un campo di fatturazione/fiscale integrato, quindi dovresti collegare uno strumento di fatturazione separato e raccogliere quei dati manualmente prima di poter fatturare correttamente.',
			},
		],
		otherComparisonsTitle: 'Scopri come ci confrontiamo con altri strumenti di prenotazione',
	},
	booknetic: {
		eyebrow: 'Confronto',
		title: 'clickTarot Calendar vs Booknetic',
		subtitle:
			'Booknetic è un plugin di prenotazione WordPress generico usato da saloni, cliniche e agenzie. clickTarot Calendar è costruito specificamente attorno al flusso di lavoro di un singolo professionista dei consulti.',
		colFeature: 'Funzionalità',
		colClicktarot: 'clickTarot Calendar',
		colCompetitor: 'Booknetic',
		rows: [
			{ feature: 'Raccolta dati fatturazione (Codice Fiscale/Partita IVA, indirizzo)', clicktarot: 'Automatica, inclusa nella licenza singola', competitor: 'Solo nel piano Premium (149$/anno o 599$ a vita) — non nei piani Basic o Standard' },
			{ feature: 'Codici sconto', clicktarot: 'Incluso', competitor: 'Anche questi limitati al piano Premium — assenti nei piani più economici' },
			{ feature: 'Pensato per', clicktarot: 'Un singolo professionista dei consulti', competitor: 'Uso generico, multi-settore (saloni, cliniche, agenzie)' },
			{ feature: 'Dove gira', clicktarot: 'Sul tuo sito WordPress', competitor: 'Anche sul tuo sito WordPress — stesso modello di hosting di clickTarot Calendar' },
			{ feature: 'Modello di prezzo', clicktarot: 'Un piano, tutte le funzionalità incluse — mensile, annuale o lifetime', competitor: 'Prezzo a livelli — i piani più economici (45-99$/anno) escludono funzionalità probabilmente necessarie' },
			{ feature: 'Supporto', clicktarot: 'Incluso con la licenza', competitor: '6-12 mesi inclusi a seconda del canale d’acquisto, poi rinnovo a pagamento' },
		],
		painPointsTitle: 'Cosa incontra chi lavora da solo su Booknetic',
		painPointsIntro: 'Booknetic vende bene e ha un punteggio alto sul proprio marketplace — ma ci sono alcune cose da sapere prima di scegliere un piano.',
		painPoints: [
			'I campi di fatturazione/fiscali e i codici sconto non sono inclusi nei piani più economici — sono bloccati dietro il piano Premium (149$/anno o 599$ a vita), quindi il prezzo d’ingresso pubblicizzato di 45-99$/anno non include ciò che probabilmente serve a uno studio di consulenza.',
			'Una recensione su Capterra da un’attività di centro benessere segnala che il sistema ha accettato doppie prenotazioni pagate sovrapposte per la stessa risorsa su un sito live, con un supporto lento e generico anche dopo aver segnalato il problema come urgente.',
			'Le recensioni descrivono la necessità di "numerosi componenti aggiuntivi costosi per la piena funzionalità" — un utente ha riportato una spesa totale di oltre 520$ definendo il rapporto qualità-prezzo "scarso".',
			'Il supporto è incluso per 6-12 mesi a seconda del canale d’acquisto, poi diventa un rinnovo a pagamento — un modello diverso da una licenza che include supporto e aggiornamenti continuativi.',
		],
		ctaTitle: 'Pronto a provare qualcosa fatto apposta per te?',
		ctaBody: 'Installa clickTarot Calendar sul tuo sito WordPress in pochi minuti, senza competenze tecniche.',
		faq: [
			{
				q: 'Booknetic include la fatturazione e la raccolta dati fiscali come fa clickTarot Calendar?',
				a: 'Solo nel piano Premium (149$/anno o 599$ a vita) — i piani più economici Basic e Standard non la includono. clickTarot Calendar include la raccolta automatica di Codice Fiscale/Partita IVA e indirizzo nella licenza singola, senza bisogno di upgrade.',
			},
			{
				q: 'Booknetic è pensato specificamente per i professionisti dei consulti come clickTarot Calendar?',
				a: 'No — Booknetic è un plugin di prenotazione generico rivolto a saloni, cliniche, agenzie e molti altri tipi di attività. clickTarot Calendar è costruito specificamente attorno al flusso di lavoro di un singolo professionista dei consulti: cartomanti, astrologi, counselor.',
			},
		],
		otherComparisonsTitle: 'Scopri come ci confrontiamo con altri strumenti di prenotazione',
	},
};

export const bookneticSaasClarification = {
	eyebrow: 'Non un confronto diretto',
	title: 'Booknetic SaaS è come Calendly? Non proprio',
	subtitle:
		'Booknetic SaaS risolve un problema diverso da clickTarot Calendar. Ecco cos’è realmente — e dove guardare se stai confrontando strumenti di prenotazione per il tuo studio.',
	whatItIsTitle: 'Cos’è realmente Booknetic SaaS',
	whatItIsBody:
		'Booknetic SaaS non è uno strumento per gestire i tuoi appuntamenti — è una piattaforma white-label per costruire e rivendere un’attività di software di prenotazione ad altre aziende. Lo installi, poi iscrivi altre attività come "tenant" paganti, ognuna con il proprio sistema di prenotazione sotto il tuo marchio. È pensato per imprenditori che lanciano un prodotto SaaS, non per cartomanti, astrologi o consulenti che ricevono prenotazioni dai propri clienti.',
	whyNotFitTitle: 'Perché non forziamo un confronto a tabella',
	whyNotFitBody:
		'Se stai confrontando strumenti per gestire gli appuntamenti dei tuoi clienti, Booknetic SaaS risolve un problema completamente diverso — e ha un prezzo diverso, con piani pensati per gestire un’attività di rivendita multi-tenant, non uno studio singolo. Una tabella funzionalità-per-funzionalità contro clickTarot Calendar non sarebbe un confronto onesto, quindi non ne inventiamo uno.',
	realComparisonLabel: 'Guarda il nostro confronto reale con il plugin WordPress di Booknetic',
	ctaTitle: 'clickTarot Calendar è pensato esattamente per questo: gestire le tue prenotazioni',
	ctaBody: 'Un solo plugin, sul tuo sito WordPress, con un prezzo pensato per uno studio di consulenza singolo — non per un’attività di rivendita.',
};

export default it;
