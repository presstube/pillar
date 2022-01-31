
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
let pillarAssetContainer = new cjs.Container()
container.addChild(pillarAssetContainer)
let pillarAssets = makePillarAssets(pillarShape)

let rotationRange = _.random(40, 80)
let pillarAssetsSortedByX = _.sortBy(pillarAssets, ['x'])
_.map(pillarAssetsSortedByX, (asset, index) => {
  let percentage = index / pillarAssetsSortedByX.length
  asset.rotation = -rotationRange + ((rotationRange * 2) * percentage)
})

let pillarAssetsSortedByY = _.sortBy(pillarAssets, ['y'])
_.map(pillarAssetsSortedByY, (asset, index) => {
  let percentage = index / pillarAssetsSortedByX.length
  asset.scaleX = asset.scaleY = percentage + 2
  pillarAssetContainer.addChild(asset)
})

////////////////

function makePillarShape() {
  let circleContainer = new cjs.Container()
  let numCircles = _.random(50, 100)
  let yDistInterval = _.random(5, 10)
  let xRange = _.random(50, 200)
  let circles = _.times(numCircles, makeCircle)
  _.map(circles, (circle, index) => {
    let percentage = 1 - (index / numCircles)
    circle.y = -(index * yDistInterval)
    circle.x = _.random(-xRange * percentage, xRange * percentage)
    circleContainer.addChild(circle)
  })
  return circleContainer
}

function makePillarAssets(pillarShape) {
  let assets = _.times(100, makeMarker)
  _.map(assets, asset => {
    pillarAssetContainer.addChild(asset)
    let pt
    do {
      placeItem(asset, 1000)
      pt = asset.localToLocal(0, 0, pillarShape)
    } while (!pillarShape.hitTest(pt.x, pt.y))
  })
  return assets
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
  item.graphics.beginFill('#222222').drawCircle(0, 0, 100);
  return item
}

function makeDot() {
  let item = new cjs.Shape()
  item.graphics.beginFill('#DDDDDD').drawCircle(0, 0, 4);
  return item
}

function makeMarker() {
  let item = new cjs.Shape()
  item.graphics.beginStroke('#cccccc')
    .moveTo(0, 0)
    .lineTo(0, -10)
  item.graphics.beginFill('white').drawCircle(0, 0, 5);
  return item 
}
