import GameController from './controller/GameController.js';

class App {
  async run() {
    const game = new GameController();
    await game.init();
    game.playRounds();
  }
}

export default App;
