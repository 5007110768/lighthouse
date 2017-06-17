let Profile = LH.profileComponent = {};

Profile.init = function() {
    Page.load('app', 'pages/profile/profile.html').then(
        () =>  Profile.load(),
        (err) => { throw err; }
    );
};

Profile.load = function() {
    console.log('Load profile page');

    let test = new Vue({
        el: '#profile',
        data: {
            test: 'Hallo'
        }
    });

    LH.DataProvider.getUserProfile().then(
        (result) => { console.log('Result: ', result) },
        (err) => { throw err; }
    );
};

