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

import Heading from './components/heading/heading';

const heading = new Heading();

heading.create(VERSION);
