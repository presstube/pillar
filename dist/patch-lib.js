(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Patch_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AGviqQAOBGARBPQA0A/AWA0QAoBagGCjIAAAXQgIgCgEgFIAMgQQABgCAVhDQAVhHgDgbQAgBqAMA4QAVBeAACSQAAAagBACQgGAPgOBdAE8ihQALAXAQA5QAWBPAAA2QAAARgIAEQgIAFAAAMQAMBIAJASIgBgfQAAgzAag8QANgfANgaQAFgbADgvQADgwgBgdIgBgdAE8ihIgGgmAqaLOQgFglgDiXQAAgdAQglQACgDAhhDQAzhmAAhgQAAgigbhUQgchSAAgPQAAgQAKgLQAKgMASAAQAWAAATARQAQANADAMIAAABQABgEABgaQABgYAAgJQAAhTgNgkQgIgWgUgNQgWgOgHgSQgNgfAAhMQAAAAgQgXQgQgcAAgbQAAgcALgQQALgQAWAAIABgDQgBgBgHgSQgGgTAAgSQAAgoAVgQQANgKAbAAQAGAAADAFQAFAKAGAKIgDgbQAAgXAQgPQANgNAOAAQAIAAAIAKQABACANAUIABAAQAAghADgHQAJgWAmAAQAOAAASAKQAXAOACAXIACALQgCgcAYgMQAOgHAOAAQAQAAAEAOQAPArAGAMIADABQACgCAXgTQAQgMACAAQAGAAARAvQAVA8AJBNIABAAQADgHABgUQADgQAXAAQARAAAjBCQAgA7AfBUQAPArAKB8QADAnAJARQAKAVAaAAQAXAAAJgPQAFgHAGgdQAPhDA0gkQgKAzAAAZQAAAcAMAZQAQAbAIAQQAhA7gKBlQgDATgGASADbBnQAPgzAUgdQADgEAeggQAhgjgEhx");
	this.shape.setTransform(0.025,-71.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjIPrQhXgehOg5QjLiWhJkTIgLglIgOguQgFglgDiXQAAgdAQglIAjhGQAzhlAAhgQAAgigbhUQgchTAAgPQAAgQAKgLQAKgMASAAQAWAAATARQAQANADAMIAAABIACgeIABghQAAhTgNgkQgIgWgUgNQgWgOgHgSQgNgfAAhMIgQgXQgQgcAAgbQAAgcALgQQALgQAWAAIABgDIgIgTQgGgTAAgSQAAgoAVgQQANgKAbAAQAGAAADAFIALAUIgDgbQAAgXAQgPQANgNAOAAQAIAAAIAKIAOAWIABAAQAAghADgHQAJgWAmAAQAOAAASAKQAXAOACAXIACALQgCgcAYgMQAOgHAOAAQAQAAAEAOQAPArAGAMIADABIAZgVQAQgMACAAQAGAAARAvQAVA8AJBNIABAAQADgHABgUQADgQAXAAQARAAAjBCQAgA7AfBUQAPArAKB8QADAnAJARQAKAVAaAAQAXAAAJgPQAFgHAGgdQAPhDA0gkQgKAzAAAZQAAAcAMAZIAYArQAhA8gKBlQgDATgGASQAGgSADgTQAPgzAUgdIAhglQAhgjgEhxQALAXAQA5QAWBPAAA3QAAARgIAEQgIAFAAAMQAMBIAJASIgBgfQAAgzAag8QANgfANgbIApgCQA0BAAWA0QAoBagGCiIgMAQQAEAFAIACIAAgXIAWhEQAVhHgDgbQAgBqAMA3QAVBeAACSQAAAagBACQgGAPgOBdQgtCehBB/Qg7BzgrAeIg+AwQgyAlgyAaQiZBPjEAAQg6AAhJgZg");
	this.shape_1.setTransform(0.025,-40.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Patch_11, new cjs.Rectangle(-68.4,-144.6,136.9,206.6), null);


(lib.Patch_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AnRHZQADjWAQhVQAQhQAAgwQAAg1gqiDQgqiDAAgLQAAgyAmAAIAYAjQAYAiAVAAQAhAAALgWQAGgPgBgjQgBgmADgMQAIgXAbAAQAVAAATAxQAUAwAKAAQANgGAQgGQAggMAUgCQAAgBgEhAQAAgeAOgLQAJgHAQAAQAsAAAGAsQADAXADAGQAHAOATAAQBGAAABg4QAAghACgFQAFgRAZAAQAxAAAGA/QACAgACAMQADAUAMAAQA0AAATgFQARgFABgNQAAgIgEgbQgCgdAIgcQAPALANAjQAWA9AABuQAAAbgKAlQARgTARg4QAThCgDg8IAAgKQAXAOAGASQALAiAABoQAAArgFAgQgFAjgKAKQADAHADACQAXgSAihtQACgIAHg2QAIg9AAgTQAMASAAAMQgBA2AFBEQALAeAGAVQALAnAAAjQAAAXgMAvQgKAqgHALIgFAJQAEgFAcgsQAdgtACgEQAQgaABgRQAAgKgDgTQAAgEAEgJQAEgKAEgHIABgHQABAcAHBQIACA9QAABdgWA1QgeBHgHAtQgOBOgDATQgDAYgBBP");
	this.shape.setTransform(0.025,-48.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AibK+Qg3gPgUgMQikiOAAgwQAAgFAFgKQAFgKAAgFIgnhGQgnhQgDhNQADjWAQhUQAQhQAAgwQAAg2gqiDQgqiDAAgKQAAgzAmAAIAYAjQAYAjAVAAQAhgBALgWQAGgOgBgkQgBgmADgMQAIgWAbAAQAVAAATAwQAUAwAKAAIAdgMQAggMAUgBIgEhCQAAgeAOgLQAJgGAQgBQAsAAAGAsQADAYADAFQAHAOATAAQBGAAABg4QAAggACgGQAFgRAZAAQAxAAAGA/QACAhACALQADAUAMAAQA0AAATgFQARgEABgNQAAgJgEgbQgCgcAIgcQAPAKANAkQAWA8AABuQAAAbgKAlQARgTARg3QAThDgDg7IAAgLQAXAOAGASQALAiAABoQAAArgFAhQgFAigKALQADAHADACQAXgTAihsIAhAJQALAeAGAVQALAnAAAjQAAAYgMAuQgKAsgHAKIgFAJIAggxIAfgyIAjgBIACA+QAABdgWA1QgeBHgHAsIgRBhQgDAYgBBPQADDqjPCQQhNA3hdAfQhOAag4AAQgZAAg5gQg");
	this.shape_1.setTransform(0.025,-23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Patch_10, new cjs.Rectangle(-52.5,-96.6,105.1,144.6), null);


(lib.Patch_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AFOEmQAAgQAFgLQAGgLAIAAIAGgEQAIgDAGAAQAZAAALAKQAFAGAJAWIAAAJQADgRAWgNQAYgPAfAAQASAAARAYQAWAdgHAqQAJgHAUgHQARgHAEAAQAPAAANAsQAQA0AJAKQAFAGAVARQATAbAABBQAABJgqA+QgzA9gSAeAmLnvQAEgOACgEQAFgJAKAAQAqASAQAfQABgCAQhAQARgBAKAAQAKAAAZAhQAeAoAaA4QBJChgIC/IABAEQAAgzAHgXQAJggAZAAQANAAAMAIQAQAKAFAVIACAJQACgeASgQQAOgOATAAQAcAAAEASQAAAYAFAKIADABIASgTQAMgOAKAAQAaAAAEAJQAEAYAMAbQAIgGAOgHQALgGACAAQAMAAALANQARAVgFAtQAIgKAQgKQARgLAJABQAGApACAWQAFAngDAHQAQgJAKAAQASAAAEAbQACAqACAeQABAKALAqIAKAoQAAAJgJALQgKANgNAFADfIEQgXAFgNgNQgNgMAAgXQAAgQAHgFQAHgFATAEIAEADQgJgLgIgVQgHgVAAgLQAAgaAWgFQAkgHALgJIAegrQAPgVAIAAQANAAAMAPQAGAJADAJIAAAEIgJgWAnSntQgCgigehlQgPgygPguQAAgLAKgRQALgTAMAAQAbAAAjByQAZBTANBPQAJAZAAADIACAGAqjCcQAEgtAXhiQAUhTAAhYQAAhCgiheQgihfAAgKQAAgkAJgKQADgEAIAAQAlAAgHAeQADgCAEgDQAEgDAAgGQAAgFgEgIQgFgIAAgFQAAgOAOgHQANgHAVAAQAHAAAKAEQARAGAEANIACAFQgJgfATgNQALgJAQAAQAaAAAGANQALAWAKAIAnSnmIAAgHAqrMEQgFghgFhCQgHhZAAhFQAAgtAFhdQAGh4AJhb");
	this.shape.setTransform(3.025,-77.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjDQPQjLhShih5Qgpg0g0hjQhHiJgXh0QgFgigFhBQgHhZAAhFQAAgtAFhdQAGh4AJhaIAFgKQAEgtAXhiQAUhUAAhYQAAhCgihfQgihfAAgJQAAgkAJgKQADgFAIAAQAlABgHAeIAHgFQAEgDAAgGQAAgFgEgIQgFgIAAgFQAAgOAOgHQANgIAVABQAHAAAKADQARAHAEAMIACAGQgJgfATgOQALgIAQAAQAaAAAGANQALAWAKAIQgCgigehlIgehgQAAgMAKgQQALgTAMAAQAbAAAjByQAZBTANBPIAGgSQAFgJAKAAQAqASAQAfIARhCIAbgBQAKgBAZAiQAeAnAaA5QBJChgIC/IABAEQAAgzAHgYQAJgfAZAAQANAAAMAIQAQAKAFAVIACAJQACgeASgRQAOgOATAAQAcABAEASQAAAYAFAKIADABIASgUQAMgNAKAAQAaAAAEAJQAEAYAMAbQAIgHAOgGIANgHQAMAAALAOQARAVgFAtQAIgKAQgKQARgMAJACIAIA/QAFAogDAHQAQgJAKAAQASAAAEAbIAEBIQABAKALAqIAKAoQAAAIgJAMQgKAMgNAGIAJAbIATgmIAGgDQAIgEAGAAQAZAAALALQAFAGAJAWIAAAJQADgRAWgOQAYgOAfAAQASAAARAXQAWAdgHAqQAJgGAUgHQARgHAEAAQAPAAANArQAQA0AJAKQAFAFAVASQATAbAABBQAABJgqA9QgzA+gTAeQgmAqgWDBQgKBhgGAeQgLA4gSAIQgaAKgjA2QgoA/gyAgQiVBfg+AAQiJAAi0hJgADTCxIAMgBIgMABIAAAAIAAAAQgNAAgKgHIAAgBIAAAAIgBgBQgNgMAAgYQAAgPAHgFQAEgDAHAAIAAAAIAAAAIAEAAIACAAIAGABIADABIAEACQgJgKgIgVQgHgWAAgLQAAgZAWgFQAkgHALgJIAegrQAPgUAIAAQANgBAMAPQgMgPgNABQgIAAgPAUIgeArQgLAJgkAHQgWAFAAAZQAAALAHAWQAIAVAJAKIgEgCIgDgBIgGgBIgCAAIgEAAIAAAAIAAAAQgHAAgEADQgHAFAAAPQAAAYANAMIABABIAAAAIAAABQAKAHANAAIAAAAIAAAAgAFXgXIAAgFQgDgIgGgKgAmCsnIACAGIgCgGIgJgcIAJAcgAnSs6IAAgHg");
	this.shape_1.setTransform(3.025,-43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Patch_9, new cjs.Rectangle(-68,-155.3,142.1,223.4), null);


(lib.Patch_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABigyQAJARASA7QAVBGgCAcQAGgQAGgqQAGgwAAgyQAAhUgFgTQgDgMgPgSAhpgvQACgkANgvQAOg2AVgfQAHBmAXBeQAUBNAABqQgKBuAAAKQAAA0AFASQACAGARAlIAFAHQAPieArhPQAUglAGgUQAKglAAhDQAAgIgDgRQgDgUgEgLIgNgeQgMgcgJgbAGCD+QgCgogQgjQgIgVgVgmQgmhLANhkQgSAPgQAuQgQAtAAAjQAKCEAAAKQAAAcgEAfQgFAqgLAZQgmk7gEgaQgYiLgngnAGCD+IgCAoIABgoIABAAQAFhqASgkQAPgfAAgvQAPBjAVBDQAIAYAbBEQAlBcABCiAkVniQACgDAAgGIAAAAIgCAJQgFAgAAASQAAAcAGAJQAKAJAGAKQAcAqARC9QAGgQAJhXQAGhEAdgnQABCCAXA0QATAoABADQALAgAFAzQAAAKgDARQgDAQgEAIAmfoRQADgJgBgFIgCgCIAAAQQABBMA5BmQAZAtAHAXQALAkgLAgQAGgGAHgZQAGgYAAgNQAAgGgLgjQgLgjAAgHQAAghAJgTQAIgSAiguAnymWQAEAPAiAwQAjAwACAMIACAAQAAgCgMgeQgLgpAAgxQAAgdANgvQAHgYAJgYAoRGpQAFiEAoiVQAUhKAThCQAAh5gdhlQgPgygPgvQAAgIACghQACgiACgQQAEgWgFgIIgBAAQAAgDAAAKIAAAXIACAAAoMIiQgEgugEhG");
	this.shape.setTransform(1.9375,-54.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al1J/QiEiGgTjKQgEgugEhHIADgFQAFiEAoiUIAniLQAAh7gdhlIgehhIACgoIAEgzQAEAPAiAxQAjAwACALIACAAIgMggQgLgoAAgxQAAgdANgvQAHgYAJgYQABBLA5BmQAZAuAHAXQALAjgLAgQAGgFAHgZQAGgYAAgOQAAgFgLgkQgLgiAAgIQAAggAJgUQAIgRAiguQgFAgAAARQAAAdAGAIQAKAKAGAJQAcArARC8QAGgQAJhWQAGhEAdgnQABCCAXAzIAUAsQALAgAFAyQAAALgDAQQgDAQgEAKQAEgKADgQQADgQAAgLQACgkANguQAOg2AVggQAHBnAXBdQAUBOAABrQgKBsAAALQAAAzAFASQACAHARAkIAFAHQAPieArhOQAUgkAGgUQAKgmAAhDQAAgIgDgSQgDgUgEgKQAJAQASA8QAVBGgCAcQAGgQAGgpQAGgxAAgyQAAhVgFgSQgDgNgPgRIAKAAQAnAmAYCNQAEAZAmE7QALgaAFgqQAEgfAAgbIgKiNQAAgjAQguQAQgvASgPQgNBlAmBLQAVAmAIAVQAQAjACAoQAFhqASgjQAPggAAgvQAPBjAVBEQAIAXAbBEQAlBbABCjQgPC9jlCXQhbA8hmAjQhfAjhBAAQiyAAiDiGgAGAAyIACgnIgBAAg");
	this.shape_1.setTransform(1.9375,-30.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Patch_8, new cjs.Rectangle(-52.3,-110.2,108.6,157.3), null);


(lib.Patch_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABqikQAIgLALgHQAMgHAJAAQAXAAAIALQAFAIAAATIgCANQABgBAQggQATgfARAAQAHAAALAKQASAPABAdQAlglAYAAQAKAAAFAMQAHAUgDA3QAFgFAPgSQANgPAIAAQAKAAAOATQARAXgMAaQAIgJAOgHQAKgGAEAAQAQAAACAEQAEAIAAAtQAAAMgHA8QgIA8AAAlQAAAwAUBrQAVB1AEBSAn1HqQgGhbAAgXQAAgpAIgYQAXg9AehYQAPgvAAh2QAAh6gYhRQgYhQAAgXQAAgbAzAAQAdAAAEAoQAEAnAOAAQA5AAAVgPQAPgLAAgYQAAgLgDgCQgCgCgGgBQgLgHAAg7QAAgRAPgEQAmgGAsgMQAHBjAdAAQA0AAAlgpQAAgOgHglQgJgrgJgEQAZgBAkgKQAjgKANAAQAMAAAoB3QAoB5AOBVQAMBiAAAcQAAAjgEAOQgLAkgDAOABkiKIAGga");
	this.shape.setTransform(1.025,-48.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AisK6QhGgbhAgtQihhygJiHQgFgTgGABQgFgMgJhcQgGhbAAgXQAAgpAIgYQAXg9AehXQAPgvAAh3QAAh6gYhRQgYhQAAgXQAAgbAzAAQAdAAAEAoQAEAnAOAAQA5AAAVgPQAPgLAAgYQAAgLgDgCIgIgDQgLgHAAg7QAAgRAPgEQAmgGAsgMQAHBjAdAAQA0AAAlgpQAAgOgHglQgJgrgJgEQAZgBAkgKQAjgKANAAQAMAAAoB3QAoB5AOBVQAMBiAAAcQAAAjgEAPIgOAyIAOgyQAEgPAAgjQAAgcgMhiQAIgLALgHQAMgHAJAAQAXAAAIALQAFAIAAATIgCANIARghQATgfARAAQAHAAALAKQASAPABAdQAlglAYAAQAKAAAFAMQAHAUgDA3IAUgXQANgPAIAAQAKAAAOATQARAXgMAaQAIgJAOgHQAKgGAEAAQAQAAACAEQAEAIAAAtQAAAMgHA9QgIA8AAAlQAAAwAUBqQAVB1AEBSQgCAlgGAiQgNA3gkBCQgyBdg5AaQgfANgyAgQg+AogWAMQhvA+iBAAQgsAAhDgbgABkl1IAGgag");
	this.shape_1.setTransform(1.025,-25.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Patch_7, new cjs.Rectangle(-50.8,-98.9,103.69999999999999,145.9), null);


(lib.Patch_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ah7hKQAIgdAUgXQAigoAUgfQAEgHAVg4QAYg0AfAAQAQAABCBxQA/BxACAAQAMAAAthlQAthlAgAAQAXAAAfBKQAoBoAbA6QAwBoAZBJQA0CWAABuQAAALgDAmQgDArgCAFAijGVQAMhIBZi2QBXi0AWAAQAhAABQC/QA7CPARA8Ag/CRQgFgkgUgsQgYg3gUhSQg2jPghiTQgMg3gHAAQgTAAghAzQgoA+geBfQgrB/gYBRQgMAqhUDxQgqB4AABNQAAANAFA2");
	this.shape.setTransform(1.025,-47.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlJJyQhag4hAhbQgZgegahOQgZhIgBggQgFg2AAgNQAAhNAqh5QBUjxAMgpQAYhRArh/QAehfAog+QAhgzATAAQAHAAAMA3QAhCTA2DPQAUBSAYA3QAUAsAFAlQgFglgUgsQgYg3gUhSIAJgCQAIgeAUgWQAigoAUggQAEgHAVg3QAYg0AfAAQAQAABCBxQA/BxACAAQAMAAAthlQAthlAgAAQAXAAAfBKQAoBoAbA6QAwBpAZBIQA0CVAABvIgDAxQgDAqgCAGQgkBCgzBFQhHBeg1AaQhXArg7AqQggAXgmAfQgeAVglAHQgrAIheAAQiMAAh0hHgAg+g/QhZC1gMBIQAMhIBZi1QBXi2AWAAQAhAABQDBQA7COARA8QgRg8g7iOQhQjBghAAQgWAAhXC2g");
	this.shape_1.setTransform(1.025,-25.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Patch_6, new cjs.Rectangle(-56.6,-96.4,115.30000000000001,140.5), null);


(lib.Patch_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ao2HUQgCgsAAgrQAAiyAuhBQAEgHAlgoQAagdAOgiQAWg0AUghQANgWABgJQgDg9AAiwQAAg7AHgOQADgGAMAAQAJAAAMAGQANAGAJAIQABACAAABQACABgBgJQgFgQASgVQATgYAdAAQAZAAAEALQAJAaACACIABAAQACgYAAAAQAHgUAcAAQASAAAQAOQATAQgFAUQABADABAAQABACAAgKQgDgYANgPQAOgSAeAAQAcAAANAQQAMAQAEAqQADgEAGgcQAKgaATAAQAoAAAaB0QATBVAAA8QgJAcgJAeQgRA+AAAfQAAAVAOAHQAHAEAPAAQAZAAAJgQQAFgKADgaQADgZAHgKQALgQAbAAQASAAAFAKQAEAHAAARIgCALQACgDAIgtQAHggAaAAQAUAAATAYQAUAagGAUIAEAKQgGgeAUgNQAOgJAYAAQAXAAAKALQAOAPgJAmIAAAAQAIgEAWgZQAUgYAEAAQAJAAAKASQAOAbgHAuIABAHIABABQADgCAFgTQAKgTAdAAIAQAFQAPAJAAAaQgMAcgNAnQgaBOAAA4QAAAnAPBEQASBXAIBQ");
	this.shape.setTransform(2.025,-45.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AknJ5QiGhShNiVQgYgggIgUQgSgqgJhLQgDgsAAgrQAAixAuhBQAEgHAlgoQAagdAOgiQAWg1AUghQANgWABgJQgDg9AAiwQAAg7AHgOQADgGAMAAQAJAAAMAGQANAGAJAIIABADQACABgBgJQgFgQASgVQATgYAdAAQAZAAAEALQAJAaACACIABAAIACgYQAHgUAcAAQASAAAQAOQATAQgFAUIACADQABACAAgKQgDgYANgPQAOgSAeAAQAcAAANAQQAMAQAEAqQADgEAGgcQAKgaATAAQAoAAAaB0QATBVAAA8IgSA6QgRA+AAAfQAAAVAOAHQAHAEAPAAQAZAAAJgQQAFgKADgaQADgZAHgKQALgQAbAAQASAAAFAKQAEAHAAARIgCALQACgDAIgtQAHggAaAAQAUAAATAYQAUAagGAUIAEAKQgGgeAUgNQAOgJAYAAQAXAAAKALQAOAPgJAmIAAAAQAIgEAWgZQAUgYAEAAQAJAAAKASQAOAbgHAuIABAHIABABQADgCAFgTQAKgTAdAAIAQAFQAPAJAAAaQgMAdgNAnQgaBOAAA4QAAAnAPBDQASBXAIBQQATBSgoBQQgsBXhkA0QjEBkgdAMQiEA5hnAAQhyAAhzhGg");
	this.shape_1.setTransform(2.025,-22.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Patch_5, new cjs.Rectangle(-55.9,-93.6,115.9,141.6), null);


(lib.Patch_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ADZFGQgtgXgXg5QgPgoAAgkQAAhJAZhKQAahJAAg6QAAgFgGgoQgHgtgFgJQgyhrg4g4QgRgQgEgQQgGgVAAg2QAAgPAHgIQAGgIAAgIQAAgTgGgIQgHgKgTAAQgWAAgNALQgaAYAABHQAABbAQApQAVAhAHATQAVAZASAPAEVDiQgohQAAgrQAAgbANgUQAUggAUhQQABgGACgXQACgaAAgHQAAhfgYghQgRgYgqAAQgKAAgFAGQgMANgIAmABDEUQgCgRgJgfQgJgdAAgDQAAhZAKgyQAKgyAAgUQAAhsgNgYQgFgKgSgZQgUgfgUgvQgDgCgSgEQgRgDgHAAQgGAAgGAOQgKAWADAtIAMAhQAOAfAGAWQAMAnAABXQAAAugLBAQgKBAAAACQAAAlAYAoQAVAgAMAFAEzg1QAHgbAJAAQASAAATAaQATAbAAAcQAAAPgWAuQgVAuAAAuQAAAQAYAkQAvBGAFAIQBMB/gCCPAibiEQgWg+gghEQgjhJAAg8QAAhAAfgkQAPgTARgFQAYAAAHAJQAFAIgBAaQgEBbAYBRQAJAdAPAcQATAhAKAcIABANAjeg/QgJAAgGgEQgGgEAAgGQAEgiASgUQASgUAWAEQAPADALAMAjoCIQAGhwgJgyQgGgbgKgUQgTgugzg4Qgzg4gXAAQgjAAgKAIQgGAGAAAVQAAATARAUQAZAYAOAPQA3A+AABfQAABegaBAQgOAigrA7QgmA0gOArQgVBDAIBmAiFg/QgJghgNgkQAGAHAFAIQAOAZgDAdQACAHAFAlQAEAhAAACQAABKgGAlQgGAkAABHQAAAMAFAUQAGAWABAIAiEghIgBge");
	this.shape.setTransform(-1.1078,-56.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjkLbQh8g/gXhKQgIgUgcghQgfgjgKgTQgOgdgKhCQgHgvAAgVQgIhmAVhDQAOgrAmg0QArg7AOghQAahAAAheQAAhgg3g+QgOgPgZgYQgRgUAAgTQAAgVAGgGQAKgIAjAAQAXAAAzA4QAzA4ATAuQAKAUAGAbQAFAeAAA0QAAAkgCAtQACgtAAgkQAAg0gFgeQgGgbgKgUIAIgEQAAAGAGAEQAGAEAJAAQgJAAgGgEQgGgEAAgGQAEgiASgUQASgUAWAEQAPADALANQgWg/gghEQgjhJAAg8QAAhAAfgkQAPgTARgFQAYAAAHAJQAFAIgBAaQgEBbAYBRQAJAdAPAcQATAhAKAcQgDgtAKgWQAGgOAGAAQAHAAARADQASAEADACIAHgFQAVAZASAPQgSgPgVgZQgHgTgVghQgQgpAAhbQAAhHAagYQANgLAWAAQATAAAHAKQAGAIAAATQAAAIgGAIQgHAIAAAPQAAA2AGAVQAEAQARAQQA4A4AyBrQAFAJAHAtIAGAtQAAA6gaBKQgZBKAABJQAAAkAPAnQAXA5AtAXQgtgXgXg5QgPgnAAgkQAAhJAZhKQAahKAAg6IgGgtQgHgtgFgJIAKgGQAIgmAMgNQAFgGAKAAQAqAAARAYQAYAhAABfIgCAhIgDAdQgUBRgUAgQgNAUAAAbQAAArAoBQQgohQAAgrQAAgbANgUQAUggAUhRIARADQAHgbAJAAQASAAATAaQATAbAAAdQAAAPgWAuQgVAuAAAuQAAAQAYAkIA0BNQBMB/gCCPQgCBegRAsQgJAWgmAxQgTAZgaAtQghAuhMA9QgnAghnAWQhiAUhiAAQg0AAhog1gAgygbQAAAkAYAoQAVAgAMAFQgMgFgVggQgYgoAAgkIAKhCQALhAAAguQAAhYgMgnQgGgWgOgfQAOAfAGAWQAMAnAABYQAAAugLBAIgKBCIAAAAgAiGAEQAAAMAFAUQAGAWABAIQgBgIgGgWQgFgUAAgMQAAhGAGgkQAGglAAhKIgEgkQgFglgCgHIAAgJQAAgYgLgVQgFgIgGgGQANAjAJAhQgJghgNgjQAGAGAFAIQALAVAAAYIAAAJQACAHAFAlIAEAkQAABKgGAlQgGAkAABGIAAAAgAAvghIAJAgQAJAeACARQgCgRgJgeIgJggQAAhZAKgyQAKgyAAgVQAAhsgNgYQgFgKgSgZQgUgfgUgvQAUAvAUAfQASAZAFAKQANAYAABsQAAAVgKAyQgKAyAABZIAAAAgAiEkHIgBgegAhImTIALAUIgMghgACnm1IAAAAg");
	this.shape_1.setTransform(-1.1078,-33.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Patch_4, new cjs.Rectangle(-50.7,-112.8,99.2,157.9), null);


(lib.Patch_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AErhJIAAgMQAAguAUgqQASgnAZgMIASgFQgXAXAAAgQAAALAGAdQAFAfAFAIIAHAGIgBgUQAAgoARgZQARgXAvggQADgBAAAKQgGAIgHAPQgNAdAAAnQAAAtAJAUQAMATAHATQAcBLAAEnQAAAKgDAqQgDAvgEAbAnpHWIgDhJQAAgsA7iSQA6iTAAhZQAAivgphwQgVg4gWgbIAMADQAeAFAaAkQAYAiAcBIIABgaQAAgxgag3QgZg3AAgPQAAgGADgCQABgBACgBIAGAAQASATAnBEQAsBMAHAnIABgCQABgFABgXQABgXAAgHQAAgsgOgtQgHgZgNgmQAoAsAcA4QAgA8AAAoIAEgDQAHgKABAAIACgYQAAhKgihZIAKAFQAuAkATAyQASBBARAsIABgXIgMhfIgQg/IgDgTQAGAFAMAcQALAYAFAVQBEBRA5CtQAyCTAAA8QgIB0AAAKQAAAQAFATIADAKIgBgVQAAg4AYg4QAghOALgsQAEgQAKhjQAThdA0gHIATgKQgIAKgIAYQgHAVAAAFQAAAVAGAVQAIAUAAACIABAAQAAgWAFgOQAOgmAxgnIAKgGQgGAHgEASQgJAiAAA6QAAAMACAPQADAQADABQABAAAAAAIAAAOIgBgO");
	this.shape.setTransform(-0.95,-46);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiYKUQgogJgRAAQgfAAgxgbQg3gfgtgwQh4h9AViWIgEhKQAAgrA7iTQA7iRgBhaQAAivgphwQgVg4gWgbIALADQAfAGAaAjQAZAiAbBIIABgaQAAgwgag4QgZg3AAgPQAAgGADgCIADgCIAGAAQASAUAnBDQAsBMAHAnIABgBIACgdIABgfQAAgqgNguIgVg/QAoAtAcA3QAgA8AAAoIAEgDQAHgKABAAIACgYQAAhKgihZIALAGQAtAjAUAyQARBBARAsIABgXIgMhfIAPgEQBEBRA5CtQAyCTAAA9IgIB9QAAAQAFATIADAKIgBgVQgBg3AYg4QAihOAKgtQAEgQAKhjQAShdA1gHIATgKQgIAKgIAYQgHAVgBAFQAAAVAIAVIAHAWIABAAQAAgWAEgNQAOgnAygnIAKgGQgGAHgFASQgIAigBA6QABALACAPQADARADABIgBgMQABguATgqQATgnAYgNIATgEQgXAXAAAgQAAALAFAdQAHAfAEAIIAHAGIgBgUQAAgoARgZQARgXAvggQADgBAAAKQgGAIgHAOQgOAeAAAnQABAtAIATQANAUAHATQAcBMAAEmIgDAzQgDAwgDAbQgjGQoUAAQgcAAgpgKgAEskDIAAgOIgBAAIABAAIAAAOIgBgOg");
	this.shape_1.setTransform(-0.95,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Patch_3, new cjs.Rectangle(-51.2,-94,100.6,135), null);


(lib.Patch_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmlmeIAAgRQAAgiATgRQANgKAKAAQAMAAAIAQQAGAXADAJIABAKQAGgHAEgPQAEgLAAgEQAAhCgRg7QgSg7AAghQAAgXAJgLQAJgLAPAAQAQAAAqDdQAFgpAAgFQAAgVgTgvQgSguAAgqQAAgmAbAAQAxAAAKBSQACAMAABjQAAADAHASQAHARAAAHQAAAHgEAtQgEAqgCAQIAAAEIABAAQAAgZADgHQAFgUAUAAQAEAAAHAKQAGAMAGASQATgZAYAAQAQAAAEAIQABAEAEApQARgNAqgHQAKAAAKAdQALAcAVAAQATAAALAXQAKAWAAAoQAAANgEAHQgFAFgCAFIgBAIQAIgRAPgKQALgIAGAAQAQAAAJAQQAIAOAAAWQAAAfgXAWAFflBQABAsgDANQgHAbgCAXIAAAUIgBgeQAAgPADgVQAGggADgdQABgpAKgQQAHgOAPAAQARAAACABQAGAEADAQQACAMAGCvQATg3AGhFQAEgnARAAQAWAAAJAbQAQAxgQCFIAXgQQAWAMgMA6QAJgIAKgFQATgLAMAEQgBAWgDAZQgDAZgDAIIAMAAQAjAAAAAUQgOAjAAAHQAAAFAOAHQANAIAAAMQAAAOgFAYQgGAZAAAWQAAAbgZAgQgZAgAAAXQAAA1AGASQAKAPAFAOQAWA2AAEVQgXAqgHALAAygYQgUgDgJgPQgIgPAAgaQAAgHAEgGQAFgGAIAAQAGAAAIAEQAHAFACABQAAgCgDgKQgDgKAAgGQAAgGAFgGQAKgKAZgBQAWAHACAHQACgFACgPQAHgOAaAAQAKAAAJALQAJAKAEAMIABAAQACgXABgCQAGgTAbAAQAGAAAaAIQARAFgHgIQABgTADgFQACgDAEgGQAJgXAAiLQAAgVAHgIQAGgHAOAAQAWAAAKAXQAHANAHArAHtiBQgCADgCAHIAAABgAHxiKIgEAJAibCnQgRglgbg3QgSgqAAgeQAAgLAIgQQAQAKARAiQAPAjACACQADABAdAlIAAAAIgHgMQgKgNgKgQQgDgJgLgxQAAgnAJgLQAEgGALAAQAVAAAHALQAEAHABAWQAEA1AmAgQAGAAABgBQADgBAAgIQAAgFgEgFQgEgFAAgFQAAgOAGgIQAFgFAGAAQACAAAIAFQAIAFAHAIQACACABABQACACAAgHQgDgaAbAAQANAAAJAIQAHAHAHAQIABAAQACgGADgTQAFgQAUAAQAaAAANAvQAGgFARgJQASgKACAAQAMAAAKAMQALAOgEASIgCAKQALgIAdgHQAIAAAGAHQAMANgGAjAmjGVQhuiZAIhXQAQiNAWgwQAFgMAHgPQAFgNAAgbQAAhJgaguQgagvAAg+QAAgkAKgGQAEgBAcADIAEACQgCgCgEgLQgDgLAAgHQAAgXAIgOQAIgOAJAAQAIAAALAIQAJAHAHAKIACAKAiLFtIgPACQgmAAAAgmQAAgXAEgGQAEgGAOABQgQgBgKgQQgLgQAAgbQAAgFAFgEQAGgGAMAEQgBAAgCgMQgDgMAAgHQAAgdAjADIAGAIApDK3IgDgEQgSgigCg6QABhlAAhiQAAg2gOg5QgOg5AAgHQAAgKAMgLQAGACAJAHQAJAGAEAGQADACABAAQABAAAAgGQAAgBgIgLQgJgOAAgUQAAgZAVAAQAVAAAGAKQADAMAFAEIABABQADgBACgLAppLxQABgFAbg1");
	this.shape.setTransform(2.025,-76.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(2.025,-47.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Patch_2, new cjs.Rectangle(-62,-152.5,128.1,209.5), null);


// stage content:
(lib.patchlib = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Patch_11();
	this.instance.setTransform(863.2,715.05,1,1,0,0,0,0,-102.9);

	this.instance_1 = new lib.Patch_10();
	this.instance_1.setTransform(634.65,670.55,1,1,0,0,0,0,-71.9);

	this.instance_2 = new lib.Patch_9();
	this.instance_2.setTransform(413.65,772.25,1,1,0,0,0,0,-111.2);

	this.instance_3 = new lib.Patch_8();
	this.instance_3.setTransform(184.7,674,1,1,0,0,0,0,-78.1);

	this.instance_4 = new lib.Patch_6();
	this.instance_4.setTransform(729.25,460.85,1,1,0,0,0,0,-69.8);

	this.instance_5 = new lib.Patch_7();
	this.instance_5.setTransform(519.9,447.45,1,1,0,0,0,0,-72.5);

	this.instance_6 = new lib.Patch_5();
	this.instance_6.setTransform(885,271.05,1,1,0,0,0,0,-70.4);

	this.instance_7 = new lib.Patch_4();
	this.instance_7.setTransform(656.45,139.3,1,1,0,0,0,0,-78.5);

	this.instance_8 = new lib.Patch_3();
	this.instance_8.setTransform(431.95,247.05,1,1,0,0,0,0,-67);

	this.instance_9 = new lib.Patch_2();
	this.instance_9.setTransform(317.95,436.5,1,1,0,0,0,0,-104.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(644.4,617,300.6,334.6);
// library properties:
lib.properties = {
	id: 'A3238E787B9042E0BA7D76738032C1C1',
	width: 1024,
	height: 1024,
	fps: 30,
	color: "#666666",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A3238E787B9042E0BA7D76738032C1C1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;