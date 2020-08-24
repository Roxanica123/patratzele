import { Square } from "./square/square.js";

export class Board {
    element;
    squares = new Map();
    constructor(targetContainer) {
        this.element = document.createElement('board');

        for (let i = 1; i <= 9; i++) {
            const square = new Square(i);
            this.squares.set(i, square);
            square.addSquare(this.element);
        }
        this.addClickEvent();
        targetContainer.appendChild(this.element);
    }
    getSquare(i) {
        return this.squares.get(i);
    }

    addClickEvent() {
        this.element.addEventListener("click", (event) => {
            if (window.gamePanel.game.gameState == 2) {
                window.gamePanel.game.checkSquareClicked(event.target);
            }
        })
    }
    getSquareElements() {
        return Array.from(this.squares).map(element => element[1].getElement());
    }
}