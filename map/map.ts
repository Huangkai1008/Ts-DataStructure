export interface Map<K, V> {
    /**
     * Map接口
     */
    add(key: K, value: V): void;    // 添加元素
    remove(key: K): void;           // 删除元素
    contains(key: K): boolean;         // 包含元素
    get(key: K): V;                 // 取key对应的值
    set(key: K, value: V): void;    // 设key对应的值
    getSize(): number;              // 获取Map个数
    isEmpty(): boolean;              // Map是否为空

}
