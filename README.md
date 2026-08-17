# clickTarot Calendar — sito vetrina

Sito statico multilingua (IT/EN/DE/ES) per [clickTarot Calendar](https://checkout.freemius.com/plugin/36819/plan/61064/), il plugin WordPress di prenotazione per cartomanti, astrologi e professionisti dei consulti. Costruito con [Astro](https://astro.build), pensato per il deploy su Cloudflare Pages.

## Struttura

- `src/i18n/{it,en,de,es}.ts` — un dizionario per lingua con **tutti** i testi del sito (nav, hero, funzionalità, prezzi, confronto, FAQ, legale). È l'unico posto da modificare per aggiornare un testo.
- `src/i18n/index.ts` — elenco lingue, slug per pagina/lingua (`pagePath()`), generazione dei link hreflang alternate.
- `src/sections/*.astro` — il contenuto vero di ogni tipo di pagina (Home, Prezzi, Confronto, FAQ, Privacy, Termini), condiviso tra le 4 lingue.
- `src/pages/**/index.astro` — file sottili (pochissime righe) che scelgono la lingua e richiamano `BaseLayout` + la sezione giusta. L'italiano è in root (`src/pages/`), le altre lingue in sottocartella (`src/pages/en/`, `de/`, `es/`).
- `src/layouts/BaseLayout.astro` — `<head>`, meta tag, hreflang, Header/Footer.
- `src/config.ts` — URL di checkout Freemius ed email di contatto, in un solo posto.
- `src/styles/global.css` — token colore ripresi dal plugin (`--ct-primary` ecc.) per continuità visiva con il form di prenotazione pubblico.

## Aggiungere una pagina

1. Aggiungi la chiave in `src/i18n/types.ts` (interfaccia `Dictionary`) e il relativo contenuto nei 4 dizionari.
2. Aggiungi lo slug della pagina in `src/i18n/index.ts` (oggetto `slugs`, tipo `PageKey`).
3. Crea `src/sections/NuovaSezione.astro`.
4. Crea i 4 file pagina (uno per lingua) che richiamano `BaseLayout` + la nuova sezione.

## Comandi

| Comando | Azione |
| :--- | :--- |
| `npm install` | Installa le dipendenze |
| `npm run dev` | Avvia il server locale su `localhost:4321` |
| `npm run build` | Build statica in `./dist/` |
| `npm run preview` | Anteprima della build |

## Deploy

Cloudflare Pages, collegato a questo repository GitHub (preset "Astro", build automatica ad ogni push). Il dominio `clicktarotcalendar.com` è registrato su Cloudflare Registrar, stesso account.

## Nota sui contenuti legali

Le pagine Privacy/Termini (`src/i18n/*.ts`, chiave `legal`) sono una bozza ragionevole, non consulenza legale: da far rivedere a un professionista prima di ricevere traffico reale (obblighi GDPR per un venditore UE).
