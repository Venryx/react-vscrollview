/// <reference types="react" />
import { Component } from "react";
export interface Vector2i {
    x: number;
    y: number;
}
export default class ScrollView extends Component<{
    backgroundDrag?: boolean;
    backgroundDragMatchFunc?: (element: HTMLElement) => boolean;
    bufferScrollEventsBy?: number;
    scrollH_pos?: number;
    scrollV_pos?: number;
    className?: string;
    style?;
    contentStyle?;
    scrollHBarStyle?;
    scrollVBarStyle?;
    onMouseDown?;
    onClick?;
    onScrollEnd?: (pos: Vector2i) => void;
}, Partial<{
    containerWidth;
    contentWidth;
    containerHeight;
    contentHeight;
    scrollH_active: boolean;
    scrollH_pos: number;
    scrollV_active;
    scrollV_pos: number;
    scrollHBar_hovered: boolean;
    scrollVBar_hovered: boolean;
    scrollOp_bar;
}>> {
    constructor(props: any);
    refs: any;
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(): void;
    LoadScroll(): void;
    PostRender(firstRender: any): void;
    componentWillUnmount(): void;
    readonly PropsJustChanged: boolean;
    propsJustChanged: any;
    componentWillReceiveProps(nextProps: any): void;
    UpdateSize(): void;
    private HandleScroll(e);
    UpdateScrolls(): void;
    private OnContentMouseDown(e);
    private OnScrollbarMouseDown(e);
    scroll_startMousePos: Vector2i;
    scroll_startScrollPos: Vector2i;
    private StartScrolling(e);
    private OnMouseMove(e);
    private OnMouseUp(e);
    private OnTouchEnd();
    private OnScrollEnd();
    GetScroll(): {
        x: number;
        y: number;
    };
    SetScroll(scrollPos: Vector2i): void;
    ScrollBy(scrollPosOffset: Vector2i): void;
}
