import { Node, NodeConfig } from './Node';
import { Context } from './Context';
import { GetSet, Vector2d } from './types';
export declare type ShapeConfigHandler<TTarget> = {
    bivarianceHack(ctx: Context, shape: TTarget): void;
}['bivarianceHack'];
export interface ShapeConfig extends NodeConfig {
    fill?: string;
    fillPatternImage?: HTMLImageElement;
    fillPatternX?: number;
    fillPatternY?: number;
    fillPatternOffset?: Vector2d;
    fillPatternOffsetX?: number;
    fillPatternOffsetY?: number;
    fillPatternScale?: Vector2d;
    fillPatternScaleX?: number;
    fillPatternScaleY?: number;
    fillPatternRotation?: number;
    fillPatternRepeat?: string;
    fillLinearGradientStartPoint?: Vector2d;
    fillLinearGradientStartPointX?: number;
    fillLinearGradientStartPointY?: number;
    fillLinearGradientEndPoint?: Vector2d;
    fillLinearGradientEndPointX?: number;
    fillLinearGradientEndPointY?: number;
    fillLinearGradientColorStops?: Array<number | string>;
    fillRadialGradientStartPoint?: Vector2d;
    fillRadialGradientStartPointX?: number;
    fillRadialGradientStartPointY?: number;
    fillRadialGradientEndPoint?: Vector2d;
    fillRadialGradientEndPointX?: number;
    fillRadialGradientEndPointY?: number;
    fillRadialGradientStartRadius?: number;
    fillRadialGradientEndRadius?: number;
    fillRadialGradientColorStops?: Array<number | string>;
    fillEnabled?: boolean;
    fillPriority?: string;
    stroke?: string;
    strokeWidth?: number;
    hitStrokeWidth?: number;
    strokeScaleEnabled?: boolean;
    strokeHitEnabled?: boolean;
    strokeEnabled?: boolean;
    lineJoin?: string;
    lineCap?: string;
    sceneFunc?: (con: Context, shape: Shape) => void;
    hitFunc?: (con: Context, shape: Shape) => void;
    shadowColor?: string;
    shadowBlur?: number;
    shadowOffset?: Vector2d;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    shadowOpacity?: number;
    shadowEnabled?: boolean;
    shadowForStrokeEnabled?: boolean;
    dash?: number[];
    dashOffset?: number;
    dashEnabled?: boolean;
    perfectDrawEnabled?: boolean;
}
export declare const shapes: {};
export declare class Shape<Config extends ShapeConfig = ShapeConfig> extends Node<Config> {
    _centroid: boolean;
    colorKey: string;
    _fillFunc: (ctx: Context) => void;
    _strokeFunc: (ctx: Context) => void;
    _fillFuncHit: (ctx: Context) => void;
    _strokeFuncHit: (ctx: Context) => void;
    constructor(config?: Config);
    getContext(): any;
    getCanvas(): any;
    getSceneFunc(): any;
    getHitFunc(): any;
    hasShadow(): any;
    _hasShadow(): boolean;
    _getFillPattern(): any;
    __getFillPattern(): any;
    _getLinearGradient(): any;
    __getLinearGradient(): any;
    _getRadialGradient(): any;
    __getRadialGradient(): any;
    getShadowRGBA(): any;
    _getShadowRGBA(): string;
    hasFill(): boolean;
    hasStroke(): boolean;
    intersects(point: any): boolean;
    destroy(): this;
    _useBufferCanvas(caching: any): boolean;
    setStrokeHitEnabled(val: number): void;
    getStrokeHitEnabled(): boolean;
    getSelfRect(): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    getClientRect(attrs: any): {
        width: number;
        height: number;
        x: number;
        y: number;
    };
    drawScene(can: any, top: any, caching: any, skipBuffer: any): this;
    drawHit(can: any, top?: any, caching?: any): this;
    drawHitFromCache(alphaThreshold?: number): this;
    hasPointerCapture(pointerId: number): boolean;
    setPointerCapture(pointerId: number): void;
    releaseCapture(pointerId: number): void;
    draggable: GetSet<boolean, this>;
    embossBlend: GetSet<boolean, this>;
    dash: GetSet<number[], this>;
    dashEnabled: GetSet<boolean, this>;
    dashOffset: GetSet<number, this>;
    fill: GetSet<string, this>;
    fillEnabled: GetSet<boolean, this>;
    fillLinearGradientColorStops: GetSet<Array<number | string>, this>;
    fillLinearGradientStartPoint: GetSet<Vector2d, this>;
    fillLinearGradientStartPointX: GetSet<number, this>;
    fillLinearGradientStartPointY: GetSet<number, this>;
    fillLinearGradientEndPoint: GetSet<Vector2d, this>;
    fillLinearGradientEndPointX: GetSet<number, this>;
    fillLinearGradientEndPointY: GetSet<number, this>;
    fillLinearRadialStartPoint: GetSet<Vector2d, this>;
    fillLinearRadialStartPointX: GetSet<number, this>;
    fillLinearRadialStartPointY: GetSet<number, this>;
    fillLinearRadialEndPoint: GetSet<Vector2d, this>;
    fillLinearRadialEndPointX: GetSet<number, this>;
    fillLinearRadialEndPointY: GetSet<number, this>;
    fillPatternImage: GetSet<HTMLImageElement, this>;
    fillRadialGradientStartRadius: GetSet<number, this>;
    fillRadialGradientEndRadius: GetSet<number, this>;
    fillRadialGradientColorStops: GetSet<Array<number | string>, this>;
    fillRadialGradientStartPoint: GetSet<Vector2d, this>;
    fillRadialGradientStartPointX: GetSet<number, this>;
    fillRadialGradientStartPointY: GetSet<number, this>;
    fillRadialGradientEndPoint: GetSet<Vector2d, this>;
    fillRadialGradientEndPointX: GetSet<number, this>;
    fillRadialGradientEndPointY: GetSet<number, this>;
    fillPatternOffset: GetSet<Vector2d, this>;
    fillPatternOffsetX: GetSet<number, this>;
    fillPatternOffsetY: GetSet<number, this>;
    fillPatternRepeat: GetSet<string, this>;
    fillPatternRotation: GetSet<number, this>;
    fillPatternScale: GetSet<Vector2d, this>;
    fillPatternScaleX: GetSet<number, this>;
    fillPatternScaleY: GetSet<number, this>;
    fillPatternX: GetSet<number, this>;
    fillPatternY: GetSet<number, this>;
    fillPriority: GetSet<string, this>;
    hitFunc: GetSet<ShapeConfigHandler<this>, this>;
    lineCap: GetSet<string, this>;
    lineJoin: GetSet<string, this>;
    perfectDrawEnabled: GetSet<boolean, this>;
    sceneFunc: GetSet<ShapeConfigHandler<this>, this>;
    shadowColor: GetSet<string, this>;
    shadowEnabled: GetSet<boolean, this>;
    shadowForStrokeEnabled: GetSet<boolean, this>;
    shadowOffset: GetSet<Vector2d, this>;
    shadowOffsetX: GetSet<number, this>;
    shadowOffsetY: GetSet<number, this>;
    shadowOpacity: GetSet<number, this>;
    shadowBlur: GetSet<number, this>;
    stroke: GetSet<string, this>;
    strokeEnabled: GetSet<boolean, this>;
    strokeScaleEnabled: GetSet<boolean, this>;
    strokeHitEnabled: GetSet<boolean, this>;
    strokeWidth: GetSet<number, this>;
    hitStrokeWidth: GetSet<number | 'auto', this>;
    strokeLinearGradientColorStops: GetSet<Array<number | string>, this>;
}
