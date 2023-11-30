W3schools explained well , check there.
Destructuring makes it easy to extract only what is needed from an Array and Object.

**Destructing Arrays
Here is the old way of assigning array items to a variable:

Example:-
  Before:
const vehicles = ['mustang', 'f-150', 'expedition'];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

Here is the new way of assigning array items to a variable:

Example
With destructuring:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;

NOTE: When destructuring arrays, the order that variables are declared is important.

  If we only want the car and suv we can simply leave out the truck but keep the comma:

const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,, suv] = vehicles;
