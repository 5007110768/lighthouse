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

    // TODO: retrieve this data through the DataProvider > with a placeholder from localStorage for fast rendering
    Profile.data = new Vue({
        el: '#profile-page',
        data: {
            'name': 'N/A',
            'age': 'N/A',
            'description': 'N/A',
            'interests': [],
            'matches': [],
            'photos': [],
            'partnerPreferences': []
        }
    });

    // TODO: DataProvider.getUserProfile needs to return in the DataProvider, then return a new promise to be thennable
    LH.DataProvider.getUserProfile(userId).then(
        (result) => {
            let data = JSON.parse(result[0]);
            console.log('Result: ', data);

            // Assign retrieved data to DOM through vue
            Profile.data.name = data.firstName + ' ' + data.lastName;
            Profile.data.age = data.age;
            Profile.data.description = data.description;
            Profile.data.interests = data.interests;
            Profile.data.matches = data.matches;
            Profile.data.photos = data.photos;
            Profile.data.partnerPreferences = data.partnerPreferences;
        },
        (err) => { throw err; }
    );
};

