import { Arc } from './shapes/Arc';
import { Arrow } from './shapes/Arrow';
import { Circle } from './shapes/Circle';
import { Ellipse } from './shapes/Ellipse';
import { Image } from './shapes/Image';
import { Label, Tag } from './shapes/Label';
import { Line } from './shapes/Line';
import { Path } from './shapes/Path';
import { Rect } from './shapes/Rect';
import { RegularPolygon } from './shapes/RegularPolygon';
import { Ring } from './shapes/Ring';
import { Sprite } from './shapes/Sprite';
import { Star } from './shapes/Star';
import { Text } from './shapes/Text';
import { TextPath } from './shapes/TextPath';
import { Transformer } from './shapes/Transformer';
import { Wedge } from './shapes/Wedge';
export declare const Konva: {
    _global: any;
    version: string;
    isBrowser: boolean;
    isUnminified: boolean;
    dblClickWindow: number;
    getAngle(angle: any): any;
    enableTrace: boolean;
    _pointerEventsEnabled: boolean;
    listenClickTap: boolean;
    inDblClickWindow: boolean;
    pixelRatio: any;
    dragDistance: number;
    angleDeg: boolean;
    showWarnings: boolean;
    dragButtons: number[];
    isDragging(): any;
    isDragReady(): boolean;
    UA: {
        browser: any;
        version: any;
        isIE: number | boolean;
        mobile: boolean;
        ieMobile: boolean;
    };
    document: any;
    _injectGlobal(Konva: any): void;
    _parseUA: (userAgent: any) => {
        browser: any;
        version: any;
        isIE: number | boolean;
        mobile: boolean;
        ieMobile: boolean;
    };
} & {
    Collection: typeof import("./Util").Collection;
    Util: {
        _isElement(obj: any): boolean;
        _isFunction(obj: any): boolean;
        _isPlainObject(obj: any): boolean;
        _isArray(obj: any): boolean;
        _isNumber(obj: any): boolean;
        _isString(obj: any): boolean;
        _isBoolean(obj: any): boolean;
        isObject(val: any): boolean;
        isValidSelector(selector: any): boolean;
        _sign(number: number): 1 | 0 | -1;
        requestAnimFrame(callback: Function): void;
        createCanvasElement(): HTMLCanvasElement;
        createImageElement(): HTMLImageElement;
        _isInDocument(el: any): boolean;
        _simplifyArray(arr: any[]): any[];
        _urlToImage(url: string, callback: Function): void;
        _rgbToHex(r: number, g: number, b: number): string;
        _hexToRgb(hex: string): {
            r: number;
            g: number;
            b: number;
        };
        getRandomColor(): string;
        get(val: any, def: any): any;
        getRGB(color: string): any;
        colorToRGBA(str: string): {
            r: any;
            g: any;
            b: any;
            a: number;
        };
        _namedColorToRBA(str: string): {
            r: any;
            g: any;
            b: any;
            a: number;
        };
        _rgbColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        };
        _rgbaColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        };
        _hex6ColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        };
        _hex3ColorToRGBA(str: string): {
            r: number;
            g: number;
            b: number;
            a: number;
        };
        haveIntersection(r1: import("./types").IRect, r2: import("./types").IRect): boolean;
        cloneObject<Any>(obj: Any): Any;
        cloneArray(arr: any[]): any[];
        _degToRad(deg: number): number;
        _radToDeg(rad: number): number;
        _capitalize(str: string): string;
        throw(str: string): never;
        error(str: string): void;
        warn(str: string): void;
        extend(child: any, parent: any): void;
        _getControlPoints(x0: any, y0: any, x1: any, y1: any, x2: any, y2: any, t: any): any[];
        _expandPoints(p: any, tension: any): any[];
        each(obj: any, func: any): void;
        _inRange(val: any, left: any, right: any): boolean;
        _getProjectionToSegment(x1: any, y1: any, x2: any, y2: any, x3: any, y3: any): any[];
        _getProjectionToLine(pt: import("./Util").Point, line: any, isClosed: any): import("./Util").Point;
        _prepareArrayForTween(startArray: any, endArray: any, isClosed: any): any[];
        _prepareToStringify(obj: any): any;
        _assign<T, U>(target: T, source: U): T & U;
    };
    Node: typeof import("./Node").Node;
    ids: any;
    names: any;
    Container: typeof import("./Container").Container;
    Stage: typeof import("./Stage").Stage;
    stages: import("./Stage").Stage[];
    Layer: typeof import("./Layer").Layer;
    FastLayer: typeof import("./FastLayer").FastLayer;
    Group: typeof import("./Group").Group;
    DD: {
        startPointerPos: {
            x: number;
            y: number;
        };
        anim: import("./Animation").Animation;
        isDragging: boolean;
        justDragged: boolean;
        offset: {
            x: number;
            y: number;
        };
        node: any;
        _drag(evt: any): void;
        _endDragBefore(evt: any): void;
        _endDragAfter(evt: any): void;
    };
    Shape: typeof import("./Shape").Shape;
    shapes: {};
    Animation: typeof import("./Animation").Animation;
    Tween: typeof import("./Tween").Tween;
    Easings: {
        BackEaseIn(t: any, b: any, c: any, d: any): any;
        BackEaseOut(t: any, b: any, c: any, d: any): any;
        BackEaseInOut(t: any, b: any, c: any, d: any): any;
        ElasticEaseIn(t: any, b: any, c: any, d: any, a: any, p: any): any;
        ElasticEaseOut(t: any, b: any, c: any, d: any, a: any, p: any): any;
        ElasticEaseInOut(t: any, b: any, c: any, d: any, a: any, p: any): any;
        BounceEaseOut(t: any, b: any, c: any, d: any): any;
        BounceEaseIn(t: any, b: any, c: any, d: any): any;
        BounceEaseInOut(t: any, b: any, c: any, d: any): any;
        EaseIn(t: any, b: any, c: any, d: any): any;
        EaseOut(t: any, b: any, c: any, d: any): any;
        EaseInOut(t: any, b: any, c: any, d: any): any;
        StrongEaseIn(t: any, b: any, c: any, d: any): any;
        StrongEaseOut(t: any, b: any, c: any, d: any): any;
        StrongEaseInOut(t: any, b: any, c: any, d: any): any;
        Linear(t: any, b: any, c: any, d: any): any;
    };
    Context: typeof import("./Context").Context;
    Canvas: typeof import("./Canvas").Canvas;
} & {
    Arc: typeof Arc;
    Arrow: typeof Arrow;
    Circle: typeof Circle;
    Ellipse: typeof Ellipse;
    Image: typeof Image;
    Label: typeof Label;
    Tag: typeof Tag;
    Line: typeof Line;
    Path: typeof Path;
    Rect: typeof Rect;
    RegularPolygon: typeof RegularPolygon;
    Ring: typeof Ring;
    Sprite: typeof Sprite;
    Star: typeof Star;
    Text: typeof Text;
    TextPath: typeof TextPath;
    Transformer: typeof Transformer;
    Wedge: typeof Wedge;
    Filters: {
        Blur: import("./Node").Filter;
        Brighten: import("./Node").Filter;
        Contrast: import("./Node").Filter;
        Emboss: import("./Node").Filter;
        Enhance: import("./Node").Filter;
        Grayscale: import("./Node").Filter;
        HSL: import("./Node").Filter;
        HSV: import("./Node").Filter;
        Invert: import("./Node").Filter;
        Kaleidoscope: import("./Node").Filter;
        Mask: import("./Node").Filter;
        Noise: import("./Node").Filter;
        Pixelate: import("./Node").Filter;
        Posterize: import("./Node").Filter;
        RGB: import("./Node").Filter;
        RGBA: import("./Node").Filter;
        Sepia: import("./Node").Filter;
        Solarize: import("./Node").Filter;
        Threshold: import("./Node").Filter;
    };
};
