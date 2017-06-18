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
};

