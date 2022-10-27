import defaultCharacter from './domain';

class Game {
    start() {
      console.log('game started');
    }
}
  
export class GameSavingData {
}
  
export function readGameSaving() {
}
  
export function writeGameSaving() {
}

const defauldGame = new Game();
export default defauldGame;