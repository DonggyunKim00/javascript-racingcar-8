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
import { ERROR_MESSAGE, SYMBOL } from '../constant/index.js';

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
    const splitCarNames = carNames.split(SYMBOL.SEPARATOR);

    if (isEmpty(carNames)) throw Error(ERROR_MESSAGE.EMPTY_INPUT);
    if (isDuplicate(splitCarNames))
      throw Error(ERROR_MESSAGE.DUPLICATE_CAR_NAME);
    if (!isValidCarNameLength(splitCarNames))
      throw Error(ERROR_MESSAGE.INVALID_CAR_NAME_LENGTH);
  }

  static #validateRoundCountInput(roundCount) {
    if (isEmpty(roundCount)) throw Error(ERROR_MESSAGE.EMPTY_INPUT);
    if (!isValidNumber(roundCount)) throw Error(ERROR_MESSAGE.INVALID_NUMBER);
    if (!isValidCountRange(roundCount))
      throw Error(ERROR_MESSAGE.INVALID_COUNT_RANGE);
  }
}

export default GameController;
