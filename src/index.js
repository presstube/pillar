
import _ from 'lodash'
import bootCJS from './bootCJS.js'
import * as cjs from 'createjs-module'
import pSBC from 'shade-blend-color'
import './style.css'

var comp=AdobeAn.getComposition("A3238E787B9042E0BA7D76738032C1C1")
var lib=comp.getLibrary()

const { 
  canvas, 
  stage, 
  container 
} = bootCJS('cjs-canvas')

let pillarShape,
    pillarAssetContainer,
    pillarAssets,
    rotationRange,
    pillarAssetsSortedByX,
    pillarAssetsSortedByY,
    patchAssetID,
    patchAssetContainer,
    patchAssets;

console.log("lib: ", lib)

kickoffCJS()

makeIt()

setInterval(()=>{
  destroyIt()
  makeIt()
}, 3000)

window.addEventListener('keypress', e => {
  console.log('keypress:', e)
  if (e.code == 'Space') {
    destroyIt()
    makeIt()
  }
})

////////////////

function destroyIt() {
  container.removeChild(pillarShape)
  container.removeChild(pillarAssetContainer)
  container.removeChild(patchAssetContainer)
}

function makeIt() {
  pillarShape = makePillarShape()
  container.addChild(pillarShape)
  pillarAssetContainer = new cjs.Container()
  container.addChild(pillarAssetContainer)
  pillarAssets = makePillarAssets(pillarShape)

  rotationRange = _.random(20, 40)
  pillarAssetsSortedByX = _.sortBy(pillarAssets, ['x'])
  _.map(pillarAssetsSortedByX, (asset, index) => {
    let percentage = index / pillarAssetsSortedByX.length
    asset.rotation = -rotationRange + ((rotationRange * 2) * percentage)
  })

  pillarAssetsSortedByY = _.sortBy(pillarAssets, ['y'])
  _.map(pillarAssetsSortedByY, (asset, index) => {
    let percentage = index / pillarAssetsSortedByX.length
    // asset.scaleX = asset.scaleY = (percentage*0.5) + 1
    if (_.random(1) < 0.5) {
      asset.scaleX = -1
    }
    pillarAssetContainer.addChild(asset)
  })

  patchAssetID = _.random(2,11)
  patchAssetContainer = new cjs.Container()
  container.addChild(patchAssetContainer)
  patchAssets = _.map(pillarAssetsSortedByY, pillarAsset => {
    if (Math.random() < 0.2) {
      patchAssetID = _.random(2,11)
    }
    let patchAsset = new lib["Patch_" + patchAssetID]
    recolor(patchAsset, '#222', 0)
    patchAsset.x = pillarAsset.x
    patchAsset.y = pillarAsset.y
    patchAsset.scaleX = pillarAsset.scaleX
    patchAsset.scaleY = pillarAsset.scaleY
    patchAsset.rotation = pillarAsset.rotation
    patchAssetContainer.addChild(patchAsset)
    return patchAsset
  })  
}

function recolor(asset, color, width) {
  let tempColor = color
  let colorShiftRange = 10  
  let colorShiftAmount = Math.random()/colorShiftRange - Math.random()/colorShiftRange
  tempColor = pSBC(colorShiftAmount, tempColor)
  let strokeColor = pSBC(0.2, tempColor)
  asset.children[0].graphics._fill.style = tempColor
  // asset.children[1].graphics._stroke.style = strokeColor
  asset.children[1].graphics._stroke.style = 'rgba(255, 255, 255, 0)'
  asset.children[1].graphics._strokeStyle.width = width
}

function makePillarShape() {
  let circleContainer = new cjs.Container()
  let numCircles = _.random(30, 50)
  let yDistInterval = 8
  // let yDistInterval = _.random(5, 10)
  let xRange = _.random(50, 150)
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
  let assets = _.times(40, makeMarker)
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
  item.graphics.beginFill('#222').drawCircle(0, 0, 100);
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
