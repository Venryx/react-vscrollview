import ReactDOM from "react-dom";
import {Component} from "react";
import { BaseComponent } from "react-vextensions";

//declare var $;
//var $ = (window as any).$;
export function Log(message, ...args) {
	console.log(message, ...args);
}
export function Assert(condition, message?: string) {
	if (condition) return;

	//console.log(`Assert failed) ${message}\n\nStackTrace) ${new Error().stack}`);
	//console.error("Assert failed) " + message);
	throw new Error("Assert failed) " + message);
}

export function GetDOM(comp: Component): HTMLElement {
	//if (comp == null || comp["_reactInternalInstance"] == null || comp.mounted == false) return null;
	if (comp == null || comp["mounted"] == false) return null;
	return ReactDOM.findDOMNode(comp);
}
//export function FindDOM_(comp) { return $(FindDOM(comp)); }
export function E(...objExtends: any[]) {
	var result = {};
	for (let extend of objExtends) {
		for (var key in extend)
			result[key] = extend[key];
	}
	return result;
	//return StyleSheet.create(result);
}

var funcLastScheduledRunTimes = {};
/** If time-since-last-run is above minInterval, run func right away.
 * Else, schedule next-run to occur as soon as the minInterval is passed. */
export function BufferAction(minInterval: number, func: Function);
/** If time-since-last-run is above minInterval, run func right away.
 * Else, schedule next-run to occur as soon as the minInterval is passed. */
export function BufferAction(key: string, minInterval: number, func: Function);
export function BufferAction(...args) {
	if (args.length == 2) var [minInterval, func] = args, key = null;
	else if (args.length == 3) var [key, minInterval, func] = args;

	var lastScheduledRunTime = funcLastScheduledRunTimes[key] || 0;
	var now = new Date().getTime();
	var timeSinceLast = now - lastScheduledRunTime;
	if (timeSinceLast >= minInterval) { // if we've waited enough since last run, run right now
		func();
		funcLastScheduledRunTimes[key] = now;
	} else {
		let waitingForNextRunAlready = lastScheduledRunTime > now;
		if (!waitingForNextRunAlready) { // else, if we're not already waiting for next-run, schedule next-run
			var nextRunTime = lastScheduledRunTime + minInterval;
			var timeTillNextRun = nextRunTime - now;
			//WaitXThenRun(timeTillNextRun, func);
			setTimeout(func, timeTillNextRun);
			funcLastScheduledRunTimes[key] = nextRunTime;
		}
	}
}

export function OnVisible(elem: HTMLElement, callback, onlyRunOnce, triggerIfAlreadyVisible = false) {
	var options = {
		keyframes: `
@keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }
@-moz-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }
@-webkit-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }
@-ms-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }
@-o-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }, `,
		//stylesClass: $this.selector.replace(".", ""),
		//styles: $this.selector + " { animation-name: nodeInserted; -webkit-animation-name: nodeInserted; animation-duration: 0.001s; -webkit-animation-duration: 0.001s; }"
	}

	// if the keyframes aren't present, add them in a style element
	if (document.querySelector("style.domnodeappear-keyframes") == null) {
		let style = document.createElement("style");
		style.className = "domnodeappear-keyframes";
		style.innerHTML = options.keyframes;
		document.head.appendChild(style);
	}

	// add animation to selected element
	//$("head").append("<style class=\"" + options.stylesClass + "-animation\">" + options.styles + "</style>")

	let elIsVisible = !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length); // from jquery source
	if (triggerIfAlreadyVisible && elIsVisible) {
		callback();
		if (onlyRunOnce) // if we were only supposed to run once anyway, we're done already
			return;
	}

	Object.assign(elem.style, {animationName: "nodeInserted", animationDuration: "0.001s"});

	// on animation start, execute the callback
	var handler = function(e) {
		var target = e.target;
		//if (e.originalEvent.animationName == "nodeInserted" && target.is(options.selector))
		//Log(e.target);
		if (e.animationName == "nodeInserted" && e.target == elem) {
			callback.call(target);
			if (onlyRunOnce) {
				Object.assign(elem.style, {animationName: "", animationDuration: ""});
				document.removeEventListener("animationstart", handler);
				document.removeEventListener("webkitAnimationStart", handler);
				document.removeEventListener("oanimationstart", handler);
				document.removeEventListener("MSAnimationStart", handler);
			}
		}
	};
	document.addEventListener("animationstart", handler);
	document.addEventListener("webkitAnimationStart", handler);
	document.addEventListener("oanimationstart", handler);
	document.addEventListener("MSAnimationStart", handler);
};
/*$.fn.OnVisible_WithDelay = function(delay, callback, onlyRunOnce, triggerIfAlreadyVisible) {
	return this.OnVisible(function() { setTimeout(callback, delay); }, onlyRunOnce, triggerIfAlreadyVisible);
};*/

export interface Vector2i { x: number; y: number; }

let _scrollBarSizes;
export function GetScrollBarSizes() {
	if (!_scrollBarSizes) {
		/*let outer = $("<div style='visibility: hidden; position: absolute; left: -100px; top: -100px; height: 100px; overflow: scroll;'/>").appendTo("body");
		let heightWithScroll = $("<div>").css({height: "100%"}).appendTo(outer).outerHeight();
		outer.remove();
		_hScrollBarHeight = 100 - heightWithScroll;
		Log("HHeight:" + _hScrollBarHeight);
		//V._hScrollBarHeight = outer.children().height() - outer.children()[0].clientHeight;*/

		/*let container = $("<div style='visibility: hidden; position: absolute; top: -1000px; width: 100px; height: 100px; overflow: scroll;'/>").appendTo("body");
		_scrollBarSizes = {width: 100 - container[0].clientWidth, height: 100 - container[0].clientHeight};
		container.remove();*/

		var div = document.createElement("div");
		Object.assign(div.style, {position: "absolute", visibility: "hidden", overflow: "scroll", width: "100px", height: "100px"});
		document.body.appendChild(div);
		//_scrollBarSizes = {width: div.offsetWidth - div.clientWidth, height: div.offsetHeight - div.clientHeight};
		_scrollBarSizes = {width: 100 - div.clientWidth, height: 100 - div.clientHeight};
		div.remove();
	}
	return _scrollBarSizes;
}
export function GetHScrollBarHeight() { return GetScrollBarSizes().height; }
export function GetVScrollBarWidth() { return GetScrollBarSizes().width; }
export function HasScrollBar(control) { return HasVScrollBar(control) || HasHScrollBar(control); }
export function HasVScrollBar(control) { return control[0].scrollHeight > control[0].clientHeight; }
export function HasHScrollBar(control) { return control[0].scrollWidth > control[0].clientWidth; }