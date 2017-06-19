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
        'matches': []

    };

    let file = document.getElementById('file').files[0];
    let reader = new FileReader();

    reader.onloadend = function() {
        data.photos[0] = reader.result;
        console.log('photos', data.photos);
        LH.DataProvider.register(data).then(
            (result) => {
                console.log('result:', result);

                let data = JSON.parse(result);
                nav.navigate('#/profile/' + data.userId);

            },
            (err) => {
                alert('Unable to log in:', err);
                throw 'err';
            }
        );

    };

    reader.readAsDataURL(file);
};

