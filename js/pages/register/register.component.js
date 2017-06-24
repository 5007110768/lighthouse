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
    LH.navigation.titleBar.allowBack = false;
    LH.navigation.titleBar.allowSettings = false;

    Register.data = new Vue({
        el: '#register',
        data: {
            'email': '',
            'password': '',
            'passwordConfirm': '',
            'firstName': '',
            'lastName': '',
            'dateOfBirth': '',
            'gender': '',
            'imgData': null
        }
    });
};

Register.submitRequest = function() {
    console.log('Register.submitRequest');

    if (Register.data.password !== Register.data.passwordConfirm) {
        alert('Passwords are not a match');
        return;
    }

    let data = {
        '_hash': Register.data.email + Register.data.password + 'cmdamsterdam',
        'email': Register.data.email,
        'firstName': Register.data.firstName,
        'lastName': Register.data.lastName,
        'gender': Register.data.gender,
        'dateOfBirth': Register.data.dateOfBirth,
        'description': '',
        'interests': [],
        'partnerPreferences': [],
        'photos': [],
        'matches': [],
        'permissionLvl': 1 // 0: restricted user, 1: basic user, 2: admin

    };

    let file = document.getElementById('file').files[0];
    let reader = new FileReader();

    reader.onloadend = function() {
        data.photos[0] = reader.result;
        console.log('photos', data.photos);
        LH.DataProvider.register(data).then(
            (result) => {
                result = JSON.parse(result);
                console.log('result:', result);

                // Because an sql INSERT response does not respond with the user object, but a response object
                let responseData = { 'ID': result.data.insertId, 'permissionLvl': data.permissionLvl };

                // Set server response data to user object, only using the user id and permissionLvl
                LH.DataProvider.activeUser = new User().set(responseData);
                LH.DataProvider.saveActiveUser();

                // Save new token in local storage
                LH.DataProvider.saveToken(result._token);

                console.log('Active user id: ' + LH.DataProvider.activeUser.id, 'permissionLvl: ' + LH.DataProvider.activeUser.permission);
                nav.navigate('#/profile/' + LH.DataProvider.activeUser.id);

            },
            (err) => {
                alert('Unable to log in:', err);
                throw 'err';
            }
        );

    };

    reader.readAsDataURL(file);
};

