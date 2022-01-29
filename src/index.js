
import _ from 'lodash'
import bootCJS from './bootCJS.js'
import * as cjs from 'createjs-module';
import './style.css'

const { 
  canvas, 
  stage, 
  container 
} = bootCJS('cjs-canvas')

kickoffCJS()

function kickoffCJS() {
  cjs.Ticker.framerate = 30
  cjs.Ticker.addEventListener('tick', tick)
}

function tick(e) {
  stage.update()
}

////////

let shape = new cjs.Shape();
shape.graphics.beginFill('#ff0000').drawRect(-50, -50, 100, 100);
container.addChild(shape)