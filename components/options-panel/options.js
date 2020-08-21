import { configurables } from "./configurables.js"

export class OptionsPanel {
    constructor() {
        this.initOptions();
    }

    initOptions() {

        const container = document.querySelector('options-container');
        const title = document.createElement('options-title');
        title.innerText = 'Options';
        container.appendChild(title);

        Object.keys(configurables).forEach(key => {
            const configurable = document.createElement(key);
            const label = document.createElement('label');
            label.innerText = configurables[key].label;
            const input = document.createElement('input');
            setAttributes(input, configurables[key].attributes);
            configurable.appendChild(label);
            configurable.appendChild(input);
            container.appendChild(configurable);
        })
    }
    getSelectedOptions() {
        return Object.keys(configurables).reduce((accumulator, currentKey) => {
            const configurable = document.querySelector("input#"+currentKey);
            const value = parseInt(configurable.value);
            if (value >= configurables[currentKey].attributes.min && value <= configurables[currentKey].attributes.max) {
                accumulator[currentKey] = value;
            }
            else {
                accumulator[currentKey] = configurables[currentKey].attributes.value;
            }
            return accumulator;
        }, {});
    }

}

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
