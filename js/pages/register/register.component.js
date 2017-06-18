let Register = LH.registerComponent = {};

Register.init = function() {
    Page.load('pages/register/register.html').then(
        () =>  Register.load(),
        (err) => { throw err; }
    );
};

Register.load = function() {
    console.log('Register.load');

    LH.navigation.titleBar.title = 'Registreer';
};

