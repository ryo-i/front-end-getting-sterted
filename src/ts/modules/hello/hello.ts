import { message } from './message';

const text: string = message.text;
const selector: string = message.selector;

const hello = (): void => {
    document.addEventListener('DOMContentLoaded', () => {
        const dom: HTMLButtonElement = document.querySelector(selector) as HTMLButtonElement;
        dom.innerHTML = text;
        console.log('text-> ' + text);
    });
}

export { hello }