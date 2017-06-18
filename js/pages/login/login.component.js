let Login = LH.loginComponent = {};

Login.init = function() {
    Page.load('pages/login/login.html').then(
        () =>  Login.load(),
        (err) => { throw err; }
    );
};

Login.load = function() {
    console.log('Login.load');

    let navOptions = { 'allowNavigation': false, 'allowSettings': false };

    LH.navigation.titleBar.title = 'Log in';

};