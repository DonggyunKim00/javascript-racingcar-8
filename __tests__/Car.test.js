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
    expect(car.getDistance()).toBe(1);
  });

  test('3 이하일 경우 전진하지 않는다.', () => {
    Random.pickNumberInRange.mockReturnValueOnce(3);
    const car = new Car('daniel');
    expect(car.getDistance()).toBe(0);
  });

  test('현재 이동 거리를 반환한다.', () => {
    const car = new Car('daniel');
    Random.pickNumberInRange
      .mockReturnValueOnce(5)
      .mockReturnValueOnce(7)
      .mockReturnValueOnce(2);
    car.move(); // 이동 O
    car.move(); // 이동 O
    car.move(); // 이동 X
    expect(car.getDistance()).toBe(2);
  });

  test('생성된 자동차 이름을 반환한다.', () => {
    const car = new Car('daniel');

    expect(car.getName()).toBe('daniel');
  });
});
