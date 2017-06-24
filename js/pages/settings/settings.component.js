let Settings = LH.registerComponent = {};

Settings.init = function() {
    Page.load('pages/settings/settings.html').then(
        () =>  Settings.load(),
        (err) => { throw err; }
    );
};

Settings.load = function() {
    console.log('Settings.load');

    LH.navigation.titleBar.title = 'Instellingen';
    LH.navigation.titleBar.allowBack = true;
    LH.navigation.titleBar.allowSettings = false;

    Settings.data = new Vue({
        el: '#settings-page',
        data: {
            'travel': Profile.data.partnerPreferences.travel,
            'sports': Profile.data.partnerPreferences.sports,
            'movies': Profile.data.partnerPreferences.movies,
            'goingOut': Profile.data.partnerPreferences.goingOut,
            'email': Profile.data.email
        }
    });
};

Settings.logOut = function() {
    localStorage.removeItem('token');
    nav.navigate('#/login');
};
