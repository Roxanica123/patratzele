import { Board } from "./board/board.js";
import { Game } from "./../../game-logic/game.js"

export class GamePanel {
    board;
    optionsPanel;
    game;
    constructor(optionsPanel) {
        const gameContainer = document.querySelector('game-container');
        this.board = new Board(gameContainer);
        this.optionsPanel = optionsPanel;
        this.game=new Game(this.board, this.optionsPanel);
        this.gameState = 0;
        this.addStartButton(gameContainer);

    }
    addStartButton(target) {
        const button = document.createElement('start-button');
        button.innerText = 'Start';
        target.appendChild(button);
        
        button.addEventListener("click", async () => {
            if (this.game.gameState == 0) {
                await this.game.start();
            }
        });
    }
}