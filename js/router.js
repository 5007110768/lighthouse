const rootPage = '/profile';
const nav = LH.navigation = {};
let activePage = '';

let navOptions = {
    'login': { 'allowBack': false, 'allowSettings': false },
    'register': { 'allowBack': true, 'allowSettings': false },
    'profile': { 'allowBack': false, 'allowSettings': true },
    'chat': { 'allowBack': true, 'allowSettings': true },
    'settings': { 'allowBack': true, 'allowSettings': false },
    'admin': { 'allowBack': true, 'allowSettings': true }
};

// Define routes / bootstrap app
let routes = {
    '/': function(){
        //TODO: reroute to /profile/currentUserId

    },

    '/login': function() {
        Login.init();
        activePage = 'login';
    },

    '/register': function() {
        Register.init();
        activePage = 'register';
    },

    '/profile/:userId': function(userId) {
        Profile.init(userId);
        activePage = 'profile';
    },

    '/chat': function() {
        Chat.init();
        activePage = 'chat';
    },

    '/settings': function() {
        Settings.init();
        activePage = 'settings';
    },

    '/admin': function() {
        Admin.init();
        activePage = 'admin';
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
    el: '#title',
    data: {
        title: 'Lighthouse'
    },
    updated: function() {
        let back = document.getElementsByClassName('back-btn')[0];
        let settings = document.getElementsByClassName('settings-btn')[0];

        if (!navOptions[activePage].allowBack) {
            back.classList.add('inactive');
        } else {
            if (back.classList.contains('inactive')) back.classList.remove('inactive');
        }

        if (!navOptions[activePage].allowSettings) {
            settings.classList.add('inactive');
        } else {
            if (settings.classList.contains('inactive')) settings.classList.remove('inactive');
        }

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