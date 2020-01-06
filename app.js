// Episode 8 - Node Event Emitter
var events = require("events");

// var util = require('util');
/* looks good, doesn't work */

class Person extends events.EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }
}

var James = new Person("James");
var Jono = new Person("Jono");
var King = new Person("King");

var people = [James, Jono, King];

people.forEach(function(person) {
  person.on("speak", function(msg) {
    console.log("Big man " + person.name + " said: " + msg + ", bruv");
  });
});

// In order for the event to be called, It needs to be emitted
James.emit("speak", "What shoes are those");
King.emit("speak", "Deez are balenciagas");

// util.inherits is not recommeded in the node versions.
// util.inherits(Person, events.EventEmitter());

// Use event emitter to react to certain events
// var myEmitter = new events.EventEmitter();

// listening for 'someEvent' which is a manually created event
// myEmitter.on("someEvent", function(msg) {
//   console.log(msg);
// });

// myEmitter.emit("someEvent", "the event was emitted");
