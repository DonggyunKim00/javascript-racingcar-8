import GameController from './controller/GameController.js';

class App {
  async run() {
    const game = new GameController();
    game.init();
  }
}

export default App;
