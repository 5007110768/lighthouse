let Profile = LH.profileComponent = {};

Profile.init = function() {
    Page.load('pages/profile/profile.html').then(
        () =>  Profile.load(),
        (err) => { throw err; }
    );
};

Profile.load = function() {
    console.log('Profile.load');

    let test = new Vue({
        el: '#profile',
        data: {
            test: 'My profile'
        }
    });

    LH.DataProvider.getUserProfile().then(
        (result) => { console.log('Result: ', result) },
        (err) => { throw err; }
    );
};

