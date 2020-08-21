export class Square {
    id;
    element;
    constructor(id) {
        this.id = id;
        this.element = document.createElement('square');
        this.element.setAttribute('id', "s" + this.id);
        this.addClickEvent();
    }
    addSquare(target) {
        target.appendChild(this.element);
    }
    async light(time) {
        this.element.setAttribute("class", "lightOn");
        await new Promise(async (resolve, reject) => {
            setTimeout(async () => {

                await new Promise((resolve, reject) => {
                    this.element.removeAttribute("class");
                    this.element.setAttribute("class", "lightOf");
                    setTimeout(() => {
                        this.element.removeAttribute("class");
                        resolve();
                    }, 100);
                });
                resolve();
            }, time * 1000);
        });
    }
    addClickEvent() {
        this.element.addEventListener("click", () => {
            if (window.gamePanel.game.gameState == 2) {
                window.gamePanel.game.checkSquareClicked(this.element);
            }
        })
    }
}