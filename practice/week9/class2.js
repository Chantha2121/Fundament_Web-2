class Car {
  constructor() {
    this._years = 0;
    this.name = "";
  }

  get years() {
    return this._years;
  }

  set years(y) {
    this._years = y;
  }
}

const car = new Car();

car.years = 2026;

console.log(car.years);