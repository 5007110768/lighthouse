let Settings = LH.registerComponent = {};

Settings.init = function(userId) {
    Page.load('pages/settings/settings.html').then(
        () =>  Settings.load(userId),
        (err) => { throw err; }
    );
};

Settings.load = function(userId) {
    console.log('Settings.load', userId);

    LH.navigation.titleBar.title = 'Instellingen';
    LH.navigation.titleBar.allowBack = true;
    LH.navigation.titleBar.allowSettings = false;

    Settings.data = new Vue({
        el: '#settings-page',
        data: {
            'interests': new Interests(),
            'email': '',
            'oldPassword': '',
            'newPassword': '',
            'newPasswordConfirm': ''
        }
    });

    LH.DataProvider.getUserProfile(userId).then(
        (result) => {
            let data = JSON.parse(result);
            console.log(data);
            // Set server response data to user object
            Settings.data.interests.set(data[0]);
            Settings.data.email = data[0].email;
            console.log(Settings.data);
        },
        (err) => { throw err; }
    );
};

Settings.savePartnerPreferences = function() {
    console.log('Settings.savePartnerPreferences');



};

Settings.changeAccountDetails = function() {
    console.log('Settings.changeAccountDetails');

    if (Settings.data.newPassword != Settings.data.newPasswordConfirm) {
        alert('New passwords do not match');
        throw 'New passwords do not match';
    }

    let data = {
        'hash': Settings.data.email + Settings.data.oldPassword + 'cmdamsterdam',
        'newHash': Settings.data.email + Settings.data.newPassword + 'cmdamsterdam'
    };

    LH.DataProvider.changeAccountSettings(data).then(
        (result) => {
            console.log('result: ', result);
            alert('Account details have successfully been changed. Please log in again with your new credentials');
            Settings.logOut();
        },
        (err) => {
            alert('Unable to change account details: ' + err);
        }
    );
};

Settings.logOut = function() {
    console.log('Settings.logOut');

    localStorage.removeItem('token');
    nav.navigate('#/login');
};

Settings.deleteAccount = function() {
    console.log('Settings.deleteAccount');

    LH.DataProvider.deleteAccount(LH.DataProvider.activeUser.id).then(
        (result) => {
            alert('Account deleted: ' + result);
            Settings.logOut();
        },
        (err) => {
            alert('Something went wrong: ' + err);
        }
    );
};
