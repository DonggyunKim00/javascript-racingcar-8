import { Random } from '@woowacourse/mission-utils';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    const random = Random.pickNumberInRange(0, 9);
    if (random >= 4) this.distance += 1;
  }

  getDistance() {
    return this.distance;
  }
}

export default Car;
