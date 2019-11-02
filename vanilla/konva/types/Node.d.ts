import { Collection, Transform, Point } from './Util';
import { SceneCanvas, Canvas } from './Canvas';
import { Container } from './Container';
import { GetSet, Vector2d, IRect } from './types';
import { Stage } from './Stage';
import { Context } from './Context';
import { Shape } from './Shape';
export declare const ids: any;
export declare const names: any;
export declare const _removeId: (id: string, node: any) => void;
export declare const _addName: (node: any, name: string) => void;
export declare const _removeName: (name: string, _id: number) => void;
export declare type Filter = (this: Node, imageData: ImageData) => void;
declare type globalCompositeOperationType = '' | 'source-over' | 'source-in' | 'source-out' | 'source-atop' | 'destination-over' | 'destination-in' | 'destination-out' | 'destination-atop' | 'lighter' | 'copy' | 'xor' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
export interface NodeConfig {
    [index: string]: any;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    visible?: boolean;
    listening?: boolean;
    id?: string;
    name?: string;
    opacity?: Number;
    scale?: Vector2d;
    scaleX?: number;
    scaleY?: number;
    rotation?: number;
    rotationDeg?: number;
    offset?: Vector2d;
    offsetX?: number;
    offsetY?: number;
    draggable?: boolean;
    dragDistance?: number;
    dragBoundFunc?: (pos: Vector2d) => Vector2d;
    preventDefault?: boolean;
    globalCompositeOperation?: globalCompositeOperationType;
    filters?: Array<Filter>;
}
declare type NodeEventMap = GlobalEventHandlersEventMap & {
    [index: string]: any;
};
export interface KonvaEventObject<EventType> {
    target: Shape | Stage;
    evt: EventType;
    currentTarget: Node;
    cancelBubble: boolean;
    child?: Node;
}
export declare type KonvaEventListener<This, EventType> = (this: This, ev: KonvaEventObject<EventType>) => void;
export declare abstract class Node<Config extends NodeConfig = NodeConfig> {
    _id: number;
    eventListeners: {
        [index: string]: Array<{
            name: string;
            handler: Function;
        }>;
    };
    attrs: any;
    index: number;
    parent: Container<Node> | null;
    _cache: Map<string, any>;
    _lastPos: Point;
    _attrsAffectingSize: string[];
    _filterUpToDate: boolean;
    _isUnderCache: boolean;
    children: Collection<any>;
    nodeType: string;
    className: string;
    constructor(config?: Config);
    hasChildren(): boolean;
    getChildren(): Collection<any>;
    _clearCache(attr?: string): void;
    _getCache(attr: string, privateGetter: Function): any;
    _getCanvasCache(): any;
    _clearSelfAndDescendantCache(attr?: string): void;
    clearCache(): this;
    cache(config?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        drawBorder?: boolean;
        offset?: number;
        pixelRatio?: number;
        imageSmoothingEnabled?: boolean;
    }): this;
    abstract drawScene(canvas?: Canvas, top?: Node, caching?: boolean, skipBuffer?: boolean): void;
    abstract drawHit(canvas?: Canvas, top?: Node, caching?: boolean, skipBuffer?: boolean): void;
    getClientRect(config?: {
        skipTransform?: boolean;
        skipShadow?: boolean;
        skipStroke?: boolean;
        relativeTo?: Container<Node>;
    }): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    _transformedRect(rect: IRect, top: Node): {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    _drawCachedSceneCanvas(context: Context): void;
    _drawCachedHitCanvas(context: Context): void;
    _getCachedSceneCanvas(): any;
    on<K extends keyof NodeEventMap>(evtStr: K, handler: KonvaEventListener<this, NodeEventMap[K]>): any;
    off(evtStr: string, callback?: Function): this;
    dispatchEvent(evt: any): this;
    addEventListener(type: string, handler: (e: Event) => void): this;
    removeEventListener(type: string): this;
    _delegate(event: string, selector: string, handler: (e: Event) => void): void;
    remove(): this;
    _remove(): void;
    destroy(): this;
    getAttr(attr: string): any;
    getAncestors(): Collection<Node<NodeConfig>>;
    getAttrs(): any;
    setAttrs(config: any): this;
    isListening(): any;
    _isListening(): any;
    isVisible(): any;
    _isVisible(relativeTo: any): any;
    shouldDrawHit(): any;
    show(): this;
    hide(): this;
    getZIndex(): number;
    getAbsoluteZIndex(): number;
    getDepth(): number;
    setPosition(pos: any): this;
    getPosition(): {
        x: number;
        y: number;
    };
    getAbsolutePosition(top?: any): {
        x: number;
        y: number;
    };
    setAbsolutePosition(pos: any): this;
    _setTransform(trans: any): void;
    _clearTransform(): {
        x: number;
        y: number;
        rotation: number;
        scaleX: number;
        scaleY: number;
        offsetX: number;
        offsetY: number;
        skewX: number;
        skewY: number;
    };
    move(change: any): this;
    _eachAncestorReverse(func: any, top: any): void;
    rotate(theta: any): this;
    moveToTop(): boolean;
    moveUp(): boolean;
    moveDown(): boolean;
    moveToBottom(): boolean;
    setZIndex(zIndex: any): this;
    getAbsoluteOpacity(): any;
    _getAbsoluteOpacity(): number;
    moveTo(newContainer: any): this;
    toObject(): any;
    toJSON(): string;
    getParent(): Container<Node<NodeConfig>>;
    findAncestors(selector: any, includeSelf: any, stopNode: any): Node<NodeConfig>[];
    isAncestorOf(node: any): boolean;
    findAncestor(selector: any, includeSelf: any, stopNode: any): Node<NodeConfig>;
    _isMatch(selector: any): any;
    getLayer(): any;
    getStage(): any;
    _getStage(): Stage | undefined;
    fire(eventType: any, evt: any, bubble?: any): this;
    getAbsoluteTransform(top?: Node): Transform;
    _getAbsoluteTransform(top?: Node): Transform;
    getAbsoluteScale(top?: any): any;
    _getAbsoluteScale(top: any): {
        x: number;
        y: number;
    };
    getTransform(): Transform;
    _getTransform(): Transform;
    clone(obj?: any): any;
    _toKonvaCanvas(config: any): SceneCanvas;
    toCanvas(config: any): HTMLCanvasElement;
    toDataURL(config?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        pixelRatio?: number;
        mimeType?: string;
        quality?: number;
        callback?: (str: string) => void;
    }): string;
    toImage(config?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
        pixelRatio?: number;
        mimeType?: string;
        quality?: number;
        callback?: (img: HTMLImageElement) => void;
    }): void;
    setSize(size: any): this;
    getSize(): {
        width: number;
        height: number;
    };
    getClassName(): string;
    getType(): string;
    getDragDistance(): any;
    _off(type: any, name?: any, callback?: any): void;
    _fireChangeEvent(attr: any, oldVal: any, newVal: any): void;
    setId(id: any): this;
    setName(name: any): this;
    addName(name: any): this;
    hasName(name: any): boolean;
    removeName(name: any): this;
    setAttr(attr: any, val: any): this;
    _setAttr(key: any, val: any): void;
    _setComponentAttr(key: any, component: any, val: any): void;
    _fireAndBubble(eventType: any, evt: any, compareShape?: any): void;
    _fire(eventType: any, evt: any): void;
    draw(): this;
    startDrag(): void;
    _setDragPosition(evt?: any): void;
    stopDrag(): void;
    setDraggable(draggable: any): void;
    isDragging(): boolean;
    _listenDrag(): void;
    _dragChange(): void;
    _dragCleanup(): void;
    preventDefault: GetSet<boolean, this>;
    blue: GetSet<number, this>;
    brightness: GetSet<number, this>;
    contrast: GetSet<number, this>;
    blurRadius: GetSet<number, this>;
    luminance: GetSet<number, this>;
    green: GetSet<number, this>;
    alpha: GetSet<number, this>;
    hue: GetSet<number, this>;
    kaleidoscopeAngle: GetSet<number, this>;
    kaleidoscopePower: GetSet<number, this>;
    levels: GetSet<number, this>;
    noise: GetSet<number, this>;
    pixelSize: GetSet<number, this>;
    red: GetSet<number, this>;
    saturation: GetSet<number, this>;
    threshold: GetSet<number, this>;
    value: GetSet<number, this>;
    dragBoundFunc: GetSet<(pos: Vector2d) => Vector2d, this>;
    draggable: GetSet<boolean, this>;
    embossBlend: GetSet<boolean, this>;
    embossDirection: GetSet<string, this>;
    embossStrength: GetSet<number, this>;
    embossWhiteLevel: GetSet<number, this>;
    enhance: GetSet<number, this>;
    filters: GetSet<Filter[], this>;
    position: GetSet<Vector2d, this>;
    size: GetSet<{
        width: number;
        height: number;
    }, this>;
    id: GetSet<string, this>;
    listening: GetSet<boolean | 'inherit', this>;
    name: GetSet<string, this>;
    offset: GetSet<Vector2d, this>;
    offsetX: GetSet<number, this>;
    offsetY: GetSet<number, this>;
    opacity: GetSet<number, this>;
    rotation: GetSet<number, this>;
    zIndex: GetSet<number, this>;
    scale: GetSet<Vector2d, this>;
    scaleX: GetSet<number, this>;
    scaleY: GetSet<number, this>;
    skew: GetSet<Vector2d, this>;
    skewX: GetSet<number, this>;
    skewY: GetSet<number, this>;
    to: (params: any) => void;
    transformsEnabled: GetSet<string, this>;
    visible: GetSet<boolean | 'inherit', this>;
    width: GetSet<number, this>;
    height: GetSet<number, this>;
    x: GetSet<number, this>;
    y: GetSet<number, this>;
    globalCompositeOperation: GetSet<globalCompositeOperationType, this>;
    static create(data: any, container?: any): any;
    static _createNode(obj: any, container?: any): any;
}
export {};