export const INPUT_MESSAGE = Object.freeze({
  CAR_NAME: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ROUND_COUNT: '시도할 횟수는 몇 회인가요?\n',
});

export const ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: '[ERROR] 빈 값은 입력할 수 없습니다.',
  DUPLICATE_CAR_NAME: '[ERROR] 중복된 자동차 이름은 허용되지 않습니다.',
  INVALID_CAR_NAME_LENGTH:
    '[ERROR] 각 자동차 이름은 1자 이상 5자 이하로 입력해야 합니다.',
  INVALID_NUMBER: '[ERROR] 숫자만 입력할 수 있습니다.',
  INVALID_COUNT_RANGE: '[ERROR] 이동 횟수는 1 이상 10 이하만 가능합니다.',
});

export const SYMBOL = Object.freeze({
  DISTANCE: '-',
  SEPARATOR: ',',
});

export const MAGIC_NUMBER = Object.freeze({
  MOVE_THRESHOLD: 4,
  COUNT_RANGE: { MIN: 1, MAX: 10 },
  CAR_NAME_RANGE: { MIN: 1, MAX: 5 },
});
