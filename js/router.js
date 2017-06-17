// Define routes / bootstrap app
let routes = {
    '/': function(){
        Overview.init();
    },

    '/login': function() {
        Login.init();
    },

    '/register': function() {
        Register.init();
    },

    '/profile': function() {
        Profile.init();
    },

    '/chat': function() {
        Chat.init();
    },

    '/settings': function() {
        Settings.init();
    }

};

Router(routes).init();