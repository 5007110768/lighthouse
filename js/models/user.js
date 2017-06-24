let User = function(id, email, firstName, lastName, gender, dateOfBirth, description, interests, partnerPreferences, photos, matches, permission) {
    var self = this;

    this.id  = id; // Number
    this.email = email; // String
    this.firstName = firstName; // String
    this.lastName = lastName; // String
    this.gender = gender; // String
    this.age = new Date; // Date
    this.description = description; // String
    this.interests = interests || []; // Interests object
    this.partnerPreferences = partnerPreferences || []; // Interests object
    this.photos = photos || []; // Array of img urls or img data files
    this.matches = matches || []; // Array of userId's
    this.permission = permission; // Number (int)

    // Assign values of server object to user object
    this.set = function(serverResponseObject) {
        // Calculate age
        let dateOfBirth = new Date(serverResponseObject.dateOfBirth).getTime();
        let thisYear = new Date().getTime();
        let ms = thisYear-dateOfBirth;
        let age = new Date(ms).getFullYear() - 1970;

        self.id = serverResponseObject.ID;
        self.email = serverResponseObject.email;
        self.firstName = serverResponseObject.firstName;
        self.lastName = serverResponseObject.lastName;
        self.gender = serverResponseObject.gender;
        self.age = age;
        self.description = serverResponseObject.description;
        self.interests = serverResponseObject.interests;
        self.partnerPreferences = serverResponseObject.partnerPreferences;
        self.photos = serverResponseObject.photos;
        self.matches = serverResponseObject.matches;
        self.permission = serverResponseObject.permissionLvl;
    };

    this.isOwner = function(requestedUserId) {
      return requestedUserId == self.id;
    };

    this.isAllowedAccess = function(requestedUserId) {
        if (self.isOwner(requestedUserId)) return true;

        for (var i = 0; i < self.matches.length; i++) {
            if (requestedUserId == self.matches[i]) return true;
        }
    }
};