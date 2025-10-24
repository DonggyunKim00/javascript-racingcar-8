import { isEmpty } from '../src/utils/validators.js';

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
});
