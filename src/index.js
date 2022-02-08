
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
    patchAssets,
    head,
    vaseFront,
    vaseBack,
    vaseAssets = [],
    riverTrackPositions = [],
    riverTrackContainerBack,
    riverTrackContainerFront,
    bgContainer;

let colorFill = '#fff'
let colorStroke = '#000 '
let widthStroke = 2

kickoffCJS()
makeIt()
setupKeyboard()
setupRiverTrack()



console.log("rtp: ", riverTrackPositions)

////////////////

function tick(e) {
  stage.update()

  // if (_.random(100) < 80) {
  //   makeRiverChunk()
  // }

  _.times(_.random(20), makeRiverChunk)

}

function setupRiverTrack() {
  let riverTrack = new lib.RiverTrack_1()
  _.times(riverTrack.totalFrames, index => { 
    riverTrack.gotoAndStop(index)
    let rtp = { 
      x: riverTrack.bead.x,
      y: riverTrack.bead.y,
      rotation: riverTrack.bead.rotation,
    }
    riverTrackPositions.push(rtp)
  })

}

function makeRiverChunk() {
  let startingPos = _.sample(riverTrackPositions)
  let riverChunk = new lib.RiverChunk_1()
  let riverChunkRange = 20
  riverChunk.x = startingPos.x + _.random(-riverChunkRange, riverChunkRange)
  riverChunk.y = startingPos.y + _.random(-riverChunkRange, riverChunkRange)
  riverChunk.rotation = startingPos.rotation
  if (startingPos.rotation >  0) {
    container.addChild(riverChunk)
  } else {
    container.addChildAt(riverChunk, 0)

  }
  riverChunk.addEventListener('tick', e => { 
    if (riverChunk.currentFrame == riverChunk.totalFrames - 1) { 
      container.removeChild(riverChunk)
      riverChunk.removeEventListener('tick')
    }
  })
}

function setupKeyboard() {
  window.addEventListener('keypress', e => {
    console.log('keypress:', e)
    if (e.code == 'Space') {
      destroyIt()
      makeIt()
    }
  })
}

function startInterval() {
  setInterval(()=>{
    destroyIt()
    makeIt()
  }, 3000)
}

function destroyIt() {
  container.removeChild(bgContainer)
  container.removeChild(pillarShape)
  container.removeChild(pillarAssetContainer)
  container.removeChild(patchAssetContainer)
  container.removeChild(head)
  _.map(vaseAssets, asset => {
    container.removeChild(asset)
  })
  vaseAssets = []
}

function makeIt() {
  bgContainer = makeBGPattern()
  container.addChild(bgContainer)
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
  patchAssets = _.map(pillarAssetsSortedByY, (pillarAsset, index) => {
    if (Math.random() < 0.2) {
      patchAssetID = _.random(2,11)
    }
    // let patchAsset = new lib["Patch_" + patchAssetID]
    // let patchAsset = new lib["Patch_" + 5]
    let patchAsset = new lib["UniPatch_" + 1]
    // patchAsset.gotoAndStop(_.random(patchAsset.totalFrames))
    patchAsset.gotoAndPlay(index % patchAsset.totalFrames)
    // recolor(patchAsset, colorFill, colorStroke, widthStroke)
    patchAsset.x = pillarAsset.x
    patchAsset.y = pillarAsset.y
    patchAsset.scaleX = pillarAsset.scaleX
    patchAsset.scaleY = pillarAsset.scaleY
    patchAsset.rotation = pillarAsset.rotation
    patchAssetContainer.addChild(patchAsset)

  

    return patchAsset
  })  
  container.removeChild(pillarShape)
  container.removeChild(pillarAssetContainer)

  // let topCircle = _.sortBy(pillarShape.children, ['y'], ['desc'])[0]
  // head = makeHead2()
  // recolor(head , colorFill, colorStroke, widthStroke)
  // head.y = topCircle.y - 100
  // // patchAssetContainer.addChildAt(head, pillarAssetsSortedByY[pillarAssetsSortedByY.length])
  // patchAssetContainer.addChildAt(head, 2)
  // // console.log("topCircle: ", topCircle[0])
  // patchAssetContainer.addChildAt(pillarShape, 0)

  // let rotAmount = 1
  // patchAssetContainer.rotation = rotAmount
  // let tweenTime = 6000
  // cjs.Tween.get(patchAssetContainer, {override:false, loop: -1})
  //   .wait(_.random(tweenTime))
  //   .to({rotation: -rotAmount}, tweenTime, cjs.Ease.quadInOut)
  //   .to({rotation: rotAmount}, tweenTime, cjs.Ease.quadInOut)

  makePillarBGAssets()


  addTweensToBushAssets()
  makeHead()

  makeVase(-200, 2, 1)
  makeVase(-150, 2.5, -1)

  patchAssetContainer.y = -100

}

function makeBGPattern() {
  let gridSize = 20
  let spacing = 200
  let bgPattern = new cjs.Container()
  _.times(20, outerIndex => {
    _.times(20, innerIndex => {
      let bgAsset = new lib.BG_1()
      bgAsset.rotation = _.random(360)
      bgAsset.scaleX = _.random(2) == 1 ? 1 : -1
      bgAsset.x = innerIndex * spacing - (gridSize / 2 * spacing)
      bgAsset.y = outerIndex * spacing - (gridSize / 2 * spacing)
      bgAsset.children[0].graphics._stroke.style = '#111111'
      bgAsset.children[0].graphics._strokeStyle.width = 1
      // bgAsset.cache(-25, -25, 50, 50)
      bgPattern.addChild(bgAsset)
    })
  })
  bgPattern.cache(-(gridSize * spacing / 2), -(gridSize * spacing / 2), (gridSize * spacing), (gridSize * spacing))
  return bgPattern
}

function makeHead() {
  let top = _.sortBy(patchAssetContainer.children, ['y'], ['desc'])[0]
  head = new lib.HeadCollection_1()
  head.y = top.y - 20
  head.rotation = -5
  let tweenTime = 2000
  // head.gotoAndStop(_.random(head.totalFrames))
  head.gotoAndStop(0)
  patchAssetContainer.addChildAt(head, patchAssetContainer.getChildIndex(top)+1)
  cjs.Tween.get(head, {override:false, loop: -1})
    .to({rotation: 5, y: head.y - 10}, tweenTime, cjs.Ease.quadInOut)
    .to({rotation: -5, y: head.y}, tweenTime, cjs.Ease.quadInOut)
}

function makeVase(y, scale, scaleXMult) {
  vaseFront = new lib.Vase_1_front
  vaseBack = new lib.Vase_1_back
  container.addChildAt(vaseBack, 0)
  container.addChild(vaseFront)
  vaseBack.y = y
  vaseFront.y = y
  vaseBack.scaleX = vaseBack.scaleY = scale
  vaseFront.scaleX = vaseFront.scaleY = scale
  vaseBack.scaleX = vaseFront.scaleX = scale * scaleXMult
  setAnimationStrokeWidth(vaseFront, 2)
  setAnimationStrokeWidth(vaseBack, 2)
  vaseAssets.push(vaseFront)
  vaseAssets.push(vaseBack)
}

function setAnimationStrokeWidth(anim, targetWeight) {
  let current = anim.currentFrame
  _.times(anim.totalFrames, frameIndex => {
    anim.gotoAndStop(frameIndex) 
    anim.children[1].graphics._strokeStyle.width = targetWeight / anim.scaleX
  })
  anim.gotoAndPlay(current)
}

function addTweensToBushAssets() {
  let total = patchAssetContainer.children.length
  _.map(patchAssetContainer.children, (asset, index) => {
    let initRotation = asset.rotation
    let initY = asset.y
    let newRotation = asset.rotation + _.random(-40, 40)
    let tweenTime = 933.3333333333
    cjs.Tween.get(asset, {override:false, loop: -1})
      .wait(index * 40)
      .to({rotation: newRotation, y: initY - _.random(20, 60)}, tweenTime, cjs.Ease.quadInOut)
      .to({rotation: initRotation, y: initY}, tweenTime, cjs.Ease.quadInOut)  
  })
}

function makePillarBGAssets() {
  let bgAssetsContainer = new cjs.Container()
  _.map(pillarShape.children, circle => {
    let bgAsset = new lib.Pilllar_BG_1()
    bgAsset.x = circle.x
    bgAsset.y = circle.y
    patchAssetContainer.addChildAt(bgAsset, pillarShape.getChildIndex(circle))
  })
  // patchAssetContainer.addChild(bgAssetsContainer)
}

function recolor(asset, fillColor, strokeColor, strokeWidth) {
  let tempColor = fillColor
  let colorShiftRange = 16  
  let colorShiftAmount = Math.random()/colorShiftRange - Math.random()/colorShiftRange
  tempColor = pSBC(colorShiftAmount, tempColor)
  // let strokeColor = pSBC(-0.1, tempColor)
  asset.children[0].graphics._fill.style = fillColor
  // asset.children[0].graphics._fill.style = tempColor
  // asset.children[1].graphics._stroke.style = 'rgba(0,0,0,1)'
  asset.children[1].graphics._stroke.style = strokeColor
  asset.children[1].graphics._strokeStyle.width = strokeWidth
}

function makePillarShape() {
  let pillarShapeContainer = new cjs.Container()
  let numCircles = 15
  // let numCircles = _.random(10, 20)
  let yDistInterval = 25
  // let yDistInterval = _.random(2/0, 25)
  // let yDistInterval = _.random(10, 20)
  // let yDistInterval = _.random(5, 10)
  let xRange = 80
  // let xRange = _.random(50, 150)
  let circles = _.times(numCircles, makeCircle)
  _.map(circles, (circle, index) => {
    let percentage = 1 - (index / numCircles)
    circle.y = -(index * yDistInterval)
    circle.x = _.random(-xRange * percentage, xRange * percentage)
    pillarShapeContainer.addChild(circle)
  })
  return pillarShapeContainer
}

function makePillarAssets(pillarShape) {
  let assets = _.times(_.random(15, 20), makeMarker)
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

function placeItem(item, range) {
  item.x = _.random(-range, range)
  item.y = _.random(-range, range)
}

// function makeHead2() {
//   let item = new lib.Pilllar_BG_1()
//   return item
// }

// function makeHead() {
//   let item = new cjs.Shape()
//   item.graphics.beginFill('pink')
//     .drawCircle(0, 0, 100)
//   return item
// }

function makeBGShape() {
  let item = new lib.Pilllar_BG_1()
  // item.rotation = _.random(360)
  return item
}

function makeCircle() {
  let item = new cjs.Shape()
  item.graphics.beginFill(colorFill ).drawCircle(0, 0, 100);
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
