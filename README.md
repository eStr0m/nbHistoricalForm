Dette er min Case submission til Nettbureau

Hvordan teste lokalt:
Sørg for at du har Node installert.

steg 1: pull eller last ned mappen "nbHistoricalForm".

steg 2: åpne den i din valgte editor (bruker VSCODE selv).

steg 3: Gjennom terminal, kjør "npm install" i root(nbHistoricalForm) mappen. Gjenta det samme i "server" og "historicalform" mappene.

NB: Packages skal nå være installert. Det er blant annet React.js, yup-resolver, express, CORS, axios og concurrently.

steg 4: Legg .env filen som ble sendt separat, inn i server mappen.

steg 5: Gjennom terminal, kjør først "npm run start:backend", deretter "npm run start:frontend".

OBS: Default skal backend kjøres på PORT 3000 og frontend på PORT 3001, men det hender at den ber om å kjøre på en annen. skal bare være å trykke "y" til den.

Det skal nå være tut og kjør! 
Anbefaler å ikke legge inn noen form for personlig informasjon, men bruke eksempel navn og steder for å teste applikasjonen.