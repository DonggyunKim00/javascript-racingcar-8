import { Random } from '@woowacourse/mission-utils';
import { MAGIC_NUMBER } from '../constant';

class Car {
  #name;

  #distance = 0;

  constructor(name) {
    this.#name = name;
  }

  move() {
    const random = Random.pickNumberInRange(0, 9);
    if (random >= MAGIC_NUMBER.MOVE_THRESHOLD) this.#distance += 1;
  }

  getDistance() {
    return this.#distance;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
