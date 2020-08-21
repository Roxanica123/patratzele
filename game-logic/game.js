import { PopUp } from "../components/pop-ups/pop-up.js";

export class Game {
    options;
    board;
    lightAlgorithm;
    squares = [];
    index;
    gameState = 0;
    constructor(board, options) {
        this.options = options;
        this.board = board;
    }

    generateSquares() {
        for (let i = 0; i < this.options.number; i++) {
            const nr = Math.floor(Math.random() * 9) + 1;
            let board = 0;
            if (this.options.difficulty > 2) {
                board = Math.floor(Math.random() * 2);
            }
            this.squares.push({ number: nr, board: board });
        }
    }

    async lightUp() {
        this.gameState = 1;
        for (let i = 0; i < this.squares.length; i++) {
            await this.board.getSquare(this.squares[i].number).light(this.options.time);
        }
        this.gameState = 2;

    }

    async start() {
        this.index = 0;
        this.generateSquares();
        await this.lightUp();
        new PopUp("start").pop();
        setTimeout(async () => {
            await this.getPlayerInput();
        }, 3000);

    }
    async checkSquareClicked(squareElement) {
        console.log(squareElement);
        if (this.squares[this.index].number == squareElement.id[1]) {
            this.index++;
        }
        else {
            this.gameState = 3;
        }
    }
    async getPlayerInput() {
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
    }
}