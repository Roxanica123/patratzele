import { PopUp } from "../components/pop-ups/pop-up.js";

export class Game {
    optionsPanel;
    board;
    options;
    squares = [];
    index = 0;
    gameState = 0;
    constructor(board, optionsPanel) {
        this.optionsPanel = optionsPanel;
        this.board = board;
    }

    generateSquares() {
        for (let i = 0; i < this.options.number; i++) {
            this.squares.push(Math.floor(Math.random() * 9) + 1);
        }
    }

    async lightUp() {
        this.gameState = 1;
        for (let i = 0; i < this.squares.length; i++) {
            let available = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            available.splice(this.squares[i] - 1, 1);
            for (let j = 0; j < this.options.difficulty * 3 - 1; j++) {
                const index = Math.floor(Math.random() * available.length);
                this.board.getSquare(available[index]).light(this.options.time, 1);
                available.splice(index, 1);
            }
            await this.board.getSquare(this.squares[i]).light(this.options.time);
        }
        this.gameState = 2;
    }

    async start() {
        this.options = this.optionsPanel.getSelectedOptions();
        this.generateSquares();
        await this.lightUp();
        new PopUp("start").pop();
        setTimeout(async () => {
            this.getPlayerInput();
        }, 3000);

    }
    checkSquareClicked(squareElement) {
        this.squares[this.index] == squareElement.id[1] ? this.index++ : this.gameState = 3;
    }

    getPlayerInput() {
        const timeout = setTimeout(() => {
            this.gameDone(timeout, interval, "time");
        }, this.options.number * 2 * 1000);

        const interval = setInterval(() => {
            if (this.index == this.squares.length) {
                this.gameDone(timeout, interval, "win");
            }
            if (this.gameState == 3) {
                this.gameDone(timeout, interval, "lost");
            }
        }, 10);
    }

    gameDone(timeout, interval, endCase) {
        clearTimeout(timeout);
        clearInterval(interval);
        new PopUp(endCase).pop();
        this.gameState = 0;
        this.squares = [];
        this.index = 0;
    }
}
