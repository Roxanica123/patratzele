export class Square {
    id;
    element;
    constructor(id) {
        this.id = id;
        this.element = document.createElement('square');
        this.element.setAttribute('id', "s" + this.id);
    }
    addSquare(target) {
        target.appendChild(this.element);
    }
    async light(time, random = 0) {
        this.element.setAttribute("class", "lightOn");
        random ? this.element.style.backgroundColor = this.getRandomColor() : this.element.style.backgroundColor = "rgb(255, 0, 0)";
        await new Promise(async (resolve, reject) => {
            setTimeout(async () => {

                await new Promise((resolve, reject) => {
                    this.element.removeAttribute("class");
                    this.element.setAttribute("class", "lightOf");
                    setTimeout(() => {
                        this.element.removeAttribute("class");
                        this.element.removeAttribute("style");
                        resolve();
                    }, 100);
                });
                resolve();
            }, time * 1000);
        });
    }

    getRandomColor() {
        let color;
        do {
            color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        } while (color === "rgb(255, 0, 0)");
        return color;
    }
}