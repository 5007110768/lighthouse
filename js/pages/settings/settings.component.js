let Settings = LH.registerComponent = {};

Settings.init = function() {
    Page.load('pages/settings/settings.html').then(
        () =>  Login.load(),
        (err) => { throw err; }
    );
};

Settings.load = function() {
    console.log('Settings.load');


};

