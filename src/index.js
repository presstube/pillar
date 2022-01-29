import _ from 'lodash'
import dingle from './dingle.js'
import './style.css'

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(_.times(4, ()=> {
    return "fart"
  }), " ");
  element.classList.add('hello');

  return element;
}

dingle()

document.body.appendChild(component());
