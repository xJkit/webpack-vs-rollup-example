

const imgDiv = document.getElementById('image-div');
const logo = document.createElement("img");

document.getElementById('add-image-button').addEventListener('click', evt => {
  // const reactImg = require('./react.png'); // ES5 dynamic require
  import('./react.png').then(reactImg => { // Webpack code splitting & dynamic import
    console.log('====================================');
    console.log(evt);
    console.log('====================================');
    logo.setAttribute('src', reactImg);
    imgDiv.appendChild(logo);
  })
});