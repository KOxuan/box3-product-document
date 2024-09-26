```typescript
/**
 * 抽象类Component，作为所有组件的基类
 * 定义了组件的基本属性和生命周期方法
 */
export default abstract class Component {
    constructor(init?: {
        /** 组件的权重值，权重越大刷新优先级越高，默认为0  */
        weight?: number;
        /** 组件的总时间初始值，后续刷新间隔的毫秒数在此基础上累加，默认为0 */
        timeCount?: number;
    });
    /** 如果该组件第一次启用，则在组件 onUpdate 开始调用之前调用。<br/>
    * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
    */
    protected onStart(): void;
    /** 在组件 onStart 执行后，每帧(30ms)更新时调用。<br/>
     * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
     * @param {number} deltaTime - 两次调用之间的时间间隔
     */
    protected onUpdate(deltaTime: number): void;
    /** 启用组件时调用。<br/>
     * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
     */
    protected onEnable(): void;
    /** 禁用组件时调用。<br/>
     * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
     */
    protected onDisable(): void;
    /** 生命周期方法，当组件重置时调用。<br/>
     * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
    */
    protected onRestore(): void;
    /** 生命周期方法，当组件销毁时调用。<br/>
     * 该方法为生命周期方法，父类未必会有实现。并且你只能在该方法内部调用父类的实现，不可在其它地方直接调用该方法。
    */
    protected onDestroy(): void;
    /**
     * 获取/设置当前组件的权重值
     * @returns {number} 当前组件的权重值
     */
    weight: number;
    /**
     * 获取/设置当前组件是否启用
     * @returns {boolean} 组件的启用状态
     */
    enable: boolean;
    /**
     * 获取/设置当前组件的时间总时间值
     * @returns {number} 当前的总时间
     */
    timeCount: number;
    /**
     * 获取当前组件的禁用次数
     * @returns {number} 当前组件的禁用次数
     */
    readonly disableCount: number;
    /**
     * 获取当前组件的重置次数
     * @returns {number} 当前组件的重置次数
     */
    readonly restoreCount: number;
    /**
     * 获取当前组件的启用次数
     * @returns {number} 当前组件的启用次数
     */
    readonly enableCount: number;
    /**
     * 销毁组件
     * @returns 如果组件已启动，则销毁组件并返回true，否则返回false
     */
    destroy(): boolean;
    /**
     * 重置组件，组件不会干预重置权重，总时间等预设值。
     */
    restore(): void;
}

```
