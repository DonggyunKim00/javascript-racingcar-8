import { Random } from '@woowacourse/mission-utils';

class Car {
  #name;

  #distance = 0;

  constructor(name) {
    this.#name = name;
  }

  move() {
    const random = Random.pickNumberInRange(0, 9);
    if (random >= 4) this.#distance += 1;
  }

  getDistance() {
    return this.#distance;
  }
}

export default Car;
