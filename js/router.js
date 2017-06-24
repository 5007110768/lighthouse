const rootPage = '/profile';
const nav = LH.navigation = {};

nav.activePage = null;

// Define routes
let routes = {
    '/': function(){
        LH.DataProvider.loadActiveUser();
        console.log('active user: ', LH.DataProvider.activeUser);

        if (LH.DataProvider.activeUser) {
            nav.navigate('#/profile/' + LH.DataProvider.activeUser.id);
        } else {
            nav.navigate('#/login');
        }
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
            nav.navigate('#/login');
            return;
        }

        if (!LH.DataProvider.activeUser) LH.DataProvider.loadActiveUser();

        if (!LH.DataProvider.activeUser.isAllowedAccess(userId)) {
            alert('You do not have permission to view this page');
            nav.navigate('#/profile/' + LH.DataProvider.activeUser.id);
            return;
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