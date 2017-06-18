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


    Profile.data = new Vue({
        el: '#profile-page',
        data: {
            'name': 'jan',
            'age': 0,
            'description': '',
            'interests': '',
            'matches': [],
            'photos': []
        }
    });

    LH.DataProvider.getUserProfile(userId).then(
        (result) => {
            let data = JSON.parse(result);
            console.log('Result: ', data);

            // Assign retrieved data to DOM through vue
            Profile.data.name = data.firstName + ' ' + data.lastName;
            Profile.data.age = data.age;
            Profile.data.description = data.description;
            Profile.data.interests = data.interests;
            Profile.data.matches = data.matches;
            Profile.data.photos = data.photos;
        },
        (err) => { throw err; }
    );
};

