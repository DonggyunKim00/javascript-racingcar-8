import { MissionUtils } from '@woowacourse/mission-utils';

class Input {
  static async readCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)'
    );
    return input;
  }

  static async readRoundCount() {
    const input =
      await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    return input;
  }
}

export default Input;
