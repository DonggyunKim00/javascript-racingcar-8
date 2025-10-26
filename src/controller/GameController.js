import RacingGameService from '../service/RacingGameService.js';
import {
  isDuplicate,
  isEmpty,
  isValidCarNameLength,
  isValidCountRange,
  isValidNumber,
} from '../utils/validators.js';
import Input from '../view/Input.js';
import Output from '../view/Output.js';
import Winner from '../model/Winner.js';

class GameController {
  #service;

  constructor() {
    this.#service = null;
    this.roundCount = 0;
  }

  // 사용자 입력 및 게임 초기화
  async init() {
    const carNames = await Input.readCarNames();
    GameController.#validateCarNamesInput(carNames);

    const roundCount = await Input.readRoundCount();
    GameController.#validateRoundCountInput(roundCount);

    this.#service = new RacingGameService(carNames);
    this.roundCount = Number(roundCount);
  }

  // 라운드 반복 실행 및 실행 결과 출력
  playRounds() {
    Output.printResultIntro();

    for (let i = 0; i < this.roundCount; i += 1) {
      this.#service.playRound();
      const singleRoundInfo = this.#service.getCarDistances();
      Output.printRoundResult(singleRoundInfo);
    }
  }

  // 최종 우승자 계산 및 우승자 출력
  pickWinners() {
    const finalRoundResult = this.#service.getCarDistances();
    const winners = new Winner(finalRoundResult)
      .getWinners()
      .map((car) => car.name);

    Output.printWinners(winners);
  }

  static #validateCarNamesInput(carNames) {
    const splitCarNames = carNames.split(',');

    if (isEmpty(carNames)) throw Error('[ERROR] 빈 값은 입력할 수 없습니다.');
    if (isDuplicate(splitCarNames))
      throw Error('[ERROR] 중복된 자동차 이름은 허용되지 않습니다.');
    if (!isValidCarNameLength(splitCarNames))
      throw Error(
        '[ERROR] 각 자동차 이름은 1자 이상 5자 이하로 입력해야 합니다.'
      );
  }

  static #validateRoundCountInput(roundCount) {
    if (isEmpty(roundCount)) throw Error('[ERROR] 빈 값은 입력할 수 없습니다.');
    if (!isValidNumber(roundCount))
      throw Error('[ERROR] 숫자만 입력할 수 있습니다.');
    if (!isValidCountRange(roundCount))
      throw Error('[ERROR] 이동 횟수는 1 이상 10 이하만 가능합니다.');
  }
}

export default GameController;
