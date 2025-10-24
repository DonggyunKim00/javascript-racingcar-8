import Winner from '../src/model/Winner';

describe('Winner 클래스 테스트', () => {
  test('가장 멀리 간 자동차가 우승자가 된다.', () => {
    const cars = [
      { name: 'daniel', distance: 1 },
      { name: 'pobi', distance: 3 },
      { name: 'woni', distance: 6 },
      { name: 'jun', distance: 3 },
    ];

    const winner = new Winner(cars);
    expect(winner.getWinners()).toEqual([{ name: 'woni', distance: 6 }]);
  });

  test('모든 자동차가 동일한 거리에 있을 경우, 전부 우승자로 반환한다.', () => {
    const cars = [
      { name: 'daniel', distance: 0 },
      { name: 'pobi', distance: 0 },
      { name: 'woni', distance: 0 },
      { name: 'jun', distance: 0 },
    ];

    const winner = new Winner(cars);
    expect(winner.getWinners()).toEqual([
      { name: 'daniel', distance: 0 },
      { name: 'pobi', distance: 0 },
      { name: 'woni', distance: 0 },
      { name: 'jun', distance: 0 },
    ]);
  });
});
