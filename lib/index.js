var Alea = require('alea');
var names = require('./names');

var _getName = function(random, which) {
  var list = names[which];
  var idx = (random() * list.length) >>> 0;
  return list[idx];
};

var _getFirstName = function(random, options) {
  var gender = options.gender;
  if (gender !== 'male' && gender !== 'female') {
    if (options.female) { gender = "female"; }
    else if (options.male) { gender = "male"; }
    else {
      gender = (random() < 0.5 ? "male" : "female");
    }
  }
  return _getName(random, "first_" + gender);
};

var _getLastName = function(random) {
  return _getName(random, "last");
};

var getName = function(options) {
  options = options || {};
  var random = options.random ||
      (options.seed ? new Alea(options.seed) : new Alea());

  if (options.first || options.male || options.female) {
    return _getFirstName(random, options);
  }
  if (options.last) {
    return _getLastName(random);
  }
  return _getFirstName(random, options) + " " + _getLastName(random);
};

module.exports = getName;

if (false) {
  /* self-test: validate names */
  [names.first_male,names.first_female,names.last].forEach(function(arr) {
    arr.forEach(function(n) {
      if (!/^[A-Z][a-z]*$/.test(n)) { console.log(n); }
    });
  });
}
