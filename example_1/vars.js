var zeit = {
  anfangDerStory: [1980, 5, 2]
};

var held = {
  vorname: 'Fritz',
  nachname: 'Walter',
  geburtsort: 'London',
  geboren: [1965, 3, 21]
};

var functions = {
  alterAmTag : function(tag, person) {
    return tag[0] - person.geboren[0];
  },
  jahrWennPerson : function(person, alter) {
    return person.geboren[0] + alter;
  },
  formatDate : function(date) {
    return date[2] + '.' + date[1] + '.' + date[0];
  },
  geburtsdatum : function(person) {
    return functions.formatDate(person.geboren);
  }
};

exports.zeit = zeit;
exports.held = held;
exports.functions = functions;
