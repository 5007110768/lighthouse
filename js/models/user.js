let User = function(id, email, firstName, lastName, age, description, interests, partnerPreferences, photos, matches) {
    this.id  = id; // Number
    this.email = email; // String
    this.firstName = firstName; // String
    this.lastName = lastName; // String
    this.age = age; // Number
    this.description = description; // String
    this.interests = interests; // Interests object
    this.partnerPreferences = partnerPreferences; // Interests object
    this.photos = photos; // Array of img urls or img data files
    this.matches = matches; // Array of userId's
};