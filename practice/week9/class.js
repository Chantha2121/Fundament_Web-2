class Car{
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  year() {
    return this.year
  }
}

const car1 = new Car("BMW", 2014)
console.log("The year of car is ", car.year);


