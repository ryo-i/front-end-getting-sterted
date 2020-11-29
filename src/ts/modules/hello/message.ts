import hello from '../../../json/hello.json';

const message: {[key: string]: string;} = {
    text: hello.message.text,
    selector: hello.message.selector
};

export { message };