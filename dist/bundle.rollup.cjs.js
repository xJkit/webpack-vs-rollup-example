'use strict';

function sayNo() {
  console.log('====================================');
  console.log('say No!');
  console.log('====================================');
}

var reactImg = "45fc1c076aff466f.png";

sayNo();

var logo = document.createElement("img");
logo.setAttribute('src', reactImg);

document.body.appendChild( logo );
