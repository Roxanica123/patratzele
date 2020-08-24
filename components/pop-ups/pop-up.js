export class PopUp {
    static messages = {
        "start": "Square Up! Your turn, click the red squares in the same order :)",
        "win": "Damn boy! Good job ;)",
        "time": "Can't believe I say this, but you should've been quicker ;)",
        "lost": "Come on! You can do better... I'm not asking you to square the circles ;)"
    }

    element;
    constructor(endCase) {
        this.endCase = endCase;
        this.element = document.createElement('pop-up');
        this.element.setAttribute('class', endCase);
        const text = document.createElement('p');
        text.innerText = PopUp.messages[endCase];
        this.element.appendChild(text);

    }
    pop() {
        document.querySelector('body').appendChild(this.element);
        setTimeout(() => { this.element.remove() }, 3000);
    }
}