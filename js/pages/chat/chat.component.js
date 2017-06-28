let Chat = LH.chatComponent = {};

Chat.init = function(userId, partnerId) {
    Page.load('pages/chat/chat.html').then(
        () =>  Chat.load(userId, partnerId),
        (err) => { throw err; }
    );
};

Chat.load = function(userId, partnerId) {
    console.log('Chat.load');

    LH.navigation.titleBar.title = 'Chat';
    LH.navigation.titleBar.allowBack = true;
    LH.navigation.titleBar.allowSettings = true;



};

