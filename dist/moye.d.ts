// Generated by dts-bundle-generator v8.0.1

import { Component, Material, SpriteAtlas, SpriteFrame, UIRenderer, UITransform } from 'cc';

declare abstract class Singleton {
	private static _inst;
	private _isDisposed;
	static getInst<T extends Singleton>(this: new () => T): T;
	get isDisposed(): boolean;
	dispose(): void;
	protected destroy?(): void;
	private _onPreDestroy;
}
/**
 * 构造函数
 */
export interface Type<T = any> extends Function {
	new (...args: any[]): T;
}
export declare class ObjectPool extends Singleton {
	private _pool;
	fetch<T>(type: Type<T>): T;
	recycle(obj: object): void;
}
export interface ILog {
	log(str: string): void;
	warn(str: string): void;
	error(str: string): void;
}
/**
 * Logger
 */
export declare class Logger extends Singleton {
	private _iLog;
	set iLog(value: ILog);
	private static readonly LOG_LEVEL;
	private static readonly WARN_LEVEL;
	log(str: string, ...args: any[]): void;
	warn(str: string, ...args: any[]): void;
	/**
	 * 错误打印会带上堆栈 用于定位错误
	 * 错误打印不会受到logLevel的影响 一定会打印
	 * 非必要不要调用这个 特别是不要在在循环里面调用 否则日志文件两下就爆炸了
	 * @param str
	 * @param args
	 */
	error(str: string, ...args: any[]): void;
	private checkLogLevel;
	/**
	 * 不受logLevel影响的log
	 * @param str
	 * @param args
	 */
	private coreLog;
	/**
	 * 不受logLevel影响的log
	 * @param str
	 * @param args
	 */
	private coreWarn;
	/**
	 * 错误打印会带上堆栈 用于定位错误
	 * 错误打印不会受到logLevel的影响 一定会打印
	 * 非必要不要调用这个 特别是不要在在循环里面调用 否则日志文件两下就爆炸了
	 * @param str
	 * @param args
	 */
	private coreError;
}
export declare function log(str: string, ...args: any[]): void;
export declare function warn(str: string, ...args: any[]): void;
export declare function error(str: string, ...args: any[]): void;
export declare class IdGenerator extends Singleton {
	generateInstanceId(): bigint;
	generateId(): bigint;
}
export declare class RoundBoxSprite extends UIRenderer {
	protected _sizeMode: import("cc").__private._cocos_2d_components_sprite__SizeMode;
	get sizeMode(): import("cc").__private._cocos_2d_components_sprite__SizeMode;
	set sizeMode(value: import("cc").__private._cocos_2d_components_sprite__SizeMode);
	protected _atlas: SpriteAtlas | null;
	get spriteAtlas(): SpriteAtlas;
	set spriteAtlas(value: SpriteAtlas);
	_segments: number;
	get segments(): number;
	set segments(segments: number);
	_radius: number;
	get radius(): number;
	set radius(radius: number);
	protected _spriteFrame: SpriteFrame | null;
	get spriteFrame(): SpriteFrame;
	set spriteFrame(value: SpriteFrame);
	protected _leftTop: boolean;
	get leftTop(): boolean;
	set leftTop(value: boolean);
	protected _rightTop: boolean;
	get rightTop(): boolean;
	set rightTop(value: boolean);
	protected _leftBottom: boolean;
	get leftBottom(): boolean;
	set leftBottom(value: boolean);
	protected _rightBottom: boolean;
	get rightBottom(): boolean;
	set rightBottom(value: boolean);
	onLoad(): void;
	__preload(): void;
	onEnable(): void;
	onDestroy(): void;
	/**
	 * @en
	 * Quickly switch to other sprite frame in the sprite atlas.
	 * If there is no atlas, the switch fails.
	 *
	 * @zh
	 * 选取使用精灵图集中的其他精灵。
	 * @param name @en Name of the spriteFrame to switch. @zh 要切换的 spriteFrame 名字。
	 */
	changeSpriteFrameFromAtlas(name: string): void;
	/**
	 * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
	 */
	changeMaterialForDefine(): void;
	protected _updateBuiltinMaterial(): Material;
	protected _render(render: any): void;
	protected _canRender(): boolean;
	protected resetAssembler(): void;
	protected _flushAssembler(): void;
	private _applySpriteSize;
	private _resized;
	private _activateMaterial;
	private _updateUVs;
	private _applySpriteFrame;
}
export declare class SizeFollow extends Component {
	get target(): UITransform;
	set target(value: UITransform);
	private _target;
	set heightFollow(val: boolean);
	get heightFollow(): boolean;
	private _heightFollow;
	set widthFollow(val: boolean);
	get widthFollow(): boolean;
	private _widthFollow;
	private _heightOffset;
	private _widthOffset;
	private _changeSize;
	protected onLoad(): void;
	protected onDestroy(): void;
	private onTargetSizeChange;
	private updateSizeOffset;
}

export {};
