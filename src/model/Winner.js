class Winner {
  #cars;

  #max;

  constructor(cars) {
    this.#cars = cars;
    this.#max = Math.max(...this.#cars.map((car) => car.distance));
  }

  getWinners() {
    return this.#cars.filter((car) => car.distance === this.#max);
  }
}

export default Winner;
