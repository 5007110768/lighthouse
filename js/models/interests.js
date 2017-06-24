let Interests = function(travel, sports, movies, goingOut) {
    let self = this;

    this.travel = travel;
    this.sports = sports;
    this.movies = movies;
    this.goingOut = goingOut;

    this.set = function(serverResponseObject) {
        serverResponseObject.travel = self.travel;
        serverResponseObject.sports = self.sports;
        serverResponseObject.movies = self.movies;
        serverResponseObject.goingOut = self.goingOut;
    };
};