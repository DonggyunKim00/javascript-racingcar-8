import { MissionUtils } from '@woowacourse/mission-utils';
import { formatRoundResult } from '../utils/string.js';
import { SYMBOL } from '../constant/index.js';

class Output {
  static printResultIntro() {
    MissionUtils.Console.print('\n실행 결과');
  }

  static printRoundResult(results) {
    const result = formatRoundResult(results);
    MissionUtils.Console.print(`${result}\n`);
  }

  static printWinners(winners) {
    MissionUtils.Console.print(
      `최종 우승자 : ${winners.join(`${SYMBOL.SEPARATOR} `)}`
    );
  }
}

export default Output;
