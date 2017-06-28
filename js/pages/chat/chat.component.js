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

    Chat.data = new Vue({
        el: '#chat-page',
        data: {
            'conversation': [],
            'requestMsg': ''
        },
        methods: {
            isOwner: function(userId) {
                return userId == LH.DataProvider.activeUser.id ? true : false;
            }
        }
    });

    LH.DataProvider.getChat(userId, partnerId).then(
        (result) => {
            result = JSON.parse(result);
            console.log('result: ', result);

            Chat.data.conversation = new Conversation();
            Chat.data.conversation.set(result);
            console.log(Login.data);
        },
        (err) => {
            alert('Unable to retrieve chat messages: ', err);
            throw err;
        }
    );

    Chat.sendMessage = function(partnerId) {
        let msg = {
            'userId': LH.DataProvider.activeUser.id,
            'creationDate': new Date(),
            'partnerId': partnerId,
            'text': Chat.data.requestMsg
        };

        LH.DataProvider.sendMessage(msg).then(
            (result) => {
                console.log('result', result);
            },
            (err) => {
                throw err;
            }
        );


        console.log(msg);

    }
};
