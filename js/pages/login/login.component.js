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

    Login.data = new Vue({
        el: '#login',
        data: {
            'email': '',
            'password': ''
        }
    });
};

Login.submitRequest = function() {
    console.log('Login.submitRequest');

    //TODO: app secret is 'cmdamsterdam' :: REMOVE BEFORE PRODUCTION ::

    let _hash = Login.data.email + Login.data.password + 'cmdamsterdam';
    console.log('hash', _hash);

    LH.DataProvider.authenticate(_hash).then(
        (result) => {
            let data = JSON.parse(result);
            console.log('result:', data);
            nav.navigate('#/profile/' + data.userId);

        },
        (err) => {
            alert('Unable to register account:', err);
            throw 'err';
        }
    );
};
