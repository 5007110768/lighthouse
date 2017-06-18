const rootPage = '/profile';

// Define routes / bootstrap app
let routes = {
    '/': function(){
        //TODO: reroute to /profile/currentUserId
        Profile.init();
    },

    '/login': function() {
        Login.init();
    },

    '/register': function() {
        Register.init();
    },

    '/profile/:userId': function(userId) {
        Profile.init(userId);
    },

    '/chat': function() {
        Chat.init();
    },

    '/settings': function() {
        Settings.init();
    },

    '/admin': function() {
        Admin.init();
    }

};

// Check if user is logged in / has active token; if true, redirect to profile otherwise redirect to login
LH.isLoggedIn = function() {
    LH.DataProvider.getToken().then(
        (result) => window.location.href = '/#' + rootPage,
        (err) => window.location.href = '/#/login'
    );
};

// Navigation
LH.navigate = function(href) {
    window.location.href = href;
};

LH.back = function() {
    window.history.back();
};

Router(routes).init();
LH.isLoggedIn();
