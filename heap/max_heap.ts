class MaxHeap<T> {
    /**
     * 最大堆
     * 堆中某个节点的值总是不大于其父节点的值
     */

    constructor(
        private data: T[] = []
    ) {
    }

    getSize(): number {
        // 获取最大堆容量
        return this.data.length;
    }

    isEmpty(): boolean {
        // 判断最大堆是否为空
        return this.data.length === 0;
    }

    parent(index: number): number {
        // 给定index节点的父节点
        if (index <= 0) {
            throw new RangeError('错误的序列号');
        }
        return (index - 1) * 2;
    }
}
