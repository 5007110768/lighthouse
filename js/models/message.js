let Message = function(id, text, creationDate, conversationId, userId ) {
    this.id = id;
    this.text = text; // String
    this.creationDate = new Date(date); // Date
    this.conversationId = conversationId; // Number
    this.userId = userId; // (owner) Number
};

// deze id komt overeen met de messageId die in conversation zit onder messages.
// Als ik dus een 'conversation' van de server ophaal krijg ik o.a. een array terug van messages met daarin id's van alle messages
// Vervolgens ga ik aan de client side deze id's weer gebruiken om de juiste messages op te vragen van de server met een GET request
// en deze in de chat pagina te jassen
// Aan de client kant kan ik dan op basis van de 'user id' in een message object kijken of deze overeen komt met de 'active user id'.
// Alle messages van de user worden dan rechts uitgelijnd :) Maar, is er niet een column nodig om het bericht daadwerkelijk op te slaan?
// check
// nevermind kan niet vinden. Maar ik kan gewoon maken wat jij aangeeft, dan kunnen we dat morgen sowieso al gebruiken. Zonder
// enige data erin kunnen we altijd nog dingen toevoegen en verwijderen ( kan ik inmiddels)
// OH one more thing, moet een PRIMARY key niet altijd INT zijn? not null auto_increment? Alle id's (primary keys) zijn toch int's?