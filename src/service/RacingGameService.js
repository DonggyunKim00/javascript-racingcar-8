import { SYMBOL } from '../constant/index.js';
import Car from '../model/Car.js';

class RacingGameService {
  #cars;

  constructor(cars) {
    this.#cars = cars.split(SYMBOL.SEPARATOR).map((name) => new Car(name));
  }

  getCarDistances() {
    return this.#cars.map((car) => ({
      name: car.getName(),
      distance: car.getDistance(),
    }));
  }

  playRound() {
    this.#cars.forEach((car) => car.move());
  }
}

export default RacingGameService;
