import React, { WheelEventHandler, KeyboardEventHandler } from "react";
import { Component } from "react";
import { Vector2i } from "./Utils.js";
import { RenderSource } from "react-vextensions";
export declare enum ScrollSource {
    User_MouseWheel = 0,
    User_MouseDrag = 1,
    User_Keyboard = 2,
    Code = 3
}
declare class Div extends Component<{
    shouldUpdate: any;
} & React.HTMLProps<HTMLDivElement>, {}> {
    shouldComponentUpdate(nextProps: any, nextState: any): any;
    render(): React.JSX.Element;
}
export declare type ScrollViewProps = {
    backgroundDrag?: boolean;
    backgroundDragMatchFunc?: (element: HTMLElement) => boolean;
    bufferScrollEventsBy?: number;
    scrollH_pos?: number;
    scrollV_pos?: number;
    className?: string;
    style?: any;
    contentStyle?: any;
    contentSizeWatcherStyle?: any;
    scrollHBarStyle?: any;
    scrollVBarStyle?: any;
    flex?: boolean;
    onMouseDown?: any;
    onClick?: any;
    onWheel?: WheelEventHandler<HTMLDivElement>;
    onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
    onScroll?: (event: React.UIEvent<HTMLDivElement>, source: ScrollSource, pos: Vector2i) => void;
    onScroll_addTabIndex?: boolean;
    onScrollEnd?: (pos: Vector2i) => void;
} & Omit<React.HTMLProps<HTMLDivElement>, "onScroll">;
declare const ScrollView_base: (new (..._: any[]) => import("react-vextensions").BaseComponent<ScrollViewProps, {
    containerWidth: number;
    contentWidth: number;
    scrollH_active: boolean;
    scrollH_pos: number;
    scrollHBar_hovered: boolean;
    containerHeight: number;
    contentHeight: number;
    scrollV_active: boolean;
    scrollV_pos: number;
    scrollVBar_hovered: boolean;
    scrollOp_bar: HTMLElement;
}, object>) & {
    renderCount: number;
    lastRenderTime: number;
};
export declare class ScrollView extends ScrollView_base {
    root: HTMLDivElement;
    content: Div;
    contentSizeWatcher: HTMLDivElement;
    scrollHBar: HTMLDivElement;
    scrollVBar: HTMLDivElement;
    lastMouseWheelTime: number;
    lastKeyEventTime: number;
    render(): React.JSX.Element;
    resizeObserver_container: ResizeObserver;
    resizeObserver_content: ResizeObserver;
    ComponentDidMount(): void;
    ComponentDidUpdate(): void;
    LoadScroll(): void;
    PostRender(source: RenderSource): void;
    ComponentWillUnmount(): void;
    propsJustChanged: boolean;
    get PropsJustChanged(): boolean;
    ComponentWillReceiveProps(nextProps: any): void;
    sizeJustChanged: boolean;
    get SizeJustChanged(): boolean;
    RespondToSizeChanges: () => void;
    private HandleScroll;
    UpdateScrolls(): void;
    private OnContentMouseDown;
    private OnScrollbarMouseDown;
    scroll_startMousePos: Vector2i;
    scroll_startScrollPos: Vector2i;
    private StartScrolling;
    hScrollableDOM: Element;
    vScrollableDOM: Element;
    private OnMouseMove;
    private OnMouseUp;
    private OnTouchEnd;
    private OnScrollEnd;
    GetScroll(): {
        x: number;
        y: number;
    };
    SetScroll(scrollPos: Vector2i): void;
    ScrollBy(scrollPosOffset: Vector2i): void;
}
export {};
