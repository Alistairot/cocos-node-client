import { Scene } from "../Entity/Scene";
import { safeCall } from "../JavaScript/safeCall";
import { coreError, coreWarn } from "../Logger/CoreLogHelper";
import { IScene } from "../Type/IScene";

type T = Scene

export abstract class AEventHandler<A>{
    protected abstract run(scene: T, args: A): any;

    async handleAsync(scene: IScene, a: A) {
        try {
            await this.run(scene as T, a);
        }
        catch (e) {
            if (e instanceof Error) {
                coreError(e.stack);
            } else {
                coreError(e);
            }
        }
    }

    handle(scene: IScene, a: A) {
        try {
            const ret = this.run(scene as T, a);

            if (ret instanceof Promise) {
                coreWarn('{0}的run方法是异步的, 请尽量不要用publish来通知', this.constructor.name);
                safeCall(ret);
            }
        }
        catch (e) {
            if (e instanceof Error) {
                coreError(e.stack);
            } else {
                coreError(e);
            }
        }
    }
}