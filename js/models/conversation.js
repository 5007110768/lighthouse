let Conversation = function(id, creationDate, participants, messages) {
    this.id = id; // Number
    this.creationDate = new Date(creationDate); // Date
    this.participants = participants; // Array of userId's
    this.messages = messages; // Array of message objects
};

// Je krijgt dus een tabel met conversations. En elke 'conversation' heeft messages met daarin id's naar een message
// Bedenk me net dat dit model niet helemaal een goed voorbeeld is, omdat het client side mdel iets anders is als de SQL versie.
// Okay. Dus je krijgt:

/*
Conversation

id: number (int),
creationDate: date,
participants: array van userId's - number dus
messages: array van messageId's - number


 */

// Is het zo duidelijk denk je? Of nog een beetje vaag? datamodel is super duidelijk, dat ga ik nu gewoon maken en dan kijken
// morgen na het werk na? Toppppie! Ik weet niet of je er meteen mee aan de slag gaat, maakt niet uit either way.
// Maar. Alle id's moeten gegenereert worden aan de server kant. Dus met autoincrement idd. Komt goed. awesome :0
// Ff denken of ik niet svergeetn. o - wil je deze comments bewaren? Ja kunnen we wel even laten staan. ga je nog wijzinginen
// aanbrengen in dit front-end project denk je? uh geen idee? hoe bedoel je? Nou, al deze coments worden door git gezien
// als wijzigingen. Ach weet je wat. We pushen dit gewoon, ik heb geen gekke dingen verandererd. Ik ga je git terminal leren go

// 1. ga naar terminal, tab waarin je in het project zit en type 'git status'. Daarmee kun je zien welke bestanden er veranderd zijn.
// 2. Je kunt bestanden toevoegen aan de 'stage' (bestanden die je klaarzet om te pushen) met git add FILENAME.ext
// Je kunt ook zeggenm ik voeg alles toe door git add . te typen.
// go.