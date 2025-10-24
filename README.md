# javascript-racingcar-precourse

## 🔄 기능 흐름 설계

> Controller → Service → Model → View 구조

```
1. GameController.run()
   - 프로그램의 전체 실행 흐름을 관리한다.
   - 사용자 입력을 받고 RacingGameService를 초기화한다.

2. Input.readCarNames()
   - 경주에 참여할 자동차 이름을 입력받는다.

3. Input.readRoundCount()
   - 몇 번의 이동(라운드)을 진행할지 입력받는다.

4. RacingGameService(carNames)
   - 전달받은 자동차 이름을 기반으로 Car 인스턴스를 생성한다.
   - 게임에 필요한 초기 상태를 설정한다.

5. RacingGameService.playRound()
   - 한 라운드를 진행한다.
     5-1. Car.move()
          - 무작위 값(0~9) 중 4 이상일 경우 자동차를 전진시킨다.
     5-2. Car.getDistance()
          - 각 자동차의 현재 이동 거리를 반환한다.

6. Controller 반복 제어
   - roundCount 횟수만큼 playRound()를 반복 실행한다.
   - 각 라운드 이후 결과를 View로 전달한다.

7. Output.showRoundResult()
   - 각 라운드가 끝날 때 모든 자동차의 이동 결과를 출력한다.

8. Winner(carDistanceInfos).getWinner()
   - 모든 자동차의 이동 거리 정보를 기반으로 우승자를 계산한다.

9. Output.showWinners()
   - 최종 우승자를 출력한다.
   - 복수의 우승자가 있을 경우 쉼표(,)로 구분한다.
```

## 📚 기능 명세서

1. View
   - Input
     - [x] 사용자로부터 경주할 자동차 이름을 입력받을 수 있다.
     - [x] 사용자로부터 이동 횟수(라운드 수) 를 입력받을 수 있다.
   - Output
     - [ ] 각 자동차의 이동 결과(거리) 를 출력할 수 있다.
     - [ ] 최종 우승자를 출력할 수 있다. (우승자가 여러 명일 경우 쉼표(,)로 구분한다.)

2. Model
   - Car
     - [x] 무작위 값(0~9) 중 4 이상이 나오면 전진할 수 있다.
     - [x] 현재 이동 거리를 반환할 수 있다.
   - Winner
     - [x] 모든 자동차의 이동 거리 정보를 기반으로 우승자(들) 을 결정할 수 있다.

3. Controller
   - GameController
     - [ ] 사용자 입력을 받아 게임을 초기화할 수 있다.
     - [ ] 지정된 횟수만큼 라운드를 반복 실행할 수 있다.
     - [ ] 매 라운드 결과를 받아 출력할 수 있다.
     - [ ] 모든 라운드가 종료된 후 최종 우승자를 계산하고 결과를 출력할 수 있다.

4. Service
   - RacingGameService
     - [ ] 입력받은 자동차 이름을 기반으로 자동차(Car)들을 생성할 수 있다.
     - [ ] 한 번의 라운드를 진행하며, 각 자동차의 이동을 처리할 수 있다.
     - [ ] 모든 자동차의 현재 이동 거리 정보를 반환할 수 있다.

5. Validator
   - [x] 입력값 공백을 검증할 수 있다.
   - [ ] 자동차 이름 유효성을 검증할 수 있다.
     - 중복 불가
     - 1자 이상 5자 이하만 서용
   - [ ] 이동 횟수 입력값을 검증할 수 있다.
     - 1 이상 10 이하의 숫자만 허용

## 🧾 실행 결과 예시

```
경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
pobi,woni,jun
시도할 횟수는 몇 회인가요?
5

실행 결과
pobi : -
woni :
jun : -

pobi : --
woni : -
jun : --

pobi : ---
woni : --
jun : ---

pobi : ----
woni : ---
jun : ----

pobi : -----
woni : ----
jun : -----

최종 우승자 : pobi, jun
```

## ✅️ 체크리스트

- [ ] 기능을 구현하기 전 README.md에 구현할 기능 목록을 정리해 추가하였는가?
- [ ] Airbnb 자바스크립트 코드 컨벤션을 지키면서 프로그래밍 하였는가?
- [ ] `@woowacourse/mission-utils`에서 제공하는 `Random` 및 `Console API`를 사용하여 구현하였는가?
- [ ] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현하였는가?
- [ ] 3항 연산자를 쓰지 않았는가?
- [ ] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들었는가?
- [ ] Jest를 이용하여 정리한 기능 목록이 정상적으로 작동하는지 테스트 코드로 확인하였는가?
