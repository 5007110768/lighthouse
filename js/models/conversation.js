let Conversation = function(userId, creationDate, partnerId, messages) {
    let self = this;

    this.id = new Date().getTime();
    this.userId = userId; // Number
    this.creationDate = new Date(creationDate); // Date
    this.partnerId = partnerId; // Array of userId's
    this.messages = []; // Array of message objects

    this.set = function(responseMessages) {
        // Set creationDate as first messages' creation data
        this.creationDate = responseMessages[0].creationDate;

        // Set partnerId as first messages' partnerId
        this.partnerId = responseMessages[0].participant;

        // Inject responseMessages into messages array
        for (let i = 0; i < responseMessages.length; i++) {
            let msg = responseMessages[i];
            self.messages.push(new Message(msg.ID, msg.message, msg.creationDate, self.id, msg.userID));
        }

    }
};