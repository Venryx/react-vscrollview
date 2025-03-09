var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { Component } from "react";
import { E, GetDOM, BufferAction, Assert } from "./Utils.js";
import { RenderSource, BaseComponentPlus } from "react-vextensions";
export var ScrollSource;
(function (ScrollSource) {
    ScrollSource[ScrollSource["User_MouseWheel"] = 0] = "User_MouseWheel";
    ScrollSource[ScrollSource["User_MouseDrag"] = 1] = "User_MouseDrag";
    ScrollSource[ScrollSource["User_Keyboard"] = 2] = "User_Keyboard";
    ScrollSource[ScrollSource["Code"] = 3] = "Code";
})(ScrollSource || (ScrollSource = {}));
//declare var $;
//var $ = (window as any).$;
class Div extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.shouldUpdate)
            return this.props.shouldUpdate(nextProps, nextState);
        return true;
    }
    render() {
        var _a = this.props, { shouldUpdate } = _a, rest = __rest(_a, ["shouldUpdate"]);
        return React.createElement("div", Object.assign({}, rest));
    }
}
//const inFirefox = typeof navigator != "undefined" ? navigator.userAgent.includes("Firefox") : false;
// main
// ==========
var styles = {
    root: { position: "relative", display: "flex", /*flexDirection: "column",*/ overflow: "hidden" },
    root_nonFlex: { height: "100%" },
    contentOuter: {
        flex: 1,
        overflow: "auto", overflowScrolling: "touch", // WebkitOverflowScrolling: "touch",
    },
    contentOuter_nonFlex: {
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
    scrollBar_h: { position: "absolute", boxSizing: "border-box", zIndex: 10, height: 8, bottom: 0 },
    scrollBar_v: { position: "absolute", boxSizing: "border-box", zIndex: 10, width: 8, right: 0 },
    scrollBar_active: { backgroundColor: "rgba(255,255,255,.7)" },
    scrollTrack: { position: "absolute", pointerEvents: "none" },
    scrollTrack_h: { left: 0, right: 0, bottom: 0, height: 8 },
    scrollTrack_v: { right: 0, top: 0, bottom: 0, width: 8 },
};
export class ScrollView extends BaseComponentPlus({ flex: true, onScroll_addTabIndex: true }, {
    containerWidth: 0,
    contentWidth: 0,
    scrollH_active: false,
    //scrollH_pos: this.props.scrollH_pos,
    scrollH_pos: null,
    scrollHBar_hovered: false,
    containerHeight: 0,
    contentHeight: 0,
    scrollV_active: false,
    //scrollV_pos: this.props.scrollV_pos
    scrollV_pos: null,
    scrollVBar_hovered: false,
    scrollOp_bar: null,
}) {
    constructor() {
        super(...arguments);
        //_lastState = {} as any; // to fix edge case, for when using "marginRight: -17" to hide scroll-bar
        this.lastMouseWheelTime = 0;
        this.lastKeyEventTime = 0;
        this.propsJustChanged = false;
        this.sizeJustChanged = false;
        this.RespondToSizeChanges = () => {
            let container = GetDOM(this);
            let content = GetDOM(this.contentOuter);
            if (container == null || content == null)
                return;
            let { containerWidth, containerHeight, contentWidth, contentHeight, } = this.state;
            /*/*var containerWidth = container.offsetWidth;
            var containerHeight = container.offsetHeight;*#/
            var containerWidth = container.clientWidth;
            var containerHeight = container.clientHeight;
            /*var contentWidth = this.hScrollableDOM.scrollWidth;
            var contentHeight = this.vScrollableDOM.scrollHeight;*#/
            var contentWidth = content.scrollWidth + parseInt(content.style.marginRight || "0"); // include margin
            var contentHeight = content.scrollHeight + parseInt(content.style.marginBottom || "0"); // include margin*/
            //Log(`Width: ${contentWidth}/${containerWidth}, Height: ${contentHeight}/${containerHeight}`);
            /*if (containerWidth != this.state.containerWidth || containerHeight != this.state.containerHeight
                    || contentWidth != this.state.contentWidth || contentHeight != this.state.contentHeight) {
                this.sizeJustChanged = true;*/
            this.SetState({
                scrollH_active: contentWidth > containerWidth,
                scrollV_active: contentHeight > containerHeight
            });
        };
        this.HandleScroll = () => {
            // if not user-initiated event, ignore
            //if (e.type != "DOMMouseScroll" && e.type != "keyup" && e.type != "mousewheel" && e.type != "mousemove") return;
            //e.stopPropagation();
            // maybe temp; for performance, when used in LogEntriesUI
            if (this.props.bufferScrollEventsBy) {
                BufferAction("ScrollView_HandleScroll", this.props.bufferScrollEventsBy, this.UpdateScrolls);
            }
            else {
                this.UpdateScrolls();
            }
        };
        this.OnContentMouseDown = (e) => {
            let { backgroundDrag, backgroundDragMatchFunc } = this.props;
            if (!backgroundDrag)
                return;
            backgroundDragMatchFunc = backgroundDragMatchFunc || ((a) => {
                let nodePlusParents = [a];
                while (nodePlusParents[nodePlusParents.length - 1].parentNode instanceof Element)
                    nodePlusParents.push(nodePlusParents[nodePlusParents.length - 1].parentNode);
                var firstScrollViewParent = nodePlusParents.find(b => b.className.split(" ").indexOf("ScrollView") != -1);
                if (firstScrollViewParent == null || firstScrollViewParent[0] != GetDOM(this))
                    return false;
                return a.className.split(" ").indexOf("content") != -1 || (GetDOM(this.contentOuter) && a == GetDOM(this.contentOuter)); // || a == this.state.svgRoot;
            });
            if (!backgroundDragMatchFunc(e.target))
                return;
            if (e.button != 0)
                return;
            this.StartScrolling(e);
            this.props.contentOuter_onMouseDown && this.props.contentOuter_onMouseDown(e);
        };
        this.OnScrollbarMouseDown = (e) => {
            e.preventDefault();
            this.StartScrolling(e);
        };
        this.OnMouseMove = (e) => {
            let { scrollOp_bar, containerWidth, containerHeight, contentWidth, contentHeight } = this.state;
            if (!scrollOp_bar)
                return;
            requestAnimationFrame(() => {
                var scroll_mousePosDif = { x: e.pageX - this.scroll_startMousePos.x, y: e.pageY - this.scroll_startMousePos.y };
                if (scrollOp_bar.classList && scrollOp_bar.classList.contains("horizontal")) {
                    let scrollPixelsPerScrollbarPixels = contentWidth / containerWidth;
                    this.hScrollableDOM.scrollLeft = this.scroll_startScrollPos.x + (scroll_mousePosDif.x * scrollPixelsPerScrollbarPixels);
                }
                else if (scrollOp_bar.classList && scrollOp_bar.classList.contains("vertical")) {
                    let scrollPixelsPerScrollbarPixels = contentHeight / containerHeight;
                    this.vScrollableDOM.scrollTop = this.scroll_startScrollPos.y + (scroll_mousePosDif.y * scrollPixelsPerScrollbarPixels);
                }
                else { // if left-click dragging on background
                    let scrollPixelsPerScrollbarPixels = 1;
                    this.hScrollableDOM.scrollLeft = this.scroll_startScrollPos.x - (scroll_mousePosDif.x * scrollPixelsPerScrollbarPixels);
                    this.vScrollableDOM.scrollTop = this.scroll_startScrollPos.y - (scroll_mousePosDif.y * scrollPixelsPerScrollbarPixels);
                }
            });
        };
        this.OnMouseUp = (e) => {
            if (!this.state.scrollOp_bar)
                return;
            this.SetState({ scrollOp_bar: null });
            this.OnScrollEnd();
        };
        this.OnTouchEnd = () => {
            this.OnScrollEnd();
        };
        this.OnScrollEnd = () => {
            let { onScrollEnd } = this.props;
            if (onScrollEnd) {
                //let content = FindDOM(this.content);
                let scrollPos = { x: this.hScrollableDOM.scrollLeft, y: this.vScrollableDOM.scrollTop };
                onScrollEnd(scrollPos);
            }
        };
    }
    render() {
        var _a = this.props, { backgroundDrag, backgroundDragMatchFunc, bufferScrollEventsBy, scrollH_pos, scrollV_pos, className, style, contentOuterStyle, contentStyle, scrollHBarStyle, scrollVBarStyle, flex, contentOuter_onMouseDown, contentOuter_onClick, content_onClick, onWheel, onKeyDown, onScroll, onScroll_addTabIndex, onScrollEnd, children } = _a, rest = __rest(_a, ["backgroundDrag", "backgroundDragMatchFunc", "bufferScrollEventsBy", "scrollH_pos", "scrollV_pos", "className", "style", "contentOuterStyle", "contentStyle", "scrollHBarStyle", "scrollVBarStyle", "flex", "contentOuter_onMouseDown", "contentOuter_onClick", "content_onClick", "onWheel", "onKeyDown", "onScroll", "onScroll_addTabIndex", "onScrollEnd", "children"]);
        children = children instanceof Array ? children : [children];
        var { containerWidth, containerHeight, contentWidth, contentHeight, scrollH_active, scrollH_pos, scrollV_active, scrollV_pos, scrollOp_bar } = this.state;
        //let scrollbarVisibilityChanged = scrollH_active != this._lastState.scrollH_active || scrollV_active != this._lastState.scrollV_active;
        /*let scrollbarVisibilityChanged = containerWidth != this._lastState.containerWidth || containerHeight != this._lastState.containerHeight
            || contentWidth != this._lastState.contentWidth || contentHeight != this._lastState.contentHeight;
        this._lastState = this.state;*/
        //console.log(`Rendering... ${this.propsJustChanged} ${this.sizeJustChanged}`);
        let classes = ["ScrollView", backgroundDrag && "draggable", scrollOp_bar && "scrollActive", className && className];
        let addTabIndex = onScroll && onScroll_addTabIndex;
        return (React.createElement("div", Object.assign({}, rest, { ref: c => void (this.root = c), className: classes.filter(a => a).join(" "), style: E(styles.root, !flex && styles.root_nonFlex, style), onWheel: (!onKeyDown && !onScroll) ? null : e => {
                this.lastMouseWheelTime = Date.now();
                if (onWheel)
                    return onWheel(e);
            }, 
            // note: onKeyDown only gets called if you set tabIndex="0" on the ScrollView (and thus its root-div) -- making it focusable
            onKeyDown: (!onKeyDown && !onScroll) ? null : e => {
                let key = e.which;
                // if: page-up, page-down, spacebar, up, down, ctrl+home, or ctrl+end
                if (key == 33 || key == 34 || key == 32 || key == 38 || key == 40 || (e.ctrlKey && key == 36) || (e.ctrlKey && key == 35)) {
                    this.lastKeyEventTime = Date.now();
                }
                if (onKeyDown)
                    return onKeyDown(e);
            }, onScroll: !onScroll ? null : e => {
                let scrollSource;
                if (scrollOp_bar) {
                    scrollSource = ScrollSource.User_MouseDrag;
                }
                else if (Date.now() - this.lastMouseWheelTime < 500) { // todo: improve detection method
                    scrollSource = ScrollSource.User_MouseWheel;
                }
                else if (Date.now() - this.lastKeyEventTime < 500) { // todo: improve detection method
                    scrollSource = ScrollSource.User_Keyboard;
                }
                else {
                    scrollSource = ScrollSource.Code;
                }
                if (onScroll)
                    return onScroll(e, scrollSource, this.GetScroll());
            } }),
            scrollH_active &&
                React.createElement("div", { className: "scrollTrack horizontal", style: E(styles.scrollTrack, styles.scrollTrack_h) },
                    React.createElement("div", { ref: c => void (this.scrollHBar = c), className: "scrollBar horizontal", onMouseDown: this.OnScrollbarMouseDown, onMouseOver: () => this.SetState({ scrollHBar_hovered: true }), onMouseOut: () => this.SetState({ scrollHBar_hovered: false }), style: E(styles.scrollBar, styles.scrollBar_h, (this.state.scrollHBar_hovered || (scrollOp_bar && scrollOp_bar == this.scrollHBar)) && styles.scrollBar_active, { width: `${(containerWidth / contentWidth) * 100}%`, left: ((scrollH_pos / contentWidth) * 100) + "%", pointerEvents: "all" }, scrollHBarStyle) })),
            scrollV_active &&
                React.createElement("div", { className: "scrollTrack vertical", style: E(styles.scrollTrack, styles.scrollTrack_v) },
                    React.createElement("div", { ref: c => void (this.scrollVBar = c), className: "scrollBar vertical", onMouseDown: this.OnScrollbarMouseDown, onMouseOver: () => this.SetState({ scrollVBar_hovered: true }), onMouseOut: () => this.SetState({ scrollVBar_hovered: false }), style: E(styles.scrollBar, styles.scrollBar_v, (this.state.scrollVBar_hovered || (scrollOp_bar && scrollOp_bar == this.scrollVBar)) && styles.scrollBar_active, { height: `${(containerHeight / contentHeight) * 100}%`, top: ((scrollV_pos / contentHeight) * 100) + "%", pointerEvents: "all" }, scrollVBarStyle) })),
            React.createElement("style", null, `
				.hideScrollbar { scrollbar-width: none; } /* hide scrollbar in firefox */
				.hideScrollbar::-webkit-scrollbar { width: 0px; height: 0px; background: transparent; } /* hide scrollbar in chrome */
				.ScrollView.draggable > .contentOuter { cursor: grab; cursor: -webkit-grab; cursor: -moz-grab; }
				.ScrollView.draggable.scrollActive > .contentOuter { cursor: grabbing !important; cursor: -webkit-grabbing !important; cursor: -moz-grabbing !important; }
				`),
            React.createElement(Div, { ref: c => this.contentOuter = c, className: "contentOuter hideScrollbar", onScroll: this.HandleScroll, tabIndex: addTabIndex ? -1 : null, onMouseDown: this.OnContentMouseDown, onTouchEnd: this.OnTouchEnd, onClick: contentOuter_onClick, style: E(styles.contentOuter, /*backgroundDrag && styles.content_draggable,*/ /*scrollOp_bar && styles.content_dragging,*/ !flex && styles.contentOuter_nonFlex, 
                //inFirefox && scrollH_active && {/*paddingBottom: GetHScrollBarHeight(),*/ marginBottom: -GetHScrollBarHeight()},
                //inFirefox && scrollV_active && {/*paddingRight: GetVScrollBarWidth(),*/ marginRight: -GetVScrollBarWidth()},
                contentOuterStyle), 
                //shouldUpdate={()=>this.PropsJustChanged || (inFirefox && this.SizeJustChanged)}
                shouldUpdate: () => this.PropsJustChanged },
                React.createElement("div", { ref: c => void (this.content = c), className: "content", onClick: content_onClick, style: E({ position: "relative", minWidth: "fit-content", minHeight: "fit-content" }, contentStyle) }, children))));
    }
    ComponentDidMount() {
        //window.addEventListener("resize", this.UpdateSize);
        document.addEventListener("mousemove", this.OnMouseMove);
        document.addEventListener("mouseup", this.OnMouseUp);
        //this.UpdateSize();
        this.LoadScroll();
        const contentEl = GetDOM(this.contentOuter);
        this.hScrollableDOM = this.hScrollableDOM || contentEl;
        this.vScrollableDOM = this.vScrollableDOM || contentEl;
        Assert(this.resizeObserver_container == null && this.resizeObserver_content == null, "Resize-observers from last mount not cleaned up properly!");
        this.resizeObserver_container = new ResizeObserver(entries => {
            const entry = entries[0];
            this.SetState({
                containerWidth: entry.contentRect.width,
                containerHeight: entry.contentRect.height,
            }, () => {
                this.RespondToSizeChanges();
            });
        });
        this.resizeObserver_container.observe(this.root);
        this.resizeObserver_content = new ResizeObserver(entries => {
            const entry = entries[0];
            this.SetState({
                contentWidth: entry.contentRect.width,
                contentHeight: entry.contentRect.height,
            }, () => {
                this.RespondToSizeChanges();
            });
        });
        this.resizeObserver_content.observe(this.content);
    }
    ComponentDidUpdate() {
        if (!this.propsJustChanged)
            return; // if was just a scroll-update, ignore
        this.RespondToSizeChanges(); // contentScaling may have changed, so just always call this (it's cheap)
        this.LoadScroll();
    }
    LoadScroll() {
        if (!this.state.scrollH_pos && !this.state.scrollV_pos)
            return;
        this.hScrollableDOM.scrollLeft = this.state.scrollH_pos;
        this.vScrollableDOM.scrollTop = this.state.scrollV_pos;
    }
    PostRender(source) {
        //OnVisible(GetDOM(this), this.UpdateSize, true);
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
    ComponentWillUnmount() {
        //window.removeEventListener("resize", this.UpdateSize);
        document.removeEventListener("mousemove", this.OnMouseMove);
        document.removeEventListener("mouseup", this.OnMouseUp);
        this.resizeObserver_container.disconnect();
        this.resizeObserver_content.disconnect();
    }
    get PropsJustChanged() {
        let result = this.propsJustChanged;
        this.propsJustChanged = false;
        return result;
    }
    ComponentWillReceiveProps(nextProps) {
        this.SetState({
            [nextProps.scrollH_pos != null ? "scrollH_pos" : "na"]: nextProps.scrollH_pos,
            [nextProps.scrollV_pos != null ? "scrollV_pos" : "na"]: nextProps.scrollV_pos
        });
        this.propsJustChanged = true;
    }
    get SizeJustChanged() {
        let result = this.sizeJustChanged;
        this.sizeJustChanged = false;
        return result;
    }
    UpdateScrolls() {
        //var contentUI = FindDOM(this.content);
        var scrollH_pos = this.hScrollableDOM.scrollLeft;
        var scrollV_pos = this.vScrollableDOM.scrollTop;
        if (scrollH_pos != this.state.scrollH_pos || scrollV_pos != this.state.scrollV_pos) {
            this.SetState({ scrollH_pos: scrollH_pos, scrollV_pos: scrollV_pos });
            //this.props.onScroll && this.props.onScroll({x: scrollH_pos, y: scrollV_pos});
            //this.UpdateSize(); // update size info (if changed)
        }
    }
    StartScrolling(e) {
        //this.updateChildren = false;
        this.SetState({ scrollOp_bar: e.target });
        this.scroll_startMousePos = { x: e.pageX, y: e.pageY };
        this.scroll_startScrollPos = { x: this.hScrollableDOM.scrollLeft, y: this.vScrollableDOM.scrollTop };
    }
    // for external use
    GetScroll() {
        return { x: this.state.scrollH_pos, y: this.state.scrollV_pos };
    }
    // alternative to using "scrollH_pos" and "scrollV_pos" props
    SetScroll(scrollPos) {
        //this.setState({scrollH_pos: scrollPos.x, scrollV_pos: scrollPos.y}, ()=>this.LoadScroll());
        //var content = FindDOM(this.content);
        this.hScrollableDOM.scrollLeft = scrollPos.x;
        this.vScrollableDOM.scrollTop = scrollPos.y;
        this.HandleScroll(); // update state right away (waiting for onScroll event can be too late for code depending on GetScroll() reflecting just-set values)
    }
    ScrollBy(scrollPosOffset) {
        //this.setState({scrollH_pos: this.GetScroll().x + scrollPosOffset.x, scrollV_pos: this.GetScroll().y + scrollPosOffset.y}, ()=>this.LoadScroll());
        //var content = FindDOM(this.content);
        this.hScrollableDOM.scrollLeft += scrollPosOffset.x;
        this.vScrollableDOM.scrollTop += scrollPosOffset.y;
        //this.setState({scrollH_pos: content.scrollLeft, scrollV_pos: content.scrollTop}, ()=>this.LoadScroll());
        this.HandleScroll(); // update state right away (waiting for onScroll event can be too late for code depending on GetScroll() reflecting just-set values)
    }
}
//# sourceMappingURL=ScrollView.js.map