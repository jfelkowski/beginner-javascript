/* eslint-disable */
const name = 'wes';
const middle = "topher";
const last = `bos`;

const sentence = "she's so \"cool\"";
const sentence2 = `she's so "cool"`;

const song = `Ohh

ya

I like
pizza`;

// const hello = 'hello my name is' + name + ". Nice to meet you";

const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old`;

const html = `
    <div>
     <h2>${name}</h2>
     <p>${hello}</p>
    </div>
`;


document.body.innerHTML = html;

console.log(html);
