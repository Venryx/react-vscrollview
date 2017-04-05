/*import {E} from "../../../Frame/General/Globals_Free";
import {BaseComponent, Div, FindDOM, FindDOM_, Classes} from "../../../Frame/General/ReactGlobals";
import {BufferAction} from "../../../Frame/General/Timers";*/
import * as React from "react";
import {Component} from "react";
import autoBind from "react-autobind";

// from other packages
// ==========

import * as ReactDOM from "react-dom";

function Assert(condition, message?: string) {
	if (condition) return;

	//console.log(`Assert failed) ${message}\n\nStackTrace) ${new Error().stack}`);
	//console.error("Assert failed) " + message);
	throw new Error("Assert failed) " + message);
}

function FindDOM(comp): HTMLElement {
	if (comp == null || comp._reactInternalInstance == null)
		return null;
	return ReactDOM.findDOMNode(comp);
}
declare var $;
function FindDOM_(comp) { return $(FindDOM(comp)); }
function E(...objExtends: any[]) {
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
function BufferAction(minInterval: number, func: Function);
/** If time-since-last-run is above minInterval, run func right away.
 * Else, schedule next-run to occur as soon as the minInterval is passed. */
function BufferAction(key: string, minInterval: number, func: Function);
function BufferAction(...args) {
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

class Div extends Component<{shouldUpdate} & React.HTMLProps<HTMLDivElement>, {}> {
	shouldComponentUpdate(nextProps, nextState) {
		if (this.props.shouldUpdate)
			return this.props.shouldUpdate(nextProps, nextState);
	    return true;
	}
    render() {
		var {shouldUpdate, ...rest} = this.props;
        return <div {...rest}/>;
    }
}

(function($) {
	$.fn.OnVisible = function(callback, onlyRunOnce, triggerIfAlreadyVisible) {
		var $this = $(this);

		var options = {
			keyframes: `
@keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }
@-moz-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }
@-webkit-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }
@-ms-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }
@-o-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }, `,
			selector: $this.selector,
			//stylesClass: $this.selector.replace(".", ""),
			//styles: $this.selector + " { animation-name: nodeInserted; -webkit-animation-name: nodeInserted; animation-duration: 0.001s; -webkit-animation-duration: 0.001s; }"
		}

		// if the keyframes aren't present, add them in a style element
		if (!$("style.domnodeappear-keyframes").length)
			$("head").append("<style class='domnodeappear-keyframes'>" + options.keyframes + "</style>");

		// add animation to selected element
		//$("head").append("<style class=\"" + options.stylesClass + "-animation\">" + options.styles + "</style>")

		if (triggerIfAlreadyVisible && $this.is(":visible")) {
			callback();
			if (onlyRunOnce) // if we were only supposed to run once anyway, we're done already
				return;
		}

		$this.css({animationName: "nodeInserted", "-webkit-animation-name": "nodeInserted", animationDuration: "0.001s", "-webkit-animation-duration": "0.001s"});

		// on animation start, execute the callback
		var handler = function(e) {
			var target = $(e.target);
			//if (e.originalEvent.animationName == "nodeInserted" && target.is(options.selector))
			//Log(e.target);
			if (e.originalEvent.animationName == "nodeInserted" && $this.get().Contains(e.target)) {
				callback.call(target);
				if (onlyRunOnce) {
					$this.css({animationName: "", "-webkit-animation-name": "", animationDuration: "", "-webkit-animation-duration": ""});
					$(document).off("animationstart webkitAnimationStart oanimationstart MSAnimationStart", handler);
				}
			}
		};
		$(document).on("animationstart webkitAnimationStart oanimationstart MSAnimationStart", handler);
	};
	/*$.fn.OnVisible_WithDelay = function(delay, callback, onlyRunOnce, triggerIfAlreadyVisible) {
		return this.OnVisible(function() { setTimeout(callback, delay); }, onlyRunOnce, triggerIfAlreadyVisible);
	};*/
})($);

export interface Vector2i { x: number; y: number; }

// main
// ==========

var styles = {
	root: {overflow: "hidden", height: "100%", position: "relative"},
	content: {height: "100%", overflow: "auto"},
	content_draggable: {cursor: "-webkit-grab"},
	//content_dragging: {cursor: "-webkit-grabbing"}, // implemented in <style> tag instead, due to <Div> not being re-rendered (intentionally)
	scrollBar: {
	    backgroundColor: "rgba(255,255,255,.3)",
		borderRadius: 5,
		//":hover": {backgroundColor: "rgba(255,255,255,.7)"},
		//":focus": {}
    },
	scrollBar_h: {position: "absolute", boxSizing: "border-box", zIndex: 10, height: 8, bottom: 0},
	scrollBar_v: {position: "absolute", boxSizing: "border-box", zIndex: 10, width: 8, right: 0},
	scrollBar_active: {backgroundColor: "rgba(255,255,255,.7)"},
	scrollTrack: {position: "absolute", pointerEvents: "none"},
	scrollTrack_h: {left: 0, bottom: 0, width: "100%", height: 8},
	scrollTrack_v: {top: 0, right: 0, width: 8, height: "100%"},
};

export default class ScrollView extends Component
		<{
			backgroundDrag?: boolean,  backgroundDragMatchFunc?: (element: HTMLElement)=>boolean, bufferScrollEventsBy?: number, scrollH_pos?: number, scrollV_pos?: number,
			className?: string, style?, contentStyle?, scrollHBarStyle?, scrollVBarStyle?,
			onMouseDown?, onClick?, onScrollEnd?: (pos: Vector2i)=>void,
		},
		Partial<{
			containerWidth, contentWidth, containerHeight, contentHeight,
			scrollH_active: boolean, scrollH_pos: number, scrollV_active, scrollV_pos: number, scrollHBar_hovered: boolean, scrollVBar_hovered: boolean, scrollOp_bar,
		}>> {
	constructor(props) {
	    super(props);
		autoBind(this);
		this.state = {
			containerWidth: 0,
            contentWidth: 0,
			scrollH_active: false,
			//scrollH_pos: this.props.scrollH_pos,

			containerHeight: 0,
            contentHeight: 0,
            scrollV_active: false,
			//scrollV_pos: this.props.scrollV_pos
        };
	}

	refs: any; // needed in projects using this package, fsr
    render() {
		var {backgroundDrag,  backgroundDragMatchFunc, bufferScrollEventsBy, scrollH_pos, scrollV_pos,
			className, style, contentStyle, scrollHBarStyle, scrollVBarStyle,
			onMouseDown, onClick, children} = this.props;
        children = children instanceof Array ? children : [children];
		var {containerWidth, contentWidth, containerHeight, contentHeight,
			 scrollH_active, scrollH_pos, scrollV_active, scrollV_pos, scrollOp_bar} = this.state;

        return (
			<div className={"ScrollView " + (className || "")} style={E(styles.root, style)}>
				{scrollH_active
				&& <div className="scrollTrack horizontal" style={E(styles.scrollTrack, styles.scrollTrack_h)}>
					<div ref="scrollHBar" className="scrollBar horizontal" onMouseDown={this.OnScrollbarMouseDown}
						onMouseOver={()=>this.setState({scrollHBar_hovered: true})} onMouseOut={()=>this.setState({scrollHBar_hovered: false})}
						style={E(
							styles.scrollBar, styles.scrollBar_h,
							(this.state.scrollHBar_hovered || (scrollOp_bar && scrollOp_bar == this.refs.scrollHBar)) && styles.scrollBar_active,
							{width: `${containerWidth/contentWidth * 100}%`, left: ((scrollH_pos / contentWidth) * 100) + "%", pointerEvents: "all"},
							scrollHBarStyle
						)}/>
				</div>}
				{scrollV_active
				&& <div className="scrollTrack vertical" style={E(styles.scrollTrack, styles.scrollTrack_v)}>
					<div ref="scrollVBar" className="scrollBar vertical" onMouseDown={this.OnScrollbarMouseDown}
						onMouseOver={()=>this.setState({scrollVBar_hovered: true})} onMouseOut={()=>this.setState({scrollVBar_hovered: false})}
						style={E(
							styles.scrollBar, styles.scrollBar_v,
							(this.state.scrollVBar_hovered || (scrollOp_bar && scrollOp_bar == this.refs.scrollVBar)) && styles.scrollBar_active,
							{height: `${containerHeight/contentHeight * 100}%`, top: ((scrollV_pos / contentHeight) * 100) + "%", pointerEvents: "all"},
							scrollVBarStyle
						)}/>
				</div>}
				<style>{`
				.hideScrollbar::-webkit-scrollbar { width: 0px; height: 0px; background: transparent; }
				${scrollOp_bar ? ".ScrollView > .content { cursor: -webkit-grabbing !important; }" : ""}
				`}</style>
                <Div ref="content" className="content hideScrollbar" onScroll={this.HandleScroll}
						onMouseDown={this.OnContentMouseDown} onTouchEndCapture={this.OnTouchEnd}
						onClick={onClick} style={E(styles.content, backgroundDrag && styles.content_draggable, /*scrollOp_bar && styles.content_dragging,*/ contentStyle)}
						shouldUpdate={()=>this.PropsJustChanged}>
					{children}
                </Div>
            </div>
        );
    }

	componentDidMount() {
        window.addEventListener("resize", this.UpdateSize);
        document.addEventListener("mousemove", this.OnMouseMove);
        document.addEventListener("mouseup", this.OnMouseUp);
        //this.UpdateSize();
	    this.LoadScroll();
		setTimeout(()=>window.requestAnimationFrame(()=>this.PostRender(false)), 0);
    }
	componentDidUpdate() {
		if (!this.propsJustChanged) return; // if was just a scroll-update, ignore
	    this.LoadScroll();
		setTimeout(()=>window.requestAnimationFrame(()=>this.PostRender(false)), 0);
	}
	LoadScroll() {
	    if (!this.state.scrollH_pos && !this.state.scrollV_pos) return;
		var content = FindDOM(this.refs.content);
	    content.scrollLeft = this.state.scrollH_pos;
	    content.scrollTop = this.state.scrollV_pos;
	}
	PostRender(firstRender) {
	    FindDOM_(this).OnVisible(this.UpdateSize, true);
		//FindDOM_(this).OnVisible(this.UpdateSize, true, true);
		/*if (firstRender)
			FindDOM_(this).OnVisible(this.LoadScroll, true, true);*/
		//FindDOM(this.refs.content).ontouchend = ()=>this.touchEnd();

		if (firstRender) {
			this.setState({
				"scrollH_pos": this.props.scrollH_pos,
				"scrollV_pos": this.props.scrollV_pos
			});
		}
	}
	// for some reason, this gets called even if not really unmounting (or... I don't see why it'd be unmounting, anyway)
	componentWillUnmount() {
        window.removeEventListener("resize", this.UpdateSize);
        document.removeEventListener("mousemove", this.OnMouseMove);
        document.removeEventListener("mouseup", this.OnMouseUp);
    }

	get PropsJustChanged() {
	    if (this.propsJustChanged) {
	        this.propsJustChanged = false;
			return true;
	    }
	    return false;
	}

	propsJustChanged;
    componentWillReceiveProps(nextProps) {
		this.setState({
			[nextProps.scrollH_pos != null ? "scrollH_pos" : "na"]: nextProps.scrollH_pos,
			[nextProps.scrollV_pos != null ? "scrollV_pos" : "na"]: nextProps.scrollV_pos
        });

        // when updating children, we should remeasure the heights to decide whether to toggle scroll enabledness
        this.UpdateSize();

		this.propsJustChanged = true;
    }

	UpdateSize() {
		if (FindDOM(this) == null || FindDOM(this.refs.content) == null) return;

		//var containerWidth = ReactDOM.findDOMNode(this.refs.content).clientWidth;
		var containerWidth = FindDOM(this).offsetWidth;
		var containerHeight = FindDOM(this).offsetHeight;
        var contentWidth = FindDOM(this.refs.content).scrollWidth;
        var contentHeight = FindDOM(this.refs.content).scrollHeight;
		
		if (containerWidth != this.state.containerWidth || contentWidth != this.state.contentWidth
				|| containerHeight != this.state.containerHeight || contentHeight != this.state.contentHeight) {
			this.setState({
				containerWidth: containerWidth,
				contentWidth: contentWidth,
				scrollH_active: contentWidth > containerWidth,

				containerHeight: containerHeight,
				contentHeight: contentHeight,
				scrollV_active: contentHeight > containerHeight
			});
		}
    }
	
    private HandleScroll(e) {
        // if not user-initiated event, ignore
        //if (e.type != "DOMMouseScroll" && e.type != "keyup" && e.type != "mousewheel" && e.type != "mousemove") return;
        e.stopPropagation();

		// maybe temp; for performance, when used in LogEntriesUI
        if (this.props.bufferScrollEventsBy)
            BufferAction("ScrollView_HandleScroll", this.props.bufferScrollEventsBy, this.UpdateScrolls);
		else
			this.UpdateScrolls();
    }
	UpdateScrolls() {
		var contentUI = FindDOM(this.refs.content);
        var scrollH_pos = contentUI.scrollLeft;
        var scrollV_pos = contentUI.scrollTop;
		if (scrollH_pos != this.state.scrollH_pos || scrollV_pos != this.state.scrollV_pos) {
		    this.setState({scrollH_pos: scrollH_pos, scrollV_pos: scrollV_pos});
			//this.props.onScroll && this.props.onScroll({x: scrollH_pos, y: scrollV_pos});
		}
	}

	// #maybe temp; for performance, when used in LogEntriesUI
	/*UpdateSizeAndScrolls() {
	    this.StartSetStateCluster();
	    this.UpdateSize();
	    this.UpdateScrolls();
	    this.EndSetStateCluster();
	}*/
	
	private OnContentMouseDown(e) {
		let {backgroundDrag, backgroundDragMatchFunc} = this.props;
	    if (!backgroundDrag) return;
		backgroundDragMatchFunc = backgroundDragMatchFunc || ((a: Element)=> {
			let nodePlusParents = [a];
			while (nodePlusParents[nodePlusParents.length - 1].parentNode instanceof Element)
				nodePlusParents.push(nodePlusParents[nodePlusParents.length - 1].parentNode as Element);
			var firstScrollViewParent = nodePlusParents.find(b=>b.className.split(" ").indexOf("ScrollView") != -1);
			if (firstScrollViewParent == null || firstScrollViewParent[0] != FindDOM(this.refs.root)) return false;
			return a.className.split(" ").indexOf("content") != -1 || a == this.refs.content; // || a == this.state.svgRoot;
		});
		if (!backgroundDragMatchFunc(e.target)) return;
	    if (e.button != 0) return;

	    this.StartScrolling(e);
	    this.props.onMouseDown && this.props.onMouseDown(e);
	}
    private OnScrollbarMouseDown(e) {
        e.preventDefault();
        this.StartScrolling(e);
    }
	scroll_startMousePos: Vector2i;
	scroll_startScrollPos: Vector2i;
	private StartScrolling(e) {
	    //this.updateChildren = false;

		this.setState({scrollOp_bar: e.target});
	    var content = FindDOM(this.refs.content);
        this.scroll_startMousePos = {x: e.pageX, y: e.pageY};
		this.scroll_startScrollPos = {x: content.scrollLeft, y: content.scrollTop};
	}
	private OnMouseMove(e) {
		if (!this.state.scrollOp_bar) return;

	    var scrollBar = $(this.state.scrollOp_bar);
        var content = FindDOM(this.refs.content);
        var scroll_mousePosDif = {x: e.pageX - this.scroll_startMousePos.x, y: e.pageY - this.scroll_startMousePos.y};
		
	    if (scrollBar.is(".horizontal")) {
			let scrollPixelsPerScrollbarPixels = this.state.contentWidth / this.state.containerWidth;
	        content.scrollLeft = this.scroll_startScrollPos.x + (scroll_mousePosDif.x * scrollPixelsPerScrollbarPixels);
	    } else if (scrollBar.is(".vertical")) {
	        let scrollPixelsPerScrollbarPixels = this.state.contentHeight / this.state.containerHeight;
	        content.scrollTop = this.scroll_startScrollPos.y + (scroll_mousePosDif.y * scrollPixelsPerScrollbarPixels);
	    } else { // if left-click dragging on background
	        let scrollPixelsPerScrollbarPixels = 1;
			content.scrollLeft = this.scroll_startScrollPos.x - (scroll_mousePosDif.x * scrollPixelsPerScrollbarPixels);
	        content.scrollTop = this.scroll_startScrollPos.y - (scroll_mousePosDif.y * scrollPixelsPerScrollbarPixels);
	    }
	}
    private OnMouseUp(e) {
        if (!this.state.scrollOp_bar) return;
		this.setState({scrollOp_bar: null});
		this.OnScrollEnd();
    }
	private OnTouchEnd() {
		this.OnScrollEnd();
	}
	private OnScrollEnd() {
		let {onScrollEnd} = this.props;
		if (onScrollEnd) {
			let content = FindDOM(this.refs.content);
			let scrollPos = {x: content.scrollLeft, y: content.scrollTop}
			onScrollEnd(scrollPos);
		}
	}

	// for external use
	GetScroll() {
		return {x: this.state.scrollH_pos, y: this.state.scrollV_pos};
	}
	// alternative to using "scrollH_pos" and "scrollV_pos" props
	SetScroll(scrollPos: Vector2i) {
		//this.setState({scrollH_pos: scrollPos.x, scrollV_pos: scrollPos.y}, ()=>this.LoadScroll());
		var content = FindDOM(this.refs.content);
		content.scrollLeft = scrollPos.x;
		content.scrollTop = scrollPos.y;
	}
	ScrollBy(scrollPosOffset: Vector2i) {
		//this.setState({scrollH_pos: this.GetScroll().x + scrollPosOffset.x, scrollV_pos: this.GetScroll().y + scrollPosOffset.y}, ()=>this.LoadScroll());
		var content = FindDOM(this.refs.content);
		content.scrollLeft += scrollPosOffset.x;
		content.scrollTop += scrollPosOffset.y;
		//this.setState({scrollH_pos: content.scrollLeft, scrollV_pos: content.scrollTop}, ()=>this.LoadScroll());
	}
}