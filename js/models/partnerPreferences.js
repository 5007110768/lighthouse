let PartnerPreferences = function(gender, travel, sports, movies, goingOut) {
    let self = this;

    this.gender = gender; // Enum of m, f, or mf
    this.travel = travel;
    this.sports = sports;
    this.movies = movies;
    this.goingOut = goingOut;

    this.set = function(serverResponseObject) {
        let gender = serverResponseObject.gender;

        if (gender == 'm') self.gender = 'Mannen';
        else if (gender == 'f') self.gender = 'Vrouwen';
        else self.gender = 'Mannen/vrouwen';

        self.travel = serverResponseObject.travel;
        self.sports = serverResponseObject.sports;
        self.movies = serverResponseObject.movies;
        self.goingOut = serverResponseObject.goingOut;
    };
};