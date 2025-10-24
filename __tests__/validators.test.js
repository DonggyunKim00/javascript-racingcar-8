import {
  isDuplicate,
  isEmpty,
  isValidCarNameLength,
} from '../src/utils/validators.js';

describe('validator 테스트', () => {
  describe('입력값 공백 검증', () => {
    test('공백 문자열이면 true를 반환한다.', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty('   ')).toBe(true);
    });

    test('공백이 아닌 문자열이면 false를 반환한다.', () => {
      expect(isEmpty('daniel')).toBe(false);
    });
  });

  describe('자동차 이름 유효성 검증', () => {
    test('중복된 이름이 존재하면 true를 반환한다.', () => {
      expect(isDuplicate(['daniel', 'pobi', 'daniel'])).toBe(true);
    });

    test('중복된 이름이 존재하지 않으면 false를 반환한다.', () => {
      expect(isDuplicate(['daniel', 'pobi'])).toBe(false);
    });

    test('이름이 1자 미만 또는 5자 초과면 false를 반환한다.', () => {
      expect(isValidCarNameLength(['', 'name'])).toBe(false);
      expect(isValidCarNameLength(['danie', '', 'pobi'])).toBe(false);
      expect(isValidCarNameLength(['@@@@@@', 'abc'])).toBe(false);
    });
  });
});
