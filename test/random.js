var assert = require('assert');
var random_name = require('../');

var valid_name = function() {
  assert(/^[A-Z][a-z]*$/.test(this));
};
var valid_fullname = function() {
  assert(/^[A-Z][a-z]* [A-Z][a-z]*$/.test(this));
};

describe("Random test", function() {
  name1 = random_name({male:true});
  it('should return a valid male name: '+name1, valid_name.bind(name1));
  name2 = random_name({female:true});
  it('should return a valid female name: '+name2, valid_name.bind(name2));
  name3 = random_name({first:true});
  it('should return a valid first name: '+name3, valid_name.bind(name3));
  name4 = random_name({last:true});
  it('should return a valid last name: '+name4, valid_name.bind(name4));
  name5 = random_name();
  it('should return a valid full name: '+name5, valid_fullname.bind(name5));
});
