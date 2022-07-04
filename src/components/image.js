import Cat from '../img/gato.jpg';

class Image {
  insertCatImage() {
    const img = document.createElement('img');

    img.src = Cat;
    img.width = 200;

    document.querySelector('body').appendChild(img);
  }
}

export default Image;
