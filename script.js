const airFrance = {
  airline: 'Air France',
  seat: "24C",
  iataCode: 'AF',
  bookings: [],
  book: function(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline}, flight ${this.iataCode}${flightNum}, and his seat number is ${this.seat}.`);

    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name});
  }
}

airFrance.book('343', "Promise Morka");
airFrance.book('635', "John Kennedy");
console.log("==========================");
console.log(airFrance);


const airPeace = {
  airline: "Air Peace",
  seat: '66B',
  iataCode: "AP",
  bookings: [],
}

// The method - which is simply a function stored inside an object - is stored in the anotherBook variable
const anotherBook = airFrance.book;

// THE CALL METHOD

// The anotherBook is now function, because functions are first-class citizens and can be stored in variables, the "airPeace" is the new "this" keyword
anotherBook.call(airPeace, 444, "Jo Mason");
console.log(airPeace);

const egyptAir = {
  airline: "Egypt air",
  seat: '66B',
  iataCode: "EGY",
  bookings: [],
}

// The egyptAir is the new "this" keyword
anotherBook.call(egyptAir, 57575, "Ed Jonathan");
console.log(egyptAir);

console.log('==========')

// APPLY METHOD
const flightData = [56557, "Abel Jones"];
// anotherBook.apply(egyptAir, flightData);

anotherBook.call(egyptAir, ...flightData);
console.log(egyptAir);

// THE BIND 
// This defines the this keyword once
const bookEA = anotherBook.bind(egyptAir);
const bookAF = anotherBook.bind(airFrance);
const bookAP = anotherBook.bind(airPeace);
bookEA(345, "Jon Fred");

// Here the bind method was use to preset parameters of the function, so when we call the function, we only need to fill in parameters that where not preset 
const bookAF25 = anotherBook.bind(airFrance, 677448);
bookAF25("Jack Benson");
bookAF25("Kelvin Jones");


// Bind method with event listeners
airFrance.planes = 300;
airFrance.buyPlane = function () {

  console.log(this);

  this.planes++
  console.log(this.planes);
}

const button = document.createElement('button');
document.body.appendChild(button);

document.querySelector('button').addEventListener("click", airFrance.buyPlane.bind(airFrance));




