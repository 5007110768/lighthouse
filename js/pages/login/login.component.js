let Login = LH.loginComponent = {};

Login.init = function() {
    Page.load('pages/login/login.html').then(
        () =>  Login.load(),
        (err) => { throw err; }
    );
};

Login.load = function() {
    console.log('Login.load');

    LH.navigation.titleBar.title = 'Log in';
    LH.navigation.titleBar.allowBack = false;
    LH.navigation.titleBar.allowSettings = false;

    Login.data = new Vue({
        el: '#login-page',
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
            result = JSON.parse(result);
            console.log(result);

            // Set server response data to user object, only using the user id and permissionLvl
            LH.DataProvider.activeUser = new User();
            LH.DataProvider.activeUser.set(result.data[0]);
            LH.DataProvider.saveActiveUser();

            // Save new token in local storage
            LH.DataProvider.saveToken(result._token);

            console.log('Active user id: ' + LH.DataProvider.activeUser.id, 'permissionLvl: ' + LH.DataProvider.activeUser.permission);
            nav.navigate('#/profile/' + LH.DataProvider.activeUser.id);

        },
        (err) => {
            alert('Unable to register account:', err);
            throw 'err';
        }
    );
};
