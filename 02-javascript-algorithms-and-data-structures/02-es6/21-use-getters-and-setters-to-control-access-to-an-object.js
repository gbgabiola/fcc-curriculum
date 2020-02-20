/**
 * Challenge: Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
 * Now create a getter and a setter in the class, to obtain the temperature in Celsius.
 * Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit, and C is the value of the same temperature in Celsius.
 *
 * Note: When you implement this, you will track the temperature inside the class in one scale, either Fahrenheit or Celsius.
 */

class Thermostat {
  // Solution 1
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }

  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }

  set temperature(celcius) {
    this.fahrenheit = (celcius * 9.0) / 5 + 32;
  }

  // Solution 2
  // constructor(fahrenheit) {
  //   this.celcius = (5 / 9) * (fahrenheit - 32);
  // }
  // get temperature() {
  //   return this.celcius;
  // }
  // set temperature(updateTemp) {
  //   this.celcius = updateTemp;
  // }
}

const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
