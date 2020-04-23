// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature() {
    return (this.fahrenheit - 32) * 5 / 9; 
  }
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9) / 5 + 32;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
