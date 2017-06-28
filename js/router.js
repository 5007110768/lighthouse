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

        LH.DataProvider.isLoggedIn(userId).then(
            (result) => {
                console.log(result);
                Profile.init(userId);
            },
            (err) => { console.log(err) }
        );
    },

    'profile/:userId/chat/:partnerId': function(userId, partnerId) {

        LH.DataProvider.isLoggedIn(userId).then(
            (result) => {
                console.log(result);
                Chat.init(userId, partnerId);
            },
            (err) => { console.log(err) }
        );


    },

    '/profile/:userId/settings': function(userId) {
        LH.DataProvider.isLoggedIn(userId).then(
            (result) => {
                console.log(result);
                Settings.init(userId);
            },
            (err) => { console.log(err) }
        );

    },

    '/admin': function() {
        Admin.init();
    }
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