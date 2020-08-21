import { Square } from "./square/square.js";

export class Board {
    squares=new Map();
    constructor(targetContainer) {
        const boardElement = document.createElement('board');

        for (let i = 1; i <= 9; i++) {
            const square = new Square(i);
            this.squares.set(i, square);
            square.addSquare(boardElement);
        }

        targetContainer.appendChild(boardElement);
    }
    getSquare(i){
        return this.squares.get(i);
    }
    getSquareElements(){
        return Array.from(this.squares).map(element=>element[1].getElement());
    }
}