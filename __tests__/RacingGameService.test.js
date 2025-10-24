import RacingGameService from '../src/service/RacingGameService.js';

describe('RacingGameService 클래스 테스트', () => {
  test('입력된 모든 자동차를 생성한다.', () => {
    const service = new RacingGameService('pobi,woni,jun');

    expect(service.getCarDistances()).toEqual([
      { name: 'pobi', distance: 0 },
      { name: 'woni', distance: 0 },
      { name: 'jun', distance: 0 },
    ]);
  });
});
