(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ScrollView = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var React = _interopRequireWildcard(_react);

	var _reactAutobind = __webpack_require__(3);

	var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

	var _Utils = __webpack_require__(5);

	var _reactVextensions = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var __rest = undefined && undefined.__rest || function (s, e) {
	    var t = {};
	    for (var p in s) {
	        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
	        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
	    }return t;
	};
	/*import {E} from "../../../Frame/General/Globals_Free";
	import {BaseComponent, Div, FindDOM, FindDOM_, Classes} from "../../../Frame/General/ReactGlobals";
	import {BufferAction} from "../../../Frame/General/Timers";*/

	//declare var $;
	//var $ = (window as any).$;
	var Div = function (_Component) {
	    _inherits(Div, _Component);

	    function Div() {
	        _classCallCheck(this, Div);

	        return _possibleConstructorReturn(this, (Div.__proto__ || Object.getPrototypeOf(Div)).apply(this, arguments));
	    }

	    _createClass(Div, [{
	        key: "shouldComponentUpdate",
	        value: function shouldComponentUpdate(nextProps, nextState) {
	            if (this.props.shouldUpdate) return this.props.shouldUpdate(nextProps, nextState);
	            return true;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var _a = this.props,
	                shouldUpdate = _a.shouldUpdate,
	                rest = __rest(_a, ["shouldUpdate"]);
	            return React.createElement("div", Object.assign({}, rest));
	        }
	    }]);

	    return Div;
	}(_react.Component);

	var inFirefox = navigator.userAgent.includes("Firefox");
	// main
	// ==========
	var styles = {
	    root: { position: "relative", display: "flex", /*flexDirection: "column",*/overflow: "hidden" },
	    root_nonFlex: { height: "100%" },
	    content: {
	        flex: 1,
	        overflow: "auto", overflowScrolling: "touch", "-webkit-overflow-scrolling": "touch"
	    },
	    content_nonFlex: {
	        position: "absolute", left: 0, right: 0, top: 0, bottom: 0
	    },
	    //content_draggable: {cursor: "grab -webkit-grab -moz-grab"},
	    //content_dragging: {cursor: "-webkit-grabbing"}, // implemented in <style> tag instead, due to <Div> not being re-rendered (intentionally)
	    scrollBar: {
	        backgroundColor: "rgba(255,255,255,.3)",
	        borderRadius: 5
	    },
	    scrollBar_h: { position: "absolute", boxSizing: "border-box", zIndex: 10, height: 8, bottom: 0 },
	    scrollBar_v: { position: "absolute", boxSizing: "border-box", zIndex: 10, width: 8, right: 0 },
	    scrollBar_active: { backgroundColor: "rgba(255,255,255,.7)" },
	    scrollTrack: { position: "absolute", pointerEvents: "none" },
	    scrollTrack_h: { left: 0, right: 0, bottom: 0, height: 8 },
	    scrollTrack_v: { right: 0, top: 0, bottom: 0, width: 8 }
	};

	var ScrollView = exports.ScrollView = function (_BaseComponent) {
	    _inherits(ScrollView, _BaseComponent);

	    function ScrollView(props) {
	        _classCallCheck(this, ScrollView);

	        var _this2 = _possibleConstructorReturn(this, (ScrollView.__proto__ || Object.getPrototypeOf(ScrollView)).call(this, props));

	        _this2.propsJustChanged = false;
	        _this2.sizeJustChanged = false;
	        (0, _reactAutobind2.default)(_this2);
	        _this2.state = {
	            containerWidth: 0,
	            contentWidth: 0,
	            scrollH_active: false,
	            //scrollH_pos: this.props.scrollH_pos,
	            containerHeight: 0,
	            contentHeight: 0,
	            scrollV_active: false
	        };
	        return _this2;
	    }
	    //_lastState = {} as any; // to fix edge case, for when using "marginRight: -17" to hide scroll-bar


	    _createClass(ScrollView, [{
	        key: "render",
	        value: function render() {
	            var _this3 = this;

	            var _a = this.props,
	                backgroundDrag = _a.backgroundDrag,
	                backgroundDragMatchFunc = _a.backgroundDragMatchFunc,
	                bufferScrollEventsBy = _a.bufferScrollEventsBy,
	                scrollH_pos = _a.scrollH_pos,
	                scrollV_pos = _a.scrollV_pos,
	                className = _a.className,
	                style = _a.style,
	                contentStyle = _a.contentStyle,
	                scrollHBarStyle = _a.scrollHBarStyle,
	                scrollVBarStyle = _a.scrollVBarStyle,
	                flex = _a.flex,
	                onMouseDown = _a.onMouseDown,
	                onClick = _a.onClick,
	                onScrollEnd = _a.onScrollEnd,
	                children = _a.children,
	                rest = __rest(_a, ["backgroundDrag", "backgroundDragMatchFunc", "bufferScrollEventsBy", "scrollH_pos", "scrollV_pos", "className", "style", "contentStyle", "scrollHBarStyle", "scrollVBarStyle", "flex", "onMouseDown", "onClick", "onScrollEnd", "children"]);
	            children = children instanceof Array ? children : [children];
	            var _state = this.state,
	                containerWidth = _state.containerWidth,
	                containerHeight = _state.containerHeight,
	                contentWidth = _state.contentWidth,
	                contentHeight = _state.contentHeight,
	                scrollH_active = _state.scrollH_active,
	                scrollH_pos = _state.scrollH_pos,
	                scrollV_active = _state.scrollV_active,
	                scrollV_pos = _state.scrollV_pos,
	                scrollOp_bar = _state.scrollOp_bar;
	            //let scrollbarVisibilityChanged = scrollH_active != this._lastState.scrollH_active || scrollV_active != this._lastState.scrollV_active;
	            /*let scrollbarVisibilityChanged = containerWidth != this._lastState.containerWidth || containerHeight != this._lastState.containerHeight
	                || contentWidth != this._lastState.contentWidth || contentHeight != this._lastState.contentHeight;
	            this._lastState = this.state;*/
	            //console.log(`Rendering... ${this.propsJustChanged} ${this.sizeJustChanged}`);

	            var classes = ["ScrollView", backgroundDrag && "draggable", scrollOp_bar && "scrollActive", className && className];
	            return React.createElement("div", Object.assign({}, rest, { className: classes.filter(function (a) {
	                    return a;
	                }).join(" "), style: (0, _Utils.E)(styles.root, !flex && styles.root_nonFlex, style) }), scrollH_active && React.createElement("div", { className: "scrollTrack horizontal", style: (0, _Utils.E)(styles.scrollTrack, styles.scrollTrack_h) }, React.createElement("div", { ref: function ref(c) {
	                    return _this3.scrollHBar = c;
	                }, className: "scrollBar horizontal", onMouseDown: this.OnScrollbarMouseDown, onMouseOver: function onMouseOver() {
	                    return _this3.SetState({ scrollHBar_hovered: true });
	                }, onMouseOut: function onMouseOut() {
	                    return _this3.SetState({ scrollHBar_hovered: false });
	                }, style: (0, _Utils.E)(styles.scrollBar, styles.scrollBar_h, (this.state.scrollHBar_hovered || scrollOp_bar && scrollOp_bar == this.scrollHBar) && styles.scrollBar_active, { width: containerWidth / contentWidth * 100 + "%", left: scrollH_pos / contentWidth * 100 + "%", pointerEvents: "all" }, scrollHBarStyle) })), scrollV_active && React.createElement("div", { className: "scrollTrack vertical", style: (0, _Utils.E)(styles.scrollTrack, styles.scrollTrack_v) }, React.createElement("div", { ref: function ref(c) {
	                    return _this3.scrollVBar = c;
	                }, className: "scrollBar vertical", onMouseDown: this.OnScrollbarMouseDown, onMouseOver: function onMouseOver() {
	                    return _this3.SetState({ scrollVBar_hovered: true });
	                }, onMouseOut: function onMouseOut() {
	                    return _this3.SetState({ scrollVBar_hovered: false });
	                }, style: (0, _Utils.E)(styles.scrollBar, styles.scrollBar_v, (this.state.scrollVBar_hovered || scrollOp_bar && scrollOp_bar == this.scrollVBar) && styles.scrollBar_active, { height: containerHeight / contentHeight * 100 + "%", top: scrollV_pos / contentHeight * 100 + "%", pointerEvents: "all" }, scrollVBarStyle) })), React.createElement("style", null, "\n\t\t\t\t.hideScrollbar::-webkit-scrollbar { width: 0px; height: 0px; background: transparent; }\n\t\t\t\t.ScrollView.draggable > .content { cursor: grab; cursor: -webkit-grab; cursor: -moz-grab; }\n\t\t\t\t.ScrollView.draggable.scrollActive > .content { cursor: grabbing !important; cursor: -webkit-grabbing !important; cursor: -moz-grabbing !important; }\n\t\t\t\t"), React.createElement(Div, { ref: function ref(c) {
	                    return _this3.content = c;
	                }, className: "content hideScrollbar", onScroll: this.HandleScroll, onMouseDown: this.OnContentMouseDown, onTouchEnd: this.OnTouchEnd, onClick: onClick, style: (0, _Utils.E)(styles.content, /*backgroundDrag && styles.content_draggable,*/ /*scrollOp_bar && styles.content_dragging,*/!flex && styles.content_nonFlex, inFirefox && scrollH_active && { /*paddingBottom: GetHScrollBarHeight(),*/marginBottom: -(0, _Utils.GetHScrollBarHeight)() }, inFirefox && scrollV_active && { /*paddingRight: GetVScrollBarWidth(),*/marginRight: -(0, _Utils.GetVScrollBarWidth)() }, contentStyle), shouldUpdate: function shouldUpdate() {
	                    return _this3.PropsJustChanged || inFirefox && _this3.SizeJustChanged;
	                } }, children));
	        }
	    }, {
	        key: "componentDidMount",
	        value: function componentDidMount() {
	            window.addEventListener("resize", this.UpdateSize);
	            document.addEventListener("mousemove", this.OnMouseMove);
	            document.addEventListener("mouseup", this.OnMouseUp);
	            //this.UpdateSize();
	            this.LoadScroll();
	            this.hScrollableDOM = this.hScrollableDOM || (0, _Utils.FindDOM)(this.content);
	            this.vScrollableDOM = this.vScrollableDOM || (0, _Utils.FindDOM)(this.content);
	        }
	    }, {
	        key: "componentDidUpdate",
	        value: function componentDidUpdate() {
	            if (!this.propsJustChanged) return; // if was just a scroll-update, ignore
	            this.LoadScroll();
	        }
	    }, {
	        key: "LoadScroll",
	        value: function LoadScroll() {
	            if (!this.state.scrollH_pos && !this.state.scrollV_pos) return;
	            this.hScrollableDOM.scrollLeft = this.state.scrollH_pos;
	            this.vScrollableDOM.scrollTop = this.state.scrollV_pos;
	        }
	    }, {
	        key: "PostRender",
	        value: function PostRender(source) {
	            //if (FindDOM(this)) {
	            (0, _Utils.OnVisible)((0, _Utils.FindDOM)(this), this.UpdateSize, true);
	            //FindDOM_(this).OnVisible(this.UpdateSize, true, true);
	            /*if (firstRender)
	                FindDOM_(this).OnVisible(this.LoadScroll, true, true);*/
	            // onTouchEndCapture doesn't work consistently, so use native event
	            /*FindDOM(this.content).ontouchend = ()=>(console.log("end"), this.OnTouchEnd());
	            FindDOM(this.content).ontouchcancel = ()=>(console.log("cancel"), this.OnTouchEnd());
	            FindDOM(this.content).ontouchmove = ()=>{console.log("move")};
	            FindDOM(this.content).ontouchstart = ()=>{console.log("start")};*/
	            if (source == _reactVextensions.RenderSource.Mount) {
	                this.SetState({
	                    "scrollH_pos": this.props.scrollH_pos,
	                    "scrollV_pos": this.props.scrollV_pos
	                });
	            }
	        }
	        // for some reason, this gets called even if not really unmounting (or... I don't see why it'd be unmounting, anyway)

	    }, {
	        key: "componentWillUnmount",
	        value: function componentWillUnmount() {
	            window.removeEventListener("resize", this.UpdateSize);
	            document.removeEventListener("mousemove", this.OnMouseMove);
	            document.removeEventListener("mouseup", this.OnMouseUp);
	        }
	    }, {
	        key: "componentWillReceiveProps",
	        value: function componentWillReceiveProps(nextProps) {
	            var _SetState;

	            this.SetState((_SetState = {}, _defineProperty(_SetState, nextProps.scrollH_pos != null ? "scrollH_pos" : "na", nextProps.scrollH_pos), _defineProperty(_SetState, nextProps.scrollV_pos != null ? "scrollV_pos" : "na", nextProps.scrollV_pos), _SetState));
	            // when updating children, we should remeasure the heights to decide whether to toggle scroll enabledness
	            // todo: in the future, have this run in PostRender() or something, as I think setTimeout is not guaranteed to run after the UI is updated 
	            setTimeout(this.UpdateSize);
	            this.propsJustChanged = true;
	        }
	    }, {
	        key: "UpdateSize",
	        value: function UpdateSize() {
	            var container = (0, _Utils.FindDOM)(this);
	            var content = (0, _Utils.FindDOM)(this.content);
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
	            if (containerWidth != this.state.containerWidth || containerHeight != this.state.containerHeight || contentWidth != this.state.contentWidth || contentHeight != this.state.contentHeight) {
	                this.sizeJustChanged = true;
	                this.SetState({
	                    containerWidth: containerWidth, containerHeight: containerHeight,
	                    contentWidth: contentWidth, contentHeight: contentHeight,
	                    scrollH_active: contentWidth > containerWidth,
	                    scrollV_active: contentHeight > containerHeight
	                });
	            }
	        }
	    }, {
	        key: "HandleScroll",
	        value: function HandleScroll(e) {
	            // if not user-initiated event, ignore
	            //if (e.type != "DOMMouseScroll" && e.type != "keyup" && e.type != "mousewheel" && e.type != "mousemove") return;
	            //e.stopPropagation();
	            // maybe temp; for performance, when used in LogEntriesUI
	            if (this.props.bufferScrollEventsBy) (0, _Utils.BufferAction)("ScrollView_HandleScroll", this.props.bufferScrollEventsBy, this.UpdateScrolls);else this.UpdateScrolls();
	        }
	    }, {
	        key: "UpdateScrolls",
	        value: function UpdateScrolls() {
	            //var contentUI = FindDOM(this.content);
	            var scrollH_pos = this.hScrollableDOM.scrollLeft;
	            var scrollV_pos = this.vScrollableDOM.scrollTop;
	            if (scrollH_pos != this.state.scrollH_pos || scrollV_pos != this.state.scrollV_pos) {
	                this.SetState({ scrollH_pos: scrollH_pos, scrollV_pos: scrollV_pos });
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

	    }, {
	        key: "OnContentMouseDown",
	        value: function OnContentMouseDown(e) {
	            var _this4 = this;

	            var _props = this.props,
	                backgroundDrag = _props.backgroundDrag,
	                backgroundDragMatchFunc = _props.backgroundDragMatchFunc;

	            if (!backgroundDrag) return;
	            backgroundDragMatchFunc = backgroundDragMatchFunc || function (a) {
	                var nodePlusParents = [a];
	                while (nodePlusParents[nodePlusParents.length - 1].parentNode instanceof Element) {
	                    nodePlusParents.push(nodePlusParents[nodePlusParents.length - 1].parentNode);
	                }var firstScrollViewParent = nodePlusParents.find(function (b) {
	                    return b.className.split(" ").indexOf("ScrollView") != -1;
	                });
	                if (firstScrollViewParent == null || firstScrollViewParent[0] != (0, _Utils.FindDOM)(_this4)) return false;
	                return a.className.split(" ").indexOf("content") != -1 || a == _this4.content; // || a == this.state.svgRoot;
	            };
	            if (!backgroundDragMatchFunc(e.target)) return;
	            if (e.button != 0) return;
	            this.StartScrolling(e);
	            this.props.onMouseDown && this.props.onMouseDown(e);
	        }
	    }, {
	        key: "OnScrollbarMouseDown",
	        value: function OnScrollbarMouseDown(e) {
	            e.preventDefault();
	            this.StartScrolling(e);
	        }
	    }, {
	        key: "StartScrolling",
	        value: function StartScrolling(e) {
	            //this.updateChildren = false;
	            this.SetState({ scrollOp_bar: e.target });
	            this.scroll_startMousePos = { x: e.pageX, y: e.pageY };
	            this.scroll_startScrollPos = { x: this.hScrollableDOM.scrollLeft, y: this.vScrollableDOM.scrollTop };
	        }
	    }, {
	        key: "OnMouseMove",
	        value: function OnMouseMove(e) {
	            var _state2 = this.state,
	                scrollOp_bar = _state2.scrollOp_bar,
	                containerWidth = _state2.containerWidth,
	                containerHeight = _state2.containerHeight,
	                contentWidth = _state2.contentWidth,
	                contentHeight = _state2.contentHeight;

	            if (!scrollOp_bar) return;
	            var scroll_mousePosDif = { x: e.pageX - this.scroll_startMousePos.x, y: e.pageY - this.scroll_startMousePos.y };
	            if (scrollOp_bar.classList && scrollOp_bar.classList.contains("horizontal")) {
	                var scrollPixelsPerScrollbarPixels = contentWidth / containerWidth;
	                this.hScrollableDOM.scrollLeft = this.scroll_startScrollPos.x + scroll_mousePosDif.x * scrollPixelsPerScrollbarPixels;
	            } else if (scrollOp_bar.classList && scrollOp_bar.classList.contains("vertical")) {
	                var _scrollPixelsPerScrollbarPixels = contentHeight / containerHeight;
	                this.vScrollableDOM.scrollTop = this.scroll_startScrollPos.y + scroll_mousePosDif.y * _scrollPixelsPerScrollbarPixels;
	            } else {
	                var _scrollPixelsPerScrollbarPixels2 = 1;
	                this.hScrollableDOM.scrollLeft = this.scroll_startScrollPos.x - scroll_mousePosDif.x * _scrollPixelsPerScrollbarPixels2;
	                this.vScrollableDOM.scrollTop = this.scroll_startScrollPos.y - scroll_mousePosDif.y * _scrollPixelsPerScrollbarPixels2;
	            }
	        }
	    }, {
	        key: "OnMouseUp",
	        value: function OnMouseUp(e) {
	            if (!this.state.scrollOp_bar) return;
	            this.SetState({ scrollOp_bar: null });
	            this.OnScrollEnd();
	        }
	    }, {
	        key: "OnTouchEnd",
	        value: function OnTouchEnd() {
	            this.OnScrollEnd();
	        }
	    }, {
	        key: "OnScrollEnd",
	        value: function OnScrollEnd() {
	            var onScrollEnd = this.props.onScrollEnd;

	            if (onScrollEnd) {
	                //let content = FindDOM(this.content);
	                var scrollPos = { x: this.hScrollableDOM.scrollLeft, y: this.vScrollableDOM.scrollTop };
	                onScrollEnd(scrollPos);
	            }
	        }
	        // for external use

	    }, {
	        key: "GetScroll",
	        value: function GetScroll() {
	            return { x: this.state.scrollH_pos, y: this.state.scrollV_pos };
	        }
	        // alternative to using "scrollH_pos" and "scrollV_pos" props

	    }, {
	        key: "SetScroll",
	        value: function SetScroll(scrollPos) {
	            //this.setState({scrollH_pos: scrollPos.x, scrollV_pos: scrollPos.y}, ()=>this.LoadScroll());
	            //var content = FindDOM(this.content);
	            this.hScrollableDOM.scrollLeft = scrollPos.x;
	            this.vScrollableDOM.scrollTop = scrollPos.y;
	        }
	    }, {
	        key: "ScrollBy",
	        value: function ScrollBy(scrollPosOffset) {
	            //this.setState({scrollH_pos: this.GetScroll().x + scrollPosOffset.x, scrollV_pos: this.GetScroll().y + scrollPosOffset.y}, ()=>this.LoadScroll());
	            //var content = FindDOM(this.content);
	            this.hScrollableDOM.scrollLeft += scrollPosOffset.x;
	            this.vScrollableDOM.scrollTop += scrollPosOffset.y;
	            //this.setState({scrollH_pos: content.scrollLeft, scrollV_pos: content.scrollTop}, ()=>this.LoadScroll());
	        }
	    }, {
	        key: "PropsJustChanged",
	        get: function get() {
	            var result = this.propsJustChanged;
	            this.propsJustChanged = false;
	            return result;
	        }
	    }, {
	        key: "SizeJustChanged",
	        get: function get() {
	            var result = this.sizeJustChanged;
	            this.sizeJustChanged = false;
	            return result;
	        }
	    }]);

	    return ScrollView;
	}(_reactVextensions.BaseComponent);

	ScrollView.defaultProps = { flex: true };

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(4);


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = autoBind;
	var wontBind = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

	var toBind = [];

	function autoBind(context) {
	  if (context === undefined) {
	    console.error('Autobind error: No context provided.');
	    return;
	  }

	  var objPrototype = Object.getPrototypeOf(context);

	  if (arguments.length > 1) {
	    // If a list of methods to bind is provided, use it.
	    toBind = Array.prototype.slice.call(arguments, 1);
	  } else {
	    // If no list of methods to bind is provided, bind all available methods in class.
	    toBind = Object.getOwnPropertyNames(objPrototype);
	  }

	  toBind.forEach(function (method) {
	    var descriptor = Object.getOwnPropertyDescriptor(objPrototype, method);

	    if (descriptor === undefined) {
	      console.warn('Autobind: "' + method + '" method not found in class.');
	      return;
	    }

	    // Return if it's special case function or if not a function at all
	    if (wontBind.indexOf(method) !== -1 || typeof descriptor.value !== 'function') {
	      return;
	    }

	    Object.defineProperty(objPrototype, method, boundMethod(objPrototype, method, descriptor));
	  });
	}

	/**
	* From autobind-decorator (https://github.com/andreypopp/autobind-decorator/tree/master)
	* Return a descriptor removing the value and returning a getter
	* The getter will return a .bind version of the function
	* and memoize the result against a symbol on the instance
	*/
	function boundMethod(objPrototype, method, descriptor) {
	  var fn = descriptor.value;

	  return {
	    configurable: true,
	    get: function get() {
	      if (this === objPrototype || this.hasOwnProperty(method)) {
	        return fn;
	      }

	      var boundFn = fn.bind(this);
	      Object.defineProperty(this, method, {
	        value: boundFn,
	        configurable: true,
	        writable: true
	      });
	      return boundFn;
	    }
	  };
	}
	module.exports = exports['default'];


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Log = Log;
	exports.Assert = Assert;
	exports.FindDOM = FindDOM;
	exports.E = E;
	exports.BufferAction = BufferAction;
	exports.OnVisible = OnVisible;
	exports.GetScrollBarSizes = GetScrollBarSizes;
	exports.GetHScrollBarHeight = GetHScrollBarHeight;
	exports.GetVScrollBarWidth = GetVScrollBarWidth;
	exports.HasScrollBar = HasScrollBar;
	exports.HasVScrollBar = HasVScrollBar;
	exports.HasHScrollBar = HasHScrollBar;

	var _reactDom = __webpack_require__(6);

	var ReactDOM = _interopRequireWildcard(_reactDom);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	//declare var $;
	//var $ = (window as any).$;
	function Log(message) {
	    var _console;

	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	    }

	    (_console = console).log.apply(_console, [message].concat(args));
	}
	function Assert(condition, message) {
	    if (condition) return;
	    //console.log(`Assert failed) ${message}\n\nStackTrace) ${new Error().stack}`);
	    //console.error("Assert failed) " + message);
	    throw new Error("Assert failed) " + message);
	}
	function FindDOM(comp) {
	    if (comp == null || comp._reactInternalInstance == null) return null;
	    return ReactDOM.findDOMNode(comp);
	}
	//export function FindDOM_(comp) { return $(FindDOM(comp)); }
	function E() {
	    var result = {};

	    for (var _len2 = arguments.length, objExtends = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        objExtends[_key2] = arguments[_key2];
	    }

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = objExtends[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var extend = _step.value;

	            for (var key in extend) {
	                result[key] = extend[key];
	            }
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    return result;
	    //return StyleSheet.create(result);
	}
	var funcLastScheduledRunTimes = {};
	function BufferAction() {
	    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	    }

	    if (args.length == 2) var minInterval = args[0],
	            func = args[1],
	            key = null;else if (args.length == 3) var key = args[0],
	            minInterval = args[1],
	            func = args[2];
	    var lastScheduledRunTime = funcLastScheduledRunTimes[key] || 0;
	    var now = new Date().getTime();
	    var timeSinceLast = now - lastScheduledRunTime;
	    if (timeSinceLast >= minInterval) {
	        func();
	        funcLastScheduledRunTimes[key] = now;
	    } else {
	        var waitingForNextRunAlready = lastScheduledRunTime > now;
	        if (!waitingForNextRunAlready) {
	            var nextRunTime = lastScheduledRunTime + minInterval;
	            var timeTillNextRun = nextRunTime - now;
	            //WaitXThenRun(timeTillNextRun, func);
	            setTimeout(func, timeTillNextRun);
	            funcLastScheduledRunTimes[key] = nextRunTime;
	        }
	    }
	}
	function OnVisible(elem, callback, onlyRunOnce) {
	    var triggerIfAlreadyVisible = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	    var options = {
	        keyframes: "\n@keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-moz-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-webkit-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-ms-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }\n@-o-keyframes nodeInserted {from {clip: rect(1px, auto, auto, auto); } to {clip: rect(0px, auto, auto, auto); } }, "
	    };
	    // if the keyframes aren't present, add them in a style element
	    if (document.querySelector("style.domnodeappear-keyframes") == null) {
	        var style = document.createElement("style");
	        style.className = "domnodeappear-keyframes";
	        style.innerHTML = options.keyframes;
	        document.head.appendChild(style);
	    }
	    // add animation to selected element
	    //$("head").append("<style class=\"" + options.stylesClass + "-animation\">" + options.styles + "</style>")
	    var elIsVisible = !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length); // from jquery source
	    if (triggerIfAlreadyVisible && elIsVisible) {
	        callback();
	        if (onlyRunOnce) return;
	    }
	    Object.assign(elem.style, { animationName: "nodeInserted", animationDuration: "0.001s" });
	    // on animation start, execute the callback
	    var handler = function handler(e) {
	        var target = e.target;
	        //if (e.originalEvent.animationName == "nodeInserted" && target.is(options.selector))
	        //Log(e.target);
	        if (e.animationName == "nodeInserted" && e.target == elem) {
	            callback.call(target);
	            if (onlyRunOnce) {
	                Object.assign(elem.style, { animationName: "", animationDuration: "" });
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
	}
	;
	var _scrollBarSizes = void 0;
	function GetScrollBarSizes() {
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
	        Object.assign(div.style, { position: "absolute", visibility: "hidden", overflow: "scroll", width: "100px", height: "100px" });
	        document.body.appendChild(div);
	        //_scrollBarSizes = {width: div.offsetWidth - div.clientWidth, height: div.offsetHeight - div.clientHeight};
	        _scrollBarSizes = { width: 100 - div.clientWidth, height: 100 - div.clientHeight };
	        div.remove();
	    }
	    return _scrollBarSizes;
	}
	function GetHScrollBarHeight() {
	    return GetScrollBarSizes().height;
	}
	function GetVScrollBarWidth() {
	    return GetScrollBarSizes().width;
	}
	function HasScrollBar(control) {
	    return HasVScrollBar(control) || HasHScrollBar(control);
	}
	function HasVScrollBar(control) {
	    return control[0].scrollHeight > control[0].clientHeight;
	}
	function HasHScrollBar(control) {
	    return control[0].scrollWidth > control[0].clientWidth;
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory(__webpack_require__(2), __webpack_require__(6));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
			var a = (typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? factory(require("react"), require("react-dom")) : factory(root["react"], root["react-dom"]);
			for (var i in a) {
				((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
			}
		}
	})(undefined, function (__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
		return (/******/function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};

				/******/ // The require function
				/******/function __webpack_require__(moduleId) {

					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;

					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };

					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

					/******/ // Flag the module as loaded
					/******/module.loaded = true;

					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}

				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;

				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;

				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "http://localhost:8080/";

				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			}(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {

				module.exports = __webpack_require__(1);

				/***/
			},
			/* 1 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});

				var _General = __webpack_require__(2);

				Object.keys(_General).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _General[key];
						}
					});
				});

				var _BaseComponent = __webpack_require__(8);

				Object.keys(_BaseComponent).forEach(function (key) {
					if (key === "default" || key === "__esModule") return;
					Object.defineProperty(exports, key, {
						enumerable: true,
						get: function get() {
							return _BaseComponent[key];
						}
					});
				});

				/***/
			},
			/* 2 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.basePropFullKeys = exports.ShallowCompare = undefined;
				exports.E = E;
				exports.ToJSON = ToJSON;
				exports.FromJSON = FromJSON;
				exports.RemoveDuplicates = RemoveDuplicates;
				exports.FindDOM = FindDOM;
				exports.FindReact = FindReact;
				exports.GetInnerComp = GetInnerComp;
				exports.BasicStyles = BasicStyles;
				exports.ApplyBasicStyles = ApplyBasicStyles;
				exports.SimpleShouldUpdate = SimpleShouldUpdate;
				exports.SimpleShouldUpdate_Overridable = SimpleShouldUpdate_Overridable;
				exports.Instant = Instant;
				exports.ShallowEquals = ShallowEquals;
				exports.ShallowChanged = ShallowChanged;
				exports.AddGlobalElement = AddGlobalElement;
				exports.AddGlobalStyle = AddGlobalStyle;
				exports.HasSealedProps = HasSealedProps;
				exports.Sealed = Sealed;

				var _react = __webpack_require__(3);

				var _react2 = _interopRequireDefault(_react);

				var _reactDom = __webpack_require__(4);

				var _reactDom2 = _interopRequireDefault(_reactDom);

				var _shallowCompare = __webpack_require__(5);

				var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

				var _classnames = __webpack_require__(7);

				var _classnames2 = _interopRequireDefault(_classnames);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				exports.ShallowCompare = _shallowCompare2.default;

				function G(entries) {
					Object.assign(window, entries);
				}
				G({ E: E });
				function E(e1, e2, e3, e4, e5, e6, e7, e8) {
					var result = {};
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var extend = _step.value;

							result.Extend(extend);
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}

					return result;
					//return StyleSheet.create(result);
				}
				function ToJSON(obj) {
					return JSON.stringify(obj);
				}
				function FromJSON(json) {
					return JSON.parse(json);
				}
				function RemoveDuplicates(items) {
					var result = [];
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var item = _step2.value;

							if (result.indexOf(item) == -1) {
								result.push(item);
							}
						}
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}

					return result;
				}
				//var ReactInstanceMap = require("react/lib/ReactInstanceMap");
				G({ ShallowCompare: _shallowCompare2.default });
				G({ React: _react2.default, Text: Text });
				function FindDOM(comp) {
					return _reactDom2.default.findDOMNode(comp);
				}
				;
				G({ FindDOM: FindDOM });
				/*declare var $;
	   export function FindDOM_(comp) { return $(FindDOM(comp)) as JQuery; };
	   G({FindDOM_});*/
				function FindReact(dom) {
					for (var key in dom) {
						if (key.startsWith("__reactInternalInstance$")) {
							var compInternals = dom[key]._currentElement;
							var compWrapper = compInternals._owner;
							var comp = compWrapper._instance;
							//return comp as React.Component<any, any>;
							return comp;
						}
					}return null;
				}
				G({ FindReact: FindReact });
				// needed for wrapper-components that don't provide way of accessing inner-component
				function GetInnerComp(wrapperComp) {
					return FindReact(FindDOM(wrapperComp));
				}
				G({ GetInnerComp: GetInnerComp });
				var basePropFullKeys = exports.basePropFullKeys = {
					m: "margin", ml: "marginLeft", mr: "marginRight", mt: "marginTop", mb: "marginBottom",
					mlr: null, mtb: null,
					p: "padding", pl: "paddingLeft", pr: "paddingRight", pt: "paddingTop", pb: "paddingBottom",
					plr: null, ptb: null,
					sel: null,
					ct: null,
					tabLabel: null, active: null,
					page: null, match: null,
					firebase: null
				};
				function RemoveBasePropKeys(restObj) {
					for (var key in basePropFullKeys) {
						delete restObj[key];
					}
				}
				function BasicStyles(props) {
					var result = {};
					for (var key in props) {
						if (basePropFullKeys[key] != null) {
							var fullKey = basePropFullKeys[key];
							result[fullKey] = props[key];
						} else if (key == "mlr") {
							result.marginLeft = props[key];
							result.marginRight = props[key];
						} else if (key == "mtb") {
							result.marginTop = props[key];
							result.marginBottom = props[key];
						} else if (key == "plr") {
							result.paddingLeft = props[key];
							result.paddingRight = props[key];
						} else if (key == "ptb") {
							result.paddingTop = props[key];
							result.paddingBottom = props[key];
						}
					}
					return result;
				}
				function ApplyBasicStyles(target) {
					var oldRender = target.prototype.render;
					target.prototype.render = function () {
						var result = oldRender.call(this);
						var props = this.props;
						var className = (0, _classnames2.default)({ selectable: props.sel, clickThrough: props.ct }, result.props.className);
						if (className) {
							result.props.className = className;
						}
						result.props.style = E(result.props.style, BasicStyles(props));
						RemoveBasePropKeys(result.props);
						return result;
					};
				}
				/*export function ApplyBasicStyles(target: React.ComponentClass<any>, funcName: string) {
	       let oldRender = target.prototype.render;
	       target.prototype.render = function() {
	           let result = oldRender.call(this) as JSX.Element;
	           result.props.style = E(BasicStyles(result.props), result.props.style);
	           RemoveBasePropKeys(result.props);
	           return result;
	       }
	   }*/
				function SimpleShouldUpdate(target) {
					target.prototype.shouldComponentUpdate = function (newProps, newState) {
						/*if (ShallowCompare(this, newProps, newState))
	         Log("Changed: " + this.props.Props().Where(a=>a.value !== newProps[a.name]).Select(a=>a.name) + ";" + g.ToJSON(this.props) + ";" + g.ToJSON(newProps));*/
						return (0, _shallowCompare2.default)(this, newProps, newState);
					};
				}
				//export function SimpleShouldUpdate_Overridable(target: Component<{shouldUpdate: (newProps: React.Props<any>, newState: any)=>boolean}, {}>) {
				function SimpleShouldUpdate_Overridable(target) {
					target.prototype.shouldComponentUpdate = function (newProps, newState) {
						var shouldUpdate = newProps.shouldUpdate;

						if (typeof shouldUpdate == "boolean") return shouldUpdate;
						if (typeof shouldUpdate == "function") return shouldUpdate(newProps, newState);
						return (0, _shallowCompare2.default)(this, newProps, newState);
					};
				}
				// for PostRender() func
				function Instant(target, name) {
					target[name].instant = true;
				}
				function ShallowEquals(objA, objB) {
					if (objA === objB) return true;
					var keysA = Object.keys(objA || {});
					var keysB = Object.keys(objB || {});
					if (keysA.length !== keysB.length) return false;
					// Test for A's keys different from B.
					var hasOwn = Object.prototype.hasOwnProperty;
					for (var i = 0; i < keysA.length; i++) {
						if (!hasOwn.call(objB, keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
							return false;
						}
						var valA = objA[keysA[i]];
						var valB = objB[keysA[i]];
						if (valA !== valB) return false;
					}
					return true;
				}
				G({ ShallowChanged: ShallowChanged });
				function ShallowChanged(objA, objB) {
					for (var _len = arguments.length, propsToCompareMoreDeeply = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
						propsToCompareMoreDeeply[_key - 2] = arguments[_key];
					}

					if (propsToCompareMoreDeeply.length) {
						if (ShallowChanged(objA.Excluding.apply(objA, propsToCompareMoreDeeply), objB.Excluding.apply(objB, propsToCompareMoreDeeply))) {
							return true;
						}
						var _iteratorNormalCompletion3 = true;
						var _didIteratorError3 = false;
						var _iteratorError3 = undefined;

						try {
							for (var _iterator3 = propsToCompareMoreDeeply[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
								var key = _step3.value;

								// for "children", shallow-compare at two levels deeper
								if (key == "children") {
									var _iteratorNormalCompletion4 = true;
									var _didIteratorError4 = false;
									var _iteratorError4 = undefined;

									try {
										for (var _iterator4 = (objA.children || {}).VKeys().concat((objB.children || {}).VKeys())[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
											var childKey = _step4.value;

											if (ShallowChanged(objA.children[childKey], objB.children[childKey])) return true;
										}
									} catch (err) {
										_didIteratorError4 = true;
										_iteratorError4 = err;
									} finally {
										try {
											if (!_iteratorNormalCompletion4 && _iterator4.return) {
												_iterator4.return();
											}
										} finally {
											if (_didIteratorError4) {
												throw _iteratorError4;
											}
										}
									}
								} else {
									if (ShallowChanged(objA[key], objB[key])) return true;
								}
							}
						} catch (err) {
							_didIteratorError3 = true;
							_iteratorError3 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion3 && _iterator3.return) {
									_iterator3.return();
								}
							} finally {
								if (_didIteratorError3) {
									throw _iteratorError3;
								}
							}
						}

						return false;
					}
					return !ShallowEquals(objA, objB);
				}
				//require("./GlobalStyles");
				var loaded = false;
				function AddGlobalElement(html) {
					/*$(()=> {
	        $(html).appendTo("#hidden_early");
	    });*/
					var proceed = function proceed() {
						loaded = true;
						var nodeType = html.trim().substring(1, html.trim().IndexOfAny(" ", ">"));
						var element = document.createElement(nodeType);
						document.querySelector("#hidden_early").appendChild(element);
						element.outerHTML = html;
					};
					if (loaded) proceed();else window.addEventListener("load", proceed);
				}
				;
				function AddGlobalStyle(str) {
					AddGlobalElement("\n<style>\n" + str + "\n</style>\n\t");
				}
				;
				/*AddGlobalStyle(`
	   *:not(.ignoreBaseCSS) {
	       color: rgba(255,255,255,.7);
	   }
	   `);*/
				/** Tunnels into Radium wrapper-class, and retrieves the original class, letting you access its static props. */
				/*export function PreRadium<T>(typeGetterFunc: ()=>T, setFunc: Function): T {
	       WaitXThenRun(0, ()=> {
	           debugger;
	           let type = typeGetterFunc() as any;
	           setFunc(type.DecoratedComponent);
	       });
	       return {} as any;
	   }*/
				/*export function PreRadium<T>(_: T, wrapperClass: Function): T {
	       return (wrapperClass as any).DecoratedComponent;
	   }*/
				/*export function GetErrorMessagesUnderElement(element: HTMLElement) {
	       return $(element).find(":invalid").ToList().map(node=>(node[0] as any).validationMessage || `Invalid value.`);
	       return element.querySelector(":invalid").ToList().map(node=>(node[0] as any).validationMessage || `Invalid value.`);
	   }*/
				function HasSealedProps(target) {
					var oldConstructor = target.constructor;
					target.constructor = function () {
						for (var key in target["prototype"]) {
							var method = target["prototype"][key];
							if (method.sealed && this[key] != method) {
								throw new Error("Cannot override sealed method \"" + key + "\".");
							}
						}
						return oldConstructor.apply(this, arguments);
					};
				}
				function Sealed(target, key) {
					target[key].sealed = true;
				}

				/***/
			},
			/* 3 */
			/***/function (module, exports) {

				module.exports = __webpack_require__(2);

				/***/
			},
			/* 4 */
			/***/function (module, exports) {

				module.exports = __webpack_require__(6);

				/***/
			},
			/* 5 */
			/***/function (module, exports, __webpack_require__) {

				/**
	    * Copyright 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    */

				'use strict';

				var shallowEqual = __webpack_require__(6);

				/**
	    * Does a shallow comparison for props and state.
	    * See ReactComponentWithPureRenderMixin
	    * See also https://facebook.github.io/react/docs/shallow-compare.html
	    */
				function shallowCompare(instance, nextProps, nextState) {
					return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
				}

				module.exports = shallowCompare;

				/***/
			},
			/* 6 */
			/***/function (module, exports) {

				/**
	    * Copyright (c) 2013-present, Facebook, Inc.
	    * All rights reserved.
	    *
	    * This source code is licensed under the BSD-style license found in the
	    * LICENSE file in the root directory of this source tree. An additional grant
	    * of patent rights can be found in the PATENTS file in the same directory.
	    *
	    * @typechecks
	    * 
	    */

				/*eslint-disable no-self-compare */

				'use strict';

				var hasOwnProperty = Object.prototype.hasOwnProperty;

				/**
	    * inlined Object.is polyfill to avoid requiring consumers ship their own
	    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	    */
				function is(x, y) {
					// SameValue algorithm
					if (x === y) {
						// Steps 1-5, 7-10
						// Steps 6.b-6.e: +0 != -0
						// Added the nonzero y check to make Flow happy, but it is redundant
						return x !== 0 || y !== 0 || 1 / x === 1 / y;
					} else {
						// Step 6.a: NaN == NaN
						return x !== x && y !== y;
					}
				}

				/**
	    * Performs equality by iterating through keys on an object and returning false
	    * when any key has values which are not strictly equal between the arguments.
	    * Returns true when the values of all keys are strictly equal.
	    */
				function shallowEqual(objA, objB) {
					if (is(objA, objB)) {
						return true;
					}

					if ((typeof objA === 'undefined' ? 'undefined' : _typeof2(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof2(objB)) !== 'object' || objB === null) {
						return false;
					}

					var keysA = Object.keys(objA);
					var keysB = Object.keys(objB);

					if (keysA.length !== keysB.length) {
						return false;
					}

					// Test for A's keys different from B.
					for (var i = 0; i < keysA.length; i++) {
						if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
							return false;
						}
					}

					return true;
				}

				module.exports = shallowEqual;

				/***/
			},
			/* 7 */
			/***/function (module, exports, __webpack_require__) {

				var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /*!
	                                                                    Copyright (c) 2016 Jed Watson.
	                                                                    Licensed under the MIT License (MIT), see
	                                                                    http://jedwatson.github.io/classnames
	                                                                    */
				/* global define */

				(function () {
					'use strict';

					var hasOwn = {}.hasOwnProperty;

					function classNames() {
						var classes = [];

						for (var i = 0; i < arguments.length; i++) {
							var arg = arguments[i];
							if (!arg) continue;

							var argType = typeof arg === 'undefined' ? 'undefined' : _typeof2(arg);

							if (argType === 'string' || argType === 'number') {
								classes.push(arg);
							} else if (Array.isArray(arg)) {
								classes.push(classNames.apply(null, arg));
							} else if (argType === 'object') {
								for (var key in arg) {
									if (hasOwn.call(arg, key) && arg[key]) {
										classes.push(key);
									}
								}
							}
						}

						return classes.join(' ');
					}

					if (typeof module !== 'undefined' && module.exports) {
						module.exports = classNames;
					} else if (true) {
						// register as 'classnames', consistent with npm package name
						!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
							return classNames;
						}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
					} else {
						window.classNames = classNames;
					}
				})();

				/***/
			},
			/* 8 */
			/***/function (module, exports, __webpack_require__) {

				"use strict";

				Object.defineProperty(exports, "__esModule", {
					value: true
				});
				exports.BaseComponent = exports.RenderSource = undefined;

				var _createClass = function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				}();

				var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
					return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				} : function (obj) {
					return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
				};

				exports.BaseComponentWithConnector = BaseComponentWithConnector;

				var _react = __webpack_require__(3);

				var _react2 = _interopRequireDefault(_react);

				var _reactAutobind = __webpack_require__(9);

				var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

				var _General = __webpack_require__(2);

				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}

				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}

				function _possibleConstructorReturn(self, call) {
					if (!self) {
						throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					}return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
				}

				function _inherits(subClass, superClass) {
					if (typeof superClass !== "function" && superClass !== null) {
						throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
					}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
				}

				var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
					var c = arguments.length,
					    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
					    d;
					if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
						if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
					}return c > 3 && r && Object.defineProperty(target, key, r), r;
				};
				var RenderSource = exports.RenderSource = undefined;
				(function (RenderSource) {
					RenderSource[RenderSource["Mount"] = 0] = "Mount";
					RenderSource[RenderSource["PropChange"] = 1] = "PropChange";
					RenderSource[RenderSource["SetState"] = 2] = "SetState";
					RenderSource[RenderSource["Update"] = 3] = "Update";
				})(RenderSource || (exports.RenderSource = RenderSource = {}));
				var BaseComponent = BaseComponent_1 = function (_Component) {
					_inherits(BaseComponent, _Component);

					function BaseComponent(props) {
						_classCallCheck(this, BaseComponent);

						// helper for debugging
						var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props));

						_this.GetPropsChanged_lastProps = {};
						_this.GetStateChanged_lastState = {};
						_this.changeListeners = [];
						_this.autoRemoveChangeListeners = true;
						_this.mounted = false;
						(0, _reactAutobind2.default)(_this);
						// if had @Radium decorator, then "this" is actually an instance of a class-specific "RadiumEnhancer" derived-class
						//		so reach in to original class, and set up auto-binding for its prototype members as well
						if (_this.constructor.name == "RadiumEnhancer") (0, _reactAutobind2.default)(Object.getPrototypeOf(_this));
						//this.state = this.state || this.defaultState || {} as any;
						_this.state = _this.constructor["defaultState"] || {};
						// if using PreRender, wrap render func
						if (_this.PreRender != BaseComponent_1.prototype.PreRender) {
							var oldRender = _this.render;
							_this.render = function () {
								this.PreRender();
								return oldRender.apply(this, arguments);
							};
						}
						// you know what, let's just always wrap the render() method, in this project; solves the annoying firebase-gobbling-errors issue
						/*let oldRender = this.render;
	     this.render = function() {
	         try {
	             this.PreRender();
	             return oldRender.apply(this, arguments);
	         } catch (ex) {
	             debugger;
	             throw ex;
	         }
	     };*/
						return _this;
					}
					//timers = [] as Timer[];


					_createClass(BaseComponent, [{
						key: "GetPropsChanged",
						value: function GetPropsChanged() {
							var _this2 = this;

							var keys = (0, _General.RemoveDuplicates)(Object.keys(this.props).concat(Object.keys(this.GetPropsChanged_lastProps)));
							var result = keys.filter(function (key) {
								return !Object.is(_this2.props[key], _this2.GetPropsChanged_lastProps[key]);
							});
							this.GetPropsChanged_lastProps = Object.assign({}, this.props);
							return result;
						}
					}, {
						key: "GetPropsChanged_Data",
						value: function GetPropsChanged_Data() {
							var _this3 = this;

							return (0, _General.ToJSON)(this.GetPropsChanged().reduce(function (result, key) {
								return result[key] = _this3.props[key], result;
							}, {}));
						}
					}, {
						key: "GetStateChanged",
						value: function GetStateChanged() {
							var _this4 = this;

							var keys = (0, _General.RemoveDuplicates)(Object.keys(this.state).concat(Object.keys(this.GetStateChanged_lastState)));
							var result = keys.filter(function (key) {
								return !Object.is(_this4.state[key], _this4.GetStateChanged_lastState[key]);
							});
							this.GetStateChanged_lastState = Object.assign({}, this.state);
							return result;
						}
					}, {
						key: "GetStateChanged_Data",
						value: function GetStateChanged_Data() {
							var _this5 = this;

							return (0, _General.ToJSON)(this.GetStateChanged().reduce(function (result, key) {
								return result[key] = _this5.state[key], result;
							}, {}));
						}
					}, {
						key: "forceUpdate",
						value: function forceUpdate(_) {
							//throw new Error("Do not call this. Call Update() instead.");
						}
					}, {
						key: "Update",
						value: function Update(postUpdate) {
							//if (!this.Mounted) return;
							this.lastRender_source = RenderSource.Update;
							//this.forceUpdate(postUpdate);
							_react.Component.prototype.forceUpdate.call(this, postUpdate);
						}
					}, {
						key: "Clear",
						value: function Clear(postClear) {
							var oldRender = this.render;
							this.render = function () {
								var _this6 = this;

								this.render = oldRender;
								//WaitXThenRun(0, this.Update);
								setTimeout(function () {
									return _this6.Update();
								});
								return _react2.default.createElement("div", null);
							};
							postClear();
						}
					}, {
						key: "ClearThenUpdate",
						value: function ClearThenUpdate() {
							var _this7 = this;

							//this.Clear(this.Update);
							this.Clear(function () {
								return _this7.Update();
							});
						}
						/** Shortcut for "()=>(this.forceUpdate(), this.ComponentWillMountOrReceiveProps(props))". */

					}, {
						key: "UpdateAndReceive",
						value: function UpdateAndReceive(props) {
							var _this8 = this,
							    _arguments = arguments;

							return function () {
								//if (!this.Mounted) return;
								//this.forceUpdate();
								_react.Component.prototype.forceUpdate.apply(_this8, _arguments);
								if (_this8.autoRemoveChangeListeners) _this8.RemoveChangeListeners();
								_this8.ComponentWillMountOrReceiveProps(props);
							};
						}
						//setState(_: ()=>"Do not call this. Call SetState() instead.") {
						/*setState() {
	         throw new Error("Do not call this. Call SetState() instead.");
	     }*/

					}, {
						key: "setState",
						value: function setState() {
							return null;
						}
					}, {
						key: "SetState",
						value: function SetState(newState, callback) {
							var _this9 = this;

							var cancelIfStateSame = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
							var deepCompare = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

							if (cancelIfStateSame) {
								// we only care about new-state's keys -- setState() leaves unmentioned keys untouched
								var oldState_forNewStateKeys = Object.keys(newState).reduce(function (result, key) {
									return result[key] = _this9.state[key], result;
								}, {});
								if (deepCompare) {
									if ((0, _General.ToJSON)(newState) == (0, _General.ToJSON)(oldState_forNewStateKeys)) return [];
								} else {
									//if (ShallowEquals(newState, oldState_forNewStateKeys)) return [];
									// use a looser comparison (we want a missing prop to be equivalent to null and undefined)
									var same = true;
									var _iteratorNormalCompletion = true;
									var _didIteratorError = false;
									var _iteratorError = undefined;

									try {
										for (var _iterator = (0, _General.RemoveDuplicates)(Object.keys(this.state).concat(Object.keys(newState)))[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
											var key = _step.value;

											var valA = this.state[key];
											var valB = newState[key];
											if (valA == null && valB == null) continue;
											if (valA !== valB) {
												same = false;
												break;
											}
										}
									} catch (err) {
										_didIteratorError = true;
										_iteratorError = err;
									} finally {
										try {
											if (!_iteratorNormalCompletion && _iterator.return) {
												_iterator.return();
											}
										} finally {
											if (_didIteratorError) {
												throw _iteratorError;
											}
										}
									}

									if (same) return [];
								}
							}
							this.lastRender_source = RenderSource.SetState;
							//this.setState(newState as S, callback);
							_react.Component.prototype.setState.apply(this, arguments);
						}
					}, {
						key: "AddChangeListeners",
						value: function AddChangeListeners(host) {
							if (host == null) return; // maybe temp
							/*host.extraMethods = funcs;
	      for (let func of funcs)
	          this.changeListeners.push({host: host, func: func});*/

							for (var _len = arguments.length, funcs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
								funcs[_key - 1] = arguments[_key];
							}

							var _iteratorNormalCompletion2 = true;
							var _didIteratorError2 = false;
							var _iteratorError2 = undefined;

							try {
								for (var _iterator2 = funcs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
									var func = _step2.value;

									if (typeof func == "string") func = func.Func(this.Update);
									// if actual function, add it (else, ignore entry--it must have been a failed conditional)
									if (func instanceof Function) {
										//if (!host.HasExtraMethod(func)) {
										host.extraMethod = func;
										this.changeListeners.push({ host: host, func: func });
									}
								}
							} catch (err) {
								_didIteratorError2 = true;
								_iteratorError2 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion2 && _iterator2.return) {
										_iterator2.return();
									}
								} finally {
									if (_didIteratorError2) {
										throw _iteratorError2;
									}
								}
							}
						}
					}, {
						key: "RemoveChangeListeners",
						value: function RemoveChangeListeners() {
							//this.changeListeners = this.changeListeners || []; // temp fix for odd "is null" issue
							var _iteratorNormalCompletion3 = true;
							var _didIteratorError3 = false;
							var _iteratorError3 = undefined;

							try {
								for (var _iterator3 = this.changeListeners[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
									var changeListener = _step3.value;

									changeListener.host.removeExtraMethod = changeListener.func;
								}
							} catch (err) {
								_didIteratorError3 = true;
								_iteratorError3 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion3 && _iterator3.return) {
										_iterator3.return();
									}
								} finally {
									if (_didIteratorError3) {
										throw _iteratorError3;
									}
								}
							}

							this.changeListeners = [];
						}
					}, {
						key: "RemoveChangeListenersFor",
						value: function RemoveChangeListenersFor(host) {
							var changeListenersToRemove = this.changeListeners.filter(function (a) {
								return a.host == host;
							});
							var _iteratorNormalCompletion4 = true;
							var _didIteratorError4 = false;
							var _iteratorError4 = undefined;

							try {
								for (var _iterator4 = changeListenersToRemove[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
									var listener = _step4.value;

									listener.host.removeExtraMethod = listener.func;
									this.changeListeners.splice(this.changeListeners.indexOf(listener), 1);
								}
							} catch (err) {
								_didIteratorError4 = true;
								_iteratorError4 = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion4 && _iterator4.return) {
										_iterator4.return();
									}
								} finally {
									if (_didIteratorError4) {
										throw _iteratorError4;
									}
								}
							}
						}
					}, {
						key: "ComponentWillMount",
						value: function ComponentWillMount() {}
					}, {
						key: "ComponentWillMountOrReceiveProps",
						value: function ComponentWillMountOrReceiveProps(newProps, forMount) {}
					}, {
						key: "componentWillMount",
						value: function componentWillMount() {
							if (this.autoRemoveChangeListeners) this.RemoveChangeListeners();
							this.ComponentWillMount();
							this.ComponentWillMountOrReceiveProps(this.props, true);
							this.lastRender_source = RenderSource.Mount;
						}
					}, {
						key: "ComponentDidMount",
						value: function ComponentDidMount() {}
					}, {
						key: "ComponentDidMountOrUpdate",
						value: function ComponentDidMountOrUpdate(lastProps, lastState) {}
					}, {
						key: "componentDidMount",
						value: function componentDidMount() {
							this.ComponentDidMount.apply(this, arguments);
							this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
							this.ComponentDidMountOrUpdate_lastProps = this.props;
							this.ComponentDidMountOrUpdate_lastState = this.state;
							/*let {Ref} = this.props;
	      if (Ref) Ref(this);*/
							this.mounted = true;
							this.CallPostRender();
						}
					}, {
						key: "ComponentWillUnmount",
						value: function ComponentWillUnmount() {}
					}, {
						key: "componentWillUnmount",
						value: function componentWillUnmount() {
							this.ComponentWillUnmount();
							/*for (let timer of this.timers) {
	          timer.Stop();
	      }
	      this.timers = [];*/
							/*let {Ref} = this.props;
	      if (Ref) Ref(null);*/
							this.mounted = false;
						}
					}, {
						key: "ComponentWillReceiveProps",
						value: function ComponentWillReceiveProps(newProps) {}
					}, {
						key: "componentWillReceiveProps",
						value: function componentWillReceiveProps(newProps) {
							if (this.autoRemoveChangeListeners) this.RemoveChangeListeners();
							this.ComponentWillReceiveProps(newProps);
							this.ComponentWillMountOrReceiveProps(newProps, false);
							this.lastRender_source = RenderSource.PropChange;
						}
					}, {
						key: "ComponentDidUpdate",
						value: function ComponentDidUpdate() {}
					}, {
						key: "componentDidUpdate",
						value: function componentDidUpdate() {
							this.ComponentDidUpdate.apply(this, arguments);
							this.ComponentDidMountOrUpdate(this.ComponentDidMountOrUpdate_lastProps, this.ComponentDidMountOrUpdate_lastState);
							this.ComponentDidMountOrUpdate_lastProps = this.props;
							this.ComponentDidMountOrUpdate_lastState = this.state;
							this.CallPostRender();
						}
					}, {
						key: "CallPostRender",
						value: function CallPostRender() {
							var _this10 = this;

							if (this.PostRender == BaseComponent_1.prototype.PostRender) return;
							var renderSource = this.lastRender_source;
							var ownPostRender = this.PostRender;
							// can be different, for wrapped components (apparently they copy the inner type's PostRender as their own PostRender -- except as a new function, for some reason)
							var prototypePostRender = this.constructor.prototype.PostRender;
							if (ownPostRender.instant || prototypePostRender.instant) {
								this.PostRender(renderSource);
							} else {
								/*if (QuickIncrement("PostRenderLog") <= 1)
	           Log("Calling PostRender for: " + this.constructor.name + ";" + V.GetStackTraceStr());*/
								//Log("Calling PostRender for: " + this.constructor.name);
								setTimeout(function () {
									return window.requestAnimationFrame(function () {
										//WaitXThenRun(0, ()=>g.requestIdleCallback(()=> {
										if (!_this10.mounted) return;
										_this10.PostRender(renderSource);
									});
								});
								/*WaitXThenRun(0, ()=> {
	           this.PostRender();
	       });*/
							}
						}
					}, {
						key: "PreRender",
						value: function PreRender() {}
					}, {
						key: "PostRender",
						value: function PostRender(source) {}
					}, {
						key: "DOM",
						get: function get() {
							return this.mounted ? (0, _General.FindDOM)(this) : null;
						}
						//get DOM_() { return this.mounted ? $(this.DOM) : null; }
						// needed for wrapper-components that don't provide way of accessing inner-component
						//get InnerComp() { return FindReact(this.DOM); }
						// make all these optional, so fits Component type definition/shape

					}, {
						key: "FlattenedChildren",
						get: function get() {
							var children = children instanceof Array ? this.props.children : [this.props.children];
							return _react2.default.Children.map(children.filter(function (a) {
								return a;
							}), function (a) {
								return a;
							});
						}
					}]);

					return BaseComponent;
				}(_react.Component);
				__decorate([_General.Sealed], BaseComponent.prototype, "componentWillMount", null);
				__decorate([_General.Sealed], BaseComponent.prototype, "componentDidMount", null);
				__decorate([_General.Sealed], BaseComponent.prototype, "componentWillUnmount", null);
				__decorate([_General.Sealed], BaseComponent.prototype, "componentWillReceiveProps", null);
				__decorate([_General.Sealed], BaseComponent.prototype, "componentDidUpdate", null);
				exports.BaseComponent = BaseComponent = BaseComponent_1 = __decorate([_General.HasSealedProps], BaseComponent);
				exports.BaseComponent = BaseComponent;
				//G({Component2: Component, BaseComponent: Component});
				/*export function BaseComponentWithConnect<Props>(connectFunc: (state?: RootState, props?)=>Props) {
	       return function InnerFunc<State>() {
	           return BaseComponent as new(..._)=>BaseComponent<Props, State>;
	       };
	   }*/

				function BaseComponentWithConnector(connector, initialState) {
					var BaseComponentEnhanced = function (_BaseComponent) {
						_inherits(BaseComponentEnhanced, _BaseComponent);

						function BaseComponentEnhanced(props) {
							_classCallCheck(this, BaseComponentEnhanced);

							var _this11 = _possibleConstructorReturn(this, (BaseComponentEnhanced.__proto__ || Object.getPrototypeOf(BaseComponentEnhanced)).call(this, props));

							_this11.state = initialState;
							if (_this11.constructor["defaultState"]) {
								throw new Error("Cannot specify \"" + _this11.constructor.name + ".defaultState\". (initial-state is already set using BaseComponentWithConnect function)");
							}
							return _this11;
						}

						return BaseComponentEnhanced;
					}(BaseComponent);

					return BaseComponentEnhanced;
				}
				var BaseComponent_1;

				/***/
			},
			/* 9 */
			/***/function (module, exports, __webpack_require__) {

				module.exports = __webpack_require__(10);

				/***/
			},
			/* 10 */
			/***/function (module, exports) {

				'use strict';

				Object.defineProperty(exports, '__esModule', {
					value: true
				});
				exports['default'] = autoBind;
				var wontBind = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

				var toBind = [];

				function autoBind(context) {
					if (context === undefined) {
						console.error('Autobind error: No context provided.');
						return;
					}

					var objPrototype = Object.getPrototypeOf(context);

					if (arguments.length > 1) {
						// If a list of methods to bind is provided, use it.
						toBind = Array.prototype.slice.call(arguments, 1);
					} else {
						// If no list of methods to bind is provided, bind all available methods in class.
						toBind = Object.getOwnPropertyNames(objPrototype);
					}

					toBind.forEach(function (method) {
						var descriptor = Object.getOwnPropertyDescriptor(objPrototype, method);

						if (descriptor === undefined) {
							console.warn('Autobind: "' + method + '" method not found in class.');
							return;
						}

						// Return if it's special case function or if not a function at all
						if (wontBind.indexOf(method) !== -1 || typeof descriptor.value !== 'function') {
							return;
						}

						Object.defineProperty(objPrototype, method, boundMethod(objPrototype, method, descriptor));
					});
				}

				/**
	   * From autobind-decorator (https://github.com/andreypopp/autobind-decorator/tree/master)
	   * Return a descriptor removing the value and returning a getter
	   * The getter will return a .bind version of the function
	   * and memoize the result against a symbol on the instance
	   */
				function boundMethod(objPrototype, method, descriptor) {
					var fn = descriptor.value;

					return {
						configurable: true,
						get: function get() {
							if (this === objPrototype || this.hasOwnProperty(method)) {
								return fn;
							}

							var boundFn = fn.bind(this);
							Object.defineProperty(this, method, {
								value: boundFn,
								configurable: true,
								writable: true
							});
							return boundFn;
						}
					};
				}
				module.exports = exports['default'];

				/***/
			}
			/******/])
		);
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ])
});
;