/*import {E} from "../../../Frame/General/Globals_Free";
import {BaseComponent, Div, FindDOM, FindDOM_, Classes} from "../../../Frame/General/ReactGlobals";
import {BufferAction} from "../../../Frame/General/Timers";*/
import React from "react";
import {Component} from "react";
import autoBind from "react-autobind";
import {Vector2i, E, FindDOM, BufferAction, GetHScrollBarHeight, GetVScrollBarWidth, OnVisible} from "./Utils";
import {BaseComponent, RenderSource} from "react-vextensions";

//declare var $;
//var $ = (window as any).$;
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

let inFirefox = navigator.userAgent.includes("Firefox");

// main
// ==========

var styles = {
	root: {position: "relative", display: "flex", /*flexDirection: "column",*/ overflow: "hidden"},
	root_nonFlex: {height: "100%"},
	content: {
		flex: 1,
		overflow: "auto", overflowScrolling: "touch", // WebkitOverflowScrolling: "touch",
	},
	content_nonFlex: {
		position: "absolute", left: 0, right: 0, top: 0, bottom: 0, // works in safari
	},
	//content_draggable: {cursor: "grab -webkit-grab -moz-grab"},
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
	scrollTrack_h: {left: 0, right: 0, bottom: 0, height: 8},
	scrollTrack_v: {right: 0, top: 0, bottom: 0, width: 8},
};

export class ScrollView extends BaseComponent
		<{
			backgroundDrag?: boolean,  backgroundDragMatchFunc?: (element: HTMLElement)=>boolean, bufferScrollEventsBy?: number, scrollH_pos?: number, scrollV_pos?: number,
			className?: string, style?, contentStyle?, scrollHBarStyle?, scrollVBarStyle?, flex?: boolean,
			onMouseDown?, onClick?, onScrollEnd?: (pos: Vector2i)=>void,
		} & React.HTMLProps<HTMLDivElement>,
		Partial<{
			containerWidth, contentWidth, containerHeight, contentHeight,
			scrollH_active: boolean, scrollH_pos: number, scrollV_active, scrollV_pos: number, scrollHBar_hovered: boolean, scrollVBar_hovered: boolean, scrollOp_bar: HTMLElement,
		}>> {
	static defaultProps = {flex: true};
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

	content;
	scrollHBar;
	scrollVBar;
	//_lastState = {} as any; // to fix edge case, for when using "marginRight: -17" to hide scroll-bar
	render() {
		var {backgroundDrag,  backgroundDragMatchFunc, bufferScrollEventsBy, scrollH_pos, scrollV_pos,
			className, style, contentStyle, scrollHBarStyle, scrollVBarStyle, flex,
			onMouseDown, onClick, onScrollEnd, children, ...rest} = this.props;
		children = children instanceof Array ? children : [children];
		var {containerWidth, containerHeight, contentWidth, contentHeight,
			 scrollH_active, scrollH_pos, scrollV_active, scrollV_pos, scrollOp_bar} = this.state;

		//let scrollbarVisibilityChanged = scrollH_active != this._lastState.scrollH_active || scrollV_active != this._lastState.scrollV_active;
		/*let scrollbarVisibilityChanged = containerWidth != this._lastState.containerWidth || containerHeight != this._lastState.containerHeight
			|| contentWidth != this._lastState.contentWidth || contentHeight != this._lastState.contentHeight;
		this._lastState = this.state;*/

		//console.log(`Rendering... ${this.propsJustChanged} ${this.sizeJustChanged}`);
		
		let classes = ["ScrollView", backgroundDrag && "draggable", scrollOp_bar && "scrollActive", className && className];
		return (
			<div {...rest} className={classes.filter(a=>a).join(" ")} style={E(styles.root, !flex && styles.root_nonFlex, style)}>
				{scrollH_active
				&& <div className="scrollTrack horizontal" style={E(styles.scrollTrack, styles.scrollTrack_h)}>
					<div ref={c=>this.scrollHBar = c} className="scrollBar horizontal" onMouseDown={this.OnScrollbarMouseDown}
						onMouseOver={()=>this.SetState({scrollHBar_hovered: true})} onMouseOut={()=>this.SetState({scrollHBar_hovered: false})}
						style={E(
							styles.scrollBar, styles.scrollBar_h,
							(this.state.scrollHBar_hovered || (scrollOp_bar && scrollOp_bar == this.scrollHBar)) && styles.scrollBar_active,
							{width: `${containerWidth/contentWidth * 100}%`, left: ((scrollH_pos / contentWidth) * 100) + "%", pointerEvents: "all"},
							scrollHBarStyle,
						)}/>
				</div>}
				{scrollV_active
				&& <div className="scrollTrack vertical" style={E(styles.scrollTrack, styles.scrollTrack_v)}>
					<div ref={c=>this.scrollVBar = c} className="scrollBar vertical" onMouseDown={this.OnScrollbarMouseDown}
						onMouseOver={()=>this.SetState({scrollVBar_hovered: true})} onMouseOut={()=>this.SetState({scrollVBar_hovered: false})}
						style={E(
							styles.scrollBar, styles.scrollBar_v,
							(this.state.scrollVBar_hovered || (scrollOp_bar && scrollOp_bar == this.scrollVBar)) && styles.scrollBar_active,
							{height: `${containerHeight/contentHeight * 100}%`, top: ((scrollV_pos / contentHeight) * 100) + "%", pointerEvents: "all"},
							scrollVBarStyle,
						)}/>
				</div>}
				<style>{`
				.hideScrollbar::-webkit-scrollbar { width: 0px; height: 0px; background: transparent; }
				.ScrollView.draggable > .content { cursor: grab; cursor: -webkit-grab; cursor: -moz-grab; }
				.ScrollView.draggable.scrollActive > .content { cursor: grabbing !important; cursor: -webkit-grabbing !important; cursor: -moz-grabbing !important; }
				`}</style>
				<Div ref={c=>this.content = c} className="content hideScrollbar" onScroll={this.HandleScroll}
						onMouseDown={this.OnContentMouseDown} onTouchEnd={this.OnTouchEnd} onClick={onClick}
						style={E(
							styles.content, /*backgroundDrag && styles.content_draggable,*/ /*scrollOp_bar && styles.content_dragging,*/
							!flex && styles.content_nonFlex, 
							inFirefox && scrollH_active && {/*paddingBottom: GetHScrollBarHeight(),*/ marginBottom: -GetHScrollBarHeight()},
							inFirefox && scrollV_active && {/*paddingRight: GetVScrollBarWidth(),*/ marginRight: -GetVScrollBarWidth()},
							contentStyle,
						)}
						shouldUpdate={()=>this.PropsJustChanged || (inFirefox && this.SizeJustChanged)}>
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

		this.hScrollableDOM = this.hScrollableDOM || FindDOM(this.content);
		this.vScrollableDOM = this.vScrollableDOM || FindDOM(this.content);
	}
	componentDidUpdate() {
		if (!this.propsJustChanged) return; // if was just a scroll-update, ignore
		this.LoadScroll();
	}
	LoadScroll() {
		if (!this.state.scrollH_pos && !this.state.scrollV_pos) return;
		this.hScrollableDOM.scrollLeft = this.state.scrollH_pos;
		this.vScrollableDOM.scrollTop = this.state.scrollV_pos;
	}
	PostRender(source: RenderSource) {
		//if (FindDOM(this)) {
		OnVisible(FindDOM(this), this.UpdateSize, true);
		//FindDOM_(this).OnVisible(this.UpdateSize, true, true);
		/*if (firstRender)
			FindDOM_(this).OnVisible(this.LoadScroll, true, true);*/
		// onTouchEndCapture doesn't work consistently, so use native event
		/*FindDOM(this.content).ontouchend = ()=>(console.log("end"), this.OnTouchEnd());
		FindDOM(this.content).ontouchcancel = ()=>(console.log("cancel"), this.OnTouchEnd());
		FindDOM(this.content).ontouchmove = ()=>{console.log("move")};
		FindDOM(this.content).ontouchstart = ()=>{console.log("start")};*/

		if (source == RenderSource.Mount) {
			this.SetState({
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

	propsJustChanged = false;
	get PropsJustChanged() {
		let result = this.propsJustChanged;
		this.propsJustChanged = false;
		return result;
	}

	componentWillReceiveProps(nextProps) {
		this.SetState({
			[nextProps.scrollH_pos != null ? "scrollH_pos" : "na"]: nextProps.scrollH_pos,
			[nextProps.scrollV_pos != null ? "scrollV_pos" : "na"]: nextProps.scrollV_pos
		});

		// when updating children, we should remeasure the heights to decide whether to toggle scroll enabledness
		// todo: in the future, have this run in PostRender() or something, as I think setTimeout is not guaranteed to run after the UI is updated 
		setTimeout(this.UpdateSize);

		this.propsJustChanged = true;
	}

	sizeJustChanged = false;
	get SizeJustChanged() {
		let result = this.sizeJustChanged;
		this.sizeJustChanged = false;
		return result;
	}

	UpdateSize() {
		let container = FindDOM(this);
		let content = FindDOM(this.content);
		if (container == null || content == null) return;

		/*var containerWidth = container.offsetWidth;
		var containerHeight = container.offsetHeight;*/
		var containerWidth = container.clientWidth;
		var containerHeight = container.clientHeight;
		/*var contentWidth = this.hScrollableDOM.scrollWidth;
		var contentHeight = this.vScrollableDOM.scrollHeight;*/
		var contentWidth = content.scrollWidth + parseInt(content.style.marginRight || "0"); // include margin
		var contentHeight = content.scrollHeight + parseInt(content.style.marginBottom || "0"); // include margin

		//Log(`Width: ${contentWidth}/${containerWidth}, Height: ${contentHeight}/${containerHeight}`);
		
		if (containerWidth != this.state.containerWidth || containerHeight != this.state.containerHeight
				|| contentWidth != this.state.contentWidth || contentHeight != this.state.contentHeight) {
			this.sizeJustChanged = true;
			this.SetState({
				containerWidth, containerHeight,
				contentWidth, contentHeight,
				scrollH_active: contentWidth > containerWidth,
				scrollV_active: contentHeight > containerHeight
			});
		}
	}
	
	private HandleScroll(e) {
		// if not user-initiated event, ignore
		//if (e.type != "DOMMouseScroll" && e.type != "keyup" && e.type != "mousewheel" && e.type != "mousemove") return;
		//e.stopPropagation();

		// maybe temp; for performance, when used in LogEntriesUI
		if (this.props.bufferScrollEventsBy)
			BufferAction("ScrollView_HandleScroll", this.props.bufferScrollEventsBy, this.UpdateScrolls);
		else
			this.UpdateScrolls();
	}
	UpdateScrolls() {
		//var contentUI = FindDOM(this.content);
		var scrollH_pos = this.hScrollableDOM.scrollLeft;
		var scrollV_pos = this.vScrollableDOM.scrollTop;
		if (scrollH_pos != this.state.scrollH_pos || scrollV_pos != this.state.scrollV_pos) {
			this.SetState({scrollH_pos: scrollH_pos, scrollV_pos: scrollV_pos});
			//this.props.onScroll && this.props.onScroll({x: scrollH_pos, y: scrollV_pos});

			this.UpdateSize(); // update size info (if changed)
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
			if (firstScrollViewParent == null || firstScrollViewParent[0] != FindDOM(this)) return false;
			return a.className.split(" ").indexOf("content") != -1 || a == this.content; // || a == this.state.svgRoot;
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

		this.SetState({scrollOp_bar: e.target});
		this.scroll_startMousePos = {x: e.pageX, y: e.pageY};
		this.scroll_startScrollPos = {x: this.hScrollableDOM.scrollLeft, y: this.vScrollableDOM.scrollTop};
	}
	hScrollableDOM: Element;
	vScrollableDOM: Element;
	private OnMouseMove(e) {
		let {scrollOp_bar, containerWidth, containerHeight, contentWidth, contentHeight} = this.state;
		if (!scrollOp_bar) return;

		var scroll_mousePosDif = {x: e.pageX - this.scroll_startMousePos.x, y: e.pageY - this.scroll_startMousePos.y};
		
		if (scrollOp_bar.classList && scrollOp_bar.classList.contains("horizontal")) {
			let scrollPixelsPerScrollbarPixels = contentWidth / containerWidth;
			this.hScrollableDOM.scrollLeft = this.scroll_startScrollPos.x + (scroll_mousePosDif.x * scrollPixelsPerScrollbarPixels);
		} else if (scrollOp_bar.classList && scrollOp_bar.classList.contains("vertical")) {
			let scrollPixelsPerScrollbarPixels = contentHeight / containerHeight;
			this.vScrollableDOM.scrollTop = this.scroll_startScrollPos.y + (scroll_mousePosDif.y * scrollPixelsPerScrollbarPixels);
		} else { // if left-click dragging on background
			let scrollPixelsPerScrollbarPixels = 1;
			this.hScrollableDOM.scrollLeft = this.scroll_startScrollPos.x - (scroll_mousePosDif.x * scrollPixelsPerScrollbarPixels);
			this.vScrollableDOM.scrollTop = this.scroll_startScrollPos.y - (scroll_mousePosDif.y * scrollPixelsPerScrollbarPixels);
		}
	}
	private OnMouseUp(e) {
		if (!this.state.scrollOp_bar) return;
		this.SetState({scrollOp_bar: null});
		this.OnScrollEnd();
	}
	private OnTouchEnd() {
		this.OnScrollEnd();
	}
	private OnScrollEnd() {
		let {onScrollEnd} = this.props;
		if (onScrollEnd) {
			//let content = FindDOM(this.content);
			let scrollPos = {x: this.hScrollableDOM.scrollLeft, y: this.vScrollableDOM.scrollTop}
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
		//var content = FindDOM(this.content);
		this.hScrollableDOM.scrollLeft = scrollPos.x;
		this.vScrollableDOM.scrollTop = scrollPos.y;
	}
	ScrollBy(scrollPosOffset: Vector2i) {
		//this.setState({scrollH_pos: this.GetScroll().x + scrollPosOffset.x, scrollV_pos: this.GetScroll().y + scrollPosOffset.y}, ()=>this.LoadScroll());
		//var content = FindDOM(this.content);
		this.hScrollableDOM.scrollLeft += scrollPosOffset.x;
		this.vScrollableDOM.scrollTop += scrollPosOffset.y;
		//this.setState({scrollH_pos: content.scrollLeft, scrollV_pos: content.scrollTop}, ()=>this.LoadScroll());
	}
}