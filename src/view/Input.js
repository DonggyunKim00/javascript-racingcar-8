import { MissionUtils } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant';

class Input {
  static async readCarNames() {
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.CAR_NAME
    );
    return input;
  }

  static async readRoundCount() {
    const input = await MissionUtils.Console.readLineAsync(
      INPUT_MESSAGE.ROUND_COUNT
    );
    return input;
  }
}

export default Input;
