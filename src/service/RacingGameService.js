import Car from '../model/Car';

class RacingGameService {
  #cars;

  constructor(cars) {
    this.#cars = cars.split(',').map((name) => new Car(name));
  }

  getCarDistances() {
    return this.#cars.map((car) => ({
      name: car.getName(),
      distance: car.getDistance(),
    }));
  }
}

export default RacingGameService;
