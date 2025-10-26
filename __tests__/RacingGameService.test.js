import { Random } from '@woowacourse/mission-utils';
import RacingGameService from '../src/service/RacingGameService.js';

jest.mock('@woowacourse/mission-utils', () => ({
  Random: { pickNumberInRange: jest.fn() },
}));
describe('RacingGameService 클래스 테스트', () => {
  test('입력된 모든 자동차를 생성한다.', () => {
    const service = new RacingGameService('pobi,woni,jun');

    expect(service.getCarDistances()).toEqual([
      { name: 'pobi', distance: 0 },
      { name: 'woni', distance: 0 },
      { name: 'jun', distance: 0 },
    ]);
  });

  describe('한번의 라운드 진행', () => {
    test('생성된 모든 자동차에 대해서 전진 또는 정지 할 수 있다.', () => {
      const service = new RacingGameService('pobi,woni,jun');

      Random.pickNumberInRange
        .mockReturnValueOnce(5) // pobi 전진
        .mockReturnValueOnce(2) // woni 정지
        .mockReturnValueOnce(1); // jun 정지

      service.playRound();

      const distances = service.getCarDistances().map((car) => car.distance);

      expect(distances).toEqual([1, 0, 0]);
    });
  });
});
