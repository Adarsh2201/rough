var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;

} ;
util.inherits(Person,events.EventEmitter);
var james = new Person('james');
var mary = new Person('mary');
var ra = new Person ('ra');
var people=[james,mary,ra];
