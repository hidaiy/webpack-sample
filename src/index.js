import _ from 'lodash';
import './style.css';
import printMe from './print';

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack', '!'], ' ');
    element.classList.add('hello');

    const button = document.createElement('button');
    button.innerHTML = 'Click me and check console log';
    button.onclick = printMe;

    element.appendChild(button);


    return element;
}

let element = component();
document.body.appendChild(element);
