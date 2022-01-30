
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

let range = 200
let circleContainer = new cjs.Container()
container.addChild(circleContainer)

let circles = _.times(3, makeCircle)
_.map(circles, circle => {
  circle.x = _.random(-range, range)
  circle.y = _.random(-range, range)
  circleContainer.addChild(circle)
})

let dotContainer = new cjs.Container()
container.addChild(dotContainer)

// let dot = makeDot()
// dot.x = _.random(-200, 200)
// dot.y = _.random(-200, 200)
// dotContainer.addChild(dot)

// let pt = dot.localToLocal(0, 0, circleContainer)

let dots = _.times(20, makeDot)
_.map(dots, dot => {
  dotContainer.addChild(dot)
  let pt
  do {
    placeItem(dot, range)
    pt = dot.localToLocal(0, 0, circleContainer)
  } while (!circleContainer.hitTest(pt.x, pt.y))
})

function placeItem(item, range) {
  item.x = _.random(-range, range)
  item.y = _.random(-range, range)
}


// console.log("hit: ", circleContainer.hitTest(pt.x, pt.y))
// console.log("pt: ", pt)

////////////////

function kickoffCJS() {
  cjs.Ticker.framerate = 30
  cjs.Ticker.addEventListener('tick', tick)
}

function tick(e) {
  stage.update()
}

function makeCircle() {
  let item = new cjs.Shape()
  item.graphics.beginFill('#110000').drawCircle(0, 0, 100);
  return item
}

function makeDot() {
  let item = new cjs.Shape()
  item.graphics.beginFill('#DDDDDD').drawCircle(0, 0, 4);
  return item
}
