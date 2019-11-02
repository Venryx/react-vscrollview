import React from "react";
import { Component } from "react";
import { Vector2i } from "./Utils";
import { BaseComponent, RenderSource } from "react-vextensions";
declare class Div extends Component<{
    shouldUpdate: any;
} & React.HTMLProps<HTMLDivElement>, {}> {
    shouldComponentUpdate(nextProps: any, nextState: any): any;
    render(): JSX.Element;
}
export declare class ScrollView extends BaseComponent<{
    backgroundDrag?: boolean;
    backgroundDragMatchFunc?: (element: HTMLElement) => boolean;
    bufferScrollEventsBy?: number;
    scrollH_pos?: number;
    scrollV_pos?: number;
    className?: string;
    style?: any;
    contentStyle?: any;
    scrollHBarStyle?: any;
    scrollVBarStyle?: any;
    flex?: boolean;
    onMouseDown?: any;
    onClick?: any;
    onScrollEnd?: (pos: Vector2i) => void;
} & React.HTMLProps<HTMLDivElement>, Partial<{
    containerWidth: any;
    contentWidth: any;
    containerHeight: any;
    contentHeight: any;
    scrollH_active: boolean;
    scrollH_pos: number;
    scrollV_active: any;
    scrollV_pos: number;
    scrollHBar_hovered: boolean;
    scrollVBar_hovered: boolean;
    scrollOp_bar: HTMLElement;
}>> {
    static defaultProps: {
        flex: boolean;
    };
    constructor(props: any);
    content: Div;
    scrollHBar: HTMLDivElement;
    scrollVBar: HTMLDivElement;
    render(): JSX.Element;
    ComponentDidMount(): void;
    ComponentDidUpdate(): void;
    LoadScroll(): void;
    PostRender(source: RenderSource): void;
    ComponentWillUnmount(): void;
    propsJustChanged: boolean;
    readonly PropsJustChanged: boolean;
    ComponentWillReceiveProps(nextProps: any): void;
    sizeJustChanged: boolean;
    readonly SizeJustChanged: boolean;
    UpdateSize: () => void;
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
