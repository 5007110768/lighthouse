let Conversation = function(id, creationDate, participants, messages) {
    this.id = id; // Number
    this.creationDate = new Date(creationDate); // Date
    this.participants = participants; // Array of userId's
    this.messages = messages; // Array of message objects
};