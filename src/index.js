import { sayNo } from './utils';
import reactImg from './react.png';

sayNo();

var logo = document.createElement("img");
logo.setAttribute('src', reactImg);

document.body.appendChild( logo );