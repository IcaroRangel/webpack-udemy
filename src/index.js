// import Title from './components/title.js';
// import Image from './components/image.js';
// import Button from './components/button.js';
// import Warning from './templates/warning.html';
// import './styles/warning.css';
// import fraseTxt from './files/frase.txt';
// import description from './files/description.json';

// const title = new Title();
// const image = new Image();
// const button = new Button();

// title.create('Primeira página');
// image.insertCatImage();
// button.create();

// // Babel spread

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let { ...test } = obj;

// console.log(test);

// // Import de HTML
// const body = document.querySelector('body');
// body.innerHTML += Warning;

// // Import arquivo de texto
// const frase = fraseTxt;

// console.log(frase.toLowerCase());

// // Import JSON

// const eu = description;

// console.log(eu);

// import Heading from './components/heading/heading';

// const heading = new Heading();

// heading.create(process.env.API_KEY);
// console.log(PORT);

// import sum from './calc';

// const x = sum(32, 2);
// const y = sum(5, x);

// console.log(x);
// console.log(y);

import $ from 'jquery';
import './styles/fonts.css';

const body = $('body');

const p = $('<p></p>').text('Loucura').css('color', 'blue');

const h1 = $('<h1></h1>').text('AAAAAA').css('color', 'green');

body.append(p, h1);
