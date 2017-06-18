let Chat = LH.chatComponent = {};

Chat.init = function() {
    Page.load('pages/chat/chat.html').then(
        () =>  Chat.load(),
        (err) => { throw err; }
    );
};

Chat.load = function() {
    console.log('Chat.load');

    LH.navigation.titleBar.title = 'Chat';
    LH.navigation.titleBar.allowBack = true;
    LH.navigation.titleBar.allowSettings = true;
};

