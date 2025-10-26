import { MissionUtils } from '@woowacourse/mission-utils';
import { formatRoundResult } from '../utils/string.js';

class Output {
  static resultIntro() {
    MissionUtils.Console.print('\n실행 결과');
  }

  static showRoundResult(results) {
    const result = formatRoundResult(results);
    MissionUtils.Console.print(`${result}\n`);
  }

  static showWinners(winners) {
    MissionUtils.Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }
}

export default Output;
