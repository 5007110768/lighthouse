let Profile = LH.profileComponent = {};

Profile.init = function(userId) {
    Page.load('pages/profile/profile.html').then(
        () =>  Profile.load(userId),
        (err) => { throw err; }
    );
};

Profile.load = function(userId) {
    console.log('Profile.load', 'userId:' + userId);

    LH.navigation.titleBar.title = 'Profiel';

    LH.DataProvider.getUserProfile(userId).then(
        (result) => {
            console.log('Result: ', result)
        },
        (err) => { throw err; }
    );
};

