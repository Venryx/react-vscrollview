import { Component } from "react";
export declare function Log(message: any, ...args: any[]): void;
export declare function Assert(condition: any, message?: string): void;
export declare function GetDOM(comp: Component): HTMLElement;
export declare function E(...objExtends: any[]): {};
/** If time-since-last-run is above minInterval, run func right away.
 * Else, schedule next-run to occur as soon as the minInterval is passed. */
export declare function BufferAction(minInterval: number, func: Function): any;
/** If time-since-last-run is above minInterval, run func right away.
 * Else, schedule next-run to occur as soon as the minInterval is passed. */
export declare function BufferAction(key: string, minInterval: number, func: Function): any;
export interface Vector2i {
    x: number;
    y: number;
}
export declare function GetScrollBarSizes(): any;
export declare function GetHScrollBarHeight(): any;
export declare function GetVScrollBarWidth(): any;
export declare function HasScrollBar(control: any): boolean;
export declare function HasVScrollBar(control: any): boolean;
export declare function HasHScrollBar(control: any): boolean;
