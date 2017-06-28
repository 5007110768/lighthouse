let Message = function(id, text, creationDate, conversationId, userId) {
    this.id = id;
    this.text = text; // String
    this.creationDate = creationDate; // Date
    this.conversationId = conversationId; // Number
    this.userId = userId; // (owner) Number
};
