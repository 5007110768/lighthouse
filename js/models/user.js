let User = function(id, email, firstName, lastName, gender, dateOfBirth, description, interests, partnerPreferences, photos, matches, permission) {
    this.id  = id; // Number
    this.email = email; // String
    this.firstName = firstName; // String
    this.lastName = lastName; // String
    this.gender = gender; // String
    this.dateOfBirth = new Date; // Date
    this.description = description; // String
    this.interests = interests; // Interests object
    this.partnerPreferences = partnerPreferences; // Interests object
    this.photos = photos; // Array of img urls or img data files
    this.matches = matches; // Array of userId's
    this.permission = permission; // Number (int)
};

//Elke waarde in die rij moet corresponderen met een row in je table.
// Dus je krijgt een table users - hier komen al je users in met de kolommment id, email, firstname, lastname etc.
//I know maar je hebt boven user staan en uuhm, tables zijn enkelvoud ook al is het meervoud?
// Oh is dat zo? In dat geval noem je je table user, Hierboven heet het user omdat dit een object model is voor een enkele user. ah oke

// aanschouw:

let jamie = new User(
    1,
    'jamie@jamie.nk',
    'jamie',
    'jansen',
    'male',
    new Date(),
    'I am awesome',
    [],
    [],
    [],
    [],
    1
);

console.log(jamie.email)

// anyway. Met dit model kun je een 'constructor object' aanmaken van een user. Elke keer als we een GET request doen
// naar de server dan stop ik al die 'losse' waardes die ik terugkrijg in een nieuw User object. Dit object ram ik vervolgens
// in een object genaamd active user. Als jij dan navigeert naar een profiel gaat ie :
// A. Kijken of het profiel dat je bezoekt (de id) gelijk is aan de id van de 'active user' en
// B. Op basis van die permissies je toegang geven om shit te wijzingen
// C. Als je op een profiel van een match komt, dan is die userId niet gelijk aan de 'active user' en dus kun je die niet wijzigen.
// Klinkt dat logisch? Ja datklinkt logisch, one thing though. Ik zie geen uhm foreignkeys. om tabellen te combineren.
// Die zijn er wel :) hold up.