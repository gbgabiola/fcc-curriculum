function makeClass() {
  "use strict";
  class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    get temperature() {
      return 5 / 9 * (this.fahrenheit - 32);
    }
    set temperature(celsius) {
      this.fahrenheit = celsius * 9.0 / 5 + 32;
    }
  }

  // class Thermostat {
  //   constructor(fahrenheit) {
  //     this.celcius = 5 / 9 * (fahrenheit - 32);
  //   }
  //   get temperature() {
  //     return this.celcius;
  //   }
  //   set temperature(updatedTemp) {
  //     this.celcius = updatedTemp;
  //   }
  // }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C