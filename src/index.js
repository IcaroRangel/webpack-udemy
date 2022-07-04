import Title from './components/title.js';
import Image from './components/image.js';
import Button from './components/button.js';

const title = new Title();
const image = new Image();
const button = new Button();

title.create('Primeira página');
image.insertCatImage();
button.create();

// Babel spread

const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

let { ...test } = obj;

console.log(test);
