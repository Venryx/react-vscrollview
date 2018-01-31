/// <reference types="react" />
import * as React from "react";
import { Vector2i } from "./Utils";
import { BaseComponent, RenderSource } from "react-vextensions";
export declare class ScrollView extends BaseComponent<{
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
    flex?: boolean;
    onMouseDown?;
    onClick?;
    onScrollEnd?: (pos: Vector2i) => void;
} & React.HTMLProps<HTMLDivElement>, Partial<{
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
    scrollOp_bar: HTMLElement;
}>> {
    static defaultProps: {
        flex: boolean;
    };
    constructor(props: any);
    content: any;
    scrollHBar: any;
    scrollVBar: any;
    render(): JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(): void;
    LoadScroll(): void;
    PostRender(source: RenderSource): void;
    componentWillUnmount(): void;
    propsJustChanged: boolean;
    readonly PropsJustChanged: boolean;
    componentWillReceiveProps(nextProps: any): void;
    sizeJustChanged: boolean;
    readonly SizeJustChanged: boolean;
    UpdateSize(): void;
    private HandleScroll(e);
    UpdateScrolls(): void;
    private OnContentMouseDown(e);
    private OnScrollbarMouseDown(e);
    scroll_startMousePos: Vector2i;
    scroll_startScrollPos: Vector2i;
    private StartScrolling(e);
    hScrollableDOM: Element;
    vScrollableDOM: Element;
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
