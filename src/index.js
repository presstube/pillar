
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

let pillarShape = makePillarShape()
container.addChild(pillarShape)
// pillarShape.y = stage.height / 2
// let pillarAssets = makePillarAssets(pillarShape)

////////////////

function makePillarShape() {
  let circleContainer = new cjs.Container()
  let numCircles = 20
  let yDistInterval = 20
  let xRange = _.random(50, 200)
  let circles = _.times(numCircles, makeCircle)
  _.map(circles, (circle, index) => {
    let percentage = 1 - (index / numCircles)
    circle.y = -(index * yDistInterval)
    circle.x = _.random(-xRange * percentage, xRange * percentage)
    // placeItem(circle, 200)
    circleContainer.addChild(circle)
  })
  return circleContainer
}

function makePillarAssets(pillarShape) {
  let dotContainer = new cjs.Container()
  container.addChild(dotContainer)
  let dots = _.times(100, makeDot)
  _.map(dots, dot => {
    dotContainer.addChild(dot)
    let pt
    do {
      placeItem(dot, 500)
      pt = dot.localToLocal(0, 0, pillarShape)
    } while (!pillarShape.hitTest(pt.x, pt.y))
  })
  return dots
}

function kickoffCJS() {
  cjs.Ticker.framerate = 30
  cjs.Ticker.addEventListener('tick', tick)
}

function tick(e) {
  stage.update()
}

function placeItem(item, range) {
  item.x = _.random(-range, range)
  item.y = _.random(-range, range)
}

function makeCircle() {
  let item = new cjs.Shape()
  item.graphics.beginFill('#330000').drawCircle(0, 0, 100);
  return item
}

function makeDot() {
  let item = new cjs.Shape()
  item.graphics.beginFill('#DDDDDD').drawCircle(0, 0, 4);
  return item
}
