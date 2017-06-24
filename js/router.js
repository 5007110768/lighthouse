const rootPage = '/profile';
const nav = LH.navigation = {};

nav.activePage = null;

// Define routes
let routes = {
    '/': function(){
        // TODO: reroute to /profile/currentUserId
    },

    '/login': function() {
        Login.init();
    },

    '/register': function() {
        Register.init();
    },

    '/profile/:userId': function(userId) {
        console.log('Stored token: ', LH.DataProvider.tokenIsValid());

        if (!LH.DataProvider.tokenIsValid()) {
            alert('Token expired, please log in again');
            window.location.href = '#/login';
            return;
        }

        if (!LH.DataProvider.activeUser) LH.DataProvider.loadActiveUser();

        if (!LH.DataProvider.activeUser.isAllowedAccess(userId)) {
            alert('You do not have permission to view this page');
            window.location.href = '#/profile/' + LH.DataProvider.activeUser.id;
        }

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
    // TODO: Check if user has valid token
    /*LH.DataProvider.getToken().then(
        (result) => window.location.href = '/#' + rootPage,
        (err) => window.location.href = '/#/login'
    );*/
};

LH.isAllowedAccess = function() {
    // TODO: Check to see if user has right permissions for given request
};

// Navigation
nav.titleBar = new Vue({
    el: '#navigation-bar',
    data: {
        title: 'Lighthouse',
        allowBack: false,
        allowSettings: false
    }
});

nav.navigate = function(href) {
    window.location.href = href;
};

nav.back = function() {
    window.history.back();
};

Router(routes).init();
//LH.isLoggedIn();

console.log('Lighthouse', LH);