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
    LH.navigation.titleBar.allowBack = false;
    LH.navigation.titleBar.allowSettings = true;

    Profile.data = new Vue({
        el: '#profile-page',
        data: new User()
    });

    LH.DataProvider.getUserProfile(userId).then(
        (result) => {
            let data = JSON.parse(result);

            // Set server response data to user object
            Profile.data.set(data[0]);
        },
        (err) => { throw err; }
    );
};

