import { Random } from '@woowacourse/mission-utils';
import Car from '../src/model/Car';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: { pickNumberInRange: jest.fn() },
}));

describe('Car 클래스 테스트', () => {
  test('4 이상일 경우 전진한다.', () => {
    Random.pickNumberInRange.mockReturnValueOnce(4);
    const car = new Car('daniel');
    car.move();
    expect(car.distance).toBe(1);
  });

  test('3 이하일 경우 전진하지 않는다.', () => {
    Random.pickNumberInRange.mockReturnValueOnce(3);
    const car = new Car('daniel');
    expect(car.distance).toBe(0);
  });
});
